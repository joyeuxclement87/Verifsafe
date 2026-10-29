import { createClient } from '@/lib/supabase/server'
import { createAnonClient } from '@/lib/supabase/anonymous'
import type {
  Certificate,
  CertificateEvent,
  CertificateEffectiveStatus,
  CertificateVerification,
  SavedTrainer,
  SavedTrainingCourse,
} from '@/types/supabase'
import { CERTIFICATE_COURSES } from '@/lib/certificates/constants'
import { getCertificateEffectiveStatus, todayIsoDate } from '@/lib/certificates/format'

export const CERTIFICATE_PAGE_SIZE = 15

const certificateColumns = [
  'id',
  'certificate_number',
  'course_code',
  'course_key',
  'course_name',
  'recipient_name',
  'training_date',
  'duration_value',
  'duration_unit',
  'instructor_name',
  'description',
  'issue_date',
  'expiry_date',
  'status',
  'revocation_reason',
  'revoked_at',
  'revoked_by',
  'pdf_storage_path',
  'idempotency_key',
  'created_by',
  'updated_by',
  'created_at',
  'updated_at',
].join(',')

export interface CertificateFilters {
  search?: string
  course?: string
  status?: CertificateEffectiveStatus | 'all'
  issuedFrom?: string
  issuedTo?: string
  page?: number
  limit?: number
}

export interface CertificateListResult {
  certificates: Certificate[]
  total: number
  page: number
  pageCount: number
  limit: number
}

function sanitizeSearchTerm(value: string): string {
  // PostgREST `or` expressions use commas and parentheses as syntax.
  return value.replace(/[(),]/g, ' ').replace(/\s+/g, ' ').trim()
}

/**
 * Admin certificate list. RLS keeps this authenticated-only.
 * Supports name / number / course / instructor search, course and
 * effective-status filters, issue-date range and pagination.
 */
export async function getCertificates(
  filters: CertificateFilters = {}
): Promise<CertificateListResult> {
  const supabase = await createClient()
  const page = Math.max(1, Math.floor(filters.page ?? 1))
  const limit = Math.min(50, Math.max(1, Math.floor(filters.limit ?? CERTIFICATE_PAGE_SIZE)))
  const from = (page - 1) * limit
  const to = from + limit - 1
  const today = todayIsoDate()

  let query = supabase
    .from('certificates')
    .select(certificateColumns, { count: 'exact' })

  const search = sanitizeSearchTerm(filters.search ?? '')
  if (search) {
    const term = `%${search}%`
    query = query.or(
      [
        `recipient_name.ilike.${term}`,
        `certificate_number.ilike.${term}`,
        `course_name.ilike.${term}`,
        `instructor_name.ilike.${term}`,
      ].join(',')
    )
  }

  if (filters.course && filters.course !== 'all') {
    query = query.eq('course_name', filters.course)
  }

  if (filters.status && filters.status !== 'all') {
    if (filters.status === 'revoked') {
      query = query.eq('status', 'revoked')
    } else if (filters.status === 'expired') {
      query = query.eq('status', 'active').lt('expiry_date', today)
    } else {
      query = query
        .eq('status', 'active')
        .or(`expiry_date.is.null,expiry_date.gte.${today}`)
    }
  }

  if (filters.issuedFrom) {
    query = query.gte('issue_date', filters.issuedFrom)
  }
  if (filters.issuedTo) {
    query = query.lte('issue_date', filters.issuedTo)
  }

  const { data, error, count } = await query
    .order('issue_date', { ascending: false })
    .order('created_at', { ascending: false })
    .range(from, to)

  if (error) {
    throw new Error(`Failed to fetch certificates: ${error.message}`)
  }

  const total = count ?? 0

  return {
    certificates: (data ?? []) as unknown as Certificate[],
    total,
    page,
    pageCount: Math.max(1, Math.ceil(total / limit)),
    limit,
  }
}

/** Recent certificates for the dashboard rail. */
export async function getRecentCertificates(limit = 5): Promise<Certificate[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('certificates')
    .select(certificateColumns)
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) {
    throw new Error(`Failed to fetch recent certificates: ${error.message}`)
  }

  return (data ?? []) as unknown as Certificate[]
}

export async function getCertificateById(id: string): Promise<Certificate | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('certificates')
    .select(certificateColumns)
    .eq('id', id)
    .maybeSingle()

  if (error) {
    throw new Error(`Failed to fetch certificate: ${error.message}`)
  }

  return (data as Certificate | null) ?? null
}

export async function getCertificateByNumber(number: string): Promise<Certificate | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('certificates')
    .select(certificateColumns)
    .eq('certificate_number', number)
    .maybeSingle()

  if (error) {
    throw new Error(`Failed to fetch certificate: ${error.message}`)
  }

  return (data as Certificate | null) ?? null
}

