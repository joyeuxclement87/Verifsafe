import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Plus } from 'tabler-icons-react'
import { getStatusCounts, getEnquiries } from '@/lib/admin/enquiries'
import { getGalleryItems, GALLERY_BUCKET } from '@/lib/admin/gallery'
import { getRecentCertificates, getCertificateStats } from '@/lib/certificates/queries'
import { formatCertificateDateLong } from '@/lib/certificates/format'
import { getPublicStorageUrl } from '@/lib/supabase/storage'
import { formatShortDate } from '@/lib/admin/format'
import {
  StatusBadge,
  PublishBadge,
  CertificateStatusBadge,
} from '@/components/admin/ui/Badge'
import { Card } from '@/components/admin/ui/Card'
import { EmptyState } from '@/components/admin/ui/EmptyState'
import Button from '@/components/admin/ui/Button'
import { requireAdmin } from '@/lib/admin/auth'

export const dynamic = 'force-dynamic'

function SectionHeader({
  eyebrow,
  title,
  href,
  linkLabel,
}: {
  eyebrow: string
  title: string
  href: string
  linkLabel: string
}) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        <div className="mb-1.5 flex items-center gap-2">
          <span aria-hidden="true" className="h-px w-5 bg-brand" />
          <span className="text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
            {eyebrow}
          </span>
        </div>
        <h2 className="text-admin-title">{title}</h2>
      </div>
      <Link
        href={href}
        className="group inline-flex items-center gap-1 text-xs font-semibold text-ink-soft transition-colors hover:text-brand"
      >
        <span>{linkLabel}</span>
        <ArrowRight
          size={13}
          className="transition-transform duration-150 group-hover:translate-x-0.5"
        />
      </Link>
    </div>
  )
}

