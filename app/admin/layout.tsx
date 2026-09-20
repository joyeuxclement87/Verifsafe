import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'VerifSafe Admin',
    template: '%s | VerifSafe Admin',
  },
  description: 'VerifSafe content management and administration panel.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
}

export const dynamic = 'force-dynamic'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
