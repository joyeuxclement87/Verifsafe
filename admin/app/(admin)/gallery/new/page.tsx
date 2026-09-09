import Link from 'next/link'
import { ArrowLeft } from 'tabler-icons-react'
import { GalleryForm } from '@/components/gallery/GalleryForm'
import { Card } from '@/components/ui/Card'

export const dynamic = 'force-dynamic'

export default function NewGalleryPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link
          href="/gallery"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-line bg-white text-ink-soft transition-colors hover:border-ink/30 hover:text-ink"
          aria-label="Back to gallery"
        >
          <ArrowLeft size={16} />
        </Link>
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-ink">New gallery project</h1>
          <p className="mt-0.5 text-sm text-muted">
            Upload an image and add the details that appear on the public website.
          </p>
        </div>
      </div>

      <Card title="Project details">
        <GalleryForm submitLabel="Create gallery project" />
      </Card>
    </div>
  )
}