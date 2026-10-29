import {
  ENQUIRY_STATUS_COLORS,
  ENQUIRY_STATUS_LABELS,
  type CertificateStatus,
  type EnquiryStatus,
} from '@/types/supabase'
import {
  CERTIFICATE_EFFECTIVE_STATUS_COLORS,
  CERTIFICATE_EFFECTIVE_STATUS_LABELS,
  getCertificateEffectiveStatus,
} from '@/lib/certificates/format'

const statusDotColors: Record<EnquiryStatus, string> = {
  new: 'bg-blue-600',
  contacted: 'bg-amber-500',
  in_progress: 'bg-purple-600',
  completed: 'bg-emerald-600',
  archived: 'bg-gray-400',
}

export function StatusBadge({ status }: { status: EnquiryStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap ${
        ENQUIRY_STATUS_COLORS[status] ?? ENQUIRY_STATUS_COLORS.new
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${statusDotColors[status] ?? statusDotColors.new}`}
      />
      {ENQUIRY_STATUS_LABELS[status] ?? status.replace('_', ' ')}
    </span>
  )
}

export function PublishBadge({ published }: { published: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap ${
        published
          ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
          : 'border-line bg-neutral text-ink-soft'
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${
          published ? 'bg-emerald-600' : 'bg-gray-400'
        }`}
      />
      {published ? 'Published' : 'Draft'}
    </span>
  )
}

const certificateDotColors = {
  valid: 'bg-emerald-600',
  expired: 'bg-amber-500',
  revoked: 'bg-red-600',
} as const

export function CertificateStatusBadge({
  status,
  expiryDate,
}: {
  status: CertificateStatus
  expiryDate: string | null
}) {
  const effective = getCertificateEffectiveStatus({
    status,
    expiry_date: expiryDate,
  })

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap ${
        CERTIFICATE_EFFECTIVE_STATUS_COLORS[effective]
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${certificateDotColors[effective]}`}
      />
      {CERTIFICATE_EFFECTIVE_STATUS_LABELS[effective]}
    </span>
  )
}