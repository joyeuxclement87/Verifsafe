import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

/**
 * Protected routes — unauthenticated visitors are redirected to /login.
 * All other app routes require an authenticated admin session.
 */
const protectedRoutes = [
  '/dashboard',
  '/enquiries',
  '/gallery',
  '/media',
  '/settings',
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
  const isLoginPage = pathname === '/login'

  const isAdmin =
    user?.app_metadata?.is_admin === true || user?.app_metadata?.is_admin === 'true'

  if (!user && isProtected) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = '/login'
    redirectUrl.searchParams.set('redirectTo', pathname)
    return NextResponse.redirect(redirectUrl)
  }

  if (user && !isAdmin && isProtected) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = '/login'
    redirectUrl.searchParams.set('error', 'not-admin')
    return NextResponse.redirect(redirectUrl)
  }

  if (user && isAdmin && isLoginPage) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = '/dashboard'
    redirectUrl.search = ''
    return NextResponse.redirect(redirectUrl)
  }

  return response
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/enquiries/:path*',
    '/gallery/:path*',
    '/media/:path*',
    '/settings/:path*',
    '/login',
  ],
}