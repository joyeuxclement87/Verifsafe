import Link from 'next/link'
import { ArrowLeft } from 'tabler-icons-react'
import { GalleryForm } from '@/components/admin/gallery/GalleryForm'
import { Card } from '@/components/admin/ui/Card'

export const dynamic = 'force-dynamic'

export default function NewGalleryPage() {
  return (
    <div className="space-y-6">
      <header className="flex items-start gap-3.5 border-b border-line pb-6">
        <Link
          href="/admin/gallery"
          className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-white text-ink-soft transition-colors hover:border-ink/30 hover:text-ink"
          aria-label="Back to gallery"
        >
          <ArrowLeft size={16} />
        </Link>
        <div>
          <div className="mb-1.5 flex items-center gap-2">
            <span aria-hidden="true" className="h-px w-5 bg-brand" />
            <span className="text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
              Public Portfolio
            </span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink">
            New gallery project
          </h1>
          <p className="mt-1 text-sm text-muted">
            Upload an image and add the details that appear on the public website.
          </p>
        </div>
      </header>

      <Card
        title="Project details"
        description="Images are automatically resized and converted to WebP for fast page loads."
      >
        <GalleryForm submitLabel="Create gallery project" />
      </Card>
    </div>
  )
}