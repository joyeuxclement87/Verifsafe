'use server'

import { revalidatePath } from 'next/cache'
import { getSession } from '@/lib/admin/auth'
import { createClient } from '@/lib/supabase/server'
import { recordCertificateEvent } from '@/lib/certificates/audit'
import {
  notifyCertificateIssued,
  notifyCertificateRevoked,
  notifyCertificateUpdated,
  notifyCourseChanged,
  notifyTrainerChanged,
} from '@/lib/notifications/telegram'
import {
  CERTIFICATE_COURSES,
  CUSTOM_COURSE_KEY,
  CUSTOM_COURSE_NAME_MAX,
  findCourse,
  INSTRUCTOR_NAME_MAX,
} from '@/lib/certificates/constants'
import {
  getCertificateById,
  getCertificateByIdempotencyKey,
} from '@/lib/certificates/queries'
import {
  validateCertificateInput,
  validateRevocationReason,
  type CertificateFormInput,
} from '@/lib/certificates/validation'
import type {
  Certificate,
  SavedTrainer,
  SavedTrainingCourse,
} from '@/types/supabase'

export interface CertificateActionResult {
  success: boolean
  error?: string
  fieldErrors?: Record<string, string>
  certificate?: Pick<Certificate, 'id' | 'certificate_number'>
}

function unauthorized(): CertificateActionResult {
  return {
    success: false,
    error: 'You are not authorized to manage certificates. Sign in again and retry.',
  }
}

function databaseError(context: string): CertificateActionResult {
  return {
    success: false,
    error: `${context} Please try again. If the problem continues, contact the site administrator.`,
  }
}

function cleanText(value: string): string {
  return value.replace(/\s+/g, ' ').trim()
}

function suggestCourseCode(name: string): string {
  const words = name
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0 && !['and', 'of', 'the', 'in', 'for', '&'].includes(w.toLowerCase()))
  if (words.length === 0) return 'TRN'
  if (words.length === 1) {
    const letters = words[0].replace(/[^a-zA-Z]/g, '').toUpperCase()
    return (letters.slice(0, 3) || 'TRN').padEnd(2, 'X')
  }
  return words
    .slice(0, 3)
    .map((w) => w.replace(/[^a-zA-Z]/g, '')[0] ?? '')
    .join('')
    .toUpperCase()
    .padEnd(2, 'T')
}

async function ensureTrainerSaved(instructorName: string) {
  const cleaned = cleanText(instructorName)
  if (cleaned.length < 2 || cleaned.length > INSTRUCTOR_NAME_MAX) return
  try {
    const supabase = await createClient()
    const { data: existing } = await supabase
      .from('trainers')
      .select('id')
      .ilike('name', cleaned)
      .limit(1)
      .maybeSingle()

    if (!existing) {
      await supabase.from('trainers').insert({ name: cleaned })
    }
  } catch {
    // Non-blocking convenience save
  }
}

