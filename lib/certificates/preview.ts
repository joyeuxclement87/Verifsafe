import {
  buildDefaultDescription,
  CERTIFICATE_NUMBER_PLACEHOLDER,
  CERTIFICATE_NUMBER_REGEX,
  CUSTOM_COURSE_CODE,
  CUSTOM_COURSE_KEY,
  DURATION_UNITS,
  findCourse,
  type DurationUnit,
} from '@/lib/certificates/constants'
import { todayIsoDate } from '@/lib/certificates/format'
import type { CertificatePdfData } from '@/lib/certificates/certificate-pdf'

export interface CertificatePreviewInput {
  recipientName?: string
  courseKey?: string
  customCourseName?: string
  trainingDate?: string
  durationValue?: number | string
  durationUnit?: string
  instructorName?: string
  description?: string
  issueDate?: string
  expiryDate?: string | null
  /** Resolved from the stored certificate when previewing an edit. */
  certificateNumber?: string
}

function isIsoDate(value: unknown): value is string {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const [year, month, day] = value.split('-').map(Number)
  const date = new Date(Date.UTC(year, month - 1, day))
  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  )
}

/**
 * Builds forgiving preview data from partially-completed form fields.
 * The live preview should keep rendering while the admin is still typing,
 * so invalid or empty values fall back to sensible sample content.
 */
export function buildCertificatePreviewData(
  input: CertificatePreviewInput
): CertificatePdfData {
  const today = todayIsoDate()
  const courseKey = input.courseKey?.trim() ?? ''
  const isCustom = courseKey === CUSTOM_COURSE_KEY
  const preset = findCourse(courseKey)

  const courseName =
    (isCustom ? input.customCourseName?.trim() : preset?.name) ||
    preset?.name ||
    'Training Course'
  const courseCode = isCustom ? CUSTOM_COURSE_CODE : (preset?.code ?? CUSTOM_COURSE_CODE)

  const trainingDate = isIsoDate(input.trainingDate) ? input.trainingDate : today
  const issueDate = isIsoDate(input.issueDate) ? input.issueDate : today
  const expiryDate = isIsoDate(input.expiryDate) ? input.expiryDate : null
  const issueYear = Number(issueDate.slice(0, 4))
  const year = Number.isFinite(issueYear) ? issueYear : new Date().getUTCFullYear()

  const rawNumber = input.certificateNumber?.trim() ?? ''
  const certificateNumber = CERTIFICATE_NUMBER_REGEX.test(rawNumber)
    ? rawNumber
    : `VFS-${courseCode}-${year}-${CERTIFICATE_NUMBER_PLACEHOLDER}`

  const parsedDuration = Number(input.durationValue)
  const durationValue =
    Number.isInteger(parsedDuration) && parsedDuration > 0 && parsedDuration <= 10000
      ? parsedDuration
      : 1
  const durationUnit = DURATION_UNITS.includes(input.durationUnit as DurationUnit)
    ? (input.durationUnit as DurationUnit)
    : 'hours'

  const rawDescription = input.description?.trim() ?? ''
  const description = rawDescription
    ? rawDescription.slice(0, 280)
    : buildDefaultDescription(courseName)

  return {
    certificateNumber,
    recipientName: input.recipientName?.trim() || 'Recipient Name',
    courseName,
    trainingDate,
    durationValue,
    durationUnit,
    instructorName: input.instructorName?.trim() || 'Instructor Name',
    description,
    issueDate,
    expiryDate,
  }
}
