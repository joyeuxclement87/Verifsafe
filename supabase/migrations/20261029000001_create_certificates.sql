-- ─────────────────────────────────────────────────────────────
-- VerifSafe — Certificates
-- Issued training certificates, permanent numbering, audit trail
-- and a deliberately minimal public verification surface.
--
-- Numbering is generated inside Postgres with an atomic upsert so
-- concurrent admin requests can never receive the same number.
-- Numbers are never reused: the sequence only moves forward and
-- certificate rows cannot be deleted.
-- ─────────────────────────────────────────────────────────────

-- ─── Permanent per-course, per-year sequence ─────────────────
create table if not exists public.certificate_sequences (
  course_code text not null,
  year integer not null,
  last_value integer not null default 0,
  updated_at timestamptz not null default now(),
  primary key (course_code, year),
  constraint certificate_sequences_course_code_check
    check (course_code ~ '^[A-Z]{2,4}$'),
  constraint certificate_sequences_year_check
    check (year between 2000 and 2200),
  constraint certificate_sequences_last_value_check
    check (last_value >= 0)
);

comment on table public.certificate_sequences is
  'Monotonic certificate number allocators, one row per course code and issue year. Never reset or deleted.';

drop trigger if exists certificate_sequences_set_updated_at on public.certificate_sequences;
create trigger certificate_sequences_set_updated_at
  before update on public.certificate_sequences
  for each row
  execute function public.set_updated_at();

alter table public.certificate_sequences enable row level security;

-- The sequence table is internal. The security-definer RPC below is
-- the only supported way to advance it.
revoke all on public.certificate_sequences from anon, authenticated;

-- ─── Certificates ────────────────────────────────────────────
create table if not exists public.certificates (
  id uuid primary key default gen_random_uuid(),
  --- Permanent identity. Printed on the certificate and encoded in the QR.
  certificate_number text not null unique,
  course_code text not null,
  course_key text not null default '',
  course_name text not null,
  recipient_name text not null,
  training_date date not null,
  duration_value integer not null,
  duration_unit text not null,
  instructor_name text not null,
  description text not null,
  issue_date date not null default current_date,
  expiry_date date,
  status text not null default 'active',
  revocation_reason text,
  revoked_at timestamptz,
  revoked_by uuid references auth.users(id) on delete set null,
  --- Reserved for a future stored-PDF workflow. PDFs are currently
  --- rendered on demand and are not persisted.
  pdf_storage_path text,
  --- Client-generated token that makes retrying a create request safe.
  idempotency_key uuid,
  created_by uuid references auth.users(id) on delete set null,
  updated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint certificates_number_format_check
    check (certificate_number ~ '^VFS-[A-Z]{2,4}-[0-9]{4}-[0-9]{6}$'),
  constraint certificates_course_code_check
    check (course_code ~ '^[A-Z]{2,4}$'),
  constraint certificates_course_key_check
    check (char_length(course_key) between 1 and 64),
  constraint certificates_course_name_check
    check (char_length(course_name) between 2 and 90),
  constraint certificates_recipient_name_check
    check (char_length(recipient_name) between 2 and 120),
  constraint certificates_instructor_name_check
    check (char_length(instructor_name) between 2 and 120),
  constraint certificates_description_check
    check (char_length(description) between 20 and 280),
  constraint certificates_duration_value_check
    check (duration_value between 1 and 10000),
  constraint certificates_duration_unit_check
    check (duration_unit in ('hours', 'days', 'weeks', 'months')),
  constraint certificates_training_not_after_issue_check
    check (training_date <= issue_date),
  constraint certificates_expiry_after_issue_check
    check (expiry_date is null or expiry_date > issue_date),
  constraint certificates_status_check
    check (status in ('active', 'revoked')),
  constraint certificates_revocation_consistency_check
    check (
      (status = 'active' and revocation_reason is null and revoked_at is null)
      or
      (status = 'revoked' and revocation_reason is not null and revoked_at is not null)
    ),
  constraint certificates_revocation_reason_length_check
    check (revocation_reason is null or char_length(revocation_reason) between 5 and 300)
);

comment on table public.certificates is
  'Issued VerifSafe training certificates. certificate_number is permanent and never reused.';

comment on column public.certificates.status is
  'Stored lifecycle status. Expiry is derived from expiry_date at read time.';
comment on column public.certificates.certificate_number is
  'Permanent public identifier, e.g. VFS-FA-2026-000001. Locked after insert.';
comment on column public.certificates.pdf_storage_path is
  'Reserved for a future stored-PDF workflow; PDFs are rendered on demand.';

create unique index if not exists certificates_idempotency_key_idx
  on public.certificates (idempotency_key)
  where idempotency_key is not null;

create index if not exists certificates_created_at_idx
  on public.certificates (created_at desc);
create index if not exists certificates_issue_date_idx
  on public.certificates (issue_date desc);
create index if not exists certificates_course_name_idx
  on public.certificates (course_name);
create index if not exists certificates_recipient_lower_idx
  on public.certificates (lower(recipient_name));
create index if not exists certificates_status_idx
  on public.certificates (status);

drop trigger if exists certificates_set_updated_at on public.certificates;
create trigger certificates_set_updated_at
  before update on public.certificates
  for each row
  execute function public.set_updated_at();

