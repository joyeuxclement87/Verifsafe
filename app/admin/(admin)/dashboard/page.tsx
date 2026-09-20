import Link from 'next/link'
import { ArrowRight } from 'tabler-icons-react'
import { getStatusCounts, getEnquiries } from '@/lib/admin/enquiries'
import { getGalleryItems } from '@/lib/admin/gallery'
import { formatShortDate } from '@/lib/admin/format'
import { StatusBadge, PublishBadge } from '@/components/admin/ui/Badge'
import { Card } from '@/components/admin/ui/Card'
import { EmptyState } from '@/components/admin/ui/EmptyState'
import { requireAdmin } from '@/lib/admin/auth'

export const dynamic = 'force-dynamic'

function StatCard({
  label,
  value,
  href,
}: {
  label: string
  value: number
  href: string
}) {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-line bg-white p-5 transition-colors hover:border-ink/30"
    >
      <p className="text-admin-label">{label}</p>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-ink">
        {value > 0 ? value : <span className="text-muted">{value}</span>}
      </p>
      <p className="mt-3 flex items-center gap-1 text-xs font-medium text-muted group-hover:text-ink">
        View
        <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
      </p>
    </Link>
  )
}

function SectionHeader({
  title,
  href,
  linkLabel,
}: {
  title: string
  href: string
  linkLabel: string
}) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <h3 className="text-admin-title">{title}</h3>
      <Link
        href={href}
        className="flex items-center gap-1 text-xs font-medium text-muted hover:text-ink"
      >
        {linkLabel}
        <ArrowRight size={13} />
      </Link>
    </div>
  )
}

export default async function DashboardPage() {
  await requireAdmin()
  const { counts, total, hasAny } = await getStatusCounts()
  const recentEnquiries = await getEnquiries({ limit: 6 })
  const recentGallery = await getGalleryItems()

  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-xl font-semibold tracking-tight text-ink">Dashboard</h1>
        <p className="mt-1 text-sm text-muted">A quick overview of recent business activity.</p>
      </header>

      {/* Stat cards */}
      <section aria-label="Enquiry overview">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard label="All enquiries" value={total} href="/admin/enquiries" />
          <StatCard label="New enquiries" value={counts.new} href="/admin/enquiries?status=new" />
          <StatCard
            label="In progress"
            value={counts.in_progress}
            href="/admin/enquiries?status=in_progress"
          />
          <StatCard label="Completed" value={counts.completed} href="/admin/enquiries?status=completed" />
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Recent enquiries */}
        <section>
          <SectionHeader title="Recent enquiries" href="/admin/enquiries" linkLabel="View all" />
          {!hasAny || recentEnquiries.length === 0 ? (
            <EmptyState
              title="No new enquiries"
              description="Enquiries submitted via the website will appear here."
            />
          ) : (
            <Card className="overflow-hidden">
              <ul className="divide-y divide-line">
                {recentEnquiries.map((enquiry) => (
                  <li key={enquiry.id}>
                    <Link
                      href={`/admin/enquiries/${enquiry.id}`}
                      className="flex items-center justify-between gap-3 px-5 py-3.5 transition-colors hover:bg-neutral"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-ink">{enquiry.name}</p>
                        <p className="truncate text-xs text-muted">
                          {enquiry.service || 'General'} · {formatShortDate(enquiry.created_at)}
                        </p>
                      </div>
                      <StatusBadge status={enquiry.status} />
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </section>

        {/* Recent gallery */}
        <section>
          <SectionHeader title="Recent gallery uploads" href="/admin/gallery" linkLabel="Manage gallery" />
          {recentGallery.length === 0 ? (
            <EmptyState
              title="No gallery projects yet"
              description="Upload and publish your first project from the Gallery section."
            />
          ) : (
            <Card className="overflow-hidden">
              <ul className="divide-y divide-line">
                {recentGallery.slice(0, 6).map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/admin/gallery/${item.id}`}
                      className="flex items-center justify-between gap-3 px-5 py-3.5 transition-colors hover:bg-neutral"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-brand-light text-xs font-semibold text-brand">
                          {item.title.charAt(0).toUpperCase()}
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium text-ink">{item.title}</p>
                          <p className="truncate text-xs text-muted">
                            {item.category || 'Uncategorised'} · {formatShortDate(item.created_at)}
                          </p>
                        </div>
                      </div>
                      <PublishBadge published={item.published} />
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </section>
      </div>
    </div>
  )
}