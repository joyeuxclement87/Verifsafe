import { NextResponse } from 'next/server'
import { getSession } from '@/lib/admin/auth'
import { buildCertificatePreviewData } from '@/lib/certificates/preview'
import { renderCertificatePdf } from '@/lib/certificates/certificate-pdf'
import { getCertificateById } from '@/lib/certificates/queries'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * Live certificate preview.
 *
 * Accepts partially-completed form fields and always returns a real PDF, so
 * the admin sees the exact artwork the recipient will receive. Invalid values
 * fall back to sample content instead of blocking the preview.
 */
export async function POST(request: Request) {
  const { user } = await getSession()
  if (!user) {
    return NextResponse.json({ error: 'Not authorized.' }, { status: 401 })
  }

  let form: FormData
  try {
    form = await request.formData()
  } catch {
    return NextResponse.json({ error: 'Invalid preview request.' }, { status: 400 })
  }

  let storedNumber: string | undefined
  let storedIssueDate: string | undefined
  let storedCourseKey: string | undefined
  let storedCourseName: string | undefined

  const certificateId = String(form.get('certificateId') ?? '').trim()
  if (certificateId) {
    const existing = await getCertificateById(certificateId)
    if (!existing) {
      return NextResponse.json({ error: 'Certificate not found.' }, { status: 404 })
    }
    storedNumber = existing.certificate_number
    storedIssueDate = existing.issue_date
    storedCourseKey = existing.course_key
    storedCourseName = existing.course_name
  }

  const courseKey = storedCourseKey || String(form.get('courseKey') ?? '')
  const isCustomCourse = courseKey === 'other'

  const preview = buildCertificatePreviewData({
    recipientName: String(form.get('recipientName') ?? ''),
    courseKey,
    customCourseName:
      storedCourseName || String(form.get('customCourseName') ?? '') || undefined,
    trainingDate: String(form.get('trainingDate') ?? ''),
    durationValue: String(form.get('durationValue') ?? ''),
    durationUnit: String(form.get('durationUnit') ?? ''),
    instructorName: String(form.get('instructorName') ?? ''),
    description: String(form.get('description') ?? ''),
    issueDate: storedIssueDate || String(form.get('issueDate') ?? ''),
    expiryDate: String(form.get('expiryDate') ?? '') || null,
    certificateNumber: storedNumber,
  })

  if (!isCustomCourse && storedCourseName) {
    preview.courseName = storedCourseName
  }

  try {
    const buffer = await renderCertificatePdf(preview)
    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="certificate-preview.pdf"',
        'Cache-Control': 'no-store, max-age=0',
        'X-Content-Type-Options': 'nosniff',
      },
    })
  } catch (error) {
    console.error('Certificate preview failed:', error)
    return NextResponse.json(
      { error: 'The preview could not be rendered. Check the details and try again.' },
      { status: 500 }
    )
  }
}
