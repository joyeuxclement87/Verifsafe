import 'server-only'
import { createClient } from '@/lib/supabase/server'
import type { CertificateEventType } from '@/types/supabase'

/** Append-only audit entry. Failures are surfaced to the caller. */
export async function recordCertificateEvent(input: {
  certificateId: string
  eventType: CertificateEventType
  actorId?: string | null
  actorEmail?: string | null
  reason?: string | null
  changes?: Record<string, unknown>
}): Promise<void> {
  const supabase = await createClient()
  const { error } = await supabase.from('certificate_events').insert({
    certificate_id: input.certificateId,
    event_type: input.eventType,
    actor_id: input.actorId ?? null,
    actor_email: input.actorEmail ?? null,
    reason: input.reason ?? null,
    changes: input.changes ?? {},
  })

  if (error) {
    throw new Error(`Failed to record certificate audit event: ${error.message}`)
  }
}
