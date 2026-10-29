-- ─────────────────────────────────────────────────────────────
-- VerifSafe — Enforce admin authorization inside number allocation
--
-- The sequence RPC is SECURITY DEFINER, so it must assert authorization
-- itself rather than relying only on the table's RLS policies. Any future
-- tightening of public.is_admin() now also closes the allocator.
-- ─────────────────────────────────────────────────────────────

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
  if not public.is_admin() then
    raise exception 'Not authorized to allocate certificate numbers.';
  end if;

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
  'Atomically allocates the next permanent certificate number for a course and year. Admin-only.';

revoke all on function public.next_certificate_number(text, integer) from public, anon;
grant execute on function public.next_certificate_number(text, integer) to authenticated;
