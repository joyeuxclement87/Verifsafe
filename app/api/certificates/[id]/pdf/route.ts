import { NextResponse } from 'next/server'
import { getSession } from '@/lib/admin/auth'
import { renderCertificatePdf } from '@/lib/certificates/certificate-pdf'
import { getCertificateById } from '@/lib/certificates/queries'
import { recordCertificateEvent } from '@/lib/certificates/audit'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Renders a stored certificate on demand. The certificate number and issue
 * date always come from the database, never from the request.
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { user } = await getSession()
  if (!user) {
    return NextResponse.json({ error: 'Not authorized.' }, { status: 401 })
  }

  const { id } = await params
  const certificate = await getCertificateById(id)
  if (!certificate) {
    return NextResponse.json({ error: 'Certificate not found.' }, { status: 404 })
  }

  let buffer: Buffer
  try {
    buffer = await renderCertificatePdf({
      certificateNumber: certificate.certificate_number,
      recipientName: certificate.recipient_name,
      courseName: certificate.course_name,
      trainingDate: certificate.training_date,
      durationValue: certificate.duration_value,
      durationUnit: certificate.duration_unit,
      instructorName: certificate.instructor_name,
      description: certificate.description,
      issueDate: certificate.issue_date,
      expiryDate: certificate.expiry_date,
    })
  } catch (error) {
    console.error('Certificate PDF render failed:', error)
    return NextResponse.json(
      { error: 'The certificate PDF could not be generated.' },
      { status: 500 }
    )
  }

  const url = new URL(request.url)
  const inline = url.searchParams.get('disposition') === 'inline'
  const download = url.searchParams.get('download') === '1'

  if (download) {
    try {
      await recordCertificateEvent({
        certificateId: certificate.id,
        eventType: 'downloaded',
        actorId: user.id,
        actorEmail: user.email ?? null,
      })
    } catch (error) {
      // A failed audit write must not block the recipient's document.
      console.error(error)
    }
  }

  return new NextResponse(new Uint8Array(buffer), {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `${inline ? 'inline' : 'attachment'}; filename="${certificate.certificate_number}.pdf"`,
      'Cache-Control': 'no-store, max-age=0',
      'X-Content-Type-Options': 'nosniff',
    },
  })
}
