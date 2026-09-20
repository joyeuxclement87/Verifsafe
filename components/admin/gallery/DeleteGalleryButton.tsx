'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { deleteGalleryItem } from '@/lib/admin/actions'
import Button from '@/components/admin/ui/Button'
import { Spinner } from '@/components/admin/ui/Spinner'

export function DeleteGalleryButton({ id }: { id: string }) {
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
      const result = await deleteGalleryItem(id)
      if (result.success) {
        router.push('/admin/gallery')
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
      <Button variant="danger" onClick={handleDelete} disabled={isPending}>
        {isPending ? <Spinner /> : null}
        {confirming ? 'Confirm delete' : 'Delete project'}
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