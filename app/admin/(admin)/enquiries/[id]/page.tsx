import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Mail, Phone, Calendar } from 'tabler-icons-react'
import { getEnquiry } from '@/lib/admin/enquiries'
import { formatDate } from '@/lib/admin/format'
import { StatusBadge } from '@/components/admin/ui/Badge'
import { Card } from '@/components/admin/ui/Card'
import { EnquiryEditor } from '@/components/admin/enquiries/EnquiryEditor'
import { DeleteEnquiryButton } from '@/components/admin/enquiries/DeleteEnquiryButton'

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
      <header className="flex flex-wrap items-start justify-between gap-4 border-b border-line pb-6">
        <div className="flex items-start gap-3.5">
          <Link
            href="/admin/enquiries"
            className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-white text-ink-soft transition-colors hover:border-ink/30 hover:text-ink"
            aria-label="Back to enquiries"
          >
            <ArrowLeft size={16} />
          </Link>
          <div>
            <div className="mb-1.5 flex items-center gap-2">
              <span aria-hidden="true" className="h-px w-5 bg-brand" />
              <span className="text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
                Enquiry Record
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-semibold tracking-tight text-ink">
                {enquiry.name}
              </h1>
              <StatusBadge status={enquiry.status} />
            </div>
            <p className="mt-1 text-xs text-muted">
              Received {formatDate(enquiry.created_at)}
            </p>
          </div>
        </div>

        <div className="hidden sm:block">
          <DeleteEnquiryButton id={enquiry.id} />
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1fr_21rem]">
        <div className="space-y-6">
          {/* Message */}
          <Card title="Customer message" description="Submitted via the website contact form.">
            <p className="whitespace-pre-wrap text-admin-body text-ink">{enquiry.message}</p>
          </Card>

          {/* Status & notes */}
          <Card
            title="Workflow & internal notes"
            description="Track follow-up progress. Notes are private to VerifSafe staff."
          >
            <EnquiryEditor
              id={enquiry.id}
              status={enquiry.status}
              notes={enquiry.notes ?? ''}
            />
          </Card>
        </div>

        {/* Contact details sidebar */}
        <div className="space-y-6">
          <Card title="Contact details">
            <ul className="divide-y divide-line text-sm">
              <li className="pb-3.5">
                <p className="text-admin-label mb-1">Service / Equipment</p>
                <p className="font-semibold text-ink">
                  {enquiry.service || 'General enquiry'}
                </p>
              </li>
              <li className="py-3.5">
                <p className="text-admin-label mb-1">Phone</p>
                <p className="flex items-center gap-2 font-medium text-ink">
                  <Phone size={15} className="shrink-0 text-brand" />
                  {enquiry.phone ? (
                    <a
                      href={`tel:${enquiry.phone}`}
                      className="transition-colors hover:text-brand"
                    >
                      {enquiry.phone}
                    </a>
                  ) : (
                    <span className="text-muted">Not provided</span>
                  )}
                </p>
              </li>
              <li className="py-3.5">
                <p className="text-admin-label mb-1">Email</p>
                <p className="flex items-center gap-2 font-medium text-ink">
                  <Mail size={15} className="shrink-0 text-brand" />
                  {enquiry.email ? (
                    <a
                      href={`mailto:${enquiry.email}`}
                      className="truncate transition-colors hover:text-brand"
                    >
                      {enquiry.email}
                    </a>
                  ) : (
                    <span className="text-muted">Not provided</span>
                  )}
                </p>
              </li>
              <li className="pt-3.5">
                <p className="text-admin-label mb-1">Submitted</p>
                <p className="flex items-center gap-2 font-medium text-ink">
                  <Calendar size={15} className="shrink-0 text-brand" />
                  {formatDate(enquiry.created_at)}
                </p>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Mobile delete */}
      <div className="sm:hidden">
        <DeleteEnquiryButton id={enquiry.id} />
      </div>
    </div>
  )
}