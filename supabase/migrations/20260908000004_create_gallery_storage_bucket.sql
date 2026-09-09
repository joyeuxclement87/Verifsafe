-- ─────────────────────────────────────────────────────────────
-- VerifSafe — Gallery Storage bucket
-- Images referenced by gallery_items.image_path live here.
-- ─────────────────────────────────────────────────────────────

-- Public bucket: images are served directly by Supabase CDN.
insert into storage.buckets (id, name, public)
values ('gallery', 'gallery', true)
on conflict (id) do nothing;

-- Public read: anyone may view images in the gallery bucket.
create policy "Gallery bucket public read"
  on storage.objects
  for select
  to anon, authenticated
  using (bucket_id = 'gallery');

-- Admin write: uploads, updates and deletes require an authenticated admin.
-- No anonymous writes. Ensemble with public.is_admin() (migration 00001).
create policy "Admins can upload to gallery bucket"
  on storage.objects
  for insert
  to authenticated
  with check (
    bucket_id = 'gallery'
    and public.is_admin()
  );

create policy "Admins can update gallery bucket objects"
  on storage.objects
  for update
  to authenticated
  using (
    bucket_id = 'gallery'
    and public.is_admin()
  )
  with check (
    bucket_id = 'gallery'
    and public.is_admin()
  );

create policy "Admins can delete gallery bucket objects"
  on storage.objects
  for delete
  to authenticated
  using (
    bucket_id = 'gallery'
    and public.is_admin()
  );