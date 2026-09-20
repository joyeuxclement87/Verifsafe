'use client'

import { useCallback, useRef, useState } from 'react'
import { Upload, Photo, Check, AlertTriangle, X } from 'tabler-icons-react'
import { createClient } from '@/lib/supabase/client'
import { processImageFile, formatBytesLabel, type ProcessedImage } from '@/lib/admin/image'

type UploadState =
  | { phase: 'idle' }
  | { phase: 'processing' }
  | { phase: 'uploading'; percent: number }
  | { phase: 'done'; previewUrl: string; path: string; meta: ProcessedImage }
  | { phase: 'error'; message: string }

async function uploadWithProgress(
  url: string,
  token: string,
  apikey: string,
  blob: Blob,
  contentType: string,
  onProgress: (percent: number) => void
): Promise<void> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url, true)
    xhr.setRequestHeader('apikey', apikey)
    xhr.setRequestHeader('authorization', `Bearer ${token}`)
    xhr.setRequestHeader('content-type', contentType)
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) {
        onProgress(Math.round((e.loaded / e.total) * 100))
      }
    }
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve()
        return
      }

      let effectiveStatus = xhr.status
      let serverMessage = ''
      try {
        const body = JSON.parse(xhr.responseText || '{}')
        const parsed = Number(body.statusCode)
        if (Number.isFinite(parsed)) {
          effectiveStatus = parsed
        }
        if (typeof body.message === 'string') {
          serverMessage = body.message
        }
      } catch {
        // Non-JSON error body — fall back to the HTTP status.
      }

      const isForbidden =
        effectiveStatus === 401 ||
        effectiveStatus === 403 ||
        /row-level security policy/i.test(serverMessage) ||
        serverMessage.includes('AccessDenied')

      if (isForbidden) {
        reject(
          new Error(
            'Upload is not allowed. Check that you are signed in with an admin account.'
          )
        )
      } else if (serverMessage) {
        reject(new Error(`Upload failed (HTTP ${xhr.status}). ${serverMessage}`))
      } else {
        reject(new Error(`Upload failed (HTTP ${xhr.status}). Please try again.`))
      }
    }
    xhr.onerror = () => reject(new Error('Network error during upload.'))
    xhr.send(blob)
  })
}

export function ImageUploader({
  bucket = 'gallery',
  onUploaded,
  onCleared,
}: {
  bucket?: string
  onUploaded: (path: string, meta: ProcessedImage) => void
  onCleared?: () => void
}) {
  const [state, setState] = useState<UploadState>({ phase: 'idle' })
  const inputRef = useRef<HTMLInputElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleFile = useCallback(
    async (file: File | undefined | null) => {
      if (!file) return
      setState({ phase: 'processing' })

      try {
        const meta = await processImageFile(file)

        const supabase = createClient()
        const {
          data: { session },
        } = await supabase.auth.getSession()
        if (!session) {
          setState({ phase: 'error', message: 'Your session expired. Please sign in again.' })
          return
        }

        const path = `${bucket}/${crypto.randomUUID()}.webp`
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
        const url = `${supabaseUrl.replace(/\/+$/, '')}/storage/v1/object/${bucket}/${path}`

        await uploadWithProgress(
          url,
          session.access_token,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
          meta.blob,
          'image/webp',
          (percent) => setState({ phase: 'uploading', percent })
        )

        const previewUrl = URL.createObjectURL(meta.blob)
        setState({ phase: 'done', previewUrl, path, meta })
        onUploaded(path, meta)
      } catch (err) {
        setState({
          phase: 'error',
          message: err instanceof Error ? err.message : 'Something went wrong while processing the image.',
        })
      }
    },
    [bucket, onUploaded]
  )

  const clear = () => {
    if (state.phase === 'done') {
      URL.revokeObjectURL(state.previewUrl)
    }
    setState({ phase: 'idle' })
    onCleared?.()
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        aria-label="Upload an image"
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            inputRef.current?.click()
          }
        }}
        onDragOver={(e) => {
          e.preventDefault()
          setIsDragging(true)
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault()
          setIsDragging(false)
          handleFile(e.dataTransfer.files?.[0])
        }}
        className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed px-6 py-10 text-center transition-colors ${
          state.phase === 'error'
            ? 'border-red-300 bg-red-50/50'
            : state.phase === 'done'
              ? 'border-emerald-300 bg-emerald-50/40'
              : isDragging
                ? 'border-brand bg-brand-light/50'
                : 'border-line bg-neutral hover:border-ink/30'
        } focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand`}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/avif,image/gif"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0])}
        />

        {state.phase === 'idle' && (
          <>
            <Upload size={22} className="mb-3 text-muted" />
            <p className="text-sm font-medium text-ink">Drag & drop an image, or click to browse</p>
            <p className="mt-1 text-xs text-muted">
              JPEG, PNG, WebP, AVIF or GIF · up to 25 MB
            </p>
          </>
        )}

        {state.phase === 'processing' && (
          <>
            <span className="mb-3 h-5 w-5 animate-spin rounded-full border-2 border-ink/20 border-t-brand" />
            <p className="text-sm font-medium text-ink">Optimising image…</p>
            <p className="mt-1 text-xs text-muted">Resizing and compressing automatically</p>
          </>
        )}

        {state.phase === 'uploading' && (
          <>
            <span className="mb-3 h-5 w-5 animate-spin rounded-full border-2 border-ink/20 border-t-brand" />
            <p className="text-sm font-medium text-ink">Uploading… {state.percent}%</p>
            <div className="mt-3 h-1.5 w-48 overflow-hidden rounded-full bg-white">
              <div
                className="h-full rounded-full bg-brand transition-all duration-150"
                style={{ width: `${state.percent}%` }}
              />
            </div>
          </>
        )}

        {state.phase === 'error' && (
          <>
            <AlertTriangle size={22} className="mb-3 text-red-600" />
            <p className="text-sm font-medium text-red-700">{state.message}</p>
            <p className="mt-1 text-xs text-muted">Try a different image or try again.</p>
          </>
        )}

        {state.phase === 'done' && (
          <>
            <Check size={22} className="mb-3 text-emerald-600" />
            <p className="text-sm font-medium text-emerald-700">Image ready</p>
            <p className="mt-1 text-xs text-muted">
              {state.meta.width} × {state.meta.height} · {state.meta.format.replace('image/', '')} ·{' '}
              {formatBytesLabel(state.meta.size)}
            </p>
          </>
        )}
      </div>

      {state.phase === 'done' && (
        <div className="mt-4 flex items-start gap-4">
          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md border border-line bg-neutral">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={state.previewUrl} alt="Upload preview" className="h-full w-full object-cover" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-ink">Optimised & ready to save</p>
            <p className="mt-0.5 text-xs text-muted">
              {state.meta.width} × {state.meta.height} px · {state.meta.format.replace('image/', '')} ·{' '}
              {formatBytesLabel(state.meta.size)}
            </p>
            <button
              type="button"
              onClick={clear}
              className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-muted hover:text-ink"
            >
              <X size={13} />
              Remove and re-upload
            </button>
          </div>
        </div>
      )}

      {state.phase === 'error' && (
        <button
          type="button"
          onClick={clear}
          className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-muted hover:text-ink"
        >
          <X size={13} />
          Clear
        </button>
      )}

      {state.phase === 'idle' && (
        <p className="mt-3 flex items-center gap-1.5 text-xs text-muted">
          <Photo size={14} className="shrink-0" />
          Images are resized and compressed to WebP automatically before storage.
        </p>
      )}
    </div>
  )
}