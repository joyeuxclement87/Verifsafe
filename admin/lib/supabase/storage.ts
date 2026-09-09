/**
 * Builds a public Storage object URL for a file inside a public bucket.
 */
export function getPublicStorageUrl(bucket: string, path: string): string {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL

  if (!supabaseUrl) {
    throw new Error('Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL.')
  }

  const base = supabaseUrl.replace(/\/+$/, '')
  return `${base}/storage/v1/object/public/${bucket}/${path}`
}
