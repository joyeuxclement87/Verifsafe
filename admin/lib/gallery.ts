import { createClient } from '@/lib/supabase/server'

export const GALLERY_BUCKET = 'gallery'
export const PRODUCTS_BUCKET = 'products'

const galleryColumns =
  'id,title,description,category,image_path,alt_text,caption,sort_order,published,image_width,image_height,image_file_size,image_format,created_at,updated_at'

export async function getGalleryItems() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('gallery_items')
    .select(galleryColumns)
    .order('sort_order', { ascending: true, nullsFirst: true })
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(`Failed to fetch gallery items: ${error.message}`)
  }

  return data ?? []
}

export async function getGalleryItem(id: string) {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('gallery_items')
    .select(galleryColumns)
    .eq('id', id)
    .single()

  if (error) {
    throw new Error(`Failed to fetch gallery item: ${error.message}`)
  }

  return data
}