export default async function DashboardPage() {
  await requireAdmin()
  const [
    { counts, total, hasAny },
    recentEnquiries,
    recentGallery,
    recentCertificates,
    certificateStats,
  ] = await Promise.all([
    getStatusCounts(),
    getEnquiries({ limit: 5 }),
    getGalleryItems(),
    getRecentCertificates(5),
    getCertificateStats(),
  ])

  const publishedCount = recentGallery.filter((item) => item.published).length

  const pipelineMetrics = [
    {
      label: 'Total enquiries',
      value: total,
      href: '/admin/enquiries',
      accent: false,
      meta: `${counts.in_progress + counts.contacted} active`,
    },
    {
      label: 'New / unread',
      value: counts.new,
      href: '/admin/enquiries?status=new',
      accent: counts.new > 0,
      meta: counts.new > 0 ? 'Needs attention' : 'Inbox clear',
    },
    {
      label: 'Issued certificates',
      value: certificateStats.total,
      href: '/admin/certificates',
      accent: false,
      meta: `${certificateStats.active} valid · ${certificateStats.thisMonth} this month`,
    },
    {
      label: 'Published projects',
      value: publishedCount,
      href: '/admin/gallery',
      accent: false,
      meta: `${recentGallery.length} total in gallery`,
    },
  ]

  return (
    <div className="space-y-10">
      {/* Page Header */}
      <header className="flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-6 bg-brand" />
            <span className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
              Operations Overview
            </span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-muted">
            Monitor incoming customer quote requests and manage public gallery projects.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Button variant="secondary" href="/admin/gallery/new">
            <Plus size={15} />
            New project
          </Button>
          <Button href="/admin/certificates/new">
            <Plus size={15} />
            Issue certificate
          </Button>
        </div>
      </header>

      {/* Unified Pipeline Strip (replaces 4 detached stat cards) */}
      <section aria-label="Activity summary">
        <div className="grid grid-cols-2 divide-y divide-line overflow-hidden rounded-lg border border-line bg-white sm:divide-y-0 sm:divide-x lg:grid-cols-4">
          {pipelineMetrics.map((metric) => (
            <Link
              key={metric.label}
              href={metric.href}
              className="group relative flex flex-col justify-between p-5 transition-colors hover:bg-paper"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-admin-label">{metric.label}</span>
                {metric.accent && (
                  <span className="h-2 w-2 rounded-full bg-brand" aria-hidden="true" />
                )}
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-2">
                <p
                  className={`text-3xl font-semibold tracking-tight ${
                    metric.accent
                      ? 'text-brand'
                      : metric.value > 0
                        ? 'text-ink'
                        : 'text-muted/60'
                  }`}
                >
                  {metric.value}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-muted transition-colors group-hover:text-ink">
                  Open
                  <ArrowRight
                    size={12}
                    className="transition-transform duration-150 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
              <p className="mt-1.5 text-xs text-muted">{metric.meta}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Recent enquiries */}
        <section>
          <SectionHeader
            eyebrow="Inbox"
            title="Recent enquiries"
            href="/admin/enquiries"
            linkLabel="View all"
          />
          {!hasAny || recentEnquiries.length === 0 ? (
            <EmptyState
              title="No enquiries received yet"
              description="Quote requests submitted through the website contact form will appear here."
            />
          ) : (
            <Card noPadding className="overflow-hidden">
              <ul className="divide-y divide-line">
                {recentEnquiries.map((enquiry) => (
                  <li key={enquiry.id}>
                    <Link
                      href={`/admin/enquiries/${enquiry.id}`}
                      className="group flex items-center justify-between gap-4 px-5 py-3.5 transition-colors hover:bg-paper"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-ink transition-colors group-hover:text-brand">
                          {enquiry.name}
                        </p>
                        <p className="mt-0.5 truncate text-xs text-muted">
                          {enquiry.service || 'General enquiry'} ·{' '}
                          {formatShortDate(enquiry.created_at)}
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
          <SectionHeader
            eyebrow="Portfolio"
            title="Recent gallery uploads"
            href="/admin/gallery"
            linkLabel="Manage gallery"
          />
          {recentGallery.length === 0 ? (
            <EmptyState
              title="No gallery projects yet"
              description="Upload and publish your first project to showcase it on the public gallery."
              action={<Button href="/admin/gallery/new">Add project</Button>}
            />
          ) : (
            <Card noPadding className="overflow-hidden">
              <ul className="divide-y divide-line">
                {recentGallery.slice(0, 6).map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/admin/gallery/${item.id}`}
                      className="group flex items-center justify-between gap-4 px-5 py-3 transition-colors hover:bg-paper"
                    >
                      <div className="flex min-w-0 items-center gap-3.5">
                        <div className="relative h-10 w-12 shrink-0 overflow-hidden rounded border border-line bg-neutral">
                          <Image
                            src={getPublicStorageUrl(GALLERY_BUCKET, item.image_path)}
                            alt={item.alt_text || item.title}
                            width={96}
                            height={72}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-ink transition-colors group-hover:text-brand">
                            {item.title}
                          </p>
                          <p className="mt-0.5 truncate text-xs text-muted">
                            {item.category || 'Uncategorised'} ·{' '}
                            {formatShortDate(item.created_at)}
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

      {/* Recent certificates */}
      <section>
        <SectionHeader
          eyebrow="Credential Register"
          title="Recent certificates"
          href="/admin/certificates"
          linkLabel="View register"
        />
        {recentCertificates.length === 0 ? (
          <EmptyState
            title="No certificates issued yet"
            description="Issue a training certificate to generate a permanent ID, QR verification link and downloadable PDF."
            action={<Button href="/admin/certificates/new">Issue certificate</Button>}
          />
        ) : (
          <Card noPadding className="overflow-hidden">
            <ul className="divide-y divide-line">
              {recentCertificates.map((certificate) => (
                <li key={certificate.id}>
                  <Link
                    href={`/admin/certificates/${certificate.id}`}
                    className="group flex items-center justify-between gap-4 px-5 py-3.5 transition-colors hover:bg-paper"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2.5">
                        <p className="truncate text-sm font-semibold text-ink transition-colors group-hover:text-brand">
                          {certificate.recipient_name}
                        </p>
                        <span className="font-mono text-[11px] text-muted">
                          {certificate.certificate_number}
                        </span>
                      </div>
                      <p className="mt-0.5 truncate text-xs text-muted">
                        {certificate.course_name} · Issued{' '}
                        {formatCertificateDateLong(certificate.issue_date)}
                      </p>
                    </div>
                    <CertificateStatusBadge
                      status={certificate.status}
                      expiryDate={certificate.expiry_date}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </Card>
        )}
      </section>
    </div>
  )
}