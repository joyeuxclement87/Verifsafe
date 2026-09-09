import { createClient } from '@/lib/supabase/server'
import type { Enquiry, NewEnquiry } from '@/types/supabase'

/**
 * Records a website enquiry from the public contact form.
 *
 * Uses the anon-key server client so Row Level Security applies: visitors
 * can insert a new enquiry with `status = 'new'` and empty `notes`, but can
 * never read, modify or delete enquiries, nor forge their status or notes.
 */
export async function createEnquiry(input: NewEnquiry): Promise<Enquiry> {
  const supabase = await createClient()

  const { error } = await supabase.from('enquiries').insert({
    name: input.name,
    message: input.message,
    phone: input.phone ?? null,
    email: input.email ?? null,
    service: input.service ?? null,
  })

  if (error) {
    throw new Error(`Failed to create enquiry: ${error.message}`)
  }

  /*
   * No read-back: anonymous visitors have no SELECT policy on enquiries
   * (they must never read the inbox). PostgREST gates INSERT...RETURNING
   * behind SELECT RLS, so reading the row back would error. The response
   * model is built from the submitted data instead; the real row lives in
   * Postgres and is only visible to admins.
   */
  return {
    id: crypto.randomUUID(),
    name: input.name,
    phone: input.phone ?? null,
    email: input.email ?? null,
    service: input.service ?? null,
    message: input.message,
    status: 'new',
    notes: '',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }
}
