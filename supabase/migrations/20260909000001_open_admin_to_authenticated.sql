-- ─────────────────────────────────────────────────────────────
-- VerifSafe — Treat every authenticated user as an admin
-- Replaces the app_metadata.is_admin gate: any signed-in Supabase
-- user is now allowed to upload, manage enquiries and admin data.
--
-- The public website always queries as anon, so anonymous visitors
-- remain unable to write anything (RLS still applies via role).
-- ─────────────────────────────────────────────────────────────

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(
    (auth.jwt() ->> 'role') = 'authenticated',
    false
  );
$$;

comment on function public.is_admin() is
  'True for any authenticated user. Anonymous visitors (role anon) are false.';