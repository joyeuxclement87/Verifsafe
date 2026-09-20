import { ENQUIRY_STATUS_COLORS, type EnquiryStatus } from '@/types/supabase'

export function StatusBadge({ status }: { status: EnquiryStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${ENQUIRY_STATUS_COLORS[status] ?? ENQUIRY_STATUS_COLORS.new}`}
    >
      {status.replace('_', ' ')}
    </span>
  )
}

export function PublishBadge({ published }: { published: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${
        published
          ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
          : 'border-gray-200 bg-gray-50 text-gray-500'
      }`}
    >
      {published ? 'Published' : 'Draft'}
    </span>
  )
}