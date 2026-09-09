# 🔥 Verifsafe

Verifsafe is a modern, professional website for a fire safety solutions company. It combines a polished marketing experience with a content-managed backend so the team can update services, equipment, gallery content, and customer enquiries from one place.

## ✨ Features

- Responsive landing pages for the company, services, equipment, gallery, and contact
- Dedicated equipment and service sections for fire protection products and support
- Unified enquiry forms that work consistently across the main website pages
- Server-side contact handling with validation and professional success/error feedback
- Enquiries stored in Supabase with row-level security
- Telegram notifications for new website enquiries
- WhatsApp quick-contact button for fast customer communication
- Gallery content managed in Supabase (Storage + Postgres) with short-window caching
- Separate admin panel (port 3001) for enquiries, gallery, and media management
- Vercel-ready deployment setup with environment-based configuration

## 🛠️ Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Supabase (Postgres + Auth + Storage + RLS)
- Sanity CMS and Studio (existing content, kept during migration)
- next-sanity
- ESLint

> The admin panel lives in `admin/` and is a separate Next.js app running on
> port `3001`. It shares the same Supabase project and is protected by
> Supabase Auth with `is_admin()` RLS policies.

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd Verifsafe
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a local environment file
   ```bash
   cp .env.example .env.local
   ```

4. Add the required environment variables

### Required Environment Variables

| Variable | Description |
|---|---|
| NEXT_PUBLIC_SANITY_PROJECT_ID | Your Sanity project ID |
| NEXT_PUBLIC_SANITY_DATASET | Your Sanity dataset name |
| NEXT_PUBLIC_SANITY_API_VERSION | Sanity API version |
| NEXT_PUBLIC_SUPABASE_URL | Supabase project URL |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | Supabase anon key (public, RLS-enforced) |
| SUPABASE_SERVICE_ROLE_KEY | Supabase service role key (server-only) |
| TELEGRAM_BOT_TOKEN | Telegram bot token for notifications |
| TELEGRAM_CHAT_ID | Telegram chat ID for receiving alerts |

> See [docs/supabase.md](docs/supabase.md) for the full Supabase setup: schema,
> migrations, security policies and how the future admin panel connects.

### Run locally

```bash
npm run dev
```

Open http://localhost:3000 to view the site.

### Build for production

```bash
npm run build
npm start
```

## 📁 Project Structure

```text
app/                 # App router pages and API routes
admin/               # Separate Next.js admin panel (port 3001)
components/          # Reusable sections and layout components
lib/                 # Domain data, equipment/service catalog, site config
lib/data/            # Supabase data-access layer (gallery, enquiries)
lib/supabase/        # Supabase client wiring (browser/server/admin/storage)
sanity/              # Sanity schema, client setup, and Studio config
supabase/migrations/ # Version-controlled Supabase SQL migrations
types/               # Shared TypeScript types
docs/                # Architecture documentation (Supabase)
```

## 🧠 Content Management

### Admin panel

The admin panel is a separate Next.js app on port `3001`:

```bash
cd admin
npm install
cp .env.example .env.local   # same Supabase project as the website
npm run dev
```

Sign in with any Supabase Auth user — every authenticated user is treated
as an admin via `is_admin()`
(see [docs/supabase.md](docs/supabase.md#security-model-row-level-security)).

The panel manages:

- **Enquiries** — inbox, search/filter, status workflow and internal notes
- **Gallery** — upload, edit, publish and reorder projects shown on the website
- **Media** — every uploaded file across Supabase Storage and its usage status

### Sanity Studio

```text
/studio
```

Use it to manage existing CMS content:

- site content and structured content models

Galleries are now managed in Supabase via the admin panel (see above).
Enquiries are stored in Supabase (see [docs/supabase.md](docs/supabase.md)); the Sanity
`contactMessage` schema is no longer written by the website and is kept only for
existing records.

## 🌐 Deployment

The project is ready for deployment on Vercel. Make sure to add the same environment variables in your Vercel project settings before deploying.

## 📞 Contact

For enquiries, use the website contact form or the WhatsApp quick contact action.

## 📝 License

This project is private and proprietary to Verifsafe.
