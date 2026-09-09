import { requireAdmin } from '@/lib/auth'
import { AdminShell } from '@/components/layout/AdminShell'

export const dynamic = 'force-dynamic'

export default async function AdminGroupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user } = await requireAdmin()

  return (
    <AdminShell email={user.email ?? 'Admin user'}>{children}</AdminShell>
  )
}