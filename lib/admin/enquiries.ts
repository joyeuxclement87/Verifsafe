import { createClient } from '@/lib/supabase/server'
import { ENQUIRY_STATUS_LABELS, type Enquiry, type EnquiryStatus } from '@/types/supabase'

export const ENQUIRY_LIMIT = 50

const enquiryColumns =
  'id,name,phone,email,service,message,status,notes,created_at,updated_at'

export async function getEnquiries(options?: {
  search?: string
  status?: string
  limit?: number
}) {
  const supabase = await createClient()
  let query = supabase.from('enquiries').select(enquiryColumns)

  if (options?.status && options.status !== 'all') {
    query = query.eq('status', options.status)
  }

  if (options?.search && options.search.trim()) {
    const term = `%${options.search.trim()}%`
    query = query.or(`name.ilike.${term},email.ilike.${term},phone.ilike.${term},service.ilike.${term}`)
  }

  const { data, error } = await query
    .order('created_at', { ascending: false })
    .limit(options?.limit ?? ENQUIRY_LIMIT)

  if (error) {
    throw new Error(`Failed to fetch enquiries: ${error.message}`)
  }

  return (data ?? []) as Enquiry[]
}

export async function getEnquiry(id: string): Promise<Enquiry> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('enquiries')
    .select(enquiryColumns)
    .eq('id', id)
    .single()

  if (error) {
    throw new Error(`Failed to fetch enquiry: ${error.message}`)
  }

  return data as Enquiry
}

export async function getStatusCounts() {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('enquiries')
    .select('status')

  if (error) {
    throw new Error(`Failed to fetch enquiry counts: ${error.message}`)
  }

  const counts: Record<EnquiryStatus, number> = {
    new: 0,
    contacted: 0,
    in_progress: 0,
    completed: 0,
    archived: 0,
  }

  ;(data ?? []).forEach((row) => {
    if (row.status in counts) {
      counts[row.status as EnquiryStatus] += 1
    }
  })

  return { counts, total: data?.length ?? 0, hasAny: (data?.length ?? 0) > 0 }
}

export { ENQUIRY_STATUS_LABELS }