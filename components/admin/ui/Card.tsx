export function Card({
  title,
  description,
  action,
  children,
  className = '',
  noPadding = false,
}: {
  title?: string
  description?: string
  action?: React.ReactNode
  children: React.ReactNode
  className?: string
  noPadding?: boolean
}) {
  return (
    <section className={` rounded-lg border border-line bg-white ${className}`}>
      {(title || action) && (
        <header className="flex items-start justify-between gap-4 border-b border-line px-5 py-4 sm:px-6">
          <div>
            {title && (
              <h2 className="text-sm font-semibold tracking-tight text-ink">{title}</h2>
            )}
            {description && <p className="mt-0.5 text-xs text-muted">{description}</p>}
          </div>
          {action}
        </header>
      )}
      <div className={noPadding ? '' : 'p-5 sm:p-6'}>{children}</div>
    </section>
  )
}