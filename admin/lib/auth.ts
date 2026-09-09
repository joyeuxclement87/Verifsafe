import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

/**
 * Reads the current admin session from the server client.
 * Returns `{ user }` or `{ user: null }` — safe for Server Components.
 */
export async function getSession() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return { user }
}

/**
 * True when the signed-in user's JWT claims app_metadata.is_admin.
 * Accepts boolean or the string form GoTrue can emit in some flows.
 */
export function isAdminUser(user: { app_metadata?: Record<string, unknown> } | null): boolean {
  return user?.app_metadata?.is_admin === true || user?.app_metadata?.is_admin === 'true'
}

/**
 * Server Component guard that redirects unauthenticated visitors to /login
 * and non-admin accounts away from protected pages. Returns the signed-in
 * user for authenticated pages.
 */
export async function requireAdmin() {
  const { user } = await getSession()

  if (!user) {
    redirect('/login')
  }

  if (!isAdminUser(user)) {
    redirect('/login?error=not-admin')
  }

  return { user }
}