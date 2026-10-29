-- ─────────────────────────────────────────────────────────────
-- VerifSafe — Enhance public certificate verification RPC
--
-- 1. Exposes training duration (duration_value, duration_unit) alongside
--    recipient_name, course_name, training_date, issue_date, expiry_date
--    and computed status ('valid', 'expired', 'revoked') so public
--    verification confirms full training details without exposing internal
--    admin fields (revocation_reason, actor IDs, audit trail, etc.).
-- 2. Supports lookup by immutable certificate_number (e.g. VFS-FA-2026-000001)
--    or by certificate UUID primary key.
-- ─────────────────────────────────────────────────────────────

drop function if exists public.verify_certificate(text);

create or replace function public.verify_certificate(p_certificate_number text)
returns table (
  certificate_number text,
  recipient_name text,
  course_name text,
  training_date date,
  duration_value integer,
  duration_unit text,
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
    c.duration_value,
    c.duration_unit,
    c.issue_date,
    c.expiry_date,
    case
      when c.status = 'revoked' then 'revoked'
      when c.expiry_date is not null and c.expiry_date < current_date then 'expired'
      else 'valid'
    end as status
  from public.certificates c
  where c.certificate_number = upper(btrim(p_certificate_number))
     or c.id::text = lower(btrim(p_certificate_number))
  limit 1;
$$;

comment on function public.verify_certificate(text) is
  'Minimal public certificate lookup by certificate_number or UUID. Returns only public verification fields and computed status (valid, expired, revoked).';

revoke all on function public.verify_certificate(text) from public;
grant execute on function public.verify_certificate(text) to anon, authenticated;