/** Issues a certificate with an atomic, permanent number. */
export async function createCertificate(
  input: CertificateFormInput
): Promise<CertificateActionResult> {
  const { user } = await getSession()
  if (!user) return unauthorized()

  const supabase = await createClient()

  // Resolve course name & code from saved training_courses if not explicitly provided
  let resolvedCourseCode = input.courseCode
  let resolvedCourseName = input.customCourseName
  if (input.courseKey && input.courseKey !== CUSTOM_COURSE_KEY) {
    const { data: dbCourse } = await supabase
      .from('training_courses')
      .select('code,name')
      .eq('key', input.courseKey)
      .maybeSingle()
    if (dbCourse) {
      resolvedCourseCode = resolvedCourseCode || (dbCourse.code as string)
      resolvedCourseName = resolvedCourseName?.trim() || (dbCourse.name as string)
    }
  }

  const validated = validateCertificateInput(
    {
      ...input,
      courseCode: resolvedCourseCode,
      customCourseName: resolvedCourseName,
    },
    { mode: 'create' }
  )
  if (!validated.ok) {
    return {
      success: false,
      error: validated.message,
      fieldErrors: validated.errors,
    }
  }

  const data = validated.data

  // Retry safety: a repeated submit returns the certificate that already
  // exists instead of consuming another permanent number.
  if (data.idempotencyKey) {
    const existing = await getCertificateByIdempotencyKey(data.idempotencyKey, user.id)
    if (existing) {
      return {
        success: true,
        certificate: {
          id: existing.id,
          certificate_number: existing.certificate_number,
        },
      }
    }
  }

  const issueYear = Number(data.issueDate.slice(0, 4))
  const { data: numberData, error: numberError } = await supabase.rpc(
    'next_certificate_number',
    {
      p_course_code: data.courseCode,
      p_year: issueYear,
    }
  )

  if (numberError || typeof numberData !== 'string') {
    console.error('Certificate numbering failed:', numberError?.message)
    return databaseError('The certificate number could not be allocated.')
  }

  const certificateNumber = numberData

  const { data: inserted, error: insertError } = await supabase
    .from('certificates')
    .insert({
      certificate_number: certificateNumber,
      course_code: data.courseCode,
      course_key: data.courseKey,
      course_name: data.courseName,
      recipient_name: data.recipientName,
      training_date: data.trainingDate,
      duration_value: data.durationValue,
      duration_unit: data.durationUnit,
      instructor_name: data.instructorName,
      description: data.description,
      issue_date: data.issueDate,
      expiry_date: data.expiryDate,
      idempotency_key: data.idempotencyKey,
      created_by: user.id,
      updated_by: user.id,
    })
    .select('id,certificate_number')
    .single()

  if (insertError || !inserted) {
    // A concurrent retry may have won the unique idempotency race.
    if (data.idempotencyKey && insertError?.code === '23505') {
      const existing = await getCertificateByIdempotencyKey(data.idempotencyKey, user.id)
      if (existing) {
        return {
          success: true,
          certificate: {
            id: existing.id,
            certificate_number: existing.certificate_number,
          },
        }
      }
    }

    console.error('Certificate insert failed:', insertError?.message)
    return databaseError('The certificate could not be issued.')
  }

  await ensureTrainerSaved(data.instructorName)

  try {
    await recordCertificateEvent({
      certificateId: inserted.id,
      eventType: 'issued',
      actorId: user.id,
      actorEmail: user.email ?? null,
      changes: {
        certificate_number: certificateNumber,
        recipient_name: data.recipientName,
        course_name: data.courseName,
      },
    })
  } catch (error) {
    console.error(error)
  }

  await notifyCertificateIssued({
    certificateNumber,
    recipientName: data.recipientName,
    courseName: data.courseName,
    actorEmail: user.email ?? null,
  })

  revalidatePath('/admin/certificates')
  revalidatePath('/admin/certificates/new')
  revalidatePath('/admin/dashboard')

  return {
    success: true,
    certificate: {
      id: inserted.id as string,
      certificate_number: inserted.certificate_number as string,
    },
  }
}

/** Corrects editable details including the printed training name. Number and issue date are permanent. */
export async function updateCertificate(
  id: string,
  input: CertificateFormInput
): Promise<CertificateActionResult> {
  const { user } = await getSession()
  if (!user) return unauthorized()

  const existing = await getCertificateById(id)
  if (!existing) {
    return { success: false, error: 'That certificate could not be found.' }
  }
  if (existing.status === 'revoked') {
    return { success: false, error: 'Revoked certificates are read-only.' }
  }

  const presetCourse =
    findCourse(existing.course_key) ??
    CERTIFICATE_COURSES.find((course) => course.name === existing.course_name)
  const courseKey = existing.course_key || presetCourse?.key || CUSTOM_COURSE_KEY

  const validated = validateCertificateInput(
    {
      ...input,
      courseKey,
      courseCode: existing.course_code,
      customCourseName: input.customCourseName?.trim() || existing.course_name,
      issueDate: existing.issue_date,
    },
    { mode: 'edit' }
  )

  if (!validated.ok) {
    return {
      success: false,
      error: validated.message,
      fieldErrors: validated.errors,
    }
  }

  const data = validated.data
  const updates = {
    recipient_name: data.recipientName,
    course_name: data.courseName,
    training_date: data.trainingDate,
    duration_value: data.durationValue,
    duration_unit: data.durationUnit,
    instructor_name: data.instructorName,
    description: data.description,
    expiry_date: data.expiryDate,
    updated_by: user.id,
  }

  const changes: Record<string, { from: unknown; to: unknown }> = {}
  for (const key of Object.keys(updates) as Array<keyof typeof updates>) {
    if (key === 'updated_by') continue
    if (existing[key] !== updates[key]) {
      changes[key] = { from: existing[key], to: updates[key] }
    }
  }

  if (Object.keys(changes).length === 0) {
    return {
      success: true,
      certificate: {
        id: existing.id,
        certificate_number: existing.certificate_number,
      },
    }
  }

  const supabase = await createClient()
  const { error } = await supabase.from('certificates').update(updates).eq('id', id)

  if (error) {
    console.error('Certificate update failed:', error.message)
    return databaseError('The certificate changes could not be saved.')
  }

  await ensureTrainerSaved(data.instructorName)

  try {
    await recordCertificateEvent({
      certificateId: id,
      eventType: 'updated',
      actorId: user.id,
      actorEmail: user.email ?? null,
      changes,
    })
  } catch (error) {
    console.error(error)
  }

  await notifyCertificateUpdated({
    certificateNumber: existing.certificate_number,
    recipientName: data.recipientName,
    changes,
    actorEmail: user.email ?? null,
  })

  revalidatePath('/admin/certificates')
  revalidatePath(`/admin/certificates/${id}`)
  revalidatePath(`/verify/${existing.certificate_number}`)

  return {
    success: true,
    certificate: {
      id: existing.id,
      certificate_number: existing.certificate_number,
    },
  }
}

