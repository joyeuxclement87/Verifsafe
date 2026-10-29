import { site } from '@/lib/site'
import {
  DURATION_UNIT_ABBREVIATIONS,
  type DurationUnit,
} from '@/lib/certificates/constants'
import type {
  Certificate,
  CertificateEffectiveStatus,
} from '@/types/supabase'

const MONTHS_SHORT = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
] as const

const MONTHS_LONG = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const

function parseDateParts(iso: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso)
  if (!match) return null
  const year = Number(match[1])
  const month = Number(match[2])
  const day = Number(match[3])
  if (month < 1 || month > 12 || day < 1 || day > 31) return null
  return { year, month, day }
}

/** `2026-10-29` → `29 OCT 2026` (as printed on the certificate). */
export function formatCertificateDate(iso: string | null | undefined): string {
  if (!iso) return '—'
  const parts = parseDateParts(iso)
  if (!parts) return '—'
  return `${String(parts.day).padStart(2, '0')} ${MONTHS_SHORT[parts.month - 1]} ${parts.year}`
}

/** `2026-10-29` → `29 October 2026` (for public and admin reading surfaces). */
export function formatCertificateDateLong(iso: string | null | undefined): string {
  if (!iso) return '—'
  const parts = parseDateParts(iso)
  if (!parts) return '—'
  return `${parts.day} ${MONTHS_LONG[parts.month - 1]} ${parts.year}`
}

export function formatDuration(value: number, unit: string): string {
  const abbreviation =
    DURATION_UNIT_ABBREVIATIONS[unit as DurationUnit] ?? unit.toUpperCase()
  return `${value} ${abbreviation}`
}

/**
 * Default permanent verification base URL.
 *
 * Intentionally decoupled from `window.location`, `VERCEL_URL`, `NEXT_PUBLIC_SITE_URL`
 * or any current hosting provider address so printed QR codes remain permanent across
 * hosting migrations or domain changes.
 */
export const DEFAULT_PERMANENT_VERIFICATION_URL = 'https://verifsafe.com/verify'

const FORBIDDEN_VERIFICATION_HOST_PATTERNS = [
  /^localhost$/i,
  /^127\.\d+\.\d+\.\d+$/,
  /^0\.0\.0\.0$/,
  /^\[?::1\]?$/,
  /\.local$/i,
  /\.vercel\.app$/i,
  /\.netlify\.app$/i,
  /\.pages\.dev$/i,
  /\.onrender\.com$/i,
  /\.railway\.app$/i,
  /\.ngrok(-free)?\.app$/i,
  /\.supabase\.co$/i,
]

/**
 * Validates that a candidate verification base URL is a permanent public HTTPS
 * endpoint and never a localhost address, preview deployment URL, or storage/PDF link.
 */
export function isPermanentVerificationBaseUrl(candidate: string): boolean {
  try {
    const parsed = new URL(candidate.trim())
    if (parsed.protocol !== 'https:') return false

    const host = parsed.hostname.toLowerCase()
    if (FORBIDDEN_VERIFICATION_HOST_PATTERNS.some((pattern) => pattern.test(host))) {
      return false
    }

    const pathname = parsed.pathname.toLowerCase()
    if (pathname.endsWith('.pdf') || pathname.includes('/storage/v1/')) {
      return false
    }

    return true
  } catch {
    return false
  }
}

/**
 * Resolves the permanent verification base URL (without trailing slash).
 *
 * Reads `NEXT_PUBLIC_CERTIFICATE_VERIFICATION_URL` (or `CERTIFICATE_VERIFICATION_URL`
 * on the server) when configured with a valid permanent HTTPS domain; otherwise
 * falls back to `https://verifsafe.com/verify`.
 */
export function getVerificationBaseUrl(overrideUrl?: string): string {
  const configured =
    overrideUrl?.trim() ||
    process.env.NEXT_PUBLIC_CERTIFICATE_VERIFICATION_URL?.trim() ||
    process.env.CERTIFICATE_VERIFICATION_URL?.trim() ||
    ''

  if (configured && isPermanentVerificationBaseUrl(configured)) {
    const parsed = new URL(configured)
    const cleanPath = parsed.pathname.replace(/\/+$/, '')

    // If a root domain like https://verifsafe.com was provided, ensure /verify path is used.
    if (!cleanPath) {
      return `${parsed.origin}/verify`
    }
    return `${parsed.origin}${cleanPath}`
  }

  return DEFAULT_PERMANENT_VERIFICATION_URL
}

export function getSiteUrl(): string {
  return site.url.replace(/\/$/, '')
}

/**
 * Full permanent HTTPS URL encoded into every certificate QR code.
 * Example: `https://verifsafe.com/verify/VFS-FA-2026-000001`
 */
export function certificateVerificationUrl(
  certificateNumber: string,
  baseOverride?: string
): string {
  const normalizedId = certificateNumber.trim().toUpperCase()
  return `${getVerificationBaseUrl(baseOverride)}/${encodeURIComponent(normalizedId)}`
}

/**
 * Extracts a normalized certificate ID from user input — whether the visitor
 * typed `VFS-FA-2026-000001` directly or pasted a full verification link.
 */
export function extractCertificateIdFromInput(raw: string): string {
  const trimmed = raw.trim()
  if (!trimmed) return ''

  const matchInText = /\b(VFS-[A-Z]{2,4}-\d{4}-\d{6})\b/i.exec(trimmed)
  if (matchInText) {
    return matchInText[1].toUpperCase()
  }

  if (/^https?:\/\//i.test(trimmed)) {
    try {
      const parsed = new URL(trimmed)
      const queryId =
        parsed.searchParams.get('id') ?? parsed.searchParams.get('certificateId')
      if (queryId?.trim()) {
        return queryId.trim().toUpperCase()
      }
      const segments = parsed.pathname.split('/').filter(Boolean)
      const lastSegment = segments[segments.length - 1]
      if (lastSegment && lastSegment.toLowerCase() !== 'verify') {
        return decodeURIComponent(lastSegment).trim().toUpperCase()
      }
    } catch {
      // Fall through to raw uppercase normalization.
    }
  }

  return trimmed.toUpperCase()
}

export function todayIsoDate(): string {
  return new Date().toISOString().slice(0, 10)
}

export type { CertificateEffectiveStatus }

export function getCertificateEffectiveStatus(
  certificate: Pick<Certificate, 'status' | 'expiry_date'>,
  today = todayIsoDate()
): CertificateEffectiveStatus {
  if (certificate.status === 'revoked') return 'revoked'
  if (certificate.expiry_date && certificate.expiry_date < today) return 'expired'
  return 'valid'
}

export const CERTIFICATE_EFFECTIVE_STATUS_LABELS: Record<
  CertificateEffectiveStatus,
  string
> = {
  valid: 'Valid',
  expired: 'Expired',
  revoked: 'Revoked',
}

export const CERTIFICATE_EFFECTIVE_STATUS_COLORS: Record<
  CertificateEffectiveStatus,
  string
> = {
  valid: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  expired: 'border-amber-200 bg-amber-50 text-amber-700',
  revoked: 'border-red-200 bg-red-50 text-red-700',
}
