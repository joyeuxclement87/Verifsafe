import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'tabler-icons-react'
import Image from 'next/image'
import { getGalleryItem } from '@/lib/admin/gallery'
import { getPublicStorageUrl } from '@/lib/supabase/storage'
import { formatBytes, formatDimensions } from '@/lib/admin/format'
import { PublishBadge } from '@/components/admin/ui/Badge'
import { Card } from '@/components/admin/ui/Card'
import { GalleryEditForm } from '@/components/admin/gallery/GalleryEditForm'
import { ImageReplacer } from '@/components/admin/gallery/ImageReplacer'
import { DeleteGalleryButton } from '@/components/admin/gallery/DeleteGalleryButton'

export const dynamic = 'force-dynamic'

export default async function GalleryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  let item: NonNullable<Awaited<ReturnType<typeof getGalleryItem>>>
  try {
    item = await getGalleryItem(id)
  } catch {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/admin/gallery"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-line bg-white text-ink-soft transition-colors hover:border-ink/30 hover:text-ink"
          aria-label="Back to gallery"
        >
          <ArrowLeft size={16} />
        </Link>
        <div className="min-w-0 flex-1">
          <h1 className="truncate text-xl font-semibold tracking-tight text-ink">{item.title}</h1>
          <div className="mt-0.5 flex items-center gap-2">
            <p className="text-sm text-muted">{item.category || 'Uncategorised'}</p>
            <PublishBadge published={item.published} />
          </div>
        </div>
        <DeleteGalleryButton id={item.id} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,24rem)_1fr] lg:items-start">
        {/* Image + replacement */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-lg border border-line bg-white">
            <div className="aspect-[4/3]">
              <Image
                src={getPublicStorageUrl('gallery', item.image_path)}
                alt={item.alt_text || item.title}
                width={720}
                height={540}
                sizes="(max-width: 1024px) 100vw, 24rem"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-1.5 border-t border-line px-4 py-3 text-xs text-muted">
              <p>{item.image_path}</p>
              <p>
                {formatDimensions(item.image_width, item.image_height)}
                {item.image_format && ` · ${item.image_format.replace('image/', '')}`}
                {item.image_file_size && ` · ${formatBytes(item.image_file_size)}`}
              </p>
            </div>
          </div>

          <Card title="Replace image">
            <ImageReplacer id={item.id} />
          </Card>
        </div>

        {/* Details */}
        <div>
          <Card title="Project details">
            <GalleryEditForm
              id={item.id}
              title={item.title}
              description={item.description ?? ''}
              category={item.category ?? ''}
              alt_text={item.alt_text}
              caption={item.caption ?? ''}
              sort_order={item.sort_order}
              published={item.published}
            />
          </Card>
        </div>
      </div>
    </div>
  )
}