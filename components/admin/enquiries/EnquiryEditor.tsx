'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { updateEnquiry } from '@/lib/admin/actions'
import { ENQUIRY_STATUS_LABELS, type EnquiryStatus } from '@/types/supabase'
import { Field, Select, Textarea } from '@/components/admin/ui/Field'
import Button from '@/components/admin/ui/Button'
import { Spinner } from '@/components/admin/ui/Spinner'

export function EnquiryEditor({
  id,
  status,
  notes,
}: {
  id: string
  status: EnquiryStatus
  notes: string
}) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [formStatus, setFormStatus] = useState<EnquiryStatus>(status)
  const [formNotes, setFormNotes] = useState(notes)
  const [message, setMessage] = useState<{ kind: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)

    startTransition(async () => {
      const result = await updateEnquiry({
        id,
        status: formStatus,
        notes: formNotes,
      })
      if (result.success) {
        setMessage({ kind: 'success', text: 'Enquiry updated.' })
        router.refresh()
      } else {
        setMessage({ kind: 'error', text: result.error ?? 'Update failed.' })
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Status">
          <Select value={formStatus} onChange={(e) => setFormStatus(e.target.value as EnquiryStatus)}>
            {Object.entries(ENQUIRY_STATUS_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Internal notes" hint="Visible only to VerifSafe staff.">
        <Textarea
          rows={4}
          value={formNotes}
          onChange={(e) => setFormNotes(e.target.value)}
          placeholder="Add follow-up notes, contact attempts, next steps…"
        />
      </Field>

      {message && (
        <p
          role="status"
          className={`rounded-md border px-3 py-2 text-sm ${
            message.kind === 'success'
              ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
              : 'border-red-200 bg-red-50 text-red-700'
          }`}
        >
          {message.text}
        </p>
      )}

      <div className="flex items-center gap-3">
        <Button type="submit" size="md" disabled={isPending}>
          {isPending ? <Spinner /> : null}
          {isPending ? 'Saving…' : 'Save changes'}
        </Button>
      </div>
    </form>
  )
}