import { getMediaItems } from '@/lib/admin/media'
import { getPublicStorageUrl } from '@/lib/supabase/storage'
import { formatBytes, formatDimensions, formatShortDate } from '@/lib/admin/format'
import { EmptyState } from '@/components/admin/ui/EmptyState'
import { DeleteMediaButton } from '@/components/admin/media/DeleteMediaButton'

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
      <header className="flex flex-col gap-3 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-6 bg-brand" />
            <span className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
              Storage Assets
            </span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]">
            Media Library
          </h1>
          <p className="mt-1 text-sm text-muted">
            All uploaded files across Supabase Storage. Files actively referenced by a gallery
            project are protected from deletion.
          </p>
        </div>
        <p className="font-mono text-xs text-muted">
          {items.length} {items.length === 1 ? 'asset' : 'assets'}
        </p>
      </header>

      {items.length === 0 ? (
        <EmptyState
          title="No media uploaded yet"
          description="Images uploaded through the Gallery & Projects section are automatically indexed here."
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
                className="group flex flex-col justify-between overflow-hidden rounded-lg border border-line bg-white"
              >
                <div>
                  <div className="flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-line bg-neutral">
                    {isImage ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={getPublicStorageUrl(bucket, media.file_path)}
                        alt={media.alt_text || media.file_name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="px-4 text-center font-mono text-xs text-muted">
                        {media.file_name}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1 px-4 pt-3.5 pb-2">
                    <p
                      className="truncate font-mono text-xs font-medium text-ink"
                      title={media.file_name}
                    >
                      {media.file_name}
                    </p>
                    <p className="text-xs text-muted">
                      {formatDimensions(media.width, media.height)}
                      {media.format && ` · ${media.format.replace('image/', '').toUpperCase()}`}
                      {media.file_size ? ` · ${formatBytes(media.file_size)}` : ''}
                    </p>
                    <p className="text-xs text-muted">
                      Uploaded {formatShortDate(media.created_at)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-2 border-t border-line bg-paper px-4 py-2.5">
                  <span
                    className={`inline-flex items-center gap-1.5 truncate rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${
                      media.reference
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                        : 'border-line bg-white text-muted'
                    }`}
                    title={media.reference ?? undefined}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full ${
                        media.reference ? 'bg-emerald-600' : 'bg-gray-400'
                      }`}
                    />
                    {media.reference ? 'In use' : 'Unreferenced'}
                  </span>
                  <DeleteMediaButton id={media.id} referenced={Boolean(media.reference)} />
                </div>
              </article>
            )
          })}
        </div>
      )}
    </div>
  )
}