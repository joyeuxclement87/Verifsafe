export function EmptyState({
  title,
  description,
  action,
}: {
  title: string
  description?: string
  action?: React.ReactNode
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-line bg-white px-6 py-16 text-center">
      <div className="mb-3 flex items-center gap-2">
        <span aria-hidden="true" className="h-px w-5 bg-brand/60" />
        <span className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
          Empty
        </span>
        <span aria-hidden="true" className="h-px w-5 bg-brand/60" />
      </div>
      <h3 className="text-base font-semibold tracking-tight text-ink">{title}</h3>
      {description && (
        <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-muted">{description}</p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </div>
  )
}