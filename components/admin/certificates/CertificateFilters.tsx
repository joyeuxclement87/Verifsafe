'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState } from 'react'
import { Calendar, Search, X } from 'tabler-icons-react'

const statusOptions = [
  { value: 'all', label: 'All' },
  { value: 'valid', label: 'Valid' },
  { value: 'expired', label: 'Expired' },
  { value: 'revoked', label: 'Revoked' },
]

export function CertificateFilters({
  courses,
}: {
  /** Course names actually present in the register, so filters never mislead. */
  courses: string[]
}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('q') ?? '')
  const [rangeOpen, setRangeOpen] = useState(
    Boolean(searchParams.get('from') || searchParams.get('to'))
  )
  const activeStatus = searchParams.get('status') ?? 'all'
  const activeCourse = searchParams.get('course') ?? 'all'
  const from = searchParams.get('from') ?? ''
  const to = searchParams.get('to') ?? ''

  const updateParams = useCallback(
    (patch: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString())
      Object.entries(patch).forEach(([key, value]) => {
        if (value && value !== 'all') params.set(key, value)
        else params.delete(key)
      })
      params.delete('page')
      const query = params.toString()
      router.push(query ? `/admin/certificates?${query}` : '/admin/certificates')
    },
    [router, searchParams]
  )

  const hasFilters =
    Boolean(searchParams.get('q')) ||
    activeStatus !== 'all' ||
    activeCourse !== 'all' ||
    Boolean(from || to)

  return (
    <div className="overflow-hidden rounded-lg border border-line bg-white">
      <div className="flex flex-col gap-3 px-4 py-3.5 lg:flex-row lg:items-center lg:justify-between">
        <div
          className="flex flex-wrap items-center gap-1.5"
          role="group"
          aria-label="Filter certificates by status"
        >
          {statusOptions.map((option) => {
            const isActive = activeStatus === option.value
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => updateParams({ status: option.value })}
                aria-pressed={isActive}
                className={`rounded-md border px-3 py-1.5 text-xs font-semibold transition-colors duration-150 ${
                  isActive
                    ? 'border-ink bg-ink text-white'
                    : 'border-line bg-white text-ink-soft hover:border-ink/30 hover:text-ink'
                }`}
              >
                {option.label}
              </button>
            )
          })}
        </div>

        <form
          className="flex items-center gap-2 lg:w-[26rem]"
          onSubmit={(event) => {
            event.preventDefault()
            updateParams({ q: search })
          }}
        >
          <label className="relative flex-1">
            <span className="sr-only">Search certificates</span>
            <Search
              size={15}
              className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-muted"
            />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Name, ID, course or trainer…"
              className="h-9 w-full rounded-lg border border-line bg-white pr-8 pl-9 text-xs text-ink placeholder:text-muted focus:border-brand focus:ring-2 focus:ring-brand/10 focus:outline-none"
            />
            {search && (
              <button
                type="button"
                onClick={() => {
                  setSearch('')
                  updateParams({ q: '' })
                }}
                className="absolute top-1/2 right-2.5 -translate-y-1/2 text-muted hover:text-ink"
                aria-label="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </label>
          <button
            type="submit"
            className="h-9 shrink-0 rounded-lg bg-ink px-3.5 text-xs font-semibold text-white transition-colors hover:bg-surface-dark"
          >
            Search
          </button>
        </form>
      </div>

      <div className="flex flex-wrap items-center gap-2 border-t border-line bg-paper/60 px-4 py-2.5">
        <label className="flex items-center gap-2 text-xs text-muted">
          <span className="font-medium">Course</span>
          <select
            value={activeCourse}
            onChange={(event) => updateParams({ course: event.target.value })}
            className="h-8 rounded-md border border-line bg-white px-2.5 text-xs text-ink focus:border-brand focus:ring-2 focus:ring-brand/10 focus:outline-none"
          >
            <option value="all">All courses</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </label>

        <button
          type="button"
          onClick={() => setRangeOpen((open) => !open)}
          aria-expanded={rangeOpen}
          className={`inline-flex h-8 items-center gap-1.5 rounded-md border px-2.5 text-xs font-semibold transition-colors ${
            from || to
              ? 'border-brand/30 bg-brand-light text-brand'
              : 'border-line bg-white text-ink-soft hover:border-ink/30 hover:text-ink'
          }`}
        >
          <Calendar size={13} />
          {from || to ? 'Date range set' : 'Issue date'}
        </button>

        {rangeOpen && (
          <div className="flex flex-wrap items-center gap-2">
            <label className="flex items-center gap-1.5 text-xs text-muted">
              <span className="sr-only">Issued from</span>
              <input
                type="date"
                value={from}
                onChange={(event) => updateParams({ from: event.target.value })}
                className="h-8 rounded-md border border-line bg-white px-2 text-xs text-ink focus:border-brand focus:outline-none"
              />
            </label>
            <span className="text-xs text-muted">to</span>
            <label className="flex items-center gap-1.5 text-xs text-muted">
              <span className="sr-only">Issued to</span>
              <input
                type="date"
                value={to}
                onChange={(event) => updateParams({ to: event.target.value })}
                className="h-8 rounded-md border border-line bg-white px-2 text-xs text-ink focus:border-brand focus:outline-none"
              />
            </label>
          </div>
        )}

        {hasFilters && (
          <button
            type="button"
            onClick={() => {
              setSearch('')
              router.push('/admin/certificates')
            }}
            className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-muted transition-colors hover:text-brand"
          >
            <X size={12} />
            Clear filters
          </button>
        )}
      </div>
    </div>
  )
}
