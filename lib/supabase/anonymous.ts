import 'server-only'
import { createClient as createSupabaseClient, type SupabaseClient } from '@supabase/supabase-js'

/**
 * Anonymous Supabase client (anon key, no cookies).
 *
 * Safe to use inside `unstable_cache`/static generation scopes, where
 * `cookies()` is not allowed. Public reads rely on RLS (e.g. published
 * gallery items are visible to `anon`); anything protected never reads.
 */
export function createAnonClient(): SupabaseClient {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.'
    )
  }

  return createSupabaseClient(supabaseUrl, supabaseAnonKey)
}