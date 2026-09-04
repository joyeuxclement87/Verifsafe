'use client';

import Link from 'next/link';
import { ArrowRight, Loader2 } from 'tabler-icons-react';
import type { ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'dark' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-[15px]',
  lg: 'h-[50px] px-6 text-base',
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand text-white shadow-[0_1px_2px_rgba(17,17,17,0.12)] hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_6px_16px_-6px_rgba(17,17,17,0.30)] active:translate-y-0 active:shadow-[0_1px_2px_rgba(17,17,17,0.12)]',
  secondary:
    'bg-white text-ink border border-brand hover:-translate-y-px hover:border-brand-dark hover:bg-paper hover:shadow-[0_4px_12px_-4px_rgba(17,17,17,0.15)] active:translate-y-0 active:shadow-none',
  dark:
    'bg-surface-dark text-white border border-transparent shadow-[0_1px_2px_rgba(17,17,17,0.16)] hover:-translate-y-0.5 hover:bg-surface-soft hover:border-brand/50 hover:shadow-[0_6px_16px_-6px_rgba(17,17,17,0.32)] active:translate-y-0 active:shadow-[0_1px_2px_rgba(17,17,17,0.16)]',
  text: 'relative pb-1 text-ink',
};

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  icon?: ReactNode | null;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  ariaLabel?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  onClick,
  icon,
  disabled = false,
  loading = false,
  className,
  ariaLabel,
}: ButtonProps) {
  const isText = variant === 'text';
  const iconSize = isText ? 16 : 18;

  const classes = [
    'group inline-flex items-center justify-center gap-2.5 rounded-[10px] font-semibold tracking-[0.01em] transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-55 disabled:shadow-none disabled:translate-y-0 motion-reduce:transition-none',
    isText ? '' : sizeClasses[size],
    isText
      ? ''
      : 'motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0',
    variantClasses[variant],
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      <span>{children}</span>

      {loading ? (
        <Loader2 size={iconSize} className="animate-spin" aria-hidden="true" />
      ) : (
        icon !== null && (
          <span
            aria-hidden="true"
            className="inline-flex transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
          >
            {icon ?? <ArrowRight size={iconSize} strokeWidth={2} />}
          </span>
        )
      )}

      {isText && (
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-brand transition-transform duration-200 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
        />
      )}
    </>
  );

  if (href) {
    if (disabled) {
      return (
        <span role="link" aria-disabled="true" className={`${classes} pointer-events-none opacity-55`}>
          {content}
        </span>
      );
    }
    return (
      <Link href={href} onClick={onClick} aria-label={ariaLabel} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      aria-label={ariaLabel}
      className={classes}
    >
      {content}
    </button>
  );
}
