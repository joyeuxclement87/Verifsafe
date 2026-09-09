-- ─────────────────────────────────────────────────────────────
-- VerifSafe — Enquiries
-- Public website submits; future admin panel manages.
-- ─────────────────────────────────────────────────────────────

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text,
  email text,
  service text,
  message text not null,
  --- Workflow: new -> contacted -> quoted -> closed
  status text not null default 'new',
  --- Internal notes for admins only.
  notes text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint enquiries_status_check
    check (status in ('new', 'contacted', 'quoted', 'closed'))
);

comment on table public.enquiries is
  'Website enquiry submissions. status drives the admin workflow: new -> contacted -> quoted -> closed.';
comment on column public.enquiries.notes is
  'Internal admin notes. Never writable by anonymous visitors.';

create trigger enquiries_set_updated_at
  before update on public.enquiries
  for each row
  execute function public.set_updated_at();

-- Indexes for the admin inbox queries.
create index if not exists enquiries_status_idx
  on public.enquiries (status);
create index if not exists enquiries_created_at_idx
  on public.enquiries (created_at desc);

alter table public.enquiries enable row level security;

-- Visitors: may submit an enquiry, but can never forge the workflow and
-- never read/modify anything. RLS returns no rows to anon for select.
create policy "Visitors can submit enquiries"
  on public.enquiries
  for insert
  to anon
  with check (
    status = 'new'
    and coalesce(notes, '') = ''
  );

-- Admins only for all internal operations. Anonymous users see nothing.
create policy "Admins can read enquiries"
  on public.enquiries
  for select
  to authenticated
  using (public.is_admin());

create policy "Admins can update enquiries"
  on public.enquiries
  for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

create policy "Admins can delete enquiries"
  on public.enquiries
  for delete
  to authenticated
  using (public.is_admin());