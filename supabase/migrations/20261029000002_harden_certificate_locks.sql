-- ─────────────────────────────────────────────────────────────
-- VerifSafe — Harden certificate identity locks
--
-- The printed course is part of the credential's identity. Correcting a
-- recipient, training date or wording is allowed; changing which course the
-- certificate was issued for is not. This replaces the original lock
-- function after it was first applied.
-- ─────────────────────────────────────────────────────────────

create or replace function public.lock_certificate_identity()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  if new.certificate_number is distinct from old.certificate_number then
    raise exception 'Certificate number is permanent and cannot be changed.';
  end if;

  if new.course_code is distinct from old.course_code
     or new.course_key is distinct from old.course_key
     or new.course_name is distinct from old.course_name then
    raise exception 'The certificate course is permanent and cannot be changed.';
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
  'Protects certificate number, course, issue date and creation metadata; locks revoked rows.';

-- A blank course key can never be valid; require callers to supply one.
alter table public.certificates
  alter column course_key drop default;
