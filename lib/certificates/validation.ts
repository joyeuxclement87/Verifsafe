import {
  CERTIFICATE_NUMBER_REGEX,
  CUSTOM_COURSE_CODE,
  CUSTOM_COURSE_KEY,
  CUSTOM_COURSE_NAME_MAX,
  DESCRIPTION_MAX,
  DESCRIPTION_MIN,
  DURATION_UNITS,
  findCourse,
  INSTRUCTOR_NAME_MAX,
  RECIPIENT_NAME_MAX,
  REVOCATION_REASON_MAX,
  REVOCATION_REASON_MIN,
  type DurationUnit,
} from '@/lib/certificates/constants'
import { todayIsoDate } from '@/lib/certificates/format'

export interface CertificateFormInput {
  recipientName: string
  courseKey: string
  customCourseName?: string
  trainingDate: string
  durationValue: number | string
  durationUnit: string
  instructorName: string
  description: string
  issueDate?: string
  expiryDate?: string
  idempotencyKey?: string
}

export interface ValidatedCertificateInput {
  recipientName: string
  courseKey: string
  courseName: string
  courseCode: string
  trainingDate: string
  durationValue: number
  durationUnit: DurationUnit
  instructorName: string
  description: string
  issueDate: string
  expiryDate: string | null
  idempotencyKey: string | null
}

export type CertificateValidationResult =
  | { ok: true; data: ValidatedCertificateInput }
  | { ok: false; errors: Record<string, string>; message: string }

const ISO_DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

function cleanText(value: string): string {
  return value.replace(/\s+/g, ' ').trim()
}

function isRealDate(value: string): boolean {
  if (!ISO_DATE_REGEX.test(value)) return false
  const [year, month, day] = value.split('-').map(Number)
  const date = new Date(Date.UTC(year, month - 1, day))
  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  )
}

function parseDateToUtc(value: string): number | null {
  if (!isRealDate(value)) return null
  const [year, month, day] = value.split('-').map(Number)
  return Date.UTC(year, month - 1, day)
}

export function validateCertificateInput(
  input: CertificateFormInput,
  options?: { mode?: 'create' | 'edit'; today?: string }
): CertificateValidationResult {
  const errors: Record<string, string> = {}
  const mode = options?.mode ?? 'create'
  const today = options?.today ?? todayIsoDate()

  const recipientName = cleanText(input.recipientName ?? '')
  if (recipientName.length < 2) {
    errors.recipientName = 'Enter the recipient’s full name.'
  } else if (recipientName.length > RECIPIENT_NAME_MAX) {
    errors.recipientName = `Recipient name must be ${RECIPIENT_NAME_MAX} characters or fewer.`
  }

  const courseKey = input.courseKey?.trim() ?? ''
  const isCustomCourse = courseKey === CUSTOM_COURSE_KEY
  const presetCourse = findCourse(courseKey)

  let courseName = ''
  let courseCode = ''
  if (isCustomCourse) {
    courseName = cleanText(input.customCourseName ?? '')
    courseCode = CUSTOM_COURSE_CODE
    if (courseName.length < 2) {
      errors.customCourseName = 'Enter the training course name.'
    } else if (courseName.length > CUSTOM_COURSE_NAME_MAX) {
      errors.customCourseName = `Course name must be ${CUSTOM_COURSE_NAME_MAX} characters or fewer.`
    }
  } else if (presetCourse) {
    courseName = presetCourse.name
    courseCode = presetCourse.code
  } else {
    errors.courseKey = 'Select a training course.'
  }

  const trainingDate = input.trainingDate?.trim() ?? ''
  if (!isRealDate(trainingDate)) {
    errors.trainingDate = 'Enter a valid training date.'
  }

  const durationValue = Number(input.durationValue)
  if (!Number.isInteger(durationValue) || durationValue < 1 || durationValue > 10000) {
    errors.durationValue = 'Enter a whole number between 1 and 10,000.'
  }

  const durationUnit = input.durationUnit?.trim() ?? ''
  if (!DURATION_UNITS.includes(durationUnit as DurationUnit)) {
    errors.durationUnit = 'Select a duration unit.'
  }

  const instructorName = cleanText(input.instructorName ?? '')
  if (instructorName.length < 2) {
    errors.instructorName = 'Enter the trainer or instructor’s full name.'
  } else if (instructorName.length > INSTRUCTOR_NAME_MAX) {
    errors.instructorName = `Instructor name must be ${INSTRUCTOR_NAME_MAX} characters or fewer.`
  }

  const description = (input.description ?? '').trim()
  if (description.length < DESCRIPTION_MIN) {
    errors.description = 'Add the completion description shown on the certificate.'
  } else if (description.length > DESCRIPTION_MAX) {
    errors.description = `Description must be ${DESCRIPTION_MAX} characters or fewer.`
  }

  const issueDate = input.issueDate?.trim() || today
  if (!isRealDate(issueDate)) {
    errors.issueDate = 'Enter a valid issue date.'
  } else if (mode === 'create' && issueDate > today) {
    errors.issueDate = 'Issue date cannot be in the future.'
  }

  const expiryDate: string | null = input.expiryDate?.trim() || null
  if (expiryDate !== null) {
    if (!isRealDate(expiryDate)) {
      errors.expiryDate = 'Enter a valid expiry date.'
    } else if (isRealDate(issueDate) && expiryDate <= issueDate) {
      errors.expiryDate = 'Expiry date must be after the issue date.'
    }
  }

  if (!errors.trainingDate && !errors.issueDate) {
    const trainingTime = parseDateToUtc(trainingDate)
    const issueTime = parseDateToUtc(issueDate)
    if (trainingTime !== null && issueTime !== null && trainingTime > issueTime) {
      errors.trainingDate = 'Training date cannot be after the issue date.'
    }
  }

  const idempotencyKey = input.idempotencyKey?.trim() || null
  if (idempotencyKey && !UUID_REGEX.test(idempotencyKey)) {
    errors.idempotencyKey = 'Invalid submission token. Refresh the page and try again.'
  }

  if (Object.keys(errors).length > 0) {
    return {
      ok: false,
      errors,
      message: Object.values(errors)[0] ?? 'Check the certificate details and try again.',
    }
  }

  return {
    ok: true,
    data: {
      recipientName,
      courseKey,
      courseName,
      courseCode,
      trainingDate,
      durationValue,
      durationUnit: durationUnit as DurationUnit,
      instructorName,
      description,
      issueDate,
      expiryDate,
      idempotencyKey,
    },
  }
}

export function validateCertificateNumber(value: string): boolean {
  return CERTIFICATE_NUMBER_REGEX.test(value)
}

export function validateRevocationReason(value: string):
  | { ok: true; reason: string }
  | { ok: false; message: string } {
  const reason = cleanText(value ?? '')
  if (reason.length < REVOCATION_REASON_MIN) {
    return { ok: false, message: 'Add a short reason for revoking this certificate.' }
  }
  if (reason.length > REVOCATION_REASON_MAX) {
    return {
      ok: false,
      message: `Revocation reason must be ${REVOCATION_REASON_MAX} characters or fewer.`,
    }
  }
  return { ok: true, reason }
}
