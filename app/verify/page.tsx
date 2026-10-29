import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import {
  ArrowRight,
  InfoCircle,
  Mail,
  Qrcode,
  ShieldCheck,
} from 'tabler-icons-react'
import { extractCertificateIdFromInput } from '@/lib/certificates/format'
import { VerificationSearch } from '@/components/certificates/VerificationSearch'
import { site } from '@/lib/site'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Verify a Training Certificate',
  description:
    'Verify the authenticity and current status of any VerifSafe training certificate using its permanent Certificate ID.',
}

export default async function VerifyIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string; certificateId?: string; q?: string }>
}) {
  const params = await searchParams
  const rawQuery = params.id ?? params.certificateId ?? params.q ?? ''
  const extractedId = extractCertificateIdFromInput(rawQuery)

  if (extractedId) {
    redirect(`/verify/${encodeURIComponent(extractedId)}`)
  }

  return (
    <main className="bg-paper">
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,27rem)] lg:items-end">
            <div>
              <div className="mb-2.5 flex items-center gap-2.5">
                <span aria-hidden="true" className="h-px w-6 bg-brand" />
                <span className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                  Credential Register
                </span>
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Certificate verification
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                Confirm that a VerifSafe training certificate is genuine and
                currently valid. Scan the QR code printed on the certificate or
                enter its permanent Certificate ID below.
              </p>
            </div>

            <VerificationSearch />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)]">
          <div className="grid gap-5 sm:grid-cols-2">
            <section className="rounded-lg border border-line bg-white p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <Qrcode size={20} aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-base font-semibold tracking-tight text-ink">
                Scan the printed QR code
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                Every official VerifSafe certificate carries a QR code in the
                bottom-right corner that opens its permanent verification record
                directly.
              </p>
            </section>

            <section className="rounded-lg border border-line bg-white p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                <ShieldCheck size={20} aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-base font-semibold tracking-tight text-ink">
                Live database status
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                Verification checks the live VerifSafe register to report
                whether a credential is <strong>Valid</strong>,{' '}
                <strong>Expired</strong>, <strong>Revoked</strong>, or{' '}
                <strong>Not Found</strong>.
              </p>
            </section>

            <p className="flex items-start gap-2 text-xs leading-relaxed text-muted sm:col-span-2">
              <InfoCircle size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
              Certificate IDs follow the format{' '}
              <code className="rounded border border-line bg-white px-1.5 py-0.5 font-mono text-[11px] text-ink">
                VFS-FA-2026-000001
              </code>
              . Public verification exposes only the fields required to confirm
              the credential.
            </p>
          </div>

          <aside className="rounded-lg border border-line bg-white px-5 py-5">
            <p className="text-[10px] font-semibold tracking-[0.18em] text-muted uppercase">
              Need assistance?
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              If a certificate cannot be verified or you need to confirm a bulk
              training roster, contact VerifSafe directly.
            </p>
            <div className="mt-4 space-y-2.5">
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
