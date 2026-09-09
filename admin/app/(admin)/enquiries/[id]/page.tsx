import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Mail, Phone, Calendar } from 'tabler-icons-react'
import { getEnquiry } from '@/lib/enquiries'
import { formatDate } from '@/lib/format'
import { StatusBadge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { EnquiryEditor } from '@/components/enquiries/EnquiryEditor'
import { DeleteEnquiryButton } from '@/components/enquiries/DeleteEnquiryButton'
import { ENQUIRY_STATUS_LABELS } from '@shared/supabase'

export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  return {
    title: 'Enquiry',
    robots: { index: false, follow: false },
  }
}

export default async function EnquiryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  let enquiry: Awaited<ReturnType<typeof getEnquiry>>
  try {
    enquiry = await getEnquiry(id)
  } catch {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link
          href="/enquiries"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-line bg-white text-ink-soft transition-colors hover:border-ink/30 hover:text-ink"
          aria-label="Back to enquiries"
        >
          <ArrowLeft size={16} />
        </Link>
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-ink">{enquiry.name}</h1>
          <p className="mt-0.5 text-sm text-muted">
            Received {formatDate(enquiry.created_at)} ·{' '}
            {ENQUIRY_STATUS_LABELS[enquiry.status]}
          </p>
        </div>
        <div className="ml-auto hidden sm:block">
          <DeleteEnquiryButton id={enquiry.id} />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_20rem]">
        {/* Message */}
        <Card title="Message">
          <div className="space-y-4">
            <p className="whitespace-pre-wrap text-body text-foreground">{enquiry.message}</p>
          </div>
        </Card>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card title="Contact information">
            <ul className="space-y-3 text-sm">
              <li>
                <p className="text-admin-label mb-1">Service / Equipment</p>
                <p className="font-medium text-ink">{enquiry.service || 'General enquiry'}</p>
              </li>
              <li>
                <p className="text-admin-label mb-1">Phone</p>
                <p className="flex items-center gap-2 font-medium text-ink">
                  <Phone size={15} className="text-brand" />
                  {enquiry.phone ? (
                    <a
                      href={`tel:${enquiry.phone}`}
                      className="hover:text-brand"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {enquiry.phone}
                    </a>
                  ) : (
                    '—'
                  )}
                </p>
              </li>
              <li>
                <p className="text-admin-label mb-1">Email</p>
                <p className="flex items-center gap-2 font-medium text-ink">
                  <Mail size={15} className="text-brand" />
                  {enquiry.email ? (
                    <a href={`mailto:${enquiry.email}`} className="hover:text-brand">
                      {enquiry.email}
                    </a>
                  ) : (
                    '—'
                  )}
                </p>
              </li>
              <li>
                <p className="text-admin-label mb-1">Submitted</p>
                <p className="flex items-center gap-2 font-medium text-ink">
                  <Calendar size={15} className="text-brand" />
                  {formatDate(enquiry.created_at)}
                </p>
              </li>
              <li>
                <p className="text-admin-label mb-1">Current status</p>
                <StatusBadge status={enquiry.status} />
              </li>
            </ul>
          </Card>
        </div>
      </div>

      <Card title="Update status & notes">
        <EnquiryEditor id={enquiry.id} status={enquiry.status} notes={enquiry.notes ?? ''} />
      </Card>

      {/* Mobile delete */}
      <div className="lg:hidden">
        <DeleteEnquiryButton id={enquiry.id} />
      </div>
    </div>
  )
}