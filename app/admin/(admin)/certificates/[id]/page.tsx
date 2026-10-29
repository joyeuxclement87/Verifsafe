import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  Ban,
  Calendar,
  Check,
  Clock,
  Download,
  ExternalLink,
  Eye,
  Pencil,
  Qrcode,
  User,
} from 'tabler-icons-react'
import { requireAdmin } from '@/lib/admin/auth'
import {
  getCertificateById,
  getCertificateEvents,
} from '@/lib/certificates/queries'
import {
  certificateVerificationUrl,
  formatCertificateDateLong,
  formatDuration,
} from '@/lib/certificates/format'
import { CertificateStatusBadge } from '@/components/admin/ui/Badge'
import Button from '@/components/admin/ui/Button'
import { CopyVerificationLink } from '@/components/admin/certificates/CopyVerificationLink'
import { RevokeCertificatePanel } from '@/components/admin/certificates/RevokeCertificatePanel'
import type { CertificateEvent } from '@/types/supabase'

export const dynamic = 'force-dynamic'

const EVENT_COPY: Record<
  CertificateEvent['event_type'],
  { label: string; tone: string }
> = {
  issued: { label: 'Certificate issued', tone: 'bg-emerald-600' },
  updated: { label: 'Details corrected', tone: 'bg-ink/40' },
  revoked: { label: 'Certificate revoked', tone: 'bg-red-600' },
  downloaded: { label: 'PDF downloaded', tone: 'bg-ink/20' },
}

function formatTimestamp(value: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Africa/Kigali',
  }).format(new Date(value))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const certificate = await getCertificateById(id)
  return {
    title: certificate
      ? `${certificate.recipient_name} · ${certificate.certificate_number}`
      : 'Certificate',
  }
}

