'use server'

import { createClient } from '@/lib/supabase/server'
import { ENQUIRY_STATUS_LABELS, type EnquiryStatus } from '@shared/supabase'

const GALLERY_BUCKET = 'gallery'

function safeErrorMessage(detail?: string) {
  return detail ? 'The request could not be completed. Please try again.' : 'Something went wrong.'
}

export async function updateEnquiry(input: {
  id: string
  status: string
  notes: string
}) {
  const supabase = await createClient()

  const status = input.status as EnquiryStatus
  if (!(status in ENQUIRY_STATUS_LABELS)) {
    return { success: false, error: 'Invalid status value.' }
  }

  const { error } = await supabase
    .from('enquiries')
    .update({
      status,
      notes: input.notes.trim(),
    })
    .eq('id', input.id)

  if (error) {
    return { success: false, error: safeErrorMessage(error.message) }
  }

  return { success: true }
}

export async function deleteEnquiry(id: string) {
  const supabase = await createClient()

  const { error } = await supabase.from('enquiries').delete().eq('id', id)

  if (error) {
    return { success: false, error: safeErrorMessage(error.message) }
  }

  return { success: true }
}

export async function updateGalleryItem(
  id: string,
  input: {
    title?: string
    description?: string
    category?: string
    alt_text?: string
    caption?: string
    sort_order?: number
    published?: boolean
  }
) {
  const supabase = await createClient()

  const payload: Record<string, unknown> = {}
  if (input.title !== undefined) payload.title = input.title.trim()
  if (input.description !== undefined) payload.description = input.description.trim() || null
  if (input.category !== undefined) payload.category = input.category.trim() || null
  if (input.alt_text !== undefined) payload.alt_text = input.alt_text.trim()
  if (input.caption !== undefined) payload.caption = input.caption.trim() || null
  if (input.sort_order !== undefined) payload.sort_order = Number(input.sort_order) || 0
  if (input.published !== undefined) payload.published = input.published

  const { error } = await supabase.from('gallery_items').update(payload).eq('id', id)

  if (error) {
    return { success: false, error: safeErrorMessage(error.message) }
  }

  return { success: true }
}

export async function deleteGalleryItem(id: string) {
  const supabase = await createClient()

  const { data: item } = await supabase
    .from('gallery_items')
    .select('id,image_path')
    .eq('id', id)
    .single()

  const { error } = await supabase.from('gallery_items').delete().eq('id', id)

  if (error) {
    return { success: false, error: safeErrorMessage(error.message) }
  }

  // Remove the media record tied to this project — its storage object is
  // deleted below, so leaving it would point at a missing file.
  await supabase.from('media').delete().eq('reference', `gallery_items:${id}`)

  // Best-effort cleanup of the storage object. The database record is the
  // source of truth — if this fails we log and move on.
  if (item?.image_path) {
    const { error: storageError } = await supabase.storage
      .from(GALLERY_BUCKET)
      .remove([item.image_path])
    if (storageError) {
      console.error('Failed to remove gallery image from storage:', storageError.message)
    }
  }

  return { success: true }
}

export async function deleteMediaItem(id: string) {
  const supabase = await createClient()

  const { data: media } = await supabase
    .from('media')
    .select('id,file_path,reference')
    .eq('id', id)
    .single()

  if (!media) {
    return { success: false, error: 'Media record not found.' }
  }

  // Refuse deletion while the file is still referenced.
  if (media.reference) {
    return {
      success: false,
      error: 'This file is still referenced and cannot be deleted.',
    }
  }

  // Determine bucket from path prefix (gallery/..., products/...).
  const bucket = media.file_path.startsWith('gallery/')
    ? 'gallery'
    : media.file_path.startsWith('products/')
      ? 'products'
      : null

  const { error } = await supabase.from('media').delete().eq('id', id)
  if (error) {
    return { success: false, error: safeErrorMessage(error.message) }
  }

  if (bucket) {
    const { error: storageError } = await supabase.storage
      .from(bucket)
      .remove([media.file_path])
    if (storageError) {
      console.error('Failed to remove media from storage:', storageError.message)
    }
  }

  return { success: true }
}

