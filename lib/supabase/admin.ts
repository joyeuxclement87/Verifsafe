import 'server-only'
import { createClient } from '@supabase/supabase-js'

/**
 * Privileged Supabase client (service role key).
 *
 * `server-only` guarantees this module can never be imported from a
 * client bundle, so the service role key is never exposed to the browser.
 *
 * Bypasses Row Level Security. Reserved for privileged server operations
 * and the future admin panel. Prefer the anon-key clients (lib/supabase/
 * client.ts and lib/supabase/server.ts) everywhere RLS can be relied on.
 */
export function createAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      'Supabase service role is not configured. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.'
    )
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}