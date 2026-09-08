'use client';

import { RevealGroup, RevealItem } from '@/components/ui/Reveal';

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  centered = false,
  dark = false,
  className = ""
}: SectionHeadingProps) {
  return (
    <RevealGroup
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
      stagger={0.08}
      delayChildren={0.05}
    >
      <RevealItem variant="up-sm">
        <div className={`flex items-center gap-3 mb-5 ${centered ? 'justify-center' : ''}`}>
          <span aria-hidden="true" className={`h-px w-8 ${dark ? 'bg-white/60' : 'bg-[#D62828]'}`} />
          <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${dark ? 'text-white/60' : 'text-gray-500'}`}>
            {label}
          </p>
        </div>
      </RevealItem>

      <RevealItem>
        <h2 className={`text-section-heading ${dark ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h2>
      </RevealItem>

      {description && (
        <RevealItem variant="up-sm">
          <p className={`text-subheading mt-6 ${dark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl ${centered ? 'mx-auto' : ''}`}>
            {description}
          </p>
        </RevealItem>
      )}
    </RevealGroup>
  );
}