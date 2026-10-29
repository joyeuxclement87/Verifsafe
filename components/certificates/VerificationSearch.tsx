'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Search } from 'tabler-icons-react'
import { extractCertificateIdFromInput } from '@/lib/certificates/format'

/**
 * Public certificate ID lookup. The QR lands directly on a result page, but
 * visitors who were given a printed ID or verification URL can verify it here as well.
 */
export function VerificationSearch({ defaultValue = '' }: { defaultValue?: string }) {
  const router = useRouter()
  const [value, setValue] = useState(defaultValue)
  const [error, setError] = useState<string | null>(null)
  const [pending, setPending] = useState(false)

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const id = extractCertificateIdFromInput(value)
    if (!id) {
      setError('Enter the certificate ID printed on the document.')
      return
    }
    setError(null)
    setPending(true)
    router.push(`/verify/${encodeURIComponent(id)}`)
  }

  return (
    <form onSubmit={submit} className="w-full max-w-xl">
      <label htmlFor="certificate-id" className="sr-only">
        Certificate ID
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="relative flex-1">
          <Search
            size={16}
            className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-muted"
            aria-hidden="true"
          />
          <input
            id="certificate-id"
            name="certificateId"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="VFS-FA-2026-000001"
            autoComplete="off"
            spellCheck={false}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? 'certificate-id-error' : 'certificate-id-hint'}
            className="h-12 w-full rounded-lg border border-line bg-white pr-3 pl-10 font-mono text-sm tracking-wide text-ink uppercase placeholder:font-sans placeholder:tracking-normal placeholder:text-muted/70 focus:border-brand focus:ring-2 focus:ring-brand/10 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-brand px-5 text-sm font-semibold text-white shadow-[0_1px_2px_rgba(17,17,17,0.12)] transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-60"
        >
          {pending ? 'Checking…' : 'Verify certificate'}
          {!pending && <ArrowRight size={15} />}
        </button>
      </div>
      {error ? (
        <p id="certificate-id-error" role="alert" className="mt-2 text-xs font-medium text-brand">
          {error}
        </p>
      ) : (
        <p id="certificate-id-hint" className="mt-2 text-xs text-muted">
          The ID is printed under “Certificate ID” on the certificate, or encoded in its QR code.
        </p>
      )}
    </form>
  )
}
