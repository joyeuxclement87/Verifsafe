'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState } from 'react'
import { Search, X } from 'tabler-icons-react'
import { ENQUIRY_STATUS_LABELS } from '@/types/supabase'

const statusOptions = [
  { value: 'all', label: 'All' },
  ...Object.entries(ENQUIRY_STATUS_LABELS).map(([value, label]) => ({
    value,
    label,
  })),
]

export function EnquiryFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('q') ?? '')
  const activeStatus = searchParams.get('status') ?? 'all'

  const updateParams = useCallback(
    (patch: Record<string, string>) => {
      const params = new URLSearchParams(searchParams.toString())
      Object.entries(patch).forEach(([key, value]) => {
        if (value && value !== 'all') {
          params.set(key, value)
        } else {
          params.delete(key)
        }
      })
      const query = params.toString()
      router.push(query ? `/admin/enquiries?${query}` : '/admin/enquiries')
    },
    [router, searchParams]
  )

  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      {/* Status filter chips — consistent with public gallery filter chips */}
      <div className="flex flex-wrap items-center gap-1.5" role="group" aria-label="Filter by status">
        {statusOptions.map((option) => {
          const isActive = activeStatus === option.value
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => updateParams({ status: option.value })}
              className={`rounded-lg border px-3.5 py-1.5 text-xs font-semibold tracking-[0.02em] transition-all duration-150 ${
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

      {/* Search bar */}
      <form
        className="flex items-center gap-2 sm:w-80 lg:w-96"
        onSubmit={(e) => {
          e.preventDefault()
          updateParams({ q: search })
        }}
      >
        <label className="relative flex-1">
          <span className="sr-only">Search enquiries</span>
          <Search
            size={15}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name, phone, email, service…"
            className="h-9 w-full rounded-lg border border-line bg-white pl-9 pr-8 text-xs text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/10"
          />
          {search && (
            <button
              type="button"
              onClick={() => {
                setSearch('')
                updateParams({ q: '' })
              }}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
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
  )
}