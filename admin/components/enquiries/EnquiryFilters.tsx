'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState } from 'react'
import { Search } from 'tabler-icons-react'
import { ENQUIRY_STATUS_LABELS } from '@shared/supabase'

const statusOptions = [
  { value: 'all', label: 'All statuses' },
  ...Object.entries(ENQUIRY_STATUS_LABELS).map(([value, label]) => ({
    value,
    label,
  })),
]

export function EnquiryFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('q') ?? '')

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
      router.push(`/enquiries?${params.toString()}`)
    },
    [router, searchParams]
  )

  return (
    <form
      className="flex flex-col gap-3 sm:flex-row sm:items-center"
      onSubmit={(e) => {
        e.preventDefault()
        updateParams({ q: search })
      }}
    >
      <label className="relative flex-1">
        <span className="sr-only">Search enquiries</span>
        <Search
          size={16}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
        />
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, email, phone or service…"
          className="h-9 w-full rounded-md border border-line bg-white pl-9 pr-3 text-sm placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/10"
        />
      </label>

      <select
        value={searchParams.get('status') ?? 'all'}
        onChange={(e) => updateParams({ status: e.target.value })
        }
        className="h-9 rounded-md border border-line bg-white px-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/10"
        aria-label="Filter by status"
      >
        {statusOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="h-9 rounded-md bg-ink px-4 text-sm font-medium text-white transition-colors hover:bg-surface-dark"
      >
        Search
      </button>
    </form>
  )
}