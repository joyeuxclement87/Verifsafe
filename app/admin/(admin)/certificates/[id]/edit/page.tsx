import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'tabler-icons-react'
import { requireAdmin } from '@/lib/admin/auth'
import {
  getCertificateById,
  getSavedTrainers,
  getSavedTrainingCourses,
} from '@/lib/certificates/queries'
import { CertificateForm } from '@/components/admin/certificates/CertificateForm'
import { CertificateStatusBadge } from '@/components/admin/ui/Badge'
import Button from '@/components/admin/ui/Button'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Edit certificate',
}

export default async function EditCertificatePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  await requireAdmin()
  const { id } = await params
  const [certificate, savedCourses, savedTrainers] = await Promise.all([
    getCertificateById(id),
    getSavedTrainingCourses(),
    getSavedTrainers(),
  ])

  if (!certificate) notFound()

  if (certificate.status === 'revoked') {
    return (
      <div className="space-y-6">
        <header className="border-b border-line pb-6">
          <Link
            href={`/admin/certificates/${certificate.id}`}
            className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft size={13} />
            {certificate.certificate_number}
          </Link>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2.5">
                <span aria-hidden="true" className="h-px w-6 bg-brand" />
                <span className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                  Read-only record
                </span>
              </div>
              <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]">
                Certificate revoked
              </h1>
              <p className="mt-1 max-w-2xl text-sm text-muted">
                {certificate.certificate_number} belongs to{' '}
                {certificate.recipient_name} and has been withdrawn.
              </p>
            </div>
            <CertificateStatusBadge
              status={certificate.status}
              expiryDate={certificate.expiry_date}
            />
          </div>
        </header>

        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-5 py-5"
        >
          <p className="text-sm font-semibold text-red-800">
            This certificate is read-only.
          </p>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-red-800/80">
            Revocation is permanent. The original certificate details, number
            and issue date can still be viewed and reprinted, but they cannot be
            changed.
          </p>
          <Button
            href={`/admin/certificates/${certificate.id}`}
            variant="secondary"
            size="md"
            className="mt-4"
          >
            <ArrowLeft size={14} />
            Back to certificate
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <header className="border-b border-line pb-6">
        <Link
          href={`/admin/certificates/${certificate.id}`}
          className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft size={13} />
          {certificate.certificate_number}
        </Link>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2.5">
              <span aria-hidden="true" className="h-px w-6 bg-brand" />
              <span className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                Correct record
              </span>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]">
              Edit certificate
            </h1>
            <p className="mt-1 max-w-2xl text-sm text-muted">
              Correct recipient, training name or wording details. The
              certificate number and issue date stay fixed.
            </p>
          </div>
          <CertificateStatusBadge
            status={certificate.status}
            expiryDate={certificate.expiry_date}
          />
        </div>
      </header>

      <CertificateForm
        mode="edit"
        savedCourses={savedCourses}
        savedTrainers={savedTrainers}
        initial={{
          id: certificate.id,
          certificateNumber: certificate.certificate_number,
          recipientName: certificate.recipient_name,
          courseKey: certificate.course_key,
          courseName: certificate.course_name,
          trainingDate: certificate.training_date,
          durationValue: certificate.duration_value,
          durationUnit: certificate.duration_unit,
          instructorName: certificate.instructor_name,
          description: certificate.description,
          issueDate: certificate.issue_date,
          expiryDate: certificate.expiry_date,
        }}
      />
    </div>
  )
}
