'use client';

import { motion } from 'framer-motion';

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
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
    >
      <div className={`flex items-center gap-3 mb-5 ${centered ? 'justify-center' : ''}`}>
        <span aria-hidden="true" className={`h-px w-8 ${dark ? 'bg-white/60' : 'bg-[#D62828]'}`} />
        <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${dark ? 'text-white/60' : 'text-gray-500'}`}>
          {label}
        </p>
      </div>

      <h2 className={`text-section-heading ${dark ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>

      {description && (
        <p className={`text-subheading mt-6 ${dark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}