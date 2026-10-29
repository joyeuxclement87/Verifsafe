'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu2, X, ArrowUpRight } from 'tabler-icons-react'
import { Sidebar } from '@/components/admin/layout/Sidebar'

export function AdminShell({
  email,
  children,
}: {
  email: string
  children: React.ReactNode
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Sidebar email={email} isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="lg:pl-64">
        {/* Mobile header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between gap-3 border-b border-white/10 bg-sidebar px-4 lg:hidden">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              aria-label="Open navigation menu"
            >
              <Menu2 size={20} />
            </button>
            <Link href="/admin/dashboard" className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="VerifSafe"
                width={104}
                height={32}
                className="h-6 w-auto object-contain"
              />
              <span className="rounded border border-brand/40 bg-brand/15 px-1.5 py-0.5 font-mono text-[9px] font-semibold tracking-[0.16em] text-[#ff6b6b] uppercase">
                Admin
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:bg-white/10 hover:text-white"
            >
              <span>Site</span>
              <ArrowUpRight size={13} />
            </Link>
            {menuOpen && (
              <button
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 hover:bg-white/10 hover:text-white"
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </header>

        <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
          {children}
        </main>
      </div>
    </div>
  )
}