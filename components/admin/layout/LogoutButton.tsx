'use client'

import { signOutAction } from '@/lib/admin/auth-actions'
import { Logout } from 'tabler-icons-react'

export function LogoutButton({ compact = false }: { compact?: boolean }) {
  return (
    <form action={signOutAction}>
      <button
        type="submit"
        className={`flex w-full items-center gap-2 rounded-md text-xs font-medium text-slate-400 transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
          compact ? 'px-2.5 py-1.5' : 'px-2.5 py-2'
        }`}
      >
        <Logout size={15} className="shrink-0" />
        <span>Sign out</span>
      </button>
    </form>
  )
}