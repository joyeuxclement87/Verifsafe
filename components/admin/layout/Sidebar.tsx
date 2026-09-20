'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Dashboard,
  Inbox,
  Photo,
  Folder,
  Settings,
  BuildingWarehouse,
} from 'tabler-icons-react'
import { LogoutButton } from '@/components/admin/layout/LogoutButton'

const navGroups = [
  {
    label: 'Manage',
    items: [
      { href: '/admin/dashboard', label: 'Dashboard', icon: Dashboard },
      { href: '/admin/enquiries', label: 'Enquiries', icon: Inbox },
      { href: '/admin/gallery', label: 'Gallery', icon: Photo },
      { href: '/admin/media', label: 'Media', icon: Folder },
    ],
  },
  {
    label: 'Administration',
    items: [{ href: '/admin/settings', label: 'Settings', icon: Settings }],
  },
]

export function Sidebar({
  email,
  isOpen,
  onClose,
}: {
  email: string
  isOpen: boolean
  onClose: () => void
}) {
  const pathname = usePathname()

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`)

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-sidebar text-slate-300 transition-transform duration-200 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Admin navigation"
      >
        {/* Brand */}
        <Link
          href="/admin/dashboard"
          onClick={onClose}
          className="flex items-center gap-3 border-b border-white/10 px-5 py-5"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand font-extrabold text-white">
            V
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-tight text-white">verifsafe</span>
            <span className="block text-[0.6875rem] font-medium tracking-[0.18em] text-slate-500 uppercase">
              Admin Panel
            </span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          {navGroups.map((group) => (
            <div key={group.label} className="mb-6">
              <p className="px-3 pb-2 text-[0.6875rem] font-semibold tracking-[0.14em] text-slate-500 uppercase">
                {group.label}
              </p>
              <ul className="space-y-0.5">
                {group.items.map((item) => {
                  const Icon = item.icon
                  const active = isActive(item.href)
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        aria-current={active ? 'page' : undefined}
                        className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                          active
                            ? 'bg-brand text-white'
                            : 'text-slate-400 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <Icon size={16} className="shrink-0" />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}

          {/* Future module — visually separated */}
          <div>
            <p className="px-3 pb-2 text-[0.6875rem] font-semibold tracking-[0.14em] text-slate-600 uppercase">
              Future
            </p>
            <div className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm text-slate-600">
              <BuildingWarehouse size={16} className="shrink-0" />
              <span>Inventory</span>
              <span className="ml-auto rounded-full border border-white/10 px-2 py-0.5 text-[0.625rem] font-medium uppercase tracking-wide text-slate-500">
                soon
              </span>
            </div>
          </div>
        </nav>

        {/* Footer / user */}
        <div className="border-t border-white/10 px-3 py-4">
          <div className="px-3 pb-3">
            <p className="truncate text-xs font-medium text-slate-400">{email}</p>
          </div>
          <LogoutButton />
        </div>
      </aside>
    </>
  )
}