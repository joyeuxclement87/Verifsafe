import Link from 'next/link'
import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react'

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold tracking-[0.01em] transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-50 disabled:cursor-not-allowed'

const variants = {
  primary:
    'bg-brand text-white shadow-[0_1px_2px_rgba(17,17,17,0.12)] hover:bg-brand-dark hover:shadow-[0_4px_12px_-4px_rgba(214,40,40,0.45)]',
  secondary:
    'bg-white text-ink border border-line hover:border-ink/30 hover:bg-paper',
  danger:
    'bg-white text-red-700 border border-red-200 hover:bg-red-50 hover:border-red-300',
  ghost: 'text-ink-soft hover:text-ink hover:bg-neutral',
} as const

const sizes = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-9 px-4 text-[13px]',
  lg: 'h-10 px-5 text-sm',
} as const

type CommonProps = {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export default function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = 'primary', size = 'md', className = '', children, ...rest } = props
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if ('href' in props && props.href) {
    const { href, ...anchorRest } = props as ButtonAsLink
    return (
      <Link {...anchorRest} href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      className={classes}
    >
      {children}
    </button>
  )
}