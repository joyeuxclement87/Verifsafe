import { type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes } from 'react'

const fieldClasses =
  'w-full rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/80 transition-colors duration-150 focus:border-brand focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand/10 disabled:bg-neutral disabled:text-muted'

export function Field({
  label,
  hint,
  required,
  error,
  errorId,
  children,
}: {
  label: string
  hint?: string
  required?: boolean
  error?: string
  errorId?: string
  children: React.ReactNode
}) {
  return (
    <div className="block">
      <label className="block">
        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-ink-soft">
          {label}
          {required && (
            <span aria-hidden="true" className="ml-1 text-brand">
              *
            </span>
          )}
        </span>
        {children}
        {hint && <span className="mt-1.5 block text-xs text-muted">{hint}</span>}
      </label>
      {error && (
        <p id={errorId} className="mt-1.5 text-xs font-medium text-brand">
          {error}
        </p>
      )}
    </div>
  )
}

export function Input({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${fieldClasses} ${className}`} />
}

export function Textarea({ className = '', ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${fieldClasses} resize-y ${className}`} />
}

export function Select({ className = '', ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`${fieldClasses} ${className}`} />
}