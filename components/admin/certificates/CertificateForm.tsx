'use client'

import { useEffect, useId, useRef, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowUpRight,
  Bookmark,
  Check,
  Download,
  Loader2,
  Pencil,
  Plus,
  Refresh,
  Trash,
  Wand,
  X,
} from 'tabler-icons-react'
import {
  buildDefaultDescription,
  CERTIFICATE_COURSES,
  CUSTOM_COURSE_CODE,
  CUSTOM_COURSE_KEY,
  DESCRIPTION_MAX,
} from '@/lib/certificates/constants'
import { todayIsoDate } from '@/lib/certificates/format'
import {
  createCertificate,
  deleteTrainerAction,
  deleteTrainingCourseAction,
  saveTrainerAction,
  saveTrainingCourseAction,
  updateCertificate,
  type CertificateActionResult,
} from '@/lib/certificates/actions'
import type { SavedTrainer, SavedTrainingCourse } from '@/types/supabase'
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
  courseCode: string
  customCourseName: string
  trainingDate: string
  durationValue: string
  durationUnit: string
  instructorName: string
  description: string
  issueDate: string
  expiryDate: string
}

const DEFAULT_COURSES: SavedTrainingCourse[] = CERTIFICATE_COURSES.map((c) => ({
  id: c.key,
  key: c.key,
  code: c.code,
  name: c.name,
}))

function findSavedCourse(
  courses: SavedTrainingCourse[],
  courseKey: string
): SavedTrainingCourse | undefined {
  return courses.find((c) => c.key === courseKey)
}

function buildInitialState(
  courses: SavedTrainingCourse[],
  trainers: SavedTrainer[],
  initial?: CertificateFormInitial
): FormState {
  const today = todayIsoDate()
  if (initial) {
    const matched = findSavedCourse(courses, initial.courseKey)
    const isCustom = !matched || initial.courseKey === CUSTOM_COURSE_KEY
    return {
      recipientName: initial.recipientName,
      courseKey: isCustom ? CUSTOM_COURSE_KEY : initial.courseKey,
      courseCode: matched?.code ?? CUSTOM_COURSE_CODE,
      customCourseName: initial.courseName,
      trainingDate: initial.trainingDate,
      durationValue: String(initial.durationValue),
      durationUnit: initial.durationUnit,
      instructorName: initial.instructorName,
      description: initial.description,
      issueDate: initial.issueDate,
      expiryDate: initial.expiryDate ?? '',
    }
  }

  const firstCourse = courses[0] ?? DEFAULT_COURSES[0]
  const firstTrainer = trainers[0]?.name ?? ''
  return {
    recipientName: '',
    courseKey: firstCourse.key,
    courseCode: firstCourse.code,
    customCourseName: firstCourse.name,
    trainingDate: today,
    durationValue: '8',
    durationUnit: 'hours',
    instructorName: firstTrainer,
    description: firstCourse.name ? buildDefaultDescription(firstCourse.name) : '',
    issueDate: today,
    expiryDate: '',
  }
}

