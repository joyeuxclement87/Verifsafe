'use client'

import { useEffect, useId, useRef, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Download,
  Loader2,
  Refresh,
  Wand,
} from 'tabler-icons-react'
import {
  buildDefaultDescription,
  COURSE_OPTIONS,
  CUSTOM_COURSE_KEY,
  DESCRIPTION_MAX,
  findCourse,
} from '@/lib/certificates/constants'
import { todayIsoDate } from '@/lib/certificates/format'
import {
  createCertificate,
  updateCertificate,
  type CertificateActionResult,
} from '@/lib/certificates/actions'
import { Field, Input, Select, Textarea } from '@/components/admin/ui/Field'
import Button from '@/components/admin/ui/Button'
import { Spinner } from '@/components/admin/ui/Spinner'

export interface CertificateFormInitial {
  id: string
  certificateNumber: string
  recipientName: string
  courseKey: string
  courseName: string
  trainingDate: string
  durationValue: number
  durationUnit: string
  instructorName: string
  description: string
  issueDate: string
  expiryDate: string | null
}

interface FormState {
  recipientName: string
  courseKey: string
  customCourseName: string
  trainingDate: string
  durationValue: string
  durationUnit: string
  instructorName: string
  description: string
  issueDate: string
  expiryDate: string
}

function courseNameFor(courseKey: string, customCourseName: string): string {
  if (courseKey === CUSTOM_COURSE_KEY) return customCourseName.trim()
  return findCourse(courseKey)?.name ?? ''
}

function buildInitialState(initial?: CertificateFormInitial): FormState {
  const today = todayIsoDate()
  if (initial) {
    const isCustom = initial.courseKey === CUSTOM_COURSE_KEY || initial.courseKey === ''
    return {
      recipientName: initial.recipientName,
      courseKey: isCustom ? CUSTOM_COURSE_KEY : initial.courseKey,
      customCourseName: isCustom ? initial.courseName : '',
      trainingDate: initial.trainingDate,
      durationValue: String(initial.durationValue),
      durationUnit: initial.durationUnit,
      instructorName: initial.instructorName,
      description: initial.description,
      issueDate: initial.issueDate,
      expiryDate: initial.expiryDate ?? '',
    }
  }

  const firstCourse = COURSE_OPTIONS[0]?.value ?? ''
  const firstName = courseNameFor(firstCourse, '')
  return {
    recipientName: '',
    courseKey: firstCourse,
    customCourseName: '',
    trainingDate: today,
    durationValue: '8',
    durationUnit: 'hours',
    instructorName: '',
    description: firstName ? buildDefaultDescription(firstName) : '',
    issueDate: today,
    expiryDate: '',
  }
}

