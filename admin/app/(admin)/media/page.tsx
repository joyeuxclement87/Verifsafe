import { getMediaItems } from '@/lib/media'
import { getPublicStorageUrl } from '@/lib/supabase/storage'
import { formatBytes, formatDimensions, formatShortDate } from '@/lib/format'
import { EmptyState } from '@/components/ui/EmptyState'
import { DeleteMediaButton } from '@/components/media/DeleteMediaButton'

export const dynamic = 'force-dynamic'

function mediaBucket(path: string): string {
  if (path.startsWith('gallery/')) return 'gallery'
  if (path.startsWith('products/')) return 'products'
  return 'gallery'
}

export default async function MediaPage() {
  const items = await getMediaItems()

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-xl font-semibold tracking-tight text-ink">Media library</h1>
        <p className="mt-1 text-sm text-muted">
          All uploaded files across Supabase Storage. Files still used by a gallery project
          cannot be deleted.
        </p>
      </header>

      {items.length === 0 ? (
        <EmptyState
          title="No media uploaded yet"
          description="Images you upload through the Gallery section will appear here."
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((media) => {
            const isImage =
              media.format?.startsWith('image/') && (media.width ?? 0) > 0
            const bucket = mediaBucket(media.file_path)

            return (
              <article
                key={media.id}
                className="group overflow-hidden rounded-lg border border-line bg-white"
              >
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-neutral">
                  {isImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={getPublicStorageUrl(bucket, media.file_path)}
                      alt={media.alt_text || media.file_name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="px-4 text-center text-xs text-muted">
                      {media.file_name}
                    </span>
                  )}
                </div>

                <div className="space-y-1.5 border-t border-line px-4 py-3">
                  <p className="truncate text-sm font-medium text-ink" title={media.file_name}>
                    {media.file_name}
                  </p>
                  <p className="text-xs text-muted">{formatDimensions(media.width, media.height)}</p>
                  <p className="text-xs text-muted">
                    {formatBytes(media.file_size)}
                    {media.format && ` · ${media.format.replace('image/', '')}`}
                  </p>
                  <p className="text-xs text-muted">Uploaded {formatShortDate(media.created_at)}</p>
                  <div className="flex items-center justify-between gap-2 pt-2">
                    <span
                      className={`truncate rounded-full px-2 py-0.5 text-[0.6875rem] font-medium ${
                        media.reference
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-gray-50 text-gray-500'
                      }`}
                      title={media.reference ?? undefined}
                    >
                      {media.reference ? `Used · ${media.reference.split(':')[0]}` : 'Unused'}
                    </span>
                    <DeleteMediaButton id={media.id} referenced={Boolean(media.reference)} />
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      )}
    </div>
  )
}