/**
 * Certificate domain constants.
 *
 * Shared by the admin form, server actions, PDF renderer and public
 * verification page. Keep this module free of server-only imports so the
 * client form can reuse the course list and default wording.
 */

export interface CertificateCourse {
  key: string
  name: string
  /** Prefix used in the public certificate number, e.g. VFS-FA-2026-000001. */
  code: string
}

export const CERTIFICATE_COURSES: CertificateCourse[] = [
  { key: 'first-aid', name: 'First Aid Training', code: 'FA' },
  { key: 'first-aid-refresher', name: 'First Aid Refresher', code: 'FR' },
  { key: 'fire-safety', name: 'Fire Safety Training', code: 'FS' },
  { key: 'fire-warden', name: 'Fire Warden Training', code: 'FW' },
  { key: 'fire-extinguisher', name: 'Fire Extinguisher Training', code: 'FE' },
  { key: 'occupational-health-safety', name: 'Occupational Health & Safety', code: 'OHS' },
]

export const CUSTOM_COURSE_KEY = 'other'
export const CUSTOM_COURSE_CODE = 'GEN'
export const CUSTOM_COURSE_NAME = 'Other training'

export const COURSE_OPTIONS: Array<{ value: string; label: string }> = [
  ...CERTIFICATE_COURSES.map((course) => ({ value: course.key, label: course.name })),
  { value: CUSTOM_COURSE_KEY, label: 'Other training (custom)' },
]

export const DURATION_UNITS = ['hours', 'days', 'weeks', 'months'] as const
export type DurationUnit = (typeof DURATION_UNITS)[number]

export const DURATION_UNIT_LABELS: Record<DurationUnit, string> = {
  hours: 'Hours',
  days: 'Days',
  weeks: 'Weeks',
  months: 'Months',
}

/** Uppercase abbreviations printed on the certificate. */
export const DURATION_UNIT_ABBREVIATIONS: Record<DurationUnit, string> = {
  hours: 'HRS',
  days: 'DAYS',
  weeks: 'WEEKS',
  months: 'MONTHS',
}

/** Certificate numbers are generated on the server only. */
export const CERTIFICATE_NUMBER_REGEX = /^VFS-[A-Z]{2,4}-\d{4}-\d{6}$/

export const CERTIFICATE_NUMBER_PLACEHOLDER = '000000'

export const RECIPIENT_NAME_MAX = 120
export const INSTRUCTOR_NAME_MAX = 120
export const CUSTOM_COURSE_NAME_MAX = 90
export const DESCRIPTION_MAX = 280
export const DESCRIPTION_MIN = 20
export const REVOCATION_REASON_MAX = 300
export const REVOCATION_REASON_MIN = 5

/**
 * Wording printed below the recipient name. The certificate layout already
 * prints “This certificate is awarded to” and the recipient name above this
 * paragraph, so the paragraph begins with “For successfully completing…”.
 */
export function buildDefaultDescription(courseName: string): string {
  return `For successfully completing ${courseName} delivered by VerifSafe, covering essential knowledge and practical skills for responding to medical emergencies.`
}

export function findCourse(key: string): CertificateCourse | undefined {
  return CERTIFICATE_COURSES.find((course) => course.key === key)
}
