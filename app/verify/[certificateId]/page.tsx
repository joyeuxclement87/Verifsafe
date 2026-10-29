import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Ban,
  Clock,
  InfoCircle,
  Mail,
  ShieldCheck,
  AlertTriangle,
} from 'tabler-icons-react'
import { getCertificateVerification } from '@/lib/certificates/queries'
import {
  certificateVerificationUrl,
  formatCertificateDateLong,
  formatDuration,
} from '@/lib/certificates/format'
import { createQrVector } from '@/lib/certificates/qr'
import type { CertificateVerification } from '@/types/supabase'
import { site } from '@/lib/site'
import { VerificationSearch } from '@/components/certificates/VerificationSearch'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Certificate verification',
  description:
    'Confirm the status of a VerifSafe training certificate using its certificate ID.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
}

type ResultTone = 'valid' | 'expired' | 'revoked' | 'missing' | 'error'

const RESULT_STYLES: Record<
  ResultTone,
  {
    label: string
    iconWrap: string
    icon: typeof ShieldCheck
    accent: string
  }
> = {
  valid: {
    label: 'Valid',
    iconWrap: 'bg-emerald-50 text-emerald-700 ring-emerald-600/15',
    icon: ShieldCheck,
    accent: 'bg-emerald-600',
  },
  expired: {
    label: 'Expired',
    iconWrap: 'bg-amber-50 text-amber-700 ring-amber-600/15',
    icon: Clock,
    accent: 'bg-amber-500',
  },
  revoked: {
    label: 'Revoked',
    iconWrap: 'bg-red-50 text-red-700 ring-red-600/15',
    icon: Ban,
    accent: 'bg-red-600',
  },
  missing: {
    label: 'No record',
    iconWrap: 'bg-neutral text-ink-soft ring-ink/10',
    icon: AlertTriangle,
    accent: 'bg-ink/25',
  },
  error: {
    label: 'Unavailable',
    iconWrap: 'bg-amber-50 text-amber-700 ring-amber-600/15',
    icon: InfoCircle,
    accent: 'bg-amber-500',
  },
}

const RESULT_COPY: Record<
  Exclude<ResultTone, 'error'>,
  { heading: string; description: string; guidance: string }
> = {
  valid: {
    heading: 'This certificate is valid.',
    description:
      'VerifSafe has confirmed this credential in its certificate register. The holder completed the training shown below.',
    guidance:
      'No further action is needed. The certificate remains verifiable for as long as it is not revoked or past its expiry date.',
  },
  expired: {
    heading: 'This certificate has expired.',
    description:
      'The credential is genuine and remains on record, but its validity period has ended.',
    guidance:
      'An expired certificate should not be accepted as current proof of training. The holder may need to repeat or renew the course.',
  },
  revoked: {
    heading: 'This certificate has been revoked.',
    description:
      'This credential was issued by VerifSafe but has since been withdrawn. It is no longer valid proof of training.',
    guidance:
      'Do not accept this certificate. If you believe this is an error, contact VerifSafe using the details below.',
  },
  missing: {
    heading: 'No certificate matches this ID.',
    description:
      'We could not find a VerifSafe certificate with that identifier. Check the ID exactly as it appears on the document.',
    guidance:
      'Certificate IDs look like VFS-FA-2026-000001. If the ID was copied by hand, a single character can prevent a match.',
  },
}

const ERROR_COPY = {
  heading: 'Verification is temporarily unavailable.',
  description:
    'We could not reach the certificate register just now. The certificate itself may still be genuine — please try again shortly.',
  guidance:
    'If you are checking a certificate at the point of use, contact VerifSafe directly so the credential can be confirmed manually.',
}

