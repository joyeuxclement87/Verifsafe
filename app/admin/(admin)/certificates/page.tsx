import Link from 'next/link'
import { redirect } from 'next/navigation'
import {
  ArrowRight,
  Certificate as CertificateIcon,
  Plus,
  ShieldCheck,
  Clock,
  Ban,
} from 'tabler-icons-react'
import { requireAdmin } from '@/lib/admin/auth'
import {
  getCertificates,
  getCertificateStats,
  getSavedTrainingCourses,
} from '@/lib/certificates/queries'
import {
  formatCertificateDateLong,
  formatDuration,
} from '@/lib/certificates/format'
import { CertificateStatusBadge } from '@/components/admin/ui/Badge'
import { EmptyState } from '@/components/admin/ui/EmptyState'
import Button from '@/components/admin/ui/Button'
import { CertificateFilters } from '@/components/admin/certificates/CertificateFilters'
import { CertificatePagination } from '@/components/admin/certificates/CertificatePagination'
import { CERTIFICATE_COURSES } from '@/lib/certificates/constants'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Certificates',
}

const STATUS_VALUES = ['valid', 'expired', 'revoked'] as const

export default async function CertificatesPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  await requireAdmin()
  const raw = await searchParams

  const readParam = (key: string) => {
    const value = raw[key]
    return typeof value === 'string' ? value : undefined
  }

  const search = readParam('q')
  const course = readParam('course')
  const requestedStatus = readParam('status')
  const status = STATUS_VALUES.includes(
    requestedStatus as (typeof STATUS_VALUES)[number]
  )
    ? (requestedStatus as (typeof STATUS_VALUES)[number])
    : undefined
  const from = readParam('from')
  const to = readParam('to')
  const requestedPage = Number.parseInt(readParam('page') ?? '1', 10)
  const page = Number.isFinite(requestedPage) && requestedPage > 0 ? requestedPage : 1

  const [result, stats, savedCourses] = await Promise.all([
    getCertificates({
      search,
      course,
      status,
      issuedFrom: from,
      issuedTo: to,
      page,
    }),
    getCertificateStats(),
    getSavedTrainingCourses(),
  ])

  // A stale or hand-edited page number should land on real records, not an
  // apparently empty register.
  if (result.total > 0 && page > result.pageCount) {
    const lastPage = new URLSearchParams()
    if (search) lastPage.set('q', search)
    if (course) lastPage.set('course', course)
    if (status) lastPage.set('status', status)
    if (from) lastPage.set('from', from)
    if (to) lastPage.set('to', to)
    if (result.pageCount > 1) lastPage.set('page', String(result.pageCount))
    const query = lastPage.toString()
    redirect(query ? `/admin/certificates?${query}` : '/admin/certificates')
  }

  const hasFilters = Boolean(search || course || status || from || to)
  const courseNames = Array.from(
    new Set([
      ...CERTIFICATE_COURSES.map((course) => course.name),
      ...savedCourses.map((course) => course.name),
      ...stats.courses.map((item) => item.courseName),
    ])
  ).sort((a, b) => a.localeCompare(b))

  const summary = [
    {
      label: 'Issued all time',
      value: stats.total,
      meta: 'Permanent register',
      icon: CertificateIcon,
      accent: false,
    },
    {
      label: 'Issued this month',
      value: stats.thisMonth,
      meta: new Intl.DateTimeFormat('en-US', {
        month: 'long',
        year: 'numeric',
      }).format(new Date()),
      icon: Plus,
      accent: stats.thisMonth > 0,
    },
    {
      label: 'Currently valid',
      value: stats.active,
      meta: 'Verification passes',
      icon: ShieldCheck,
      accent: false,
    },
    {
      label: 'Needs attention',
      value: stats.expired + stats.revoked,
      meta: `${stats.expired} expired · ${stats.revoked} revoked`,
      icon: Ban,
      accent: stats.revoked > 0,
    },
  ]

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-6 bg-brand" />
            <span className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
              Credential register
            </span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]">
            Certificates
          </h1>
          <p className="mt-1 max-w-xl text-sm text-muted">
            Issue, verify and reprint training certificates. Every number is
            permanent and every action is recorded.
          </p>
        </div>
        <Button href="/admin/certificates/new" size="lg" className="shrink-0">
          <Plus size={16} />
          Issue certificate
        </Button>
      </header>

      {/* Ledger summary — one surface, separated by rules rather than cards. */}
      <section
        aria-label="Certificate summary"
        className="overflow-hidden rounded-lg border border-line bg-white"
      >
        <dl className="grid grid-cols-2 divide-x divide-y divide-line lg:grid-cols-4 lg:divide-y-0">
          {summary.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="relative px-5 py-5">
                <dt className="flex items-center gap-2 text-admin-label">
                  <Icon
                    size={14}
                    className={item.accent ? 'text-brand' : 'text-muted'}
                    aria-hidden="true"
                  />
                  {item.label}
                </dt>
                <dd className="mt-2 flex items-baseline gap-2">
                  <span
                    className={`font-mono text-3xl leading-none font-semibold tracking-tight ${
                      item.accent ? 'text-brand' : 'text-ink'
                    }`}
                  >
                    {item.value.toLocaleString('en-US')}
                  </span>
                </dd>
                <dd className="mt-1.5 text-[11px] text-muted">{item.meta}</dd>
                {item.accent && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-0.5 bg-brand"
                  />
                )}
              </div>
            )
          })}
        </dl>
      </section>

      <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-[minmax(0,1fr)_19rem]">
        <div className="space-y-4">
          <CertificateFilters
            key={[search, course, status, from, to].join('|')}
            courses={courseNames}
          />

          {result.total === 0 ? (
            <EmptyState
              title={hasFilters ? 'No certificates match these filters' : 'No certificates issued yet'}
              description={
                hasFilters
                  ? 'Try a different name, certificate ID or course, or clear the filters to see the full register.'
                  : 'Issue the first certificate to create a permanent record, a downloadable PDF and a public verification page.'
              }
              action={
                hasFilters ? (
                  <Button href="/admin/certificates" variant="secondary">
                    Clear filters
                  </Button>
                ) : (
                  <Button href="/admin/certificates/new">
                    <Plus size={15} />
                    Issue certificate
                  </Button>
                )
              }
            />
          ) : (
            <div className="overflow-hidden rounded-lg border border-line bg-white">
              <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-brand"
                  />
                  <h2 className="text-admin-title">Issued certificates</h2>
                </div>
                <p className="font-mono text-[11px] text-muted">
                  {result.total.toLocaleString('en-US')}{' '}
                  {result.total === 1 ? 'record' : 'records'}
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[820px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-line bg-paper text-admin-label">
                      <th scope="col" className="px-4 py-3">
                        Recipient
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Certificate
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Course / trainer
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Issued
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-4 py-3 text-right">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {result.certificates.map((certificate) => {
                      const issued = formatCertificateDateLong(certificate.issue_date)
                      return (
                        <tr
                          key={certificate.id}
                          className="group transition-colors hover:bg-paper/70"
                        >
                          <td className="px-4 py-3.5">
                            <Link
                              href={`/admin/certificates/${certificate.id}`}
                              className="font-semibold text-ink transition-colors group-hover:text-brand"
                            >
                              {certificate.recipient_name}
                            </Link>
                            <p className="mt-0.5 text-[11px] text-muted">
                              {formatDuration(
                                certificate.duration_value,
                                certificate.duration_unit
                              )}{' '}
                              training
                            </p>
                          </td>
                          <td className="px-4 py-3.5">
                            <span className="font-mono text-[11px] tracking-tight text-ink-soft">
                              {certificate.certificate_number}
                            </span>
                          </td>
                          <td className="px-4 py-3.5">
                            <p className="text-xs font-medium text-ink">
                              {certificate.course_name}
                            </p>
                            <p className="mt-0.5 text-[11px] text-muted">
                              {certificate.instructor_name}
                            </p>
                          </td>
                          <td className="px-4 py-3.5">
                            <p className="text-xs whitespace-nowrap text-ink-soft">
                              {issued}
                            </p>
                            {certificate.expiry_date && (
                              <p className="mt-0.5 text-[11px] whitespace-nowrap text-muted">
                                Expires {formatCertificateDateLong(certificate.expiry_date)}
                              </p>
                            )}
                          </td>
                          <td className="px-4 py-3.5">
                            <CertificateStatusBadge
                              status={certificate.status}
                              expiryDate={certificate.expiry_date}
                            />
                          </td>
                          <td className="px-4 py-3.5 text-right">
                            <Link
                              href={`/admin/certificates/${certificate.id}`}
                              className="inline-flex items-center gap-1 text-xs font-semibold text-muted transition-colors group-hover:text-brand"
                              aria-label={`Open certificate ${certificate.certificate_number} for ${certificate.recipient_name}`}
                            >
                              Open
                              <ArrowRight size={13} />
                            </Link>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>

              <CertificatePagination
                page={result.page}
                pageCount={result.pageCount}
                total={result.total}
                params={{ q: search, course, status, from, to }}
              />
            </div>
          )}
        </div>

        <aside className="space-y-4 xl:sticky xl:top-6" aria-label="Register breakdown">
          <section className="overflow-hidden rounded-lg border border-line bg-white">
            <header className="border-b border-line px-4 py-3.5">
              <p className="text-admin-label">By course</p>
              <p className="mt-1 text-xs text-muted">
                {stats.courses.length === 0
                  ? 'No training programmes issued yet.'
                  : 'Click a programme to filter the register.'}
              </p>
            </header>
            {stats.courses.length > 0 ? (
              <ul className="divide-y divide-line">
                {stats.courses.map((item) => {
                  const percent =
                    stats.total > 0 ? Math.round((item.total / stats.total) * 100) : 0
                  const active = course === item.courseName
                  return (
                    <li key={item.courseName}>
                      <Link
                        href={`/admin/certificates?course=${encodeURIComponent(item.courseName)}`}
                        aria-current={active ? 'true' : undefined}
                        className={`block px-4 py-3 transition-colors ${
                          active ? 'bg-brand-light/60' : 'hover:bg-paper'
                        }`}
                      >
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-xs font-semibold text-ink">
                            {item.courseName}
                          </span>
                          <span className="font-mono text-xs text-ink-soft">
                            {item.total}
                          </span>
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <span
                            aria-hidden="true"
                            className="h-1 flex-1 overflow-hidden rounded-full bg-neutral"
                          >
                            <span
                              className={`block h-full rounded-full ${
                                active ? 'bg-brand' : 'bg-ink/25'
                              }`}
                              style={{ width: `${Math.max(percent, 4)}%` }}
                            />
                          </span>
                          <span className="text-[10px] tabular-nums text-muted">
                            {item.valid} valid
                          </span>
                        </div>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <p className="px-4 py-6 text-xs leading-relaxed text-muted">
                Course totals appear here as soon as the first certificate is issued.
              </p>
            )}
          </section>

          <section className="rounded-lg border border-line bg-paper px-4 py-4">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-brand" aria-hidden="true" />
              <p className="text-admin-label">Register rules</p>
            </div>
            <ul className="mt-3 space-y-2.5 text-[11px] leading-relaxed text-muted">
              <li>
                Certificate numbers are generated once and never reused, even
                after revocation.
              </li>
              <li>
                Reprinting a certificate always reproduces its original number
                and issue date.
              </li>
              <li>
                Revoked certificates stay on record and fail public
                verification.
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </div>
  )
}