export function CertificateForm({
  mode,
  initial,
}: {
  mode: 'create' | 'edit'
  initial?: CertificateFormInitial
}) {
  const router = useRouter()
  const [form, setForm] = useState<FormState>(() => buildInitialState(initial))
  // Tracks whether the admin has taken ownership of the description. While it
  // is untouched, changing the course keeps the suggested wording in sync.
  const [descriptionTouched, setDescriptionTouched] = useState(() => Boolean(initial))
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [formError, setFormError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()
  const [idempotencyKey] = useState(() => {
    if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
      return crypto.randomUUID()
    }
    return ''
  })
  const baseId = useId()

  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [previewLoading, setPreviewLoading] = useState(true)
  const [previewError, setPreviewError] = useState<string | null>(null)
  const latestPreviewUrl = useRef<string | null>(null)

  const lockedCourse = mode === 'edit'
  const lockedIssueDate = mode === 'edit'
  const today = todayIsoDate()
  const currentCourseName = courseNameFor(form.courseKey, form.customCourseName)
  const suggestedDescription = currentCourseName
    ? buildDefaultDescription(currentCourseName)
    : ''

  useEffect(() => {
    const controller = new AbortController()
    const timer = window.setTimeout(async () => {
      setPreviewLoading(true)
      setPreviewError(null)

      const body = new FormData()
      body.set('recipientName', form.recipientName)
      body.set('courseKey', form.courseKey)
      body.set('customCourseName', form.customCourseName)
      body.set('trainingDate', form.trainingDate)
      body.set('durationValue', form.durationValue)
      body.set('durationUnit', form.durationUnit)
      body.set('instructorName', form.instructorName)
      body.set('description', form.description)
      body.set('issueDate', form.issueDate)
      if (mode === 'edit' && initial) {
        body.set('certificateId', initial.id)
      }

      try {
        const response = await fetch('/api/certificates/preview', {
          method: 'POST',
          body,
          signal: controller.signal,
        })

        if (!response.ok) {
          setPreviewLoading(false)
          setPreviewError('The preview could not be updated. Your details are safe.')
          return
        }

        const blob = await response.blob()
        const url = URL.createObjectURL(blob)
        if (latestPreviewUrl.current) {
          URL.revokeObjectURL(latestPreviewUrl.current)
        }
        latestPreviewUrl.current = url
        setPreviewUrl(url)
        setPreviewLoading(false)
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') return
        setPreviewLoading(false)
        setPreviewError('The preview could not be updated. Your details are safe.')
      }
    }, 500)

    return () => {
      window.clearTimeout(timer)
      controller.abort()
    }
  }, [form, mode, initial])

  useEffect(() => {
    return () => {
      if (latestPreviewUrl.current) {
        URL.revokeObjectURL(latestPreviewUrl.current)
      }
    }
  }, [])

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    if (key === 'description') setDescriptionTouched(true)
    setForm((previous) => ({ ...previous, [key]: value }))
  }

  function handleCourseChange(nextCourseKey: string) {
    setForm((previous) => {
      const nextName = courseNameFor(nextCourseKey, previous.customCourseName)
      return {
        ...previous,
        courseKey: nextCourseKey,
        description:
          !descriptionTouched && nextName
            ? buildDefaultDescription(nextName)
            : previous.description,
      }
    })
  }

  function handleCustomCourseChange(value: string) {
    setForm((previous) => ({
      ...previous,
      customCourseName: value,
      description: descriptionTouched
        ? previous.description
        : value.trim()
          ? buildDefaultDescription(value.trim())
          : '',
    }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormError(null)
    setFieldErrors({})

    const input = {
      recipientName: form.recipientName,
      courseKey: form.courseKey,
      customCourseName: form.customCourseName,
      trainingDate: form.trainingDate,
      durationValue: form.durationValue,
      durationUnit: form.durationUnit,
      instructorName: form.instructorName,
      description: form.description,
      issueDate: form.issueDate,
      expiryDate: form.expiryDate,
      idempotencyKey: idempotencyKey || undefined,
    }

    startTransition(async () => {
      let result: CertificateActionResult
      try {
        result =
          mode === 'create'
            ? await createCertificate(input)
            : await updateCertificate(initial!.id, input)
      } catch {
        setFormError('Something went wrong while saving. Please try again.')
        return
      }

      if (!result.success) {
        setFormError(result.error ?? 'The certificate could not be saved.')
        setFieldErrors(result.fieldErrors ?? {})
        return
      }

      if (result.certificate) {
        router.push(
          `/admin/certificates/${result.certificate.id}${
            mode === 'create' ? '?issued=1' : '?updated=1'
          }`
        )
        router.refresh()
      }
    })
  }

  return (
    <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)]">
      <form onSubmit={handleSubmit} noValidate>
        <div className="overflow-hidden rounded-lg border border-line bg-white">
          <div className="border-b border-line px-5 py-4 sm:px-6">
            <p className="text-admin-label">Certificate record</p>
            <p className="mt-1 text-sm text-muted">
              Fields marked with <span className="text-brand">*</span> are required.
            </p>
          </div>

          {formError && (
            <div
              role="alert"
              className="mx-5 mt-5 rounded-md border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-700 sm:mx-6"
            >
              {formError}
            </div>
          )}

          <section className="space-y-5 px-5 py-6 sm:px-6">
            <div>
              <h2 className="text-sm font-semibold tracking-tight text-ink">Recipient & course</h2>
              <p className="mt-0.5 text-xs text-muted">Who completed the training and what they completed.</p>
            </div>

            <Field
              label="Recipient full name"
              required
              error={fieldErrors.recipientName}
              errorId={`${baseId}-recipient`}
            >
              <Input
                value={form.recipientName}
                onChange={(event) => updateField('recipientName', event.target.value)}
                placeholder="e.g. Joyeux Clement Tuyishimire"
                autoComplete="name"
                maxLength={120}
                required
                aria-invalid={Boolean(fieldErrors.recipientName)}
                aria-describedby={fieldErrors.recipientName ? `${baseId}-recipient` : undefined}
                className={fieldErrors.recipientName ? 'border-brand' : ''}
              />
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Training course"
                required
                hint={lockedCourse ? 'Course is fixed after issuance.' : undefined}
                error={fieldErrors.courseKey}
                errorId={`${baseId}-course`}
              >
                <Select
                  value={form.courseKey}
                  onChange={(event) => handleCourseChange(event.target.value)}
                  disabled={lockedCourse}
                  required
                  aria-invalid={Boolean(fieldErrors.courseKey)}
                  aria-describedby={fieldErrors.courseKey ? `${baseId}-course` : undefined}
                  className={lockedCourse ? 'cursor-not-allowed bg-neutral' : ''}
                >
                  {COURSE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              </Field>

              <Field
                label="Training date"
                required
                error={fieldErrors.trainingDate}
                errorId={`${baseId}-training-date`}
              >
                <Input
                  type="date"
                  value={form.trainingDate}
                  onChange={(event) => updateField('trainingDate', event.target.value)}
                  max={form.issueDate || today}
                  required
                  aria-invalid={Boolean(fieldErrors.trainingDate)}
                  aria-describedby={fieldErrors.trainingDate ? `${baseId}-training-date` : undefined}
                  className={fieldErrors.trainingDate ? 'border-brand' : ''}
                />
              </Field>
            </div>

            {form.courseKey === CUSTOM_COURSE_KEY && (
              <Field
                label="Course name"
                required
                hint={
                  lockedCourse
                    ? 'Course is fixed after issuance.'
                    : 'Shown on the certificate as the course label.'
                }
                error={fieldErrors.customCourseName}
                errorId={`${baseId}-custom-course`}
              >
                <Input
                  value={form.customCourseName}
                  onChange={(event) => handleCustomCourseChange(event.target.value)}
                  placeholder="e.g. Emergency Preparedness"
                  maxLength={90}
                  disabled={lockedCourse}
                  required
                  aria-invalid={Boolean(fieldErrors.customCourseName)}
                  aria-describedby={
                    fieldErrors.customCourseName ? `${baseId}-custom-course` : undefined
                  }
                  className={
                    lockedCourse
                      ? 'cursor-not-allowed bg-neutral'
                      : fieldErrors.customCourseName
                        ? 'border-brand'
                        : ''
                  }
                />
              </Field>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Duration"
                required
                error={fieldErrors.durationValue ?? fieldErrors.durationUnit}
                errorId={`${baseId}-duration`}
              >
                <div className="flex gap-2">
                  <div className="w-24 shrink-0">
                    <Input
                      type="number"
                      min={1}
                      max={10000}
                      step={1}
                      inputMode="numeric"
                      value={form.durationValue}
                      onChange={(event) => updateField('durationValue', event.target.value)}
                      required
                      aria-invalid={Boolean(fieldErrors.durationValue)}
                      aria-describedby={
                        fieldErrors.durationValue || fieldErrors.durationUnit
                          ? `${baseId}-duration`
                          : undefined
                      }
                      className={fieldErrors.durationValue ? 'border-brand' : ''}
                    />
                  </div>
                  <Select
                    value={form.durationUnit}
                    onChange={(event) => updateField('durationUnit', event.target.value)}
                    aria-label="Duration unit"
                    required
                    className="min-w-0 flex-1"
                  >
                    <option value="hours">Hours</option>
                    <option value="days">Days</option>
                    <option value="weeks">Weeks</option>
                    <option value="months">Months</option>
                  </Select>
                </div>
              </Field>

              <Field
                label="Trainer / instructor"
                required
                error={fieldErrors.instructorName}
                errorId={`${baseId}-instructor`}
              >
                <Input
                  value={form.instructorName}
                  onChange={(event) => updateField('instructorName', event.target.value)}
                  placeholder="e.g. Cyuzuzo Christian"
                  maxLength={120}
                  required
                  aria-invalid={Boolean(fieldErrors.instructorName)}
                  aria-describedby={
                    fieldErrors.instructorName ? `${baseId}-instructor` : undefined
                  }
                  className={fieldErrors.instructorName ? 'border-brand' : ''}
                />
              </Field>
            </div>
          </section>

          <section className="space-y-5 border-t border-line px-5 py-6 sm:px-6">
            <div>
              <h2 className="text-sm font-semibold tracking-tight text-ink">Certificate copy</h2>
              <p className="mt-0.5 text-xs text-muted">
                The completion statement is printed below the recipient&apos;s name.
              </p>
            </div>

            <Field
              label="Completion description"
              required
              hint={`${form.description.length} / ${DESCRIPTION_MAX} characters`}
              error={fieldErrors.description}
              errorId={`${baseId}-description`}
            >
              <Textarea
                rows={4}
                value={form.description}
                onChange={(event) => updateField('description', event.target.value)}
                maxLength={DESCRIPTION_MAX}
                required
                aria-invalid={Boolean(fieldErrors.description)}
                aria-describedby={
                  fieldErrors.description ? `${baseId}-description` : undefined
                }
                className={fieldErrors.description ? 'border-brand' : ''}
              />
            </Field>

            {suggestedDescription && form.description !== suggestedDescription && (
              <button
                type="button"
                onClick={() => {
                  setDescriptionTouched(false)
                  setForm((previous) => ({
                    ...previous,
                    description: suggestedDescription,
                  }))
                }}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-soft transition-colors hover:text-brand"
              >
                <Wand size={13} />
                Use suggested wording
              </button>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Issue date"
                required
                hint={lockedIssueDate ? 'Issue date is permanent once a certificate is issued.' : 'Printed certificate numbers use this year.'}
                error={fieldErrors.issueDate}
                errorId={`${baseId}-issue-date`}
              >
                <Input
                  type="date"
                  value={form.issueDate}
                  onChange={(event) => updateField('issueDate', event.target.value)}
                  max={today}
                  disabled={lockedIssueDate}
                  required
                  aria-invalid={Boolean(fieldErrors.issueDate)}
                  aria-describedby={
                    fieldErrors.issueDate ? `${baseId}-issue-date` : undefined
                  }
                  className={lockedIssueDate ? 'cursor-not-allowed bg-neutral' : fieldErrors.issueDate ? 'border-brand' : ''}
                />
              </Field>

              <Field
                label="Expiry date"
                hint="Optional. Verification shows Expired automatically after this date."
                error={fieldErrors.expiryDate}
                errorId={`${baseId}-expiry-date`}
              >
                <Input
                  type="date"
                  value={form.expiryDate}
                  min={form.issueDate || undefined}
                  onChange={(event) => updateField('expiryDate', event.target.value)}
                  aria-invalid={Boolean(fieldErrors.expiryDate)}
                  aria-describedby={
                    fieldErrors.expiryDate ? `${baseId}-expiry-date` : undefined
                  }
                  className={fieldErrors.expiryDate ? 'border-brand' : ''}
                />
              </Field>
            </div>
          </section>

          <div className="flex flex-col-reverse gap-3 border-t border-line bg-paper px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <Link
              href={mode === 'edit' && initial ? `/admin/certificates/${initial.id}` : '/admin/certificates'}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft size={13} />
              {mode === 'edit' ? 'Back to certificate' : 'Back to certificates'}
            </Link>
            <Button type="submit" size="lg" disabled={isPending}>
              {isPending ? <Spinner /> : <Check size={15} />}
              {mode === 'create' ? 'Issue certificate' : 'Save changes'}
            </Button>
          </div>
        </div>
      </form>

      <aside aria-label="Certificate preview" className="xl:sticky xl:top-6">
        <div className="overflow-hidden rounded-lg border border-line bg-white">
          <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                {previewLoading && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/40" />
                )}
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              <p className="text-xs font-semibold tracking-[0.12em] text-ink-soft uppercase">
                Live preview
              </p>
            </div>
            {previewUrl && (
              <a
                href={previewUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-muted transition-colors hover:text-brand"
              >
                Open PDF
                <ArrowUpRight size={12} />
              </a>
            )}
          </div>

          <div className="relative aspect-[297/210] bg-neutral">
            {previewUrl ? (
              <iframe
                key={previewUrl}
                src={previewUrl}
                title="Live certificate preview"
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted">
                <Loader2 size={22} className="animate-spin text-brand" />
                <p className="text-xs font-medium">Preparing preview…</p>
              </div>
            )}

            {previewLoading && previewUrl && (
              <div className="pointer-events-none absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-line bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-ink-soft shadow-sm">
                <Loader2 size={11} className="animate-spin text-brand" />
                Updating
              </div>
            )}
          </div>

          <div className="border-t border-line px-4 py-3">
            {previewError ? (
              <p role="status" className="text-xs text-red-700">
                {previewError}
              </p>
            ) : (
              <p className="text-xs leading-relaxed text-muted">
                This is the real PDF, generated from the same template the recipient receives.
                The preview uses a placeholder certificate number until the record is issued.
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 border-t border-line bg-paper px-4 py-3">
            <Download size={13} className="text-muted" aria-hidden="true" />
            <p className="text-[11px] text-muted">
              A4 landscape · print-ready · QR verification
            </p>
            <Refresh size={12} className="ml-auto text-muted/70" aria-hidden="true" />
          </div>
        </div>
      </aside>
    </div>
  )
}
