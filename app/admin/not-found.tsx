import Link from 'next/link'

export default function AdminNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral px-4 text-center">
      <p className="text-5xl font-bold tracking-tight text-ink">404</p>
      <p className="mt-3 text-sm text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/admin/dashboard"
        className="mt-6 rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
      >
        Back to dashboard
      </Link>
    </main>
  )
}