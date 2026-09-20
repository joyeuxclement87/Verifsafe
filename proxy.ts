import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

/**
 * Admin world auth guard (ported from the former standalone admin/proxy.ts).
 *
 * The admin surfaces now live at /admin/* on the single merged deployment,
 * so every path here is /admin-prefixed. Everything outside /admin — the
 * public Verifsafe site — is left completely untouched by this proxy.
 *
 * Rules:
 *  - Unauthenticated visitor on a protected /admin page → /admin/login,
 *    preserving where they were headed in ?redirectTo.
 *  - Authenticated admin on /admin/login → back to /admin/dashboard.
 */
const protectedRoutes = [
  '/admin/dashboard',
  '/admin/enquiries',
  '/admin/gallery',
  '/admin/media',
  '/admin/settings',
]

export default async function proxy(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    // No way to validate the session without our env — pass through and let
    // the page-level requireAdmin guard produce the clear error message.
    return response
  }

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll()
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
        response = NextResponse.next({
          request: {
            headers: request.headers,
          },
        })
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options)
        })
      },
    },
  })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { pathname } = request.nextUrl

  const isProtected = protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  )
  const isLoginPage = pathname === '/admin/login'

  if (!user && isProtected) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = '/admin/login'
    redirectUrl.searchParams.set('redirectTo', pathname)
    return NextResponse.redirect(redirectUrl)
  }

  if (user && isLoginPage) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = '/admin/dashboard'
    redirectUrl.search = ''
    return NextResponse.redirect(redirectUrl)
  }

  return response
}

export const config = {
  matcher: ['/admin/:path*'],
}
