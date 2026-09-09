'use client'

import { useState } from 'react'
import { Menu2, X } from 'tabler-icons-react'
import { Sidebar } from '@/components/layout/Sidebar'

export function AdminShell({
  email,
  children,
}: {
  email: string
  children: React.ReactNode
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <Sidebar email={email} isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="lg:pl-64">
        {/* Mobile header */}
        <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-line bg-sidebar px-4 lg:hidden">
          <button
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-300 hover:bg-white/10"
            aria-label="Open navigation menu"
          >
            <Menu2 size={20} />
          </button>
          <span className="text-sm font-semibold text-white">VerifSafe Admin</span>
          {menuOpen && (
            <button
              onClick={() => setMenuOpen(false)}
              className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-300 hover:bg-white/10"
              aria-label="Close navigation menu"
            >
              <X size={20} />
            </button>
          )}
        </header>

        <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  )
}