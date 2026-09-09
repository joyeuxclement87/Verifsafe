# VerifSafe Supabase Backend

Supabase is the data and backend platform for VerifSafe. This document explains the
foundation: what lives in Supabase, how the data layer is structured, how migrations
are organized, and how the admin panel connects.

Sanity remains temporarily for existing CMS content while migration happens in stages.
**Enquiries** are live on Supabase, the **gallery** is live on Supabase (Storage +
Postgres), and a separate **admin panel** in `admin/` manages enquiries, gallery and
media.

---

## Required environment variables

Copy `.env.example` to `.env.local` and fill in the values.

| Variable                        | Scope         | Purpose                                              |
| ------------------------------- | ------------- | ---------------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`      | public        | Supabase project URL. Safe in the browser.           |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | public        | anon key, enforces Row Level Security. Safe.         |
| `SUPABASE_SERVICE_ROLE_KEY`     | server-only   | Privileged operations. NEVER in the browser.         |

All `.env*` files are git-ignored. The service role key must only ever be used
server-side (import the `server-only` guard in `lib/supabase/admin.ts`).

## Apply the migrations

The database schema is version-controlled SQL under `supabase/migrations/`.

With the [Supabase CLI](https://supabase.com/docs/guides/cli):

```bash
supabase init                      # if not already done (generates supabase/config.toml)
supabase link --project-ref <ref>  # link your remote project
supabase db push                   # apply pending migrations
```

`db push` records each applied migration, so the setup is reproducible across
environments (local, preview, production).

If you prefer the Dashboard, each migration file can be run in the SQL editor — but
applying via the CLI keeps a single source of truth.

## Schema overview

### `gallery_items`

Gallery projects shown on the public website and managed by the future admin panel.

| Column        | Type        | Notes                                             |
| ------------- | ----------- | ------------------------------------------------- |
| `id`          | `uuid`      | PK, `gen_random_uuid()`                           |
| `title`       | `text`      | required                                          |
| `description` | `text`      | optional                                          |
| `category`    | `text`      | filterable                                        |
| `image_path`  | `text`      | required — path inside the `gallery` bucket       |
| `alt_text`    | `text`      | default `''`                                      |
| `sort_order`  | `integer`   | default `0`                                       |
| `published`   | `boolean`   | default `false`                                   |
| `created_at` / `updated_at` | `timestamptz` | auto-maintained (trigger)             |

The image itself is **not** stored in Postgres — `image_path` references a file in the
`gallery` Storage bucket.

### `media`

Media library used by the admin panel to track every uploaded file. One row per file
in Storage.

| Column       | Type        | Notes                                         |
| ------------ | ----------- | --------------------------------------------- |
| `id`         | `uuid`      | PK, `gen_random_uuid()`                       |
| `file_name`  | `text`      | original file name                            |
| `file_path`  | `text`      | path inside its Storage bucket                |
| `file_size` / `width` / `height` / `format` | `integer`/`text` | image metadata                |
| `alt_text` / `caption` / `category` | `text` | optional display metadata            |
| `reference`  | `text`      | `table.id` when the file is actively used, else `NULL` |
| `uploaded_by` | `uuid`     | `auth.users(id)`                              |
| `created_at` | `timestamptz` |                                              |

The admin panel keeps this table in sync: creating a gallery project inserts a media
record with `reference = "gallery_items:<id>"`; replacing or deleting a project cleans
up the old record and storage object.

### `enquiries`

Website quote/contact submissions. **Live:** the public contact form writes here.

| Column      | Type        | Notes                                        |
| ----------- | ----------- | -------------------------------------------- |
| `id`        | `uuid`      | PK, `gen_random_uuid()`                      |
| `name`      | `text`      | required                                     |
| `phone` / `email` | `text` | optional                                     |
| `service`   | `text`      | subject selection from the contact form      |
| `message`   | `text`      | required                                     |
| `status`    | `text`      | `new` → `contacted` → `quoted` → `closed`    |
| `notes`     | `text`      | internal admin notes, default `''`           |
| `created_at` / `updated_at` | `timestamptz` | auto-maintained (trigger)     |

### Storage bucket `gallery`

Public bucket for gallery images. Public read; writes (insert/update/delete) require an
authenticated admin (see security below).

## Security model (Row Level Security)

RLS is enabled on both tables. Access is controlled by two helpers defined in
`20260908000001_create_shared_helpers.sql`:

- `public.is_admin()` — true when the JWT claims `app_metadata.is_admin = "true"`.
  This is how the admin panel gains management rights without the service role key.
- `public.set_updated_at()` — keeps `updated_at` current.

| Data          | Anonymous visitors                                  | Admins (`is_admin()`)                    |
| ------------- | --------------------------------------------------- | ---------------------------------------- |
| gallery_items | SELECT where `published = true`                     | full control (`.for all`)                |
| media         | no access (files are read via Storage buckets)      | full control                             |
| enquiries     | INSERT only, and only `status='new'` + empty notes  | SELECT / UPDATE / DELETE                 |
| gallery bucket | read objects                                      | upload / update / delete objects         |

Visitors can never read other enquiries, modify them, delete them, read `notes`, or
forge `status`. There is no anonymous write path to Storage. Nothing relies on the
service role key being exposed to the browser.

## Where the Supabase code lives

```text
lib/supabase/
  client.ts    browser client (anon, @supabase/ssr)          — client components
  server.ts    server client (anon + cookies, @supabase/ssr) — RSC / routes / actions
  admin.ts     service-role client, guarded by `server-only` — privileged server ops
  storage.ts   getPublicStorageUrl(bucket, path) pure helper — public object URLs

