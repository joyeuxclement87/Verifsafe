import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ShieldLock } from 'tabler-icons-react'
import LoginForm from './LoginForm'

export const metadata: Metadata = {
  title: 'Sign in',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

const blueprintGridStyle = {
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
  `,
  backgroundSize: '48px 48px',
}

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen flex-col justify-between bg-paper px-4 py-8 text-ink sm:px-6">
      {/* Top bar — return to public website */}
      <div className="mx-auto flex w-full max-w-md items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.04em] text-ink-soft transition-colors hover:text-ink"
        >
          <ArrowLeft
            size={15}
            className="transition-transform duration-150 group-hover:-translate-x-0.5"
          />
          <span>Back to verifsafe.com</span>
        </Link>
        <span className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
          VS / ADM
        </span>
      </div>

      {/* Centered authentication surface */}
      <div className="mx-auto my-8 w-full max-w-md">
        <div className="overflow-hidden rounded-lg border border-line bg-white shadow-[0_12px_32px_-16px_rgba(11,23,32,0.12)]">
          {/* Dark architectural brand header — ensures white+red logo is crisp */}
          <div className="relative overflow-hidden bg-sidebar px-6 py-7 sm:px-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={blueprintGridStyle}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#123B5D]/35"
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4">
                <Image
                  src="/logo.png"
                  alt="VerifSafe"
                  width={136}
                  height={40}
                  priority
                  className="h-8 w-auto object-contain"
                />
                <span className="inline-flex items-center gap-1.5 rounded border border-brand/40 bg-brand/15 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-[0.16em] text-[#ff6b6b] uppercase">
                  <ShieldLock size={12} />
                  Staff Portal
                </span>
              </div>

              <div className="mt-5 flex items-center gap-2.5">
                <span aria-hidden="true" className="h-px w-6 bg-brand" />
                <p className="text-[11px] font-semibold tracking-[0.2em] text-slate-400 uppercase">
                  Administration
                </p>
              </div>
              <h1 className="mt-2 text-xl font-semibold tracking-tight text-white">
                Sign in to VerifSafe
              </h1>
              <p className="mt-1 text-xs leading-relaxed text-slate-400">
                Manage customer enquiries, project gallery items and media assets.
              </p>
            </div>
          </div>

          {/* Form body */}
          <div className="p-6 sm:p-8">
            <LoginForm />
          </div>
        </div>

        <p className="mt-5 text-center text-xs leading-relaxed text-muted">
          Authorized personnel only · Protected by Supabase Row Level Security
        </p>
      </div>

      <div aria-hidden="true" className="h-4" />
    </main>
  )
}