export async function replaceGalleryImage(
  id: string,
  imagePath: string,
  meta?: {
    width?: number
    height?: number
    fileSize?: number
    format?: string
  }
) {
  const supabase = await createClient()

  const { data: old } = await supabase
    .from('gallery_items')
    .select('image_path')
    .eq('id', id)
    .single()

  const { error } = await supabase
    .from('gallery_items')
    .update({ image_path: imagePath })
    .eq('id', id)

  if (error) {
    return { success: false, error: safeErrorMessage(error.message) }
  }

  const reference = `gallery_items:${id}`

  // The previous media record points at the old file that is deleted below —
  // remove it and track the replacement instead.
  await supabase.from('media').delete().eq('reference', reference)

  const insertResult = await insertMediaRecord({
    bucket: GALLERY_BUCKET,
    path: imagePath,
    file_name: imagePath.split('/').pop() ?? imagePath,
    file_size: meta?.fileSize,
    width: meta?.width,
    height: meta?.height,
    format: meta?.format,
    category: 'gallery',
    reference,
  })

  if (!insertResult.success) {
    return { success: false, error: insertResult.error }
  }

  if (old?.image_path && old.image_path !== imagePath) {
    await supabase.storage.from(GALLERY_BUCKET).remove([old.image_path])
  }

  return { success: true }
}

export async function createGalleryItem(input: {
  title: string
  description?: string
  category?: string
  alt_text?: string
  caption?: string
  sort_order?: number
  published?: boolean
  image_path: string
  image_width?: number
  image_height?: number
  image_file_size?: number
  image_format?: string
}) {
  const supabase = await createClient()

  if (!input.title?.trim()) {
    return { success: false, error: 'A title is required.' }
  }
  if (!input.image_path?.trim()) {
    return { success: false, error: 'Please upload an image first.' }
  }

  const { data, error } = await supabase
    .from('gallery_items')
    .insert({
      title: input.title.trim(),
      description: input.description?.trim() || null,
      category: input.category?.trim() || null,
      alt_text: input.alt_text?.trim() || '',
      caption: input.caption?.trim() || null,
      sort_order: Number(input.sort_order) || 0,
      published: !!input.published,
      image_path: input.image_path,
      image_width: input.image_width ?? null,
      image_height: input.image_height ?? null,
      image_file_size: input.image_file_size ?? null,
      image_format: input.image_format ?? null,
    })
    .select('id')
    .single()

  if (error) {
    return { success: false, error: safeErrorMessage(error.message) }
  }

  // Track the file in the media library.
  if (data?.id) {
    await supabase.from('media').insert({
      file_name: input.image_path.split('/').pop() ?? input.image_path,
      file_path: input.image_path,
      file_size: input.image_file_size ?? null,
      width: input.image_width ?? null,
      height: input.image_height ?? null,
      format: input.image_format ?? null,
      alt_text: input.alt_text?.trim() || '',
      caption: input.caption?.trim() || null,
      category: input.category?.trim() || 'gallery',
      reference: `gallery_items:${data.id}`,
    })
  }

  return { success: true, id: data?.id }
}

export async function insertMediaRecord(input: {
  bucket: string
  path: string
  file_name: string
  file_size?: number
  width?: number
  height?: number
  format?: string
  alt_text?: string
  category?: string
  /** table.id reference when the file is actively used, null when unreferenced. */
  reference?: string | null
}) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('media')
    .insert({
      file_name: input.file_name,
      file_path: input.path,
      file_size: input.file_size ?? null,
      width: input.width ?? null,
      height: input.height ?? null,
      format: input.format ?? null,
      alt_text: input.alt_text?.trim() || '',
      category: input.category?.trim() || null,
      reference: input.reference ?? null,
    })
    .select('id')
    .single()

  if (error) {
    return { success: false, error: safeErrorMessage(error.message) }
  }

  return { success: true, id: data?.id }
}