/**
 * Builds a public Storage object URL for a file inside a public bucket.
 *
 * The gallery stores image paths in Postgres while the images themselves
 * live in Supabase Storage. This helper is a pure function — safe to use
 * from both server and client code without instantiating a Supabase client.
 *
 * @param bucket Storage bucket name (e.g. "gallery")
 * @param path   Object path within the bucket
 */
export function getPublicStorageUrl(bucket: string, path: string): string {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL

  if (!supabaseUrl) {
    throw new Error(
      'Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL.'
    )
  }

  const base = supabaseUrl.replace(/\/+$/, '')
  return `${base}/storage/v1/object/public/${bucket}/${path}`
}