export default async function CertificateDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>
  searchParams: Promise<{ issued?: string; updated?: string }>
}) {
  await requireAdmin()
  const { id } = await params
  const query = await searchParams
  const [certificate, events] = await Promise.all([
    getCertificateById(id),
    getCertificateEvents(id),
  ])

  if (!certificate) notFound()

  const verificationUrl = certificateVerificationUrl(certificate.certificate_number)
  const pdfHref = `/api/certificates/${certificate.id}/pdf`
  const isRevoked = certificate.status === 'revoked'

  const details = [
    { label: 'Certificate ID', value: certificate.certificate_number, mono: true },
    { label: 'Training course', value: certificate.course_name },
    { label: 'Training date', value: formatCertificateDateLong(certificate.training_date) },
    {
      label: 'Duration',
      value: formatDuration(certificate.duration_value, certificate.duration_unit),
    },
    { label: 'Trainer / instructor', value: certificate.instructor_name },
    { label: 'Issue date', value: formatCertificateDateLong(certificate.issue_date) },
    {
      label: 'Expiry date',
      value: certificate.expiry_date
        ? formatCertificateDateLong(certificate.expiry_date)
        : 'No expiry',
    },
    { label: 'Course code', value: certificate.course_code, mono: true },
  ]

  return (
    <div className="space-y-6">
      <div>
        <Link
          href="/admin/certificates"
          className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft size={13} />
          Certificate register
        </Link>

        {query.issued === '1' && (
          <div
            role="status"
            className="mb-4 flex items-start gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
          >
            <Check size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
            <p>
              Certificate <strong>{certificate.certificate_number}</strong> was
              issued. Download the PDF and share the verification link with the
              recipient.
            </p>
          </div>
        )}

        {query.updated === '1' && (
          <div
            role="status"
            className="mb-4 flex items-start gap-2.5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
          >
            <Check size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
            <p>Certificate details were updated. The number and issue date did not change.</p>
          </div>
        )}

        {isRevoked && (
          <div
            role="alert"
            className="mb-4 flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          >
            <Ban size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
            <p>
              Revoked
              {certificate.revoked_at
                ? ` on ${formatTimestamp(certificate.revoked_at)}`
                : ''}
              . Public verification reports this credential as revoked.
              {certificate.revocation_reason && (
                <span className="mt-1 block text-xs text-red-700/80">
                  Reason: {certificate.revocation_reason}
                </span>
              )}
            </p>
          </div>
        )}
      </div>

      <header className="flex flex-col gap-4 border-b border-line pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-2.5">
            <span className="font-mono text-[11px] tracking-[0.08em] text-muted uppercase">
              {certificate.certificate_number}
            </span>
            <CertificateStatusBadge
              status={certificate.status}
              expiryDate={certificate.expiry_date}
            />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]">
            {certificate.recipient_name}
          </h1>
          <p className="mt-1 text-sm text-muted">
            {certificate.course_name} · issued{' '}
            {formatCertificateDateLong(certificate.issue_date)}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button
            href={`${pdfHref}?disposition=inline`}
            variant="secondary"
            size="md"
            target="_blank"
            rel="noreferrer"
          >
            <Eye size={15} />
            Preview
          </Button>
          <Button href={`${pdfHref}?download=1`} size="md">
            <Download size={15} />
            Download PDF
          </Button>
          {!isRevoked && (
            <Button
              href={`/admin/certificates/${certificate.id}/edit`}
              variant="ghost"
              size="md"
            >
              <Pencil size={14} />
              Edit
            </Button>
          )}
        </div>
      </header>

      <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-[minmax(0,1fr)_25rem]">
        <div className="space-y-6">
          <section className="overflow-hidden rounded-lg border border-line bg-white">
            <header className="flex items-center justify-between gap-4 border-b border-line px-5 py-4">
              <div>
                <p className="text-admin-label">Record details</p>
                <h2 className="mt-1 text-sm font-semibold text-ink">
                  Training & recipient
                </h2>
              </div>
              <User size={18} className="text-muted/60" aria-hidden="true" />
            </header>
            <dl className="grid sm:grid-cols-2">
              {details.map((item, index) => (
                <div
                  key={item.label}
                  className={`border-b border-line px-5 py-4 ${
                    index % 2 === 0 ? 'sm:border-r sm:border-line' : ''
                  } ${index >= details.length - 2 ? 'sm:border-b-0' : ''} ${
                    index === details.length - 1 ? 'border-b-0' : ''
                  }`}
                >
                  <dt className="text-[10px] font-semibold tracking-[0.14em] text-muted uppercase">
                    {item.label}
                  </dt>
                  <dd
                    className={`mt-1.5 text-sm text-ink ${
                      item.mono ? 'font-mono text-[13px] tracking-tight' : 'font-medium'
                    }`}
                  >
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="border-t border-line bg-paper px-5 py-4">
              <dt className="text-[10px] font-semibold tracking-[0.14em] text-muted uppercase">
                Completion statement
              </dt>
              <dd className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink-soft">
                {certificate.description}
              </dd>
            </div>
          </section>

          <section className="overflow-hidden rounded-lg border border-line bg-white">
            <header className="border-b border-line px-5 py-4">
              <p className="text-admin-label">Audit trail</p>
              <h2 className="mt-1 text-sm font-semibold text-ink">
                Recorded actions
              </h2>
            </header>
            {events.length === 0 ? (
              <p className="px-5 py-8 text-sm text-muted">
                No audit events recorded for this certificate yet.
              </p>
            ) : (
              <ol className="divide-y divide-line">
                {events.map((event) => {
                  const copy = EVENT_COPY[event.event_type]
                  return (
                    <li key={event.id} className="flex gap-3.5 px-5 py-4">
                      <span className="relative mt-1.5 flex h-2 w-2 shrink-0">
                        <span
                          className={`h-2 w-2 rounded-full ${copy.tone}`}
                          aria-hidden="true"
                        />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <p className="text-xs font-semibold text-ink">{copy.label}</p>
                          <time
                            dateTime={event.created_at}
                            className="font-mono text-[10px] text-muted"
                          >
                            {formatTimestamp(event.created_at)}
                          </time>
                        </div>
                        {event.actor_email && (
                          <p className="mt-0.5 text-[11px] text-muted">
                            by {event.actor_email}
                          </p>
                        )}
                        {event.reason && (
                          <p className="mt-1.5 rounded border border-line bg-paper px-2.5 py-2 text-[11px] leading-relaxed text-ink-soft">
                            {event.reason}
                          </p>
                        )}
                        {event.event_type === 'updated' &&
                          Object.keys(event.changes ?? {}).length > 0 && (
                            <ul className="mt-1.5 space-y-0.5">
                              {Object.entries(event.changes).map(([field, change]) => {
                                const value = change as {
                                  from?: unknown
                                  to?: unknown
                                }
                                return (
                                  <li
                                    key={field}
                                    className="truncate text-[11px] text-muted"
                                  >
                                    <span className="font-mono text-[10px] text-ink-soft">
                                      {field.replaceAll('_', ' ')}
                                    </span>
                                    {' · '}
                                    {String(value.from ?? '—')} →{' '}
                                    {String(value.to ?? '—')}
                                  </li>
                                )
                              })}
                            </ul>
                          )}
                      </div>
                    </li>
                  )
                })}
              </ol>
            )}
          </section>
        </div>

        <aside className="space-y-4">
          <section className="overflow-hidden rounded-lg border border-line bg-white">
            <header className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
              <div className="flex items-center gap-2">
                <span aria-hidden="true" className="h-px w-4 bg-brand" />
                <p className="text-admin-label">Certificate artwork</p>
              </div>
              <a
                href={`${pdfHref}?disposition=inline`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted transition-colors hover:text-brand"
              >
                Open
                <ExternalLink size={11} />
              </a>
            </header>
            <div className="aspect-[297/210] bg-neutral">
              <iframe
                src={`${pdfHref}?disposition=inline#toolbar=0&navpanes=0&view=FitH`}
                title={`Certificate PDF for ${certificate.recipient_name}`}
                className="h-full w-full"
              />
            </div>
            <p className="border-t border-line px-4 py-3 text-[11px] leading-relaxed text-muted">
              A4 landscape · reprints use the original number and issue date.
            </p>
          </section>

          <section className="rounded-lg border border-line bg-white">
            <header className="flex items-center gap-2 border-b border-line px-4 py-3">
              <Qrcode size={15} className="text-brand" aria-hidden="true" />
              <p className="text-admin-label">Public verification</p>
            </header>
            <div className="px-4 py-4">
              <p className="text-xs leading-relaxed text-muted">
                The QR on the certificate opens this public record. It never
                exposes admin notes or audit data.
              </p>
              <div className="mt-3 flex items-start gap-2">
                <code className="min-w-0 flex-1 truncate rounded border border-line bg-paper px-2 py-1.5 font-mono text-[10px] text-ink-soft">
                  {verificationUrl}
                </code>
                <CopyVerificationLink url={verificationUrl} />
              </div>
              <a
                href={verificationUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-ink-soft transition-colors hover:text-brand"
              >
                Open public page
                <ExternalLink size={12} />
              </a>
            </div>
            <div className="grid grid-cols-2 divide-x divide-line border-t border-line">
              <div className="px-4 py-3">
                <p className="flex items-center gap-1.5 text-[10px] tracking-[0.1em] text-muted uppercase">
                  <Calendar size={11} aria-hidden="true" />
                  Issued
                </p>
                <p className="mt-1 text-xs font-medium text-ink">
                  {formatCertificateDateLong(certificate.issue_date)}
                </p>
              </div>
              <div className="px-4 py-3">
                <p className="flex items-center gap-1.5 text-[10px] tracking-[0.1em] text-muted uppercase">
                  <Clock size={11} aria-hidden="true" />
                  Expiry
                </p>
                <p className="mt-1 text-xs font-medium text-ink">
                  {certificate.expiry_date
                    ? formatCertificateDateLong(certificate.expiry_date)
                    : 'No expiry'}
                </p>
              </div>
            </div>
          </section>

          {!isRevoked && (
            <section className="rounded-lg border border-line bg-white p-4">
              <p className="text-admin-label">Danger zone</p>
              <p className="mt-1.5 mb-3 text-[11px] leading-relaxed text-muted">
                Revocation is permanent. The record remains visible to admins
                and the public page reports the credential as revoked.
              </p>
              <RevokeCertificatePanel
                certificateId={certificate.id}
                certificateNumber={certificate.certificate_number}
              />
            </section>
          )}
        </aside>
      </div>
    </div>
  )
}
