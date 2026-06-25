# 🔥 Verifsafe

Verifsafe is a modern, professional website for a fire safety solutions company. It combines a polished marketing experience with a content-managed backend so the team can update services, equipment, gallery content, and customer enquiries from one place.

## ✨ Features

- Responsive landing pages for the company, services, equipment, gallery, and contact
- Dedicated equipment and service sections for fire protection products and support
- Unified enquiry forms that work consistently across the main website pages
- Server-side contact handling with validation and professional success/error feedback
- Contact messages stored in Sanity for easy follow-up and management
- Telegram notifications for new website enquiries
- WhatsApp quick-contact button for fast customer communication
- Sanity Studio for editing content and managing submissions
- Vercel-ready deployment setup with environment-based configuration

## 🛠️ Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Sanity CMS and Studio
- next-sanity
- ESLint

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
| SANITY_API_WRITE_TOKEN | Sanity write token for contact submissions |
| TELEGRAM_BOT_TOKEN | Telegram bot token for notifications |
| TELEGRAM_CHAT_ID | Telegram chat ID for receiving alerts |

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
components/          # Reusable sections and layout components
sanity/              # Sanity schema, client setup, and Studio config
public/              # Static assets and images
types/               # Shared TypeScript types
```

## 🧠 Content Management

Sanity Studio is available at:

```text
/studio
```

Use it to manage:

- gallery items
- contact messages
- site content and structured content models

## 🌐 Deployment

The project is ready for deployment on Vercel. Make sure to add the same environment variables in your Vercel project settings before deploying.

## 📞 Contact

For enquiries, use the website contact form or the WhatsApp quick contact action.

## 📝 License

This project is private and proprietary to Verifsafe.
