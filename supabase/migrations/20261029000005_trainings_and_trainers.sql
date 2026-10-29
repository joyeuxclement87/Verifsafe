-- ─────────────────────────────────────────────────────────────
-- VerifSafe — Editable Training Names & Saved Trainers
--
-- 1. Cleans up any unused studio tables from the canceled studio migration.
-- 2. Creates lean public.training_courses and public.trainers tables with RLS.
-- 3. Updates public.lock_certificate_identity() so admins can edit/correct the
--    printed training name (course_name) on active certificates while keeping
--    certificate_number, course_code, issue_date, and revoked records locked.
-- ─────────────────────────────────────────────────────────────

alter table public.certificates
  drop column if exists template_version_id,
  drop column if exists template_id,
  drop column if exists template_snapshot,
  drop column if exists overrides,
  drop column if exists course_id,
  drop column if exists trainer_id,
  drop column if exists instructor_title,
  drop column if exists instructor_signature_asset;

drop table if exists public.course_trainers cascade;
drop table if exists public.certificate_template_versions cascade;
drop table if exists public.certificate_templates cascade;
drop table if exists public.training_courses cascade;
drop table if exists public.trainers cascade;

-- 1. Saved Training Courses table
create table public.training_courses (
  id uuid primary key default gen_random_uuid(),
  key text not null unique,
  code text not null,
  name text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint training_courses_code_check check (code ~ '^[A-Z]{2,4}$'),
  constraint training_courses_name_length check (char_length(btrim(name)) between 2 and 90)
);

create trigger set_training_courses_updated_at
  before update on public.training_courses
  for each row
  execute function public.set_updated_at();

alter table public.training_courses enable row level security;

create policy "training_courses_admin_select"
  on public.training_courses for select
  to authenticated
  using (public.is_admin());

create policy "training_courses_admin_insert"
  on public.training_courses for insert
  to authenticated
  with check (public.is_admin());

create policy "training_courses_admin_update"
  on public.training_courses for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "training_courses_admin_delete"
  on public.training_courses for delete
  to authenticated
  using (public.is_admin());

-- Seed default trainings
insert into public.training_courses (key, code, name)
values
  ('first-aid', 'FA', 'First Aid Training'),
  ('first-aid-refresher', 'FR', 'First Aid Refresher'),
  ('fire-safety', 'FS', 'Fire Safety Training'),
  ('fire-warden', 'FW', 'Fire Warden Training'),
  ('fire-extinguisher', 'FE', 'Fire Extinguisher Training'),
  ('occupational-health-safety', 'OHS', 'Occupational Health & Safety')
on conflict (key) do nothing;

-- 2. Saved Trainers table
create table public.trainers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint trainers_name_length check (char_length(btrim(name)) between 2 and 120)
);

create unique index trainers_name_lower_idx
  on public.trainers (lower(btrim(name)));

create trigger set_trainers_updated_at
  before update on public.trainers
  for each row
  execute function public.set_updated_at();

alter table public.trainers enable row level security;

create policy "trainers_admin_select"
  on public.trainers for select
  to authenticated
  using (public.is_admin());

create policy "trainers_admin_insert"
  on public.trainers for insert
  to authenticated
  with check (public.is_admin());

create policy "trainers_admin_update"
  on public.trainers for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "trainers_admin_delete"
  on public.trainers for delete
  to authenticated
  using (public.is_admin());

insert into public.trainers (name)
select 'Cyuzuzo Christian'
where not exists (
  select 1 from public.trainers where lower(btrim(name)) = 'cyuzuzo christian'
);

insert into public.trainers (name)
select distinct btrim(c.instructor_name)
from public.certificates c
where char_length(btrim(c.instructor_name)) >= 2
  and not exists (
    select 1 from public.trainers t where lower(btrim(t.name)) = lower(btrim(c.instructor_name))
  );

-- 3. Allow editing course_name (printed training name) on active certificates
-- while keeping certificate_number, course_code, issue_date, and revoked rows locked.
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
    raise exception 'The certificate course code is permanent and cannot be changed.';
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
