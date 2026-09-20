import { getGalleryItems } from '@/lib/admin/gallery'
import { getPublicStorageUrl } from '@/lib/supabase/storage'
import { formatShortDate } from '@/lib/admin/format'
import { PublishBadge } from '@/components/admin/ui/Badge'
import { EmptyState } from '@/components/admin/ui/EmptyState'
import Button from '@/components/admin/ui/Button'
import Link from 'next/link'
import Image from 'next/image'

export const dynamic = 'force-dynamic'

const GALLERY_BUCKET = 'gallery'

export default async function GalleryPage() {
  const items = await getGalleryItems()

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-ink">Gallery & Projects</h1>
          <p className="mt-1 text-sm text-muted">
            Projects shown on the public gallery page. Only published items are visible to visitors.
          </p>
        </div>
        <Button href="/admin/gallery/new">
          <span className="text-base leading-none">+</span> New project
        </Button>
      </header>

      {items.length === 0 ? (
        <EmptyState
          title="No gallery projects yet"
          description="Create your first project — upload an image, add details, and publish it to the website."
          action={<Button href="/admin/gallery/new">Create project</Button>}
        />
      ) : (
        <div className="overflow-hidden rounded-lg border border-line bg-white">
          <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <article
                key={item.id}
                className="group border-b border-r border-line p-4 transition-colors hover:bg-neutral"
              >
                <div className="mb-3 aspect-[4/3] overflow-hidden rounded-md border border-line bg-neutral">
                  <Image
                    src={getPublicStorageUrl(GALLERY_BUCKET, item.image_path)}
                    alt={item.alt_text || item.title}
                    width={480}
                    height={360}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-ink">{item.title}</p>
                    <p className="mt-0.5 truncate text-xs text-muted">
                      {item.category || 'Uncategorised'} · {formatShortDate(item.created_at)}
                    </p>
                  </div>
                  <PublishBadge published={item.published} />
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-line pt-3">
                  <span className="text-xs text-muted">Order {item.sort_order}</span>
                  <Link
                    href={`/admin/gallery/${item.id}`}
                    className="text-xs font-medium text-brand hover:text-brand-dark"
                  >
                    Edit
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}