export async function getCertificateByNumberForUser(
  number: string,
  userId: string
): Promise<Certificate | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('certificates')
    .select(certificateColumns)
    .eq('certificate_number', number)
    .eq('created_by', userId)
    .maybeSingle()

  if (error) {
    throw new Error(`Failed to fetch certificate: ${error.message}`)
  }

  return (data as Certificate | null) ?? null
}

export async function getCertificateByIdempotencyKey(
  key: string,
  userId: string
): Promise<Certificate | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('certificates')
    .select(certificateColumns)
    .eq('idempotency_key', key)
    .eq('created_by', userId)
    .maybeSingle()

  if (error) {
    throw new Error(`Failed to fetch certificate: ${error.message}`)
  }

  return (data as Certificate | null) ?? null
}

export async function getCertificateEvents(certificateId: string): Promise<CertificateEvent[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('certificate_events')
    .select('id,certificate_id,event_type,actor_id,actor_email,reason,changes,created_at')
    .eq('certificate_id', certificateId)
    .order('created_at', { ascending: false })
    .limit(30)

  if (error) {
    throw new Error(`Failed to fetch certificate events: ${error.message}`)
  }

  return (data ?? []) as CertificateEvent[]
}

export interface CertificateCourseCount {
  courseName: string
  total: number
  valid: number
}

export interface CertificateStats {
  total: number
  thisMonth: number
  active: number
  revoked: number
  expired: number
  courses: CertificateCourseCount[]
}

/**
 * Dashboard counters and course distribution.
 * Certificate volume is expected to be modest; one narrow read keeps this
 * consistent with the effective-status rules used everywhere else.
 */
export async function getCertificateStats(): Promise<CertificateStats> {
  const supabase = await createClient()
  const today = todayIsoDate()
  const monthStart = `${today.slice(0, 7)}-01`

  const [rowsResult, totalResult, monthResult] = await Promise.all([
    supabase
      .from('certificates')
      .select('course_name,status,expiry_date')
      .order('course_name', { ascending: true }),
    supabase.from('certificates').select('id', { count: 'exact', head: true }),
    supabase
      .from('certificates')
      .select('id', { count: 'exact', head: true })
      .gte('issue_date', monthStart),
  ])

  if (rowsResult.error) {
    throw new Error(`Failed to calculate certificate stats: ${rowsResult.error.message}`)
  }
  if (totalResult.error) {
    throw new Error(`Failed to count certificates: ${totalResult.error.message}`)
  }
  if (monthResult.error) {
    throw new Error(`Failed to count certificates: ${monthResult.error.message}`)
  }

  const courses = new Map<string, CertificateCourseCount>()
  let active = 0
  let revoked = 0
  let expired = 0

  for (const row of rowsResult.data ?? []) {
    const effective = getCertificateEffectiveStatus(
      {
        status: row.status as Certificate['status'],
        expiry_date: row.expiry_date as string | null,
      },
      today
    )

    if (effective === 'revoked') revoked += 1
    else if (effective === 'expired') expired += 1
    else active += 1

    const courseName = row.course_name as string
    const course = courses.get(courseName) ?? { courseName, total: 0, valid: 0 }
    course.total += 1
    if (effective === 'valid') course.valid += 1
    courses.set(courseName, course)
  }

  return {
    total: totalResult.count ?? 0,
    thisMonth: monthResult.count ?? 0,
    active,
    revoked,
    expired,
    courses: Array.from(courses.values()).sort((a, b) => {
      if (b.total !== a.total) return b.total - a.total
      return a.courseName.localeCompare(b.courseName)
    }),
  }
}

/** Public verification lookup. Runs as anon and returns only safe fields. */
export async function getCertificateVerification(
  certificateNumber: string
): Promise<CertificateVerification | null> {
  const supabase = createAnonClient()
  const { data, error } = await supabase.rpc('verify_certificate', {
    p_certificate_number: certificateNumber,
  })

  if (error) {
    throw new Error(`Failed to verify certificate: ${error.message}`)
  }

  const rows = (data ?? []) as CertificateVerification[]
  return rows[0] ?? null
}

/** Returns saved training courses from Supabase, falling back to preset defaults. */
export async function getSavedTrainingCourses(): Promise<SavedTrainingCourse[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('training_courses')
    .select('id,key,code,name,created_at,updated_at')
    .order('name', { ascending: true })

  if (error || !data || data.length === 0) {
    return CERTIFICATE_COURSES.map((c) => ({
      id: c.key,
      key: c.key,
      code: c.code,
      name: c.name,
    }))
  }

  return data as SavedTrainingCourse[]
}

/** Returns saved trainers from Supabase. */
export async function getSavedTrainers(): Promise<SavedTrainer[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('trainers')
    .select('id,name,created_at,updated_at')
    .order('name', { ascending: true })

  if (error || !data) {
    return []
  }

  return data as SavedTrainer[]
}
