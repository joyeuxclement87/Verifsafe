'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { replaceGalleryImage } from '@/lib/admin/actions'
import type { ProcessedImage } from '@/lib/admin/image'
import { ImageUploader } from '@/components/admin/gallery/ImageUploader'
import Button from '@/components/admin/ui/Button'
import { Spinner } from '@/components/admin/ui/Spinner'

export function ImageReplacer({ id }: { id: string }) {
  const router = useRouter()
  const [path, setPath] = useState<string | null>(null)
  const [meta, setMeta] = useState<ProcessedImage | null>(null)
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState<{ kind: 'success' | 'error'; text: string } | null>(null)

  const handleReplace = () => {
    if (!path) return
    setMessage(null)
    startTransition(async () => {
      const result = await replaceGalleryImage(
        id,
        path,
        meta
          ? {
              width: meta.width,
              height: meta.height,
              fileSize: meta.size,
              format: meta.format,
            }
          : undefined
      )
      if (result.success) {
        setMessage({ kind: 'success', text: 'Image replaced.' })
        setPath(null)
        setMeta(null)
        router.refresh()
      } else {
        setMessage({ kind: 'error', text: result.error ?? 'Replace failed.' })
      }
    })
  }

  return (
    <div className="space-y-4">
      {!path ? (
        <ImageUploader
          bucket="gallery"
          onUploaded={(p, m) => {
            setPath(p)
            setMeta(m)
          }}
        />
      ) : (
        <>
          <p className="text-sm font-medium text-emerald-700">New image ready to apply.</p>
          <div className="flex items-center gap-3">
            <Button onClick={handleReplace} disabled={isPending}>
              {isPending ? <Spinner /> : null}
              {isPending ? 'Replacing…' : 'Replace image'}
            </Button>
            <button
              type="button"
              onClick={() => setPath(null)}
              className="text-sm text-muted hover:text-ink"
            >
              Cancel
            </button>
          </div>
        </>
      )}

      {message && (
        <p
          role="status"
          className={`rounded-md border px-3 py-2 text-sm ${
            message.kind === 'success'
              ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
              : 'border-red-200 bg-red-50 text-red-700'
          }`}
        >
          {message.text}
        </p>
      )}
    </div>
  )
}