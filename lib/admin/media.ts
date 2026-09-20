import { createClient } from '@/lib/supabase/server'
import type { MediaItem } from '@/types/supabase'

const mediaColumns =
  'id,file_name,file_path,file_size,width,height,format,alt_text,caption,category,reference,uploaded_by,created_at'

export async function getMediaItems(): Promise<MediaItem[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('media')
    .select(mediaColumns)
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(`Failed to fetch media: ${error.message}`)
  }

  return (data ?? []) as MediaItem[]
}