import type { Metadata } from 'next'
import Image from 'next/image'
import LoginForm from './LoginForm'

export const metadata: Metadata = {
  title: 'Sign in',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center text-center">
          <Image
            src="/logo.png"
            alt="VerifSafe"
            width={150}
            height={44}
            className="w-36 h-auto"
          />
          <p className="mt-3 text-sm text-muted">Sign in to manage your business data.</p>
        </div>

        <div className="rounded-lg border border-line bg-white p-6 shadow-sm">
          <LoginForm />
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-muted">
          Authorized personnel only.
          <br />
          Access is restricted to VerifSafe staff.
        </p>
      </div>
    </main>
  )
}