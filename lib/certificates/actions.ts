'use server'

import { revalidatePath } from 'next/cache'
import { getSession } from '@/lib/admin/auth'
import { createClient } from '@/lib/supabase/server'
import { recordCertificateEvent } from '@/lib/certificates/audit'
import {
  CERTIFICATE_COURSES,
  CUSTOM_COURSE_KEY,
  findCourse,
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
import type { Certificate } from '@/types/supabase'

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

/** Issues a certificate with an atomic, permanent number. */
export async function createCertificate(
  input: CertificateFormInput
): Promise<CertificateActionResult> {
  const { user } = await getSession()
  if (!user) return unauthorized()

  const validated = validateCertificateInput(input, { mode: 'create' })
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

  const supabase = await createClient()
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
    // The certificate is already issued. A missing audit entry is logged for
    // operators but must not cause the admin to retry and create a duplicate.
    console.error(error)
  }

  revalidatePath('/admin/certificates')
  revalidatePath('/admin/dashboard')

  return {
    success: true,
    certificate: {
      id: inserted.id as string,
      certificate_number: inserted.certificate_number as string,
    },
  }
}

/** Corrects editable details. Number, course and issue date are permanent. */
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

  // Course identity is locked after issuance. Resolve it from the stored row so
  // validation always checks the certificate that actually exists, even for
  // older records whose course_key was empty.
  const presetCourse =
    findCourse(existing.course_key) ??
    CERTIFICATE_COURSES.find((course) => course.name === existing.course_name)
  const courseKey = presetCourse?.key ?? CUSTOM_COURSE_KEY

  const validated = validateCertificateInput(
    {
      ...input,
      // These fields are fixed after issuance and are never taken from the form.
      courseKey,
      customCourseName: existing.course_name,
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
    // Only one concurrent revocation can win; the loser must not overwrite
    // the recorded reason.
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
