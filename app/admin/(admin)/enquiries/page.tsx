import Link from 'next/link'
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
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-ink">Enquiries</h1>
          <p className="mt-1 text-sm text-muted">
            Quote and contact requests submitted through the public website.
          </p>
        </div>
      </header>

      <EnquiryFilters />

      {enquiries.length === 0 ? (
        <EmptyState
          title={hasFilters ? 'No enquiries match your filters' : 'No inquiries yet'}
          description={
            hasFilters
              ? 'Try adjusting your search or status filter.'
              : 'Enquiries submitted from the website contact form will appear here.'
          }
        />
      ) : (
        <div className="overflow-hidden rounded-lg border border-line bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-line text-admin-label">
                  <th className="px-5 py-3 font-medium">Name</th>
                  <th className="px-5 py-3 font-medium">Phone</th>
                  <th className="px-5 py-3 font-medium">Email</th>
                  <th className="px-5 py-3 font-medium">Service / Equipment</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                  <th className="px-5 py-3 font-medium">Created</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {enquiries.map((enquiry) => (
                  <tr key={enquiry.id} className="transition-colors hover:bg-neutral">
                    <td className="px-5 py-3.5">
                      <Link
                        href={`/admin/enquiries/${enquiry.id}`}
                        className="font-medium text-ink hover:text-brand"
                      >
                        {enquiry.name}
                      </Link>
                    </td>
                    <td className="px-5 py-3.5 text-muted">
                      {enquiry.phone || <span>—</span>}
                    </td>
                    <td className="px-5 py-3.5 text-muted">
                      {enquiry.email || <span>—</span>}
                    </td>
                    <td className="px-5 py-3.5 text-muted">
                      {enquiry.service || <span>—</span>}
                    </td>
                    <td className="px-5 py-3.5">
                      <StatusBadge status={enquiry.status} />
                    </td>
                    <td className="px-5 py-3.5 whitespace-nowrap text-muted">
                      {formatShortDate(enquiry.created_at)}
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