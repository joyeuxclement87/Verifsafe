-- ─────────────────────────────────────────────────────────────
-- VerifSafe — Gallery items
-- Public website reads; future admin panel manages.
-- ─────────────────────────────────────────────────────────────

create table if not exists public.gallery_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  category text,
  --- Path of the image inside the "gallery" Storage bucket.
  --- Images are stored in Storage, not in Postgres.
  image_path text not null,
  alt_text text not null default '',
  sort_order integer not null default 0,
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.gallery_items is
  'Gallery projects rendered on the public website and managed by the future VerifSafe admin panel.';

create trigger gallery_items_set_updated_at
  before update on public.gallery_items
  for each row
  execute function public.set_updated_at();

-- Indexes only where queries will actually filter/order.
create index if not exists gallery_items_published_idx
  on public.gallery_items (published);
create index if not exists gallery_items_sort_order_idx
  on public.gallery_items (sort_order);
create index if not exists gallery_items_category_idx
  on public.gallery_items (category);

alter table public.gallery_items enable row level security;

-- Public website (anon + any signed-in user): read published items only.
create policy "Gallery is publicly viewable when published"
  on public.gallery_items
  for select
  to anon, authenticated
  using (published = true);

-- Admins: full control (including drafts/unpublished items).
create policy "Admins can manage gallery items"
  on public.gallery_items
  for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());