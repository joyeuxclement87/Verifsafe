'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { AlertTriangle, Ban, X } from 'tabler-icons-react'
import { revokeCertificate } from '@/lib/certificates/actions'
import { REVOCATION_REASON_MAX } from '@/lib/certificates/constants'
import { Spinner } from '@/components/admin/ui/Spinner'
import Button from '@/components/admin/ui/Button'

/**
 * Two-step, inline revocation. No browser confirm dialog: the consequence and
 * the required reason stay visible in the page while the admin decides.
 */
export function RevokeCertificatePanel({
  certificateId,
  certificateNumber,
}: {
  certificateId: string
  certificateNumber: string
}) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [reason, setReason] = useState('')
  const [error, setError] = useState<string | null>(null)
  // The refreshed server component can take a moment; keep an honest status
  // on screen instead of briefly showing the certificate as still valid.
  const [revoked, setRevoked] = useState(false)
  const [isPending, startTransition] = useTransition()

  function close() {
    if (isPending) return
    setOpen(false)
    setReason('')
    setError(null)
  }

  function submit() {
    setError(null)
    startTransition(async () => {
      let result
      try {
        result = await revokeCertificate(certificateId, reason)
      } catch {
        setError('Something went wrong while revoking. Please try again.')
        return
      }

      if (!result.success) {
        setError(result.error ?? 'The certificate could not be revoked.')
        return
      }

      setRevoked(true)
      setReason('')
      router.refresh()
    })
  }

  if (revoked) {
    return (
      <div
        role="status"
        className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50/70 p-4"
      >
        <Spinner className="mt-0.5 h-4 w-4 shrink-0 text-red-700" />
        <div>
          <p className="text-sm font-semibold text-red-800">
            Certificate revoked.
          </p>
          <p className="mt-1 text-xs leading-relaxed text-red-800/80">
            Updating the record…
          </p>
        </div>
      </div>
    )
  }

  if (!open) {
    return (
      <Button
        type="button"
        variant="danger"
        onClick={() => setOpen(true)}
        className="w-full"
      >
        <Ban size={15} />
        Revoke certificate
      </Button>
    )
  }

  return (
    <div
      className="rounded-lg border border-red-200 bg-red-50/70 p-4"
      role="group"
      aria-labelledby="revoke-heading"
    >
      <div className="flex items-start gap-2.5">
        <AlertTriangle
          size={17}
          className="mt-0.5 shrink-0 text-red-700"
          aria-hidden="true"
        />
        <div>
          <h3 id="revoke-heading" className="text-sm font-semibold text-red-800">
            Revoke {certificateNumber}?
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-red-800/80">
            The certificate stays on record but public verification will show
            <strong> Revoked</strong>. This cannot be undone, and the record
            becomes read-only.
          </p>
        </div>
        <button
          type="button"
          onClick={close}
          disabled={isPending}
          className="ml-auto rounded p-1 text-red-700/60 transition-colors hover:bg-red-100 hover:text-red-800 disabled:opacity-50"
          aria-label="Cancel revocation"
        >
          <X size={14} />
        </button>
      </div>

      <label className="mt-3 block">
        <span className="mb-1.5 block text-[11px] font-semibold tracking-[0.12em] text-red-800 uppercase">
          Reason for revocation <span aria-hidden="true">*</span>
        </span>
        <textarea
          rows={3}
          value={reason}
          onChange={(event) => setReason(event.target.value)}
          maxLength={REVOCATION_REASON_MAX}
          placeholder="e.g. Issued in error — duplicate of VFS-FA-2026-000042"
          className="w-full rounded-md border border-red-200 bg-white px-3 py-2 text-xs text-ink placeholder:text-muted/80 focus:border-red-400 focus:ring-2 focus:ring-red-500/10 focus:outline-none"
          aria-invalid={Boolean(error)}
        />
      </label>
      <p className="mt-1 text-right font-mono text-[10px] text-red-800/60">
        {reason.length} / {REVOCATION_REASON_MAX}
      </p>

      {error && (
        <p role="alert" className="mt-1 text-xs font-medium text-red-700">
          {error}
        </p>
      )}

      <div className="mt-3 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={close}
          disabled={isPending}
          className="h-8 rounded-lg border border-line bg-white px-3 text-xs font-semibold text-ink-soft transition-colors hover:border-ink/30 hover:text-ink disabled:opacity-50"
        >
          Keep certificate
        </button>
        <button
          type="button"
          onClick={submit}
          disabled={isPending}
          className="inline-flex h-8 items-center justify-center gap-2 rounded-lg bg-red-700 px-3 text-xs font-semibold text-white transition-colors hover:bg-red-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? <Spinner className="h-3.5 w-3.5" /> : <Ban size={13} />}
          Confirm revocation
        </button>
      </div>
    </div>
  )
}
