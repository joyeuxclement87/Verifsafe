import { requireAdmin } from '@/lib/admin/auth'
import { Card } from '@/components/admin/ui/Card'

export const dynamic = 'force-dynamic'

export default async function SettingsPage() {
  const { user } = await requireAdmin()

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold tracking-tight text-ink">Settings</h1>
        <p className="mt-1 text-sm text-muted">
          Account and administrative preferences.
        </p>
      </header>

      <Card title="Your account">
        <dl className="max-w-md divide-y divide-line text-sm">
          <div className="flex items-center justify-between gap-4 py-3">
            <dt className="text-muted">Email</dt>
            <dd className="font-medium text-ink">{user.email}</dd>
          </div>
          <div className="flex items-center justify-between gap-4 py-3">
            <dt className="text-muted">Role</dt>
            <dd className="font-medium text-ink">Administrator</dd>
          </div>
          <div className="flex items-center justify-between gap-4 py-3">
            <dt className="text-muted">Signed in at</dt>
            <dd className="font-medium text-ink">
              {user.created_at ? new Date(user.created_at).toLocaleString('en-GB') : '—'}
            </dd>
          </div>
        </dl>
      </Card>

      <Card title="Access & security">
        <p className="max-w-xl text-sm leading-relaxed text-muted">
          Everyone who signs in to this panel is treated as an administrator. A future update
          will introduce staff and editor roles. Row Level Security enforces access at the
          database level — the public website and visitors can never read private enquiries,
          and can only see published gallery projects.
        </p>
      </Card>
    </div>
  )
}