-- A certificate is a permanent credential. Once issued, its identity
-- and issue date must never change; once revoked it is read-only.
create or replace function public.lock_certificate_identity()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  if new.certificate_number is distinct from old.certificate_number then
    raise exception 'Certificate number is permanent and cannot be changed.';
  end if;

  if new.course_code is distinct from old.course_code then
    raise exception 'Course code is permanent and cannot be changed.';
  end if;

  if new.issue_date is distinct from old.issue_date then
    raise exception 'Issue date is permanent and cannot be changed.';
  end if;

  if new.created_at is distinct from old.created_at
     or new.created_by is distinct from old.created_by then
    raise exception 'Certificate creation metadata is immutable.';
  end if;

  if old.status = 'revoked' then
    raise exception 'Revoked certificates are read-only.';
  end if;

  return new;
end;
$$;

comment on function public.lock_certificate_identity() is
  'Protects certificate number, course code, issue date and creation metadata; locks revoked rows.';

drop trigger if exists certificates_lock_identity on public.certificates;
create trigger certificates_lock_identity
  before update on public.certificates
  for each row
  execute function public.lock_certificate_identity();

-- Keep the ledger complete even if someone uses the service role.
create or replace function public.prevent_certificate_delete()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  raise exception 'Certificates cannot be deleted; revoke the certificate instead.';
end;
$$;

comment on function public.prevent_certificate_delete() is
  'Certificates are permanent credentials; deletion is always blocked.';

drop trigger if exists certificates_prevent_delete on public.certificates;
create trigger certificates_prevent_delete
  before delete on public.certificates
  for each row
  execute function public.prevent_certificate_delete();

-- ─── Audit trail ─────────────────────────────────────────────
create table if not exists public.certificate_events (
  id uuid primary key default gen_random_uuid(),
  certificate_id uuid not null references public.certificates(id) on delete restrict,
  event_type text not null,
  actor_id uuid references auth.users(id) on delete set null,
  actor_email text,
  reason text,
  changes jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint certificate_events_type_check
    check (event_type in ('issued', 'updated', 'revoked', 'downloaded'))
);

comment on table public.certificate_events is
  'Append-only audit trail for certificate issuance, edits, revocations and downloads.';

create index if not exists certificate_events_certificate_idx
  on public.certificate_events (certificate_id, created_at desc);
create index if not exists certificate_events_created_at_idx
  on public.certificate_events (created_at desc);

-- ─── Row level security ──────────────────────────────────────
alter table public.certificates enable row level security;
alter table public.certificate_events enable row level security;

create policy "Admins can read certificates"
  on public.certificates
  for select
  to authenticated
  using (public.is_admin());

create policy "Admins can issue certificates"
  on public.certificates
  for insert
  to authenticated
  with check (public.is_admin());

create policy "Admins can update certificates"
  on public.certificates
  for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- Deliberately no delete policy: certificates are permanent.

create policy "Admins can read certificate events"
  on public.certificate_events
  for select
  to authenticated
  using (public.is_admin());

create policy "Admins can append certificate events"
  on public.certificate_events
  for insert
  to authenticated
  with check (public.is_admin());

grant select, insert, update on public.certificates to authenticated;
grant select, insert on public.certificate_events to authenticated;
revoke all on public.certificates from anon;
revoke all on public.certificate_events from anon;

-- ─── Atomic certificate number allocation ────────────────────
create or replace function public.next_certificate_number(
  p_course_code text,
  p_year integer
)
returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  v_code text := upper(btrim(p_course_code));
  v_sequence integer;
begin
  if v_code !~ '^[A-Z]{2,4}$' then
    raise exception 'Invalid certificate course code: %', p_course_code;
  end if;

  if p_year < 2000 or p_year > 2200 then
    raise exception 'Invalid certificate year: %', p_year;
  end if;

  insert into public.certificate_sequences (course_code, year, last_value)
  values (v_code, p_year, 1)
  on conflict (course_code, year)
  do update set
    last_value = public.certificate_sequences.last_value + 1,
    updated_at = now()
  returning last_value into v_sequence;

  return 'VFS-' || v_code || '-' || p_year::text || '-' || lpad(v_sequence::text, 6, '0');
end;
$$;

comment on function public.next_certificate_number(text, integer) is
  'Atomically allocates the next permanent certificate number for a course and year.';

revoke all on function public.next_certificate_number(text, integer) from public, anon;
grant execute on function public.next_certificate_number(text, integer) to authenticated;

-- ─── Public verification ─────────────────────────────────────
-- Returns only the information needed to confirm a credential.
-- Internal notes, revocation reasons, admin identities and audit
-- events are never exposed.
create or replace function public.verify_certificate(p_certificate_number text)
returns table (
  certificate_number text,
  recipient_name text,
  course_name text,
  training_date date,
  issue_date date,
  expiry_date date,
  status text
)
language sql
stable
security definer
set search_path = public
as $$
  select
    c.certificate_number,
    c.recipient_name,
    c.course_name,
    c.training_date,
    c.issue_date,
    c.expiry_date,
    case
      when c.status = 'revoked' then 'revoked'
      when c.expiry_date is not null and c.expiry_date < current_date then 'expired'
      else 'valid'
    end as status
  from public.certificates c
  where c.certificate_number = upper(btrim(p_certificate_number))
  limit 1;
$$;

comment on function public.verify_certificate(text) is
  'Minimal public certificate lookup. Returns valid, expired or revoked status only.';

revoke all on function public.verify_certificate(text) from public;
grant execute on function public.verify_certificate(text) to anon, authenticated;
