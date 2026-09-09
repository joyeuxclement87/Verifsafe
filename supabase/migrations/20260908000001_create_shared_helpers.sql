-- ─────────────────────────────────────────────────────────────
-- VerifSafe — Shared helpers
-- Authorization + timestamp maintenance used across tables.
-- ─────────────────────────────────────────────────────────────

-- True when the current JWT claims app_metadata.is_admin.
-- Used by RLS policies so the future admin panel can manage data
-- without the service role key. Non-admins (and anonymous visitors)
-- always evaluate to false.
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(
    (auth.jwt() -> 'app_metadata' ->> 'is_admin') = 'true',
    false
  );
$$;

comment on function public.is_admin() is
  'True when the current JWT claims app_metadata.is_admin. Drives admin RLS policies.';

-- Keeps updated_at in sync on any row update.
create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

comment on function public.set_updated_at() is
  'Trigger function that maintains the updated_at column on managed tables.';