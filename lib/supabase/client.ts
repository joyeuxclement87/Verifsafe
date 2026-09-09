import { createBrowserClient } from '@supabase/ssr'

/**
 * Browser/client Supabase client (anon key only).
 *
 * The anon key is safe to expose: all access control happens through
 * PostgreSQL Row Level Security policies. Use this client in React
 * components on the client.
 */
export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.'
    )
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}