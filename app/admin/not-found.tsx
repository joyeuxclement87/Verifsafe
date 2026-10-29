import Button from '@/components/admin/ui/Button'

export default function AdminNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-paper px-4 text-center text-ink">
      <div className="mb-3 flex items-center gap-2.5">
        <span aria-hidden="true" className="h-px w-6 bg-brand" />
        <span className="font-mono text-xs font-semibold tracking-[0.2em] text-muted uppercase">
          404 / Not Found
        </span>
        <span aria-hidden="true" className="h-px w-6 bg-brand" />
      </div>
      <h1 className="text-2xl font-semibold tracking-tight text-ink">
        Page not found
      </h1>
      <p className="mt-2 max-w-sm text-sm text-muted">
        The administrative page or record you are looking for doesn&apos;t exist or has been removed.
      </p>
      <div className="mt-6">
        <Button href="/admin/dashboard">Back to dashboard</Button>
      </div>
    </main>
  )
}
