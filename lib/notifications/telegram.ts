import 'server-only'

/**
 * VerifSafe — Shared Telegram Notification Service.
 *
 * Reuses the existing Telegram bot credentials (TELEGRAM_BOT_TOKEN and
 * TELEGRAM_CHAT_ID) and plain-text formatting conventions from the public
 * enquiry alert workflow across both website enquiries and certificate
 * management operations.
 */

export interface TelegramSendOptions {
  /** Optional idempotency/deduplication key to prevent duplicate alerts on retries. */
  dedupeKey?: string
  /** Override fetch implementation for unit/integration testing. */
  fetchImpl?: typeof fetch
}

export interface TelegramSendResult {
  sent: boolean
  skipped?: 'unconfigured' | 'duplicate'
  error?: string
}

const DEDUPE_TTL_MS = 5 * 60 * 1000
const sentDedupeCache = new Map<string, number>()

function pruneDedupeCache(now: number) {
  for (const [key, timestamp] of sentDedupeCache.entries()) {
    if (now - timestamp > DEDUPE_TTL_MS) {
      sentDedupeCache.delete(key)
    }
  }
}

export function clearTelegramDedupeCacheForTests() {
  sentDedupeCache.clear()
}

export function formatTelegramTimestamp(date: Date = new Date()): string {
  return date.toLocaleString('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Africa/Kigali',
  })
}

function cleanLineValue(value: unknown, fallback = 'N/A'): string {
  if (value === null || value === undefined) return fallback
  const text = String(value).replace(/\s+/g, ' ').trim()
  return text.length > 0 ? text : fallback
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Low-level Telegram message dispatcher with:
 * - Server-side credential lookup (TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID)
 * - In-memory deduplication by `dedupeKey`
 * - Single bounded retry on transient network / 429 / 5xx failures
 * - Non-throwing error isolation so callers never fail when Telegram is down
 */
export async function sendTelegramMessage(
  text: string,
  options: TelegramSendOptions = {}
): Promise<TelegramSendResult> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim()
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim()

  if (!botToken || !chatId) {
    return { sent: false, skipped: 'unconfigured' }
  }

  const now = Date.now()
  pruneDedupeCache(now)

  const dedupeKey = options.dedupeKey?.trim()
  if (dedupeKey) {
    const previous = sentDedupeCache.get(dedupeKey)
    if (previous !== undefined && now - previous <= DEDUPE_TTL_MS) {
      return { sent: false, skipped: 'duplicate' }
    }
  }

  const fetchFn = options.fetchImpl ?? fetch
  const endpoint = `https://api.telegram.org/bot${botToken}/sendMessage`
  const maxAttempts = 2
  let lastError = 'Unknown Telegram error'

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const response = await fetchFn(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          disable_web_page_preview: true,
        }),
      })

      if (response.ok) {
        if (dedupeKey) {
          sentDedupeCache.set(dedupeKey, Date.now())
        }
        return { sent: true }
      }

      const status = response.status
      const errorText = await response.text().catch(() => `HTTP ${status}`)
      lastError = `Telegram send failed (${status}): ${errorText}`

      // Only retry on rate-limit (429) or server errors (5xx)
      const isRetryable = status === 429 || status >= 500
      if (!isRetryable || attempt === maxAttempts) {
        break
      }
    } catch (error) {
      lastError =
        error instanceof Error ? error.message : 'Network error contacting Telegram'
      if (attempt === maxAttempts) {
        break
      }
    }

    await sleep(350)
  }

  console.error('Telegram notification failed:', lastError)
  return { sent: false, error: lastError }
}

/* ─── Website Enquiry Handler (existing workflow) ───────────────────────── */

export async function sendEnquiryTelegramAlert(
  payload: {
    name: string
    email: string
    phone: string
    service: string
    message: string
  },
  options?: TelegramSendOptions
): Promise<TelegramSendResult> {
  const timestamp = formatTelegramTimestamp()
  const text = [
    '📩 New Website Enquiry',
    '',
    `Client: ${payload.name}`,
    `Email: ${payload.email || 'N/A'}`,
    `Phone: ${payload.phone || 'N/A'}`,
    `Service: ${payload.service}`,
    '',
    'Message:',
    payload.message,
    '',
    `Received: ${timestamp}`,
  ].join('\n')

  return sendTelegramMessage(text, options)
}

