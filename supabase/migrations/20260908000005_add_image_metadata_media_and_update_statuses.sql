-- ─────────────────────────────────────────────────────────────
-- VerifSafe — Image metadata, media library, enquiry statuses
-- Extends gallery_items with image metadata, creates a media
-- library table, and updates enquiry workflow statuses.
-- ─────────────────────────────────────────────────────────────

-- ─── Gallery: add image metadata + caption ───────────────────
alter table public.gallery_items
  add column if not exists caption text,
  add column if not exists image_width integer,
  add column if not exists image_height integer,
  add column if not exists image_file_size integer,
  add column if not exists image_format text;

comment on column public.gallery_items.caption is
  'Optional caption shown below the image in the gallery.';
comment on column public.gallery_items.image_width is
  'Width in pixels of the stored image.';
comment on column public.gallery_items.image_height is
  'Height in pixels of the stored image.';
comment on column public.gallery_items.image_file_size is
  'File size in bytes of the stored image.';
comment on column public.gallery_items.image_format is
  'MIME format of the stored image (e.g. image/webp, image/avif).';

-- ─── Media library ───────────────────────────────────────────
-- Tracks all uploaded files for the admin media library.
create table if not exists public.media (
  id uuid primary key default gen_random_uuid(),
  file_name text not null,
  file_path text not null,
  file_size integer,
  width integer,
  height integer,
  format text,
  alt_text text not null default '',
  caption text,
  category text,
  -- NULL means unreferenced; set to the table.name:id when actively used.
  reference text,
  uploaded_by uuid references auth.users(id),
  created_at timestamptz not null default now()
);

comment on table public.media is
  'Media library — tracks all uploaded files across Supabase Storage.';

create index if not exists media_category_idx on public.media (category);
create index if not exists media_created_at_idx on public.media (created_at desc);

alter table public.media enable row level security;

-- Public: no access to the media library table.
-- (Storage objects in public buckets are read via Storage, not this table.)

-- Admins: full control.
create policy "Admins can read media"
  on public.media
  for select
  to authenticated
  using (public.is_admin());

create policy "Admins can insert media"
  on public.media
  for insert
  to authenticated
  with check (public.is_admin());

create policy "Admins can update media"
  on public.media
  for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "Admins can delete media"
  on public.media
  for delete
  to authenticated
  using (public.is_admin());

-- ─── Storage: add products bucket (future inventory readiness) ─
insert into storage.buckets (id, name, public)
values ('products', 'products', true)
on conflict (id) do nothing;

create policy "Products bucket public read"
  on storage.objects
  for select
  to anon, authenticated
  using (bucket_id = 'products');

create policy "Admins can manage products bucket"
  on storage.objects
  for all
  to authenticated
  using (bucket_id = 'products' and public.is_admin())
  with check (bucket_id = 'products' and public.is_admin());

-- ─── Enquiry statuses: update to expanded workflow ────────────
-- Old: new -> contacted -> quoted -> closed
-- New: new -> contacted -> in_progress -> completed -> archived
-- Migrate existing data first, then update the constraint.

update public.enquiries set status = 'in_progress' where status = 'quoted';
update public.enquiries set status = 'completed' where status = 'closed';

alter table public.enquiries
  drop constraint if exists enquiries_status_check;

alter table public.enquiries
  add constraint enquiries_status_check
    check (status in ('new', 'contacted', 'in_progress', 'completed', 'archived'));

comment on column public.enquiries.status is
  'Workflow status: new -> contacted -> in_progress -> completed -> archived.';
