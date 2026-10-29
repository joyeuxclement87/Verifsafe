import Link from 'next/link'
import { ArrowRight } from 'tabler-icons-react'
import { getEnquiries } from '@/lib/admin/enquiries'
import { formatShortDate } from '@/lib/admin/format'
import { StatusBadge } from '@/components/admin/ui/Badge'
import { EmptyState } from '@/components/admin/ui/EmptyState'
import { EnquiryFilters } from '@/components/admin/enquiries/EnquiryFilters'

export const dynamic = 'force-dynamic'

export default async function EnquiriesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; status?: string }>
}) {
  const params = await searchParams
  const enquiries = await getEnquiries({
    search: params.q,
    status: params.status,
  })

  const hasFilters = Boolean(params.q || (params.status && params.status !== 'all'))

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-6 bg-brand" />
            <span className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
              Customer Inbox
            </span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]">
            Enquiries
          </h1>
          <p className="mt-1 text-sm text-muted">
            Quote and contact requests submitted through the public website.
          </p>
        </div>
        <p className="font-mono text-xs text-muted">
          {enquiries.length} {enquiries.length === 1 ? 'record' : 'records'}
        </p>
      </header>

      <EnquiryFilters />

      {enquiries.length === 0 ? (
        <EmptyState
          title={hasFilters ? 'No enquiries match your filters' : 'No enquiries yet'}
          description={
            hasFilters
              ? 'Try clearing your search query or switching the status filter.'
              : 'Enquiries submitted from the website contact form will appear here.'
          }
        />
      ) : (
        <div className="overflow-hidden rounded-lg border border-line bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead>
                <tr className="border-b border-line bg-paper text-admin-label">
                  <th className="px-5 py-3.5">Client</th>
                  <th className="px-5 py-3.5">Contact</th>
                  <th className="px-5 py-3.5">Service / Equipment</th>
                  <th className="px-5 py-3.5">Status</th>
                  <th className="px-5 py-3.5">Received</th>
                  <th className="px-5 py-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {enquiries.map((enquiry) => (
                  <tr
                    key={enquiry.id}
                    className="group transition-colors hover:bg-paper"
                  >
                    <td className="px-5 py-4">
                      <Link
                        href={`/admin/enquiries/${enquiry.id}`}
                        className="font-semibold text-ink transition-colors group-hover:text-brand"
                      >
                        {enquiry.name}
                      </Link>
                      {enquiry.message && (
                        <p className="mt-0.5 max-w-xs truncate text-xs text-muted">
                          {enquiry.message}
                        </p>
                      )}
                    </td>
                    <td className="px-5 py-4 text-xs text-ink-soft">
                      {enquiry.phone && <p className="font-medium text-ink">{enquiry.phone}</p>}
                      {enquiry.email && <p className="truncate text-muted">{enquiry.email}</p>}
                      {!enquiry.phone && !enquiry.email && <span className="text-muted">—</span>}
                    </td>
                    <td className="px-5 py-4 text-ink-soft">
                      {enquiry.service || <span className="text-muted">General</span>}
                    </td>
                    <td className="px-5 py-4">
                      <StatusBadge status={enquiry.status} />
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-xs text-muted">
                      {formatShortDate(enquiry.created_at)}
                    </td>
                    <td className="px-5 py-4 text-right">
                      <Link
                        href={`/admin/enquiries/${enquiry.id}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-ink-soft transition-colors group-hover:text-brand"
                      >
                        <span>Review</span>
                        <ArrowRight size={13} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}