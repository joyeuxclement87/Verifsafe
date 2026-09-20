import { requireAdmin } from '@/lib/admin/auth'
import { AdminShell } from '@/components/admin/layout/AdminShell'

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