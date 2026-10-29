'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  Dashboard,
  Inbox,
  Certificate,
  Photo,
  Folder,
  Settings,
  BuildingWarehouse,
  ArrowUpRight,
} from 'tabler-icons-react'
import { LogoutButton } from '@/components/admin/layout/LogoutButton'

const navGroups = [
  {
    label: 'Operations',
    items: [
      { href: '/admin/dashboard', label: 'Dashboard', icon: Dashboard },
      { href: '/admin/enquiries', label: 'Enquiries', icon: Inbox },
      { href: '/admin/certificates', label: 'Certificates', icon: Certificate },
      { href: '/admin/gallery', label: 'Gallery & Projects', icon: Photo },
      { href: '/admin/media', label: 'Media Library', icon: Folder },
    ],
  },
  {
    label: 'System',
    items: [{ href: '/admin/settings', label: 'Settings', icon: Settings }],
  },
]

const blueprintGridStyle = {
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
  `,
  backgroundSize: '48px 48px',
}

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
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px] lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-white/10 bg-sidebar text-slate-300 transition-transform duration-200 ease-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Admin navigation"
      >
        {/* Subtle technical blueprint grid matching public hero & footer */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={blueprintGridStyle}
        />

        {/* Brand header */}
        <div className="relative z-10 flex h-16 items-center justify-between border-b border-white/10 px-5 lg:h-[72px]">
          <Link
            href="/admin/dashboard"
            onClick={onClose}
            className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            <Image
              src="/logo.png"
              alt="VerifSafe"
              width={116}
              height={36}
              priority
              className="h-7 w-auto object-contain"
            />
          </Link>
          <span className="rounded border border-brand/40 bg-brand/15 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-[0.16em] text-[#ff6b6b] uppercase">
            Admin
          </span>
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex-1 overflow-y-auto px-3 py-5">
          {navGroups.map((group) => (
            <div key={group.label} className="mb-7">
              <div className="mb-2.5 flex items-center gap-2 px-3">
                <span aria-hidden="true" className="h-px w-3 bg-brand" />
                <p className="text-[0.6875rem] font-semibold tracking-[0.18em] text-slate-400 uppercase">
                  {group.label}
                </p>
              </div>
              <ul className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon
                  const active = isActive(item.href)
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        aria-current={active ? 'page' : undefined}
                        className={`group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                          active
                            ? 'bg-brand text-white shadow-[0_4px_14px_-6px_rgba(214,40,40,0.65)]'
                            : 'text-slate-400 hover:bg-white/[0.06] hover:text-white'
                        }`}
                      >
                        <Icon
                          size={17}
                          strokeWidth={active ? 2 : 1.75}
                          className={`shrink-0 transition-colors ${
                            active ? 'text-white' : 'text-slate-400 group-hover:text-white'
                          }`}
                        />
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
            <div className="mb-2.5 flex items-center gap-2 px-3">
              <span aria-hidden="true" className="h-px w-3 bg-white/15" />
              <p className="text-[0.6875rem] font-semibold tracking-[0.18em] text-slate-600 uppercase">
                Roadmap
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] text-slate-600">
              <BuildingWarehouse size={17} strokeWidth={1.75} className="shrink-0" />
              <span>Inventory</span>
              <span className="ml-auto rounded border border-white/10 px-1.5 py-0.5 font-mono text-[10px] tracking-wider text-slate-500 uppercase">
                Soon
              </span>
            </div>
          </div>
        </nav>

        {/* Footer / live site link + user */}
        <div className="relative z-10 border-t border-white/10 p-3 space-y-2">
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
          >
            <span>View live website</span>
            <ArrowUpRight
              size={14}
              className="text-slate-400 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
            />
          </Link>

          <div className="rounded-lg bg-white/[0.03] p-2.5 border border-white/[0.06]">
            <div className="flex items-center gap-2.5 px-1 pb-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand/20 text-xs font-semibold text-[#ff6b6b] uppercase">
                {email.charAt(0)}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium text-white" title={email}>
                  {email}
                </p>
                <p className="text-[10px] tracking-wider text-slate-500 uppercase">
                  Administrator
                </p>
              </div>
            </div>
            <LogoutButton />
          </div>
        </div>
      </aside>
    </>
  )
}