/** Revokes a certificate. Revoked rows are locked by a database trigger. */
export async function revokeCertificate(
  id: string,
  reason: string
): Promise<CertificateActionResult> {
  const { user } = await getSession()
  if (!user) return unauthorized()

  const validatedReason = validateRevocationReason(reason)
  if (!validatedReason.ok) {
    return { success: false, error: validatedReason.message }
  }

  const existing = await getCertificateById(id)
  if (!existing) {
    return { success: false, error: 'That certificate could not be found.' }
  }
  if (existing.status === 'revoked') {
    return { success: false, error: 'This certificate is already revoked.' }
  }

  const supabase = await createClient()
  const { data: updated, error } = await supabase
    .from('certificates')
    .update({
      status: 'revoked',
      revocation_reason: validatedReason.reason,
      revoked_at: new Date().toISOString(),
      revoked_by: user.id,
      updated_by: user.id,
    })
    .eq('id', id)
    .eq('status', 'active')
    .select('id')
    .maybeSingle()

  if (error) {
    console.error('Certificate revocation failed:', error.message)
    return databaseError('The certificate could not be revoked.')
  }

  if (!updated) {
    return { success: false, error: 'This certificate is already revoked.' }
  }

  try {
    await recordCertificateEvent({
      certificateId: id,
      eventType: 'revoked',
      actorId: user.id,
      actorEmail: user.email ?? null,
      reason: validatedReason.reason,
    })
  } catch (error) {
    console.error(error)
  }

  await notifyCertificateRevoked({
    certificateNumber: existing.certificate_number,
    recipientName: existing.recipient_name,
    reason: validatedReason.reason,
    actorEmail: user.email ?? null,
  })

  revalidatePath('/admin/certificates')
  revalidatePath(`/admin/certificates/${id}`)
  revalidatePath(`/verify/${existing.certificate_number}`)

  return {
    success: true,
    certificate: {
      id: existing.id,
      certificate_number: existing.certificate_number,
    },
  }
}

/* ─── Saved Trainings & Saved Trainers Actions ──────────────────────────── */

export async function saveTrainingCourseAction(input: {
  id?: string
  name: string
  code?: string
}): Promise<{
  success: boolean
  error?: string
  course?: SavedTrainingCourse
}> {
  const { user } = await getSession()
  if (!user) return { success: false, error: 'Not authorized.' }

  const name = cleanText(input.name ?? '')
  if (name.length < 2 || name.length > CUSTOM_COURSE_NAME_MAX) {
    return {
      success: false,
      error: `Training name must be between 2 and ${CUSTOM_COURSE_NAME_MAX} characters.`,
    }
  }

  const rawCode = cleanText(input.code ?? '').toUpperCase().replace(/[^A-Z]/g, '')
  const code =
    rawCode.length >= 2 && rawCode.length <= 4 ? rawCode : suggestCourseCode(name)

  const supabase = await createClient()

  if (input.id) {
    const { data: before } = await supabase
      .from('training_courses')
      .select('id,key,code,name')
      .eq('id', input.id)
      .maybeSingle()

    const { data, error } = await supabase
      .from('training_courses')
      .update({ name, code })
      .eq('id', input.id)
      .select('id,key,code,name')
      .single()

    if (error || !data) {
      return { success: false, error: 'Could not update training name.' }
    }

    if (!before || before.name !== data.name || before.code !== data.code) {
      await notifyCourseChanged({
        courseName: data.name as string,
        courseCode: data.code as string,
        previousName: (before?.name as string) ?? null,
        action: 'updated',
        actorEmail: user.email ?? null,
      })
    }

    revalidatePath('/admin/certificates')
    revalidatePath('/admin/certificates/new')
    return { success: true, course: data as SavedTrainingCourse }
  }

  const baseKey = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48)
  const key = `${baseKey || 'training'}-${Date.now().toString(36).slice(-4)}`

  const { data, error } = await supabase
    .from('training_courses')
    .insert({ key, code, name })
    .select('id,key,code,name')
    .single()

  if (error || !data) {
    return { success: false, error: 'Could not save new training course.' }
  }

  await notifyCourseChanged({
    courseName: data.name as string,
    courseCode: data.code as string,
    action: 'added',
    actorEmail: user.email ?? null,
  })

  revalidatePath('/admin/certificates')
  revalidatePath('/admin/certificates/new')
  return { success: true, course: data as SavedTrainingCourse }
}