export default async function VerifyCertificatePage({
  params,
}: {
  params: Promise<{ certificateId: string }>
}) {
  const { certificateId } = await params
  // Next already decodes the route segment; decoding again could throw on a
  // malformed request and turn a lookup miss into a 500.
  const normalizedId = certificateId.trim().toUpperCase()

  let verification: CertificateVerification | null = null
  let lookupFailed = false
  try {
    verification = await getCertificateVerification(normalizedId)
  } catch (error) {
    console.error('Public certificate verification failed:', error)
    lookupFailed = true
  }

  const tone: ResultTone = lookupFailed
    ? 'error'
    : verification
      ? verification.status
      : 'missing'
  const style = RESULT_STYLES[tone]
  const copy = tone === 'error' ? ERROR_COPY : RESULT_COPY[tone]
  const Icon = style.icon

  const permanentVerificationUrl = verification
    ? certificateVerificationUrl(verification.certificate_number)
    : null
  const qr = permanentVerificationUrl ? createQrVector(permanentVerificationUrl) : null

  return (
    <main className="bg-paper">
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,27rem)] lg:items-end">
            <div>
              <Link
                href="/"
                className="mb-6 inline-flex items-center gap-1.5 text-xs font-semibold text-muted transition-colors hover:text-ink"
              >
                <ArrowLeft size={13} />
                VerifSafe
              </Link>
              <div className="mb-2.5 flex items-center gap-2.5">
                <span aria-hidden="true" className="h-px w-6 bg-brand" />
                <span className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                  Credential verification
                </span>
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Certificate verification
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                Confirm that a VerifSafe training certificate is genuine and
                currently valid. Every certificate carries a unique ID and a QR
                code that opens this record.
              </p>
            </div>

            <VerificationSearch defaultValue={normalizedId} />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 lg:py-12">
        <article
          aria-labelledby="verification-heading"
          className="relative overflow-hidden rounded-lg border border-line bg-white"
        >
          <span
            aria-hidden="true"
            className={`absolute inset-y-0 left-0 w-1 ${style.accent}`}
          />
          <div className="border-b border-line px-6 py-6 sm:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <span
                  className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full ring-1 ${style.iconWrap}`}
                >
                  <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.18em] text-muted uppercase">
                    Verification result
                  </p>
                  <h2
                    id="verification-heading"
                    className="mt-1 text-xl font-semibold tracking-tight text-ink sm:text-2xl"
                  >
                    {copy.heading}
                  </h2>
                </div>
              </div>
              <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border border-line bg-paper px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-ink-soft uppercase">
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 rounded-full ${style.accent}`}
                />
                {style.label}
              </span>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink-soft">
              {copy.description}
            </p>
          </div>

          {verification ? (
            <>
              <dl className="grid sm:grid-cols-2">
                <div className="border-b border-line px-6 py-5 sm:border-r sm:px-8">
                  <dt className="text-[10px] font-semibold tracking-[0.14em] text-muted uppercase">
                    Awarded to
                  </dt>
                  <dd className="mt-1.5 text-lg font-semibold tracking-tight text-ink">
                    {verification.recipient_name}
                  </dd>
                </div>
                <div className="border-b border-line px-6 py-5 sm:px-8">
                  <dt className="text-[10px] font-semibold tracking-[0.14em] text-muted uppercase">
                    Certificate ID
                  </dt>
                  <dd className="mt-1.5 font-mono text-sm tracking-tight text-ink">
                    {verification.certificate_number}
                  </dd>
                </div>
                <div className="border-b border-line px-6 py-5 sm:border-r sm:px-8">
                  <dt className="text-[10px] font-semibold tracking-[0.14em] text-muted uppercase">
                    Training course
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-ink">
                    {verification.course_name}
                  </dd>
                </div>
                <div className="border-b border-line px-6 py-5 sm:px-8">
                  <dt className="text-[10px] font-semibold tracking-[0.14em] text-muted uppercase">
                    Training details
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-ink">
                    {formatCertificateDateLong(verification.training_date)}
                    {verification.duration_value && verification.duration_unit
                      ? ` · ${formatDuration(verification.duration_value, verification.duration_unit)}`
                      : ''}
                  </dd>
                </div>
                <div className="border-b border-line px-6 py-5 sm:border-b-0 sm:border-r sm:px-8">
                  <dt className="text-[10px] font-semibold tracking-[0.14em] text-muted uppercase">
                    Issue date
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-ink">
                    {formatCertificateDateLong(verification.issue_date)}
                  </dd>
                </div>
                <div className="px-6 py-5 sm:px-8">
                  <dt className="text-[10px] font-semibold tracking-[0.14em] text-muted uppercase">
                    Expiry date
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium text-ink">
                    {verification.expiry_date
                      ? formatCertificateDateLong(verification.expiry_date)
                      : 'No expiry'}
                  </dd>
                </div>
              </dl>

              {qr && permanentVerificationUrl && (
                <div className="flex flex-col gap-4 border-t border-line bg-paper px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold tracking-[0.14em] text-muted uppercase">
                      Permanent verification URL
                    </p>
                    <p className="mt-1 truncate font-mono text-xs text-ink-soft">
                      {permanentVerificationUrl}
                    </p>
                  </div>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded border border-line bg-white p-1.5">
                    <svg
                      viewBox={`0 0 ${qr.size} ${qr.size}`}
                      className="h-full w-full text-ink"
                      role="img"
                      aria-label={`Verification QR code for ${verification.certificate_number}`}
                    >
                      <path d={qr.path} fill="currentColor" />
                    </svg>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="px-6 py-6 sm:px-8">
              <p className="max-w-2xl text-sm leading-relaxed text-muted">
                {lookupFailed
                  ? 'No record could be retrieved. Nothing you did caused this.'
                  : 'No public certificate record exists for the ID shown below.'}
              </p>
              <p className="mt-3 inline-flex rounded border border-line bg-paper px-3 py-1.5 font-mono text-sm tracking-tight text-ink-soft">
                {normalizedId || 'No ID entered'}
              </p>
            </div>
          )}
        </article>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)]">
          <section aria-labelledby="guidance-heading">
            <h2
              id="guidance-heading"
              className="text-[10px] font-semibold tracking-[0.18em] text-muted uppercase"
            >
              What this means
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
              {copy.guidance}
            </p>
            <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-muted">
              <InfoCircle size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
              This page shows only the details needed to confirm the credential.
              It does not expose private training records or administrative notes.
            </p>
          </section>

          <aside className="rounded-lg border border-line bg-white px-5 py-4">
            <p className="text-[10px] font-semibold tracking-[0.18em] text-muted uppercase">
              Need help?
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              If a certificate cannot be verified, contact VerifSafe before
              accepting or rejecting it.
            </p>
            <div className="mt-3 space-y-2.5">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 text-xs font-semibold text-ink transition-colors hover:text-brand"
              >
                <Mail size={14} aria-hidden="true" />
                {site.email}
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-1 text-xs font-semibold text-brand transition-colors hover:text-brand-dark"
              >
                Contact VerifSafe
                <ArrowRight size={12} />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
