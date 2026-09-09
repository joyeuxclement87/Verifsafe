import { unstable_cache } from 'next/cache'
import { createAnonClient } from '@/lib/supabase/anonymous'
import { getPublicStorageUrl } from '@/lib/supabase/storage'
import type { GalleryItem } from '@/types/supabase'

const GALLERY_BUCKET = 'gallery'
const GALLERY_CACHE_TTL = 120

const galleryColumns =
  'id,title,description,category,image_path,alt_text,caption,sort_order,published,image_width,image_height,image_file_size,image_format,created_at,updated_at'

/**
 * Fetches published gallery items for the public website.
 *
 * Ordered by explicit `sort_order` first (deterministic fallback: newest
 * first when orders tie). RLS guarantees unpublished items are never
 * returned to anonymous visitors.
 *
 * Results are memoized for a short window so newly published items appear
 * without a code deployment, while the database keeps being the source of
 * truth.
 */
const fetchPublishedGalleryItems = unstable_cache(
  async (): Promise<GalleryItem[]> => {
    const supabase = createAnonClient()

    const { data, error } = await supabase
      .from('gallery_items')
      .select(galleryColumns)
      .eq('published', true)
      .order('sort_order', { ascending: true })
      .order('created_at', { ascending: false })

    if (error) {
      throw new Error(`Failed to fetch gallery items: ${error.message}`)
    }

    return (data ?? []) as GalleryItem[]
  },
  ['gallery-items-public'],
  { revalidate: GALLERY_CACHE_TTL, tags: ['gallery-public'] }
)

export async function getPublishedGalleryItems(): Promise<GalleryItem[]> {
  return fetchPublishedGalleryItems()
}

/**
 * Resolves a gallery item image path to its public Storage URL.
 */
export function getGalleryImageUrl(imagePath: string): string {
  return getPublicStorageUrl(GALLERY_BUCKET, imagePath)
}

/**
 * Display shape consumed by the public Gallery UI.
 * The UI layer stays database-agnostic — this mapping owns the translation
 * between Supabase records and what the component renders.
 */
export interface GalleryDisplayItem {
  id: string
  title: string
  /** Short project label used as understated hover/eyebrow text. */
  label: string
  category: string
  /** Public Storage URL, served responsively through next/image. */
  image: string
  imageWidth: number | null
  imageHeight: number | null
}

/**
 * Maps raw gallery rows into the display shape the Gallery UI consumes.
 * Resolves Storage paths to public URLs and keeps dimensions for
 * responsive image delivery.
 */
export function mapGalleryItems(rows: GalleryItem[]): GalleryDisplayItem[] {
  return rows.map((row) => ({
    id: row.id,
    title: row.title,
    label: row.description ?? '',
    category: row.category ?? '',
    image: getPublicStorageUrl(GALLERY_BUCKET, row.image_path),
    imageWidth: row.image_width,
    imageHeight: row.image_height,
  }))
}