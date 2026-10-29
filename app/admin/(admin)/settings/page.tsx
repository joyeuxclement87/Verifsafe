import { requireAdmin } from '@/lib/admin/auth'
import { Card } from '@/components/admin/ui/Card'

export const dynamic = 'force-dynamic'

export default async function SettingsPage() {
  const { user } = await requireAdmin()

  return (
    <div className="space-y-6">
      <header className="border-b border-line pb-6">
        <div className="mb-2 flex items-center gap-2.5">
          <span aria-hidden="true" className="h-px w-6 bg-brand" />
          <span className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
            System Administration
          </span>
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]">
          Settings
        </h1>
        <p className="mt-1 text-sm text-muted">
          Account profile and security configuration.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="Authenticated account" description="Current Supabase Auth session details.">
          <dl className="divide-y divide-line text-sm">
            <div className="flex items-center justify-between gap-4 py-3">
              <dt className="text-admin-label">Email</dt>
              <dd className="font-medium text-ink">{user.email}</dd>
            </div>
            <div className="flex items-center justify-between gap-4 py-3">
              <dt className="text-admin-label">Role</dt>
              <dd className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                Administrator
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4 py-3">
              <dt className="text-admin-label">Account created</dt>
              <dd className="font-mono text-xs text-ink-soft">
                {user.created_at ? new Date(user.created_at).toLocaleString('en-GB') : '—'}
              </dd>
            </div>
          </dl>
        </Card>

        <Card title="Access &amp; security model" description="Database-level protection via PostgreSQL RLS.">
          <p className="text-sm leading-relaxed text-ink-soft">
            Every authenticated staff account in this workspace has administrative privileges.
            Row Level Security (RLS) enforces permissions directly in PostgreSQL — anonymous
            website visitors can submit enquiries and view published gallery projects, but can
            never read private customer records or modify content.
          </p>
        </Card>
      </div>
    </div>
  )
}