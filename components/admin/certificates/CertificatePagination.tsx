import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'tabler-icons-react'

/**
 * Server-rendered pagination. Preserves active filters so paging never
 * silently resets the admin's search context.
 */
export function CertificatePagination({
  page,
  pageCount,
  total,
  params,
}: {
  page: number
  pageCount: number
  total: number
  params: Record<string, string | undefined>
}) {
  const hrefFor = (nextPage: number) => {
    const search = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      if (value && value !== 'all') search.set(key, value)
    })
    if (nextPage > 1) search.set('page', String(nextPage))
    const query = search.toString()
    return query ? `/admin/certificates?${query}` : '/admin/certificates'
  }

  return (
    <div className="flex flex-col gap-3 border-t border-line px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-xs text-muted">
        Page <span className="font-semibold text-ink-soft">{page}</span> of{' '}
        <span className="font-semibold text-ink-soft">{pageCount}</span>
        <span aria-hidden="true"> · </span>
        {total.toLocaleString('en-US')} {total === 1 ? 'certificate' : 'certificates'}
      </p>

      <nav aria-label="Certificate pages" className="flex items-center gap-1.5">
        {page > 1 ? (
          <Link
            href={hrefFor(page - 1)}
            className="inline-flex h-8 items-center gap-1 rounded-md border border-line bg-white px-2.5 text-xs font-semibold text-ink-soft transition-colors hover:border-ink/30 hover:text-ink"
          >
            <ChevronLeft size={14} />
            Previous
          </Link>
        ) : (
          <span className="inline-flex h-8 items-center gap-1 rounded-md border border-line bg-neutral px-2.5 text-xs font-semibold text-muted/60">
            <ChevronLeft size={14} />
            Previous
          </span>
        )}

        {page < pageCount ? (
          <Link
            href={hrefFor(page + 1)}
            className="inline-flex h-8 items-center gap-1 rounded-md border border-line bg-white px-2.5 text-xs font-semibold text-ink-soft transition-colors hover:border-ink/30 hover:text-ink"
          >
            Next
            <ChevronRight size={14} />
          </Link>
        ) : (
          <span className="inline-flex h-8 items-center gap-1 rounded-md border border-line bg-neutral px-2.5 text-xs font-semibold text-muted/60">
            Next
            <ChevronRight size={14} />
          </span>
        )}
      </nav>
    </div>
  )
}