/* ─── Certificate Management Event Handlers ─────────────────────────────── */

export async function notifyCertificateIssued(
  payload: {
    certificateNumber: string
    recipientName: string
    courseName: string
    actorEmail?: string | null
  },
  options?: TelegramSendOptions
): Promise<TelegramSendResult> {
  const certNo = cleanLineValue(payload.certificateNumber)
  const text = [
    '🎓 Certificate Issued',
    '',
    `Certificate ID: ${certNo}`,
    `Recipient: ${cleanLineValue(payload.recipientName)}`,
    `Course: ${cleanLineValue(payload.courseName)}`,
    `Issued by: ${cleanLineValue(payload.actorEmail, 'Administrator')}`,
    '',
    `Timestamp: ${formatTelegramTimestamp()}`,
  ].join('\n')

  return sendTelegramMessage(text, {
    dedupeKey: `cert-issued:${certNo}`,
    ...options,
  })
}

export async function notifyCertificateRevoked(
  payload: {
    certificateNumber: string
    recipientName: string
    reason: string
    actorEmail?: string | null
  },
  options?: TelegramSendOptions
): Promise<TelegramSendResult> {
  const certNo = cleanLineValue(payload.certificateNumber)
  const text = [
    '🚫 Certificate Revoked',
    '',
    `Certificate ID: ${certNo}`,
    `Recipient: ${cleanLineValue(payload.recipientName)}`,
    `Reason: ${cleanLineValue(payload.reason)}`,
    `Revoked by: ${cleanLineValue(payload.actorEmail, 'Administrator')}`,
    '',
    `Timestamp: ${formatTelegramTimestamp()}`,
  ].join('\n')

  return sendTelegramMessage(text, {
    dedupeKey: `cert-revoked:${certNo}`,
    ...options,
  })
}

const FIELD_LABELS: Record<string, string> = {
  recipient_name: 'Recipient',
  course_name: 'Course',
  training_date: 'Training date',
  duration_value: 'Duration',
  duration_unit: 'Duration unit',
  instructor_name: 'Trainer',
  description: 'Completion wording',
  expiry_date: 'Expiry date',
}

export async function notifyCertificateUpdated(
  payload: {
    certificateNumber: string
    recipientName: string
    changes: Record<string, { from: unknown; to: unknown }>
    actorEmail?: string | null
  },
  options?: TelegramSendOptions
): Promise<TelegramSendResult> {
  const certNo = cleanLineValue(payload.certificateNumber)
  const changeEntries = Object.entries(payload.changes)
  if (changeEntries.length === 0) {
    return { sent: false, skipped: 'duplicate' }
  }

  const summaryLines = changeEntries.map(([field, diff]) => {
    const label = FIELD_LABELS[field] ?? field.replaceAll('_', ' ')
    if (field === 'description') {
      return `• ${label}: updated`
    }
    const fromVal = cleanLineValue(diff.from, 'None')
    const toVal = cleanLineValue(diff.to, 'None')
    return `• ${label}: ${fromVal} → ${toVal}`
  })

  const signatureHash = summaryLines.join('|')
  const text = [
    '✏️ Certificate Updated',
    '',
    `Certificate ID: ${certNo}`,
    `Recipient: ${cleanLineValue(payload.recipientName)}`,
    `Updated by: ${cleanLineValue(payload.actorEmail, 'Administrator')}`,
    '',
    'Changes:',
    ...summaryLines,
    '',
    `Timestamp: ${formatTelegramTimestamp()}`,
  ].join('\n')

  return sendTelegramMessage(text, {
    dedupeKey: `cert-updated:${certNo}:${signatureHash}`,
    ...options,
  })
}

