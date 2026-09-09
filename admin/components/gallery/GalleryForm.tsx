'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { createGalleryItem } from '@/lib/actions'
import type { ProcessedImage } from '@/lib/image'
import { ImageUploader } from '@/components/gallery/ImageUploader'
import { Field, Input, Select, Textarea } from '@/components/ui/Field'
import Button from '@/components/ui/Button'
import { Spinner } from '@/components/ui/Spinner'

const categoryOptions = [
  'Fire Extinguishers',
  'Fire Alarm Systems',
  'Hose Reels',
  'Detection Devices',
  'Emergency Lighting',
  'Installations',
  'Other',
]

export function GalleryForm({
  initial,
  onSave,
  submitLabel = 'Save gallery project',
}: {
  initial?: {
    id: string
    title: string
    description: string
    category: string
    alt_text: string
    caption: string
    sort_order: number
    published: boolean
  }
  onSave?: (input: Record<string, unknown>) => Promise<{ success: boolean; error?: string }>
  submitLabel?: string
}) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [uploadedPath, setUploadedPath] = useState<string | null>(null)
  const [imageMeta, setImageMeta] = useState<ProcessedImage | null>(null)
  const [error, setError] = useState('')
  const [message, setMessage] = useState<{ kind: 'success' | 'error'; text: string } | null>(null)

  const [form, setForm] = useState({
    title: initial?.title ?? '',
    description: initial?.description ?? '',
    category: initial?.category ?? '',
    alt_text: initial?.alt_text ?? '',
    caption: initial?.caption ?? '',
    sort_order: String(initial?.sort_order ?? 0),
    published: initial?.published ?? false,
  })

  const setField = (name: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [name]: value }))

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setMessage(null)

    if (initial && !uploadedPath) {
      // Edit mode: image can be replaced or left as-is.
      startTransition(async () => {
        const result = await (onSave ?? (async () => ({ success: true })))({
          title: form.title,
          description: form.description,
          category: form.category,
          alt_text: form.alt_text,
          caption: form.caption,
          sort_order: Number(form.sort_order) || 0,
          published: form.published,
        })
        if (result.success) {
          setMessage({ kind: 'success', text: 'Changes saved.' })
          router.refresh()
        } else {
          setMessage({ kind: 'error', text: result.error ?? 'Save failed.' })
        }
      })
      return
    }

    if (!uploadedPath) {
      setError('Please upload an image for this project.')
      return
    }

    startTransition(async () => {
      const result = await createGalleryItem({
        title: form.title,
        description: form.description,
        category: form.category,
        alt_text: form.alt_text,
        caption: form.caption,
        sort_order: Number(form.sort_order) || 0,
        published: form.published,
        image_path: uploadedPath,
        image_width: imageMeta?.width,
        image_height: imageMeta?.height,
        image_file_size: imageMeta?.size,
        image_format: imageMeta?.format,
      })

      if (result.success) {
        setMessage({ kind: 'success', text: 'Gallery project created.' })
        setTimeout(() => router.replace(`/gallery/${result.id}`), 600)
      } else {
        setMessage({ kind: 'error', text: result.error ?? 'Save failed.' })
        setError(result.error ?? '')
      }
    })
  }

  return (
    <form className="space-y-6" onSubmit={handleSave}>
      {error && (
        <p role="alert" className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}

      {!initial && (
        <Field label="Image" hint="Required. The image is optimised automatically.">
          <ImageUploader
            onUploaded={(path, meta) => {
              setUploadedPath(path)
              setImageMeta(meta)
            }}
            onCleared={() => {
              setUploadedPath(null)
              setImageMeta(null)
            }}
          />
        </Field>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Title" hint="Shown on the public gallery.">
          <Input
            value={form.title}
            onChange={(e) => setField('title', e.target.value)}
            required
            placeholder="e.g. Hotel Exit Signage Installation"
          />
        </Field>

        <Field label="Category">
          <Select value={form.category} onChange={(e) => setField('category', e.target.value)}>
            <option value="">Uncategorised</option>
            {categoryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Description" hint="Short project description, shown where the design uses it.">
        <Textarea
          rows={3}
          value={form.description}
          onChange={(e) => setField('description', e.target.value)}
          placeholder="A brief summary of the project…"
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Alt text" hint="Descriptive text for screen readers and SEO.">
          <Input
            value={form.alt_text}
            onChange={(e) => setField('alt_text', e.target.value)}
            placeholder="Describe the image…"
          />
        </Field>

        <Field label="Caption" hint="Optional caption below the image.">
          <Input
            value={form.caption}
            onChange={(e) => setField('caption', e.target.value)}
            placeholder="e.g. Supplied and installed 2025"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Display order" hint="Lower numbers appear first.">
          <Input
            type="number"
            min={0}
            value={form.sort_order}
            onChange={(e) => setField('sort_order', e.target.value)}
          />
        </Field>

        <Field label="Visibility">
          <label className="flex cursor-pointer items-center gap-3 rounded-md border border-line bg-white px-3 py-2">
            <input
              type="checkbox"
              checked={form.published}
              onChange={(e) => setField('published', e.target.checked)}
              className="h-4 w-4 rounded border-line text-brand focus:ring-brand"
            />
            <span className="text-sm font-medium text-ink">
              Published
              <span className="ml-1.5 text-xs font-normal text-muted">
                Visible on the public website
              </span>
            </span>
          </label>
        </Field>
      </div>

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

      <div className="flex items-center gap-3">
        <Button type="submit" size="lg" disabled={isPending}>
          {isPending ? <Spinner /> : null}
          {isPending ? 'Saving…' : submitLabel}
        </Button>
      </div>
    </form>
  )
}