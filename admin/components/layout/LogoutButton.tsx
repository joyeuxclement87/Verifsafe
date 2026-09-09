'use client'

import { signOutAction } from '@/lib/auth-actions'
import { Logout } from 'tabler-icons-react'

export function LogoutButton({ compact = false }: { compact?: boolean }) {
  return (
    <form action={signOutAction}>
      <button
        type="submit"
        className={`flex w-full items-center gap-2.5 rounded-md text-sm text-slate-400 transition-colors hover:bg-white/5 hover:text-white ${
          compact ? 'px-3 py-2' : 'px-3 py-2'
        }`}
      >
        <Logout size={16} className="shrink-0" />
        <span>Sign out</span>
      </button>
    </form>
  )
}