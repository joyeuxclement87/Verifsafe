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
 * Server Component guard that redirects unauthenticated visitors to
 * /login. Returns the signed-in user for authenticated pages.
 */
export async function requireAdmin() {
  const { user } = await getSession()

  if (!user) {
    redirect('/login')
  }

  return { user }
}