lib/data/
  gallery.ts     getPublishedGalleryItems() + mapGalleryItems() — public gallery page
  enquiries.ts   createEnquiry({ name, phone?, email?, service?, message? })

types/
  supabase.ts    GalleryItem, Enquiry, MediaItem, EnquiryStatus, NewEnquiry — shared
                 with the admin panel via the @shared/* path alias
```

**UI components must not contain raw database queries.** All data access goes through
`lib/data/*`, which owns the mapping between UI and database. This keeps the backend
swappable/extendable without touching components.

The **admin panel** (`admin/`) is a separate Next.js app with its own `lib/` layer
(`admin/lib/actions.ts`, `gallery.ts`, `enquiries.ts`, `media.ts`) talking to the same
Supabase project through authenticated admin sessions.

## What is intentionally NOT in Supabase

- Page layouts, typography, design system, navigation, footer, animations, page
  transitions — stable product code lives in code.
- Hero/service/equipment guide imagery, logos, icons, decorative assets — static.
- Existing CMS content served by Sanity (services, equipment) — kept in
  Sanity until each module is migrated and verified.
- The contact form frontend, validation and success/error UX — unchanged.

Only **frequently changing business data** moves to Supabase: enquiries and gallery
(live), plus the media library powering the admin panel.

## The `/api/contact` route

`POST /api/contact` validates the submission, writes the enquiry through
`lib/data/enquiries.ts` (anon-key server client → RLS applies), then best-effort sends a
Telegram notification using existing `TELEGRAM_BOT_TOKEN` / `TELEGRAM_CHAT_ID`. Sanity
is no longer written by this route; the Sanity `contactMessage` schema is now unused.

If Supabase env vars are missing the route returns a friendly 500 and logs the error —
it fails safe, never exposing internals.

## How the admin panel connects

The admin panel is a separate application in `admin/` talking to the same Supabase
project:

```text
Admin panel (admin/, port 3001) ──► Supabase ──► RLS (is_admin() via authenticated JWT)
```

Admins authenticate against Supabase Auth; the `is_admin()` policy runs on their JWT.
The public website keeps using the anon key and stays completely unchanged. Storage
object policies and table policies are scoped to `is_admin()`. In the dashboard,
give the admin user `app_metadata.is_admin: "true"`.

The panel protects its routes with a proxy (`admin/proxy.ts`) and every page calls
`requireAdmin()`. All mutations go through server actions in `admin/lib/actions.ts`,
which enforce status/notes rules and keep the media library consistent with Storage.

Future modules (inventory, products, stock, suppliers, orders) will add their own
tables/policies in the same `supabase/migrations/` folder — no architectural changes
required.

## Verification

After `supabase db push`, confirm in the Dashboard SQL editor:

```sql
select * from pg_policies where tablename in ('gallery_items', 'enquiries');
select * from storage.buckets where id = 'gallery';
```

Manual behavioural checks:

- Public submit succeeds → insert into `enquiries` with `status='new'`, empty `notes`.
- Anonymous `select * from enquiries` returns zero rows.
- Anonymous cannot set `status='quoted'` or `notes` on insert (RLS rejects the row).
- Anonymous cannot read unpublished `gallery_items`.
- Anonymous cannot upload to the `gallery` bucket.