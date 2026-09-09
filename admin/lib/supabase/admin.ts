import 'server-only'
import { createClient } from '@supabase/supabase-js'

/**
 * Privileged Supabase client (service role key) for the admin panel.
 *
 * `server-only` guarantees this module can never be imported from a
 * client bundle, so the service role key is never exposed to the browser.
 *
 * Reserved for operations that must bypass RLS (e.g. admin user invites,
 * storage management edge cases). Prefer the anon-key clients everywhere
 * RLS can be relied on for a signed-in admin.
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
