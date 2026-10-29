import { getGalleryItems, GALLERY_BUCKET } from '@/lib/admin/gallery'
import { getPublicStorageUrl } from '@/lib/supabase/storage'
import { formatShortDate } from '@/lib/admin/format'
import { PublishBadge } from '@/components/admin/ui/Badge'
import { EmptyState } from '@/components/admin/ui/EmptyState'
import Button from '@/components/admin/ui/Button'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Plus } from 'tabler-icons-react'

export const dynamic = 'force-dynamic'

export default async function GalleryPage() {
  const items = await getGalleryItems()
  const publishedCount = items.filter((item) => item.published).length

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-6 bg-brand" />
            <span className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
              Public Portfolio
            </span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]">
            Gallery &amp; Projects
          </h1>
          <p className="mt-1 text-sm text-muted">
            Projects displayed on the public gallery page ({publishedCount} published ·{' '}
            {items.length - publishedCount} draft).
          </p>
        </div>
        <Button href="/admin/gallery/new">
          <Plus size={15} />
          New project
        </Button>
      </header>

      {items.length === 0 ? (
        <EmptyState
          title="No gallery projects yet"
          description="Create your first project — upload an image, add details, and publish it to the website."
          action={
            <Button href="/admin/gallery/new">
              <Plus size={15} />
              Create project
            </Button>
          }
        />
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.id}
              href={`/admin/gallery/${item.id}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-line bg-white transition-all duration-200 hover:border-ink/30 hover:shadow-[0_8px_24px_-12px_rgba(11,23,32,0.12)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-neutral">
                <Image
                  src={getPublicStorageUrl(GALLERY_BUCKET, item.image_path)}
                  alt={item.alt_text || item.title}
                  width={480}
                  height={360}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-ink transition-colors group-hover:text-brand">
                      {item.title}
                    </p>
                    <p className="mt-0.5 truncate text-xs text-muted">
                      {item.category || 'Uncategorised'} · {formatShortDate(item.created_at)}
                    </p>
                  </div>
                  <PublishBadge published={item.published} />
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
                  <span className="font-mono text-[11px] text-muted">
                    Order #{item.sort_order}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-ink-soft transition-colors group-hover:text-brand">
                    <span>Edit project</span>
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-150 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}