/**
 * Supabase data types — VerifSafe foundation.
 *
 * Centralized so the public website data layer and the admin panel
 * share a single source of truth.
 */

export type EnquiryStatus = 'new' | 'contacted' | 'in_progress' | 'completed' | 'archived'

export const ENQUIRY_STATUS_LABELS: Record<EnquiryStatus, string> = {
  new: 'New',
  contacted: 'Contacted',
  in_progress: 'In Progress',
  completed: 'Completed',
  archived: 'Archived',
}

export const ENQUIRY_STATUS_COLORS: Record<EnquiryStatus, string> = {
  new: 'bg-blue-50 text-blue-700 border-blue-200',
  contacted: 'bg-amber-50 text-amber-700 border-amber-200',
  in_progress: 'bg-purple-50 text-purple-700 border-purple-200',
  completed: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  archived: 'bg-gray-50 text-gray-500 border-gray-200',
}

export interface GalleryItem {
  id: string
  title: string
  description: string | null
  category: string | null
  /** Path of the image inside the "gallery" Storage bucket. */
  image_path: string
  alt_text: string
  caption: string | null
  sort_order: number
  published: boolean
  image_width: number | null
  image_height: number | null
  image_file_size: number | null
  image_format: string | null
  created_at: string
  updated_at: string
}

/** Minimal gallery item shape for the public website. */
export interface PublicGalleryItem {
  id: string
  title: string
  description: string | null
  category: string | null
  image_url: string
  alt_text: string
  caption: string | null
  sort_order: number
}

export interface Enquiry {
  id: string
  name: string
  phone: string | null
  email: string | null
  service: string | null
  message: string
  status: EnquiryStatus
  /** Internal admin notes. Never writable by anonymous visitors. */
  notes: string | null
  created_at: string
  updated_at: string
}

/**
 * Fields accepted from the public contact form.
 * status and notes are intentionally absent — they are managed by admins.
 */
export interface NewEnquiry {
  name: string
  phone?: string
  email?: string
  service?: string
  message: string
}

export interface MediaItem {
  id: string
  file_name: string
  file_path: string
  file_size: number | null
  width: number | null
  height: number | null
  format: string | null
  alt_text: string
  caption: string | null
  category: string | null
  reference: string | null
  uploaded_by: string | null
  created_at: string
}

/* ─── Certificates ──────────────────────────────────────────────────────── */

export type CertificateStatus = 'active' | 'revoked'

/** Status shown publicly; expiry is calculated from expiry_date. */
export type CertificateEffectiveStatus = 'valid' | 'expired' | 'revoked'

export type CertificateEventType = 'issued' | 'updated' | 'revoked' | 'downloaded'

export interface Certificate {
  id: string
  certificate_number: string
  course_code: string
  course_key: string
  course_name: string
  recipient_name: string
  training_date: string
  duration_value: number
  duration_unit: 'hours' | 'days' | 'weeks' | 'months'
  instructor_name: string
  description: string
  issue_date: string
  expiry_date: string | null
  status: CertificateStatus
  revocation_reason: string | null
  revoked_at: string | null
  revoked_by: string | null
  pdf_storage_path: string | null
  idempotency_key: string | null
  created_by: string | null
  updated_by: string | null
  created_at: string
  updated_at: string
}

export interface CertificateEvent {
  id: string
  certificate_id: string
  event_type: CertificateEventType
  actor_id: string | null
  actor_email: string | null
  reason: string | null
  changes: Record<string, unknown>
  created_at: string
}

export interface SavedTrainingCourse {
  id: string
  key: string
  code: string
  name: string
  created_at?: string
  updated_at?: string
}

export interface SavedTrainer {
  id: string
  name: string
  created_at?: string
  updated_at?: string
}

/** The only certificate fields exposed by verify_certificate(). */
export interface CertificateVerification {
  certificate_number: string
  recipient_name: string
  course_name: string
  training_date: string
  duration_value: number
  duration_unit: 'hours' | 'days' | 'weeks' | 'months'
  issue_date: string
  expiry_date: string | null
  status: CertificateEffectiveStatus
}
