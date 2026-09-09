'use client'

export interface ProcessedImage {
  blob: Blob
  width: number
  height: number
  size: number
  format: string
}

const ALLOWED_MIME = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/avif',
  'image/gif',
])

/**
 * Validates, resizes and compresses an image entirely in the browser.
 *
 * Outputs an optimized WebP blob within `maxDimension`. The admin uploads the
 * original and this pipeline handles everything automatically — no manual
 * resizing required. Runs client-side to avoid shipping the huge raw file to
 * the server; the optimized result is a fraction of the original size.
 */
export async function processImageFile(
  file: File,
  opts: { maxDimension?: number; quality?: number } = {}
): Promise<ProcessedImage> {
  const maxDimension = opts.maxDimension ?? 2000
  const quality = opts.quality ?? 0.82

  if (!ALLOWED_MIME.has(file.type)) {
    throw new Error('Unsupported file type. Please upload a JPEG, PNG, WebP, AVIF or GIF image.')
  }

  if (file.size > 25 * 1024 * 1024) {
    throw new Error('Image is larger than 25 MB. Please choose a smaller file.')
  }

  const bitmap = await createImageBitmap(file)

  try {
    const scale = Math.min(1, maxDimension / Math.max(bitmap.width, bitmap.height))
    const width = Math.max(1, Math.round(bitmap.width * scale))
    const height = Math.max(1, Math.round(bitmap.height * scale))

    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height

    const ctx = canvas.getContext('2d')
    if (!ctx) {
      throw new Error('Image processing is not supported in this browser.')
    }

    ctx.drawImage(bitmap, 0, 0, width, height)

    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (b) => (b ? resolve(b) : reject(new Error('Image encoding failed. Please try another file.'))),
        'image/webp',
        quality
      )
    })

    return {
      blob,
      width,
      height,
      size: blob.size,
      format: 'image/webp',
    }
  } finally {
    bitmap.close()
  }
}

export function formatBytesLabel(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}