export async function deleteTrainingCourseAction(id: string): Promise<{
  success: boolean
  error?: string
}> {
  const { user } = await getSession()
  if (!user) return { success: false, error: 'Not authorized.' }

  const supabase = await createClient()
  const { data: existing } = await supabase
    .from('training_courses')
    .select('name,code')
    .eq('id', id)
    .maybeSingle()

  const { error } = await supabase.from('training_courses').delete().eq('id', id)
  if (error) {
    return { success: false, error: 'Could not remove training course.' }
  }

  if (existing) {
    await notifyCourseChanged({
      courseName: existing.name as string,
      courseCode: existing.code as string,
      action: 'removed',
      actorEmail: user.email ?? null,
    })
  }

  revalidatePath('/admin/certificates')
  revalidatePath('/admin/certificates/new')
  return { success: true }
}

export async function saveTrainerAction(input: {
  id?: string
  name: string
}): Promise<{
  success: boolean
  error?: string
  trainer?: SavedTrainer
}> {
  const { user } = await getSession()
  if (!user) return { success: false, error: 'Not authorized.' }

  const name = cleanText(input.name ?? '')
  if (name.length < 2 || name.length > INSTRUCTOR_NAME_MAX) {
    return {
      success: false,
      error: `Trainer name must be between 2 and ${INSTRUCTOR_NAME_MAX} characters.`,
    }
  }

  const supabase = await createClient()

  if (input.id) {
    const { data: before } = await supabase
      .from('trainers')
      .select('id,name')
      .eq('id', input.id)
      .maybeSingle()

    const { data, error } = await supabase
      .from('trainers')
      .update({ name })
      .eq('id', input.id)
      .select('id,name')
      .single()

    if (error || !data) {
      return { success: false, error: 'Could not update trainer name.' }
    }

    if (!before || before.name !== data.name) {
      await notifyTrainerChanged({
        trainerName: data.name as string,
        previousName: (before?.name as string) ?? null,
        action: 'updated',
        actorEmail: user.email ?? null,
      })
    }

    revalidatePath('/admin/certificates')
    revalidatePath('/admin/certificates/new')
    return { success: true, trainer: data as SavedTrainer }
  }

  const { data: existing } = await supabase
    .from('trainers')
    .select('id,name')
    .ilike('name', name)
    .limit(1)
    .maybeSingle()

  if (existing) {
    return { success: true, trainer: existing as SavedTrainer }
  }

  const { data, error } = await supabase
    .from('trainers')
    .insert({ name })
    .select('id,name')
    .single()

  if (error || !data) {
    return { success: false, error: 'Could not save trainer.' }
  }

  await notifyTrainerChanged({
    trainerName: data.name as string,
    action: 'added',
    actorEmail: user.email ?? null,
  })

  revalidatePath('/admin/certificates')
  revalidatePath('/admin/certificates/new')
  return { success: true, trainer: data as SavedTrainer }
}

export async function deleteTrainerAction(id: string): Promise<{
  success: boolean
  error?: string
}> {
  const { user } = await getSession()
  if (!user) return { success: false, error: 'Not authorized.' }

  const supabase = await createClient()
  const { data: existing } = await supabase
    .from('trainers')
    .select('name')
    .eq('id', id)
    .maybeSingle()

  const { error } = await supabase.from('trainers').delete().eq('id', id)
  if (error) {
    return { success: false, error: 'Could not remove saved trainer.' }
  }

  if (existing) {
    await notifyTrainerChanged({
      trainerName: existing.name as string,
      action: 'removed',
      actorEmail: user.email ?? null,
    })
  }

  revalidatePath('/admin/certificates')
  revalidatePath('/admin/certificates/new')
  return { success: true }
}
