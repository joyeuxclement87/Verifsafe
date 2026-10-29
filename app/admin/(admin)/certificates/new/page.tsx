import Link from 'next/link'
import { ArrowLeft } from 'tabler-icons-react'
import { requireAdmin } from '@/lib/admin/auth'
import {
  getSavedTrainers,
  getSavedTrainingCourses,
} from '@/lib/certificates/queries'
import { CertificateForm } from '@/components/admin/certificates/CertificateForm'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Issue certificate',
}

export default async function NewCertificatePage() {
  await requireAdmin()
  const [savedCourses, savedTrainers] = await Promise.all([
    getSavedTrainingCourses(),
    getSavedTrainers(),
  ])

  return (
    <div className="space-y-6">
      <header className="border-b border-line pb-6">
        <Link
          href="/admin/certificates"
          className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft size={13} />
          Certificates
        </Link>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2.5">
              <span aria-hidden="true" className="h-px w-6 bg-brand" />
              <span className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                New credential
              </span>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]">
              Issue a certificate
            </h1>
            <p className="mt-1 max-w-2xl text-sm text-muted">
              Enter the training record. The certificate number is created when
              you issue it and can never be reused.
            </p>
          </div>
          <p className="max-w-[15rem] text-xs leading-relaxed text-muted sm:text-right">
            The preview is the exact PDF the recipient will receive.
          </p>
        </div>
      </header>

      <CertificateForm
        mode="create"
        savedCourses={savedCourses}
        savedTrainers={savedTrainers}
      />
    </div>
  )
}
