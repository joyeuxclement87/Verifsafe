'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  highlight,
  description,
  centered = false,
  dark = false,
  className = ""
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
    >
      <div className={`inline-flex items-center gap-2 mb-5 px-4 py-2 ${dark ? 'bg-white/10 border border-white/20' : 'bg-red-50'} rounded-full`}>
        <span className={`w-2 h-2 rounded-full ${dark ? 'bg-red-400' : 'bg-[#E53935]'}`} />
        <p className={`${dark ? 'text-white' : 'text-[#E53935]'} text-xs font-bold tracking-widest uppercase`} style={{ fontFamily: 'Noto Sans, sans-serif' }}>
          {label}
        </p>
      </div>
      
      <h2 
        className={`text-4xl sm:text-5xl font-black ${dark ? 'text-white' : 'text-gray-900'} mb-6 leading-tight uppercase`} 
        style={{ fontFamily: 'Oswald, sans-serif' }}
      >
        {title} {highlight && <span className="text-[#E53935]">{highlight}</span>}
      </h2>
      
      <div className={`w-20 h-1 bg-[#E53935] rounded-full ${centered ? 'mx-auto' : ''} mb-6`} />
      
      {description && (
        <p 
          className={`text-lg ${dark ? 'text-gray-300' : 'text-gray-600'} leading-relaxed font-normal max-w-2xl ${centered ? 'mx-auto' : ''}`}
          style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
