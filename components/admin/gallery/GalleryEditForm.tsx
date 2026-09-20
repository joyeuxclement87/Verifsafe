'use client'

import { GalleryForm } from '@/components/admin/gallery/GalleryForm'
import { updateGalleryItem } from '@/lib/admin/actions'

export function GalleryEditForm({
  id,
  title,
  description,
  category,
  alt_text,
  caption,
  sort_order,
  published,
}: {
  id: string
  title: string
  description: string
  category: string
  alt_text: string
  caption: string
  sort_order: number
  published: boolean
}) {
  return (
    <GalleryForm
      initial={{
        id,
        title,
        description,
        category,
        alt_text,
        caption,
        sort_order,
        published,
      }}
      onSave={(input) => updateGalleryItem(id, input)}
      submitLabel="Save changes"
    />
  )
}