export function CertificateForm({
  mode,
  initial,
  savedCourses: initialCourses,
  savedTrainers: initialTrainers,
}: {
  mode: 'create' | 'edit'
  initial?: CertificateFormInitial
  savedCourses?: SavedTrainingCourse[]
  savedTrainers?: SavedTrainer[]
}) {
  const router = useRouter()
  const [courses, setCourses] = useState<SavedTrainingCourse[]>(() =>
    initialCourses && initialCourses.length > 0 ? initialCourses : DEFAULT_COURSES
  )
  const [trainers, setTrainers] = useState<SavedTrainer[]>(
    () => initialTrainers ?? []
  )
  const [form, setForm] = useState<FormState>(() =>
    buildInitialState(
      initialCourses && initialCourses.length > 0 ? initialCourses : DEFAULT_COURSES,
      initialTrainers ?? [],
      initial
    )
  )

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

  // Inline Training Names editor state
  const [manageCoursesOpen, setManageCoursesOpen] = useState(false)
  const [editingCourseId, setEditingCourseId] = useState<string | null>(null)
  const [editingCourseName, setEditingCourseName] = useState('')
  const [editingCourseCode, setEditingCourseCode] = useState('')
  const [newCourseName, setNewCourseName] = useState('')
  const [newCourseCode, setNewCourseCode] = useState('')
  const [courseManagerBusy, setCourseManagerBusy] = useState(false)
  const [courseManagerNotice, setCourseManagerNotice] = useState<string | null>(null)

  // Inline Saved Trainers editor state
  const [manageTrainersOpen, setManageTrainersOpen] = useState(false)
  const [editingTrainerId, setEditingTrainerId] = useState<string | null>(null)
  const [editingTrainerName, setEditingTrainerName] = useState('')
  const [trainerBusy, setTrainerBusy] = useState(false)
  const [trainerNotice, setTrainerNotice] = useState<string | null>(null)

  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [previewLoading, setPreviewLoading] = useState(true)
  const [previewError, setPreviewError] = useState<string | null>(null)
  const latestPreviewUrl = useRef<string | null>(null)

  const lockedCourseCode = mode === 'edit'
  const lockedIssueDate = mode === 'edit'
  const today = todayIsoDate()
  const currentCourseName = form.customCourseName.trim()
  const suggestedDescription = currentCourseName
    ? buildDefaultDescription(currentCourseName)
    : ''

  const isCurrentTrainerSaved = trainers.some(
    (t) => t.name.toLowerCase() === form.instructorName.trim().toLowerCase()
  )

  useEffect(() => {
    const controller = new AbortController()
    const timer = window.setTimeout(async () => {
      setPreviewLoading(true)
      setPreviewError(null)

      const body = new FormData()
      body.set('recipientName', form.recipientName)
      body.set('courseKey', form.courseKey)
      body.set('courseCode', form.courseCode)
      body.set('customCourseName', form.customCourseName)
      body.set('trainingDate', form.trainingDate)
      body.set('durationValue', form.durationValue)
      body.set('durationUnit', form.durationUnit)
      body.set('instructorName', form.instructorName)
      body.set('description', form.description)
      body.set('issueDate', form.issueDate)
      body.set('expiryDate', form.expiryDate)
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
    const matched = findSavedCourse(courses, nextCourseKey)
    setForm((previous) => {
      const nextName =
        nextCourseKey === CUSTOM_COURSE_KEY
          ? previous.customCourseName
          : (matched?.name ?? previous.customCourseName)
      const nextCode =
        nextCourseKey === CUSTOM_COURSE_KEY
          ? CUSTOM_COURSE_CODE
          : (matched?.code ?? CUSTOM_COURSE_CODE)
      return {
        ...previous,
        courseKey: nextCourseKey,
        courseCode: nextCode,
        customCourseName: nextName,
        description:
          !descriptionTouched && nextName.trim()
            ? buildDefaultDescription(nextName.trim())
            : previous.description,
      }
    })
  }

  function handleTrainingNameChange(value: string) {
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

  async function handleSaveCourseRename(course: SavedTrainingCourse) {
    if (!editingCourseName.trim()) return
    setCourseManagerBusy(true)
    setCourseManagerNotice(null)
    const res = await saveTrainingCourseAction({
      id: course.id,
      name: editingCourseName,
      code: editingCourseCode,
    })
    setCourseManagerBusy(false)

    if (!res.success || !res.course) {
      setCourseManagerNotice(res.error ?? 'Could not update training name.')
      return
    }

    const updated = res.course
    setCourses((prev) =>
      prev.map((c) => (c.id === updated.id ? updated : c))
    )
    if (form.courseKey === updated.key) {
      setForm((prev) => ({
        ...prev,
        courseCode: updated.code,
        customCourseName: updated.name,
        description: descriptionTouched
          ? prev.description
          : buildDefaultDescription(updated.name),
      }))
    }
    setEditingCourseId(null)
    setCourseManagerNotice(`Updated "${updated.name}".`)
  }

  async function handleAddCourse() {
    if (!newCourseName.trim()) return
    setCourseManagerBusy(true)
    setCourseManagerNotice(null)
    const res = await saveTrainingCourseAction({
      name: newCourseName,
      code: newCourseCode,
    })
    setCourseManagerBusy(false)

    if (!res.success || !res.course) {
      setCourseManagerNotice(res.error ?? 'Could not add training course.')
      return
    }

    const created = res.course
    setCourses((prev) => [...prev, created])
    setNewCourseName('')
    setNewCourseCode('')
    setForm((prev) => ({
      ...prev,
      courseKey: created.key,
      courseCode: created.code,
      customCourseName: created.name,
      description: descriptionTouched
        ? prev.description
        : buildDefaultDescription(created.name),
    }))
    setCourseManagerNotice(`Added "${created.name}".`)
  }

  async function handleDeleteCourse(course: SavedTrainingCourse) {
    setCourseManagerBusy(true)
    setCourseManagerNotice(null)
    const res = await deleteTrainingCourseAction(course.id)
    setCourseManagerBusy(false)

    if (!res.success) {
      setCourseManagerNotice(res.error ?? 'Could not remove training course.')
      return
    }

    setCourses((prev) => prev.filter((c) => c.id !== course.id))
    setCourseManagerNotice(`Removed "${course.name}".`)
  }

  async function handleQuickSaveCurrentTrainer() {
    const trimmed = form.instructorName.trim()
    if (trimmed.length < 2) return
    setTrainerBusy(true)
    setTrainerNotice(null)
    const res = await saveTrainerAction({ name: trimmed })
    setTrainerBusy(false)

    if (!res.success || !res.trainer) {
      setTrainerNotice(res.error ?? 'Could not save trainer.')
      return
    }

    const saved = res.trainer
    setTrainers((prev) => {
      if (prev.some((t) => t.id === saved.id)) return prev
      return [...prev, saved].sort((a, b) => a.name.localeCompare(b.name))
    })
    setTrainerNotice(`Saved "${saved.name}" to trainers.`)
  }

  async function handleSaveTrainerRename(trainer: SavedTrainer) {
    if (!editingTrainerName.trim()) return
    setTrainerBusy(true)
    setTrainerNotice(null)
    const res = await saveTrainerAction({
      id: trainer.id,
      name: editingTrainerName,
    })
    setTrainerBusy(false)

    if (!res.success || !res.trainer) {
      setTrainerNotice(res.error ?? 'Could not update trainer.')
      return
    }

    const updated = res.trainer
    setTrainers((prev) =>
      prev.map((t) => (t.id === updated.id ? updated : t))
    )
    if (form.instructorName.trim().toLowerCase() === trainer.name.toLowerCase()) {
      setForm((prev) => ({ ...prev, instructorName: updated.name }))
    }
    setEditingTrainerId(null)
    setTrainerNotice(`Updated trainer "${updated.name}".`)
  }

  async function handleDeleteTrainer(trainer: SavedTrainer) {
    setTrainerBusy(true)
    setTrainerNotice(null)
    const res = await deleteTrainerAction(trainer.id)
    setTrainerBusy(false)

    if (!res.success) {
      setTrainerNotice(res.error ?? 'Could not remove trainer.')
      return
    }

    setTrainers((prev) => prev.filter((t) => t.id !== trainer.id))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormError(null)
    setFieldErrors({})

    const input = {
      recipientName: form.recipientName,
      courseKey: form.courseKey,
      courseCode: form.courseCode,
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
              <h2 className="text-sm font-semibold tracking-tight text-ink">
                Recipient & training
              </h2>
              <p className="mt-0.5 text-xs text-muted">
                Who completed the training and what they completed.
              </p>
            </div>

            <Field
              label="Recipient full name"
              required
              error={fieldErrors.recipientName}
              errorId={`${baseId}-recipient`}
            >
              <Input
                value={form.recipientName}
                onChange={(event) =>
                  updateField('recipientName', event.target.value)
                }
                placeholder="e.g. Joyeux Clement Tuyishimire"
                autoComplete="name"
                maxLength={120}
                required
                aria-invalid={Boolean(fieldErrors.recipientName)}
                aria-describedby={
                  fieldErrors.recipientName ? `${baseId}-recipient` : undefined
                }
                className={fieldErrors.recipientName ? 'border-brand' : ''}
              />
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <label
                    htmlFor={`${baseId}-course-select`}
                    className="block text-xs font-semibold text-ink"
                  >
                    Training preset <span className="text-brand">*</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => setManageCoursesOpen((v) => !v)}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-ink-soft transition-colors hover:text-brand"
                  >
                    <Pencil size={11} />
                    {manageCoursesOpen ? 'Done editing' : 'Edit training names'}
                  </button>
                </div>
                <Select
                  id={`${baseId}-course-select`}
                  value={form.courseKey}
                  onChange={(event) => handleCourseChange(event.target.value)}
                  disabled={lockedCourseCode}
                  required
                  aria-invalid={Boolean(fieldErrors.courseKey)}
                  aria-describedby={
                    fieldErrors.courseKey ? `${baseId}-course` : undefined
                  }
                  className={
                    lockedCourseCode ? 'cursor-not-allowed bg-neutral' : ''
                  }
                >
                  {courses.map((course) => (
                    <option key={course.key} value={course.key}>
                      {course.name} ({course.code})
                    </option>
                  ))}
                  <option value={CUSTOM_COURSE_KEY}>
                    Other training (custom)
                  </option>
                </Select>
                {lockedCourseCode && (
                  <p className="mt-1 text-[11px] text-muted">
                    Course code ({form.courseCode}) is fixed after issuance. You can
                    still edit the printed training name below.
                  </p>
                )}
              </div>

              <Field
                label="Training date"
                required
                error={fieldErrors.trainingDate}
                errorId={`${baseId}-training-date`}
              >
                <Input
                  type="date"
                  value={form.trainingDate}
                  onChange={(event) =>
                    updateField('trainingDate', event.target.value)
                  }
                  max={form.issueDate || today}
                  required
                  aria-invalid={Boolean(fieldErrors.trainingDate)}
                  aria-describedby={
                    fieldErrors.trainingDate
                      ? `${baseId}-training-date`
                      : undefined
                  }
                  className={fieldErrors.trainingDate ? 'border-brand' : ''}
                />
              </Field>
            </div>

            {/* Inline Training Names Manager */}
            {manageCoursesOpen && (
              <div className="rounded-lg border border-line bg-paper p-4 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold text-ink">
                      Saved training names
                    </p>
                    <p className="text-[11px] text-muted">
                      Rename any training or add a new training to the dropdown list.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setManageCoursesOpen(false)}
                    className="rounded p-1 text-muted hover:bg-white hover:text-ink"
                    aria-label="Close training names editor"
                  >
                    <X size={14} />
                  </button>
                </div>

                {courseManagerNotice && (
                  <p className="text-[11px] font-medium text-emerald-700">
                    {courseManagerNotice}
                  </p>
                )}

                <ul className="divide-y divide-line rounded-md border border-line bg-white">
                  {courses.map((course) => {
                    const isEditing = editingCourseId === course.id
                    return (
                      <li
                        key={course.id}
                        className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 text-xs"
                      >
                        {isEditing ? (
                          <div className="flex flex-1 flex-wrap items-center gap-2">
                            <input
                              type="text"
                              value={editingCourseName}
                              onChange={(e) => setEditingCourseName(e.target.value)}
                              maxLength={90}
                              className="min-w-[10rem] flex-1 rounded border border-line px-2 py-1 text-xs text-ink focus:border-ink focus:outline-none"
                              placeholder="Training name"
                            />
                            <input
                              type="text"
                              value={editingCourseCode}
                              onChange={(e) =>
                                setEditingCourseCode(
                                  e.target.value
                                    .toUpperCase()
                                    .replace(/[^A-Z]/g, '')
                                    .slice(0, 4)
                                )
                              }
                              maxLength={4}
                              className="w-16 rounded border border-line px-2 py-1 font-mono text-xs uppercase text-ink focus:border-ink focus:outline-none"
                              placeholder="Code"
                            />
                            <button
                              type="button"
                              disabled={courseManagerBusy}
                              onClick={() => handleSaveCourseRename(course)}
                              className="rounded bg-ink px-2.5 py-1 text-[11px] font-semibold text-white hover:bg-brand"
                            >
                              Save
                            </button>
                            <button
                              type="button"
                              onClick={() => setEditingCourseId(null)}
                              className="px-1.5 py-1 text-[11px] text-muted hover:text-ink"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <>
                            <div className="flex items-center gap-2">
                              <span className="rounded border border-line bg-paper px-1.5 py-0.5 font-mono text-[10px] font-semibold text-ink-soft">
                                {course.code}
                              </span>
                              <span className="font-medium text-ink">
                                {course.name}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => {
                                  setEditingCourseId(course.id)
                                  setEditingCourseName(course.name)
                                  setEditingCourseCode(course.code)
                                }}
                                className="inline-flex items-center gap-1 text-[11px] font-semibold text-ink-soft hover:text-brand"
                              >
                                <Pencil size={11} />
                                Edit
                              </button>
                              {courses.length > 1 && (
                                <button
                                  type="button"
                                  disabled={courseManagerBusy}
                                  onClick={() => handleDeleteCourse(course)}
                                  className="text-muted hover:text-red-600"
                                  title={`Remove ${course.name}`}
                                >
                                  <Trash size={12} />
                                </button>
                              )}
                            </div>
                          </>
                        )}
                      </li>
                    )
                  })}
                </ul>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <input
                    type="text"
                    value={newCourseName}
                    onChange={(e) => setNewCourseName(e.target.value)}
                    placeholder="Add new training name (e.g. Working at Heights)…"
                    maxLength={90}
                    className="min-w-[12rem] flex-1 rounded-md border border-line bg-white px-2.5 py-1.5 text-xs text-ink placeholder:text-muted focus:border-ink focus:outline-none"
                  />
                  <input
                    type="text"
                    value={newCourseCode}
                    onChange={(e) =>
                      setNewCourseCode(
                        e.target.value
                          .toUpperCase()
                          .replace(/[^A-Z]/g, '')
                          .slice(0, 4)
                      )
                    }
                    placeholder="Code (e.g. WAH)"
                    maxLength={4}
                    className="w-28 rounded-md border border-line bg-white px-2.5 py-1.5 font-mono text-xs uppercase text-ink placeholder:font-sans placeholder:normal-case placeholder:text-muted focus:border-ink focus:outline-none"
                  />
                  <button
                    type="button"
                    disabled={courseManagerBusy || newCourseName.trim().length < 2}
                    onClick={handleAddCourse}
                    className="inline-flex items-center gap-1 rounded-md bg-ink px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-brand disabled:opacity-50"
                  >
                    <Plus size={13} />
                    Add training
                  </button>
                </div>
              </div>
            )}

            {/* Always-editable Printed Training Name */}
            <Field
              label="Training name printed on certificate"
              required
              hint="You can edit how the training title appears on this certificate."
              error={fieldErrors.customCourseName}
              errorId={`${baseId}-custom-course`}
            >
              <Input
                value={form.customCourseName}
                onChange={(event) => handleTrainingNameChange(event.target.value)}
                placeholder="e.g. First Aid Training"
                maxLength={90}
                required
                aria-invalid={Boolean(fieldErrors.customCourseName)}
                aria-describedby={
                  fieldErrors.customCourseName
                    ? `${baseId}-custom-course`
                    : undefined
                }
                className={fieldErrors.customCourseName ? 'border-brand' : ''}
              />
            </Field>

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
                      onChange={(event) =>
                        updateField('durationValue', event.target.value)
                      }
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
                    onChange={(event) =>
                      updateField('durationUnit', event.target.value)
                    }
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

              {/* Trainer / Instructor with Save Trainer & Saved Trainers chips */}
              <div>
                <div className="mb-1.5 flex items-center justify-between gap-2">
                  <label
                    htmlFor={`${baseId}-instructor-input`}
                    className="block text-xs font-semibold text-ink"
                  >
                    Trainer / instructor <span className="text-brand">*</span>
                  </label>
                  {trainers.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setManageTrainersOpen((v) => !v)}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-ink-soft transition-colors hover:text-brand"
                    >
                      <Pencil size={11} />
                      {manageTrainersOpen ? 'Done' : 'Edit trainers'}
                    </button>
                  )}
                </div>

                <div className="flex gap-2">
                  <Input
                    id={`${baseId}-instructor-input`}
                    value={form.instructorName}
                    onChange={(event) =>
                      updateField('instructorName', event.target.value)
                    }
                    placeholder="e.g. Cyuzuzo Christian"
                    maxLength={120}
                    required
                    aria-invalid={Boolean(fieldErrors.instructorName)}
                    aria-describedby={
                      fieldErrors.instructorName
                        ? `${baseId}-instructor`
                        : undefined
                    }
                    className={fieldErrors.instructorName ? 'border-brand' : ''}
                  />
                  {form.instructorName.trim().length >= 2 &&
                    !isCurrentTrainerSaved && (
                      <button
                        type="button"
                        disabled={trainerBusy}
                        onClick={handleQuickSaveCurrentTrainer}
                        className="inline-flex shrink-0 items-center gap-1 rounded-md border border-line bg-paper px-2.5 py-2 text-xs font-semibold text-ink transition-colors hover:border-ink hover:bg-white disabled:opacity-50"
                        title="Save this trainer for future certificates"
                      >
                        <Bookmark size={13} className="text-brand" />
                        Save trainer
                      </button>
                    )}
                </div>

                {fieldErrors.instructorName && (
                  <p
                    id={`${baseId}-instructor`}
                    className="mt-1 text-xs text-brand"
                  >
                    {fieldErrors.instructorName}
                  </p>
                )}

                {trainerNotice && (
                  <p className="mt-1 text-[11px] font-medium text-emerald-700">
                    {trainerNotice}
                  </p>
                )}

                {/* Saved trainer quick-select pills */}
                {trainers.length > 0 && !manageTrainersOpen && (
                  <div className="mt-2 flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-semibold tracking-wider text-muted uppercase">
                      Saved:
                    </span>
                    {trainers.map((t) => {
                      const active =
                        form.instructorName.trim().toLowerCase() ===
                        t.name.toLowerCase()
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => updateField('instructorName', t.name)}
                          className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium transition-colors ${
                            active
                              ? 'border-ink bg-ink text-white'
                              : 'border-line bg-paper text-ink-soft hover:border-ink/40 hover:text-ink'
                          }`}
                        >
                          {t.name}
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Inline Saved Trainers Editor */}
            {manageTrainersOpen && (
              <div className="rounded-lg border border-line bg-paper p-4 space-y-2.5">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-ink">
                    Manage saved trainers
                  </p>
                  <button
                    type="button"
                    onClick={() => setManageTrainersOpen(false)}
                    className="rounded p-1 text-muted hover:bg-white hover:text-ink"
                  >
                    <X size={14} />
                  </button>
                </div>
                <ul className="divide-y divide-line rounded-md border border-line bg-white">
                  {trainers.map((trainer) => {
                    const isEditing = editingTrainerId === trainer.id
                    return (
                      <li
                        key={trainer.id}
                        className="flex items-center justify-between gap-2 px-3 py-2 text-xs"
                      >
                        {isEditing ? (
                          <div className="flex flex-1 items-center gap-2">
                            <input
                              type="text"
                              value={editingTrainerName}
                              onChange={(e) =>
                                setEditingTrainerName(e.target.value)
                              }
                              maxLength={120}
                              className="flex-1 rounded border border-line px-2 py-1 text-xs text-ink focus:border-ink focus:outline-none"
                            />
                            <button
                              type="button"
                              disabled={trainerBusy}
                              onClick={() => handleSaveTrainerRename(trainer)}
                              className="rounded bg-ink px-2.5 py-1 text-[11px] font-semibold text-white hover:bg-brand"
                            >
                              Save
                            </button>
                            <button
                              type="button"
                              onClick={() => setEditingTrainerId(null)}
                              className="px-1.5 py-1 text-[11px] text-muted hover:text-ink"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <>
                            <span className="font-medium text-ink">
                              {trainer.name}
                            </span>
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => {
                                  setEditingTrainerId(trainer.id)
                                  setEditingTrainerName(trainer.name)
                                }}
                                className="inline-flex items-center gap-1 text-[11px] font-semibold text-ink-soft hover:text-brand"
                              >
                                <Pencil size={11} />
                                Rename
                              </button>
                              <button
                                type="button"
                                disabled={trainerBusy}
                                onClick={() => handleDeleteTrainer(trainer)}
                                className="text-muted hover:text-red-600"
                                title={`Remove ${trainer.name}`}
                              >
                                <Trash size={12} />
                              </button>
                            </div>
                          </>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
          </section>

          <section className="space-y-5 border-t border-line px-5 py-6 sm:px-6">
            <div>
              <h2 className="text-sm font-semibold tracking-tight text-ink">
                Certificate copy
              </h2>
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
                onChange={(event) =>
                  updateField('description', event.target.value)
                }
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
                hint={
                  lockedIssueDate
                    ? 'Issue date is permanent once a certificate is issued.'
                    : 'Printed certificate numbers use this year.'
                }
                error={fieldErrors.issueDate}
                errorId={`${baseId}-issue-date`}
              >
                <Input
                  type="date"
                  value={form.issueDate}
                  onChange={(event) =>
                    updateField('issueDate', event.target.value)
                  }
                  max={today}
                  disabled={lockedIssueDate}
                  required
                  aria-invalid={Boolean(fieldErrors.issueDate)}
                  aria-describedby={
                    fieldErrors.issueDate ? `${baseId}-issue-date` : undefined
                  }
                  className={
                    lockedIssueDate
                      ? 'cursor-not-allowed bg-neutral'
                      : fieldErrors.issueDate
                        ? 'border-brand'
                        : ''
                  }
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
                  onChange={(event) =>
                    updateField('expiryDate', event.target.value)
                  }
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
              href={
                mode === 'edit' && initial
                  ? `/admin/certificates/${initial.id}`
                  : '/admin/certificates'
              }
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
