'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { deleteMediaItem } from '@/lib/admin/actions'
import Button from '@/components/admin/ui/Button'
import { Spinner } from '@/components/admin/ui/Spinner'

export function DeleteMediaButton({
  id,
  referenced,
}: {
  id: string
  referenced: boolean
}) {
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
      const result = await deleteMediaItem(id)
      if (result.success) {
        router.refresh()
      } else {
        setError(result.error ?? 'Delete failed.')
        setConfirming(false)
      }
    })
  }

  return (
    <div>
      {error && <p className="mb-2 text-xs text-red-600">{error}</p>}
      <Button
        variant="danger"
        size="sm"
        onClick={handleDelete}
        disabled={isPending || referenced}
        title={referenced ? 'This file is still referenced and cannot be deleted.' : undefined}
      >
        {isPending ? <Spinner /> : null}
        {confirming ? 'Confirm delete' : 'Delete'}
      </Button>
      {confirming && !isPending && (
        <button
          type="button"
          onClick={() => setConfirming(false)}
          className="ml-2 text-xs text-muted hover:text-ink"
        >
          Cancel
        </button>
      )}
    </div>
  )
}