export async function notifyCourseChanged(
  payload: {
    courseName: string
    courseCode?: string | null
    previousName?: string | null
    action: 'added' | 'updated' | 'removed'
    actorEmail?: string | null
  },
  options?: TelegramSendOptions
): Promise<TelegramSendResult> {
  const actionLabel =
    payload.action === 'added'
      ? 'Added'
      : payload.action === 'updated'
        ? 'Updated'
        : 'Removed'
  const codeSuffix = payload.courseCode ? ` (${payload.courseCode})` : ''
  const lines = [
    `📘 Training Course ${actionLabel}`,
    '',
    `Course: ${cleanLineValue(payload.courseName)}${codeSuffix}`,
    ...(payload.previousName && payload.previousName !== payload.courseName
      ? [`Previous name: ${cleanLineValue(payload.previousName)}`]
      : []),
    `Action: Course ${payload.action}`,
    `Admin: ${cleanLineValue(payload.actorEmail, 'Administrator')}`,
    '',
    `Timestamp: ${formatTelegramTimestamp()}`,
  ]

  return sendTelegramMessage(lines.join('\n'), {
    dedupeKey: `course-${payload.action}:${cleanLineValue(payload.courseName)}:${payload.courseCode ?? ''}`,
    ...options,
  })
}

export async function notifyTrainerChanged(
  payload: {
    trainerName: string
    previousName?: string | null
    action: 'added' | 'updated' | 'removed'
    actorEmail?: string | null
  },
  options?: TelegramSendOptions
): Promise<TelegramSendResult> {
  const actionLabel =
    payload.action === 'added'
      ? 'Added'
      : payload.action === 'updated'
        ? 'Updated'
        : 'Removed'
  const lines = [
    `👤 Trainer ${actionLabel}`,
    '',
    `Trainer: ${cleanLineValue(payload.trainerName)}`,
    ...(payload.previousName && payload.previousName !== payload.trainerName
      ? [`Previous name: ${cleanLineValue(payload.previousName)}`]
      : []),
    `Action: Trainer ${payload.action}`,
    `Admin: ${cleanLineValue(payload.actorEmail, 'Administrator')}`,
    '',
    `Timestamp: ${formatTelegramTimestamp()}`,
  ]

  return sendTelegramMessage(lines.join('\n'), {
    dedupeKey: `trainer-${payload.action}:${cleanLineValue(payload.trainerName)}`,
    ...options,
  })
}

export async function notifyTemplateChanged(
  payload: {
    templateName: string
    action: 'created' | 'updated'
    summary?: string | null
    actorEmail?: string | null
  },
  options?: TelegramSendOptions
): Promise<TelegramSendResult> {
  const actionLabel = payload.action === 'created' ? 'Created' : 'Updated'
  const lines = [
    `🎨 Certificate Template ${actionLabel}`,
    '',
    `Template: ${cleanLineValue(payload.templateName)}`,
    `Action: Template ${payload.action}`,
    ...(payload.summary ? [`Details: ${cleanLineValue(payload.summary)}`] : []),
    `Admin: ${cleanLineValue(payload.actorEmail, 'Administrator')}`,
    '',
    `Timestamp: ${formatTelegramTimestamp()}`,
  ]

  return sendTelegramMessage(lines.join('\n'), {
    dedupeKey: `template-${payload.action}:${cleanLineValue(payload.templateName)}:${payload.summary ?? ''}`,
    ...options,
  })
}

export async function notifyCertificateConfigChanged(
  payload: {
    setting: string
    summary: string
    actorEmail?: string | null
  },
  options?: TelegramSendOptions
): Promise<TelegramSendResult> {
  const text = [
    '⚙️ Certificate Configuration Updated',
    '',
    `Setting: ${cleanLineValue(payload.setting)}`,
    `Change: ${cleanLineValue(payload.summary)}`,
    `Admin: ${cleanLineValue(payload.actorEmail, 'Administrator')}`,
    '',
    `Timestamp: ${formatTelegramTimestamp()}`,
  ].join('\n')

  return sendTelegramMessage(text, {
    dedupeKey: `cert-config:${cleanLineValue(payload.setting)}:${cleanLineValue(payload.summary)}`,
    ...options,
  })
}
