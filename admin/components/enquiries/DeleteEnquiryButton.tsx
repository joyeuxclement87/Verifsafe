'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { deleteEnquiry } from '@/lib/actions'
import Button from '@/components/ui/Button'
import { Spinner } from '@/components/ui/Spinner'

export function DeleteEnquiryButton({ id }: { id: string }) {
  const router = useRouter()
  const [confirming, setConfirming] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState('')

  const handleDelete = () => {
    if (!confirming) {
      setConfirming(true)
      return
    }

    startTransition(async () => {
      const result = await deleteEnquiry(id)
      if (result.success) {
        router.push('/enquiries')
        router.refresh()
      } else {
        setError(result.error ?? 'Delete failed.')
        setConfirming(false)
      }
    })
  }

  return (
    <div className="flex items-center gap-3">
      {error && <p className="text-sm text-red-600">{error}</p>}
      <Button
        variant="danger"
        size="md"
        onClick={handleDelete}
        disabled={isPending}
        aria-disabled={isPending}
      >
        {isPending ? <Spinner /> : null}
        {confirming ? `Confirm delete${isPending ? '' : ''}` : 'Delete enquiry'}
      </Button>
      {confirming && !isPending && (
        <button
          type="button"
          onClick={() => setConfirming(false)}
          className="text-sm text-muted hover:text-ink"
        >
          Cancel
        </button>
      )}
    </div>
  )
}