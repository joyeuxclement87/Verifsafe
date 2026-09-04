'use client';

import { motion, useReducedMotion } from 'framer-motion';

const assurances = [
  {
    number: '01',
    title: 'Certified equipment',
    description:
      'Reliable fire-safety equipment selected for professional applications.',
  },
  {
    number: '02',
    title: 'Professional installation',
    description:
      'Systems installed with attention to safety, correct placement and proper setup.',
  },
  {
    number: '03',
    title: 'Inspection & testing',
    description:
      'Existing fire protection systems checked to help identify gaps and risks.',
  },
  {
    number: '04',
    title: 'Ongoing maintenance',
    description:
      'Fire protection systems maintained so they stay ready when needed.',
  },
];

const gridLineStyle = {
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
  `,
  backgroundSize: '60px 60px',
};

export default function AssuranceStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="assurance-heading"
      className="relative w-full overflow-hidden border-t border-white/5"
      style={{ backgroundColor: '#0B1720' }}
    >
      {/* Subtle blueprint grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={gridLineStyle}
      />
      {/* Industrial blue gradient accent */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-transparent to-[#123B5D]/30"
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 id="assurance-heading" className="sr-only">
          The VerifSafe fire safety assurance
        </h2>

        {/* Technical meta row */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-10 lg:mb-14">
          <span className="flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-6 bg-[#E53935]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A7B0B5]">
              The assurance standard
            </span>
          </span>
          <span
            aria-hidden="true"
            className="hidden sm:block text-[10px] font-mono tracking-widest text-white/30"
          >
            VS / 04 — 01
          </span>
        </div>

        {/* Assurance system diagram */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-x-10 sm:gap-y-12 lg:gap-x-0 lg:gap-y-0">
          {assurances.map((item, index) => (
            <motion.li
              key={item.number}
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              className="relative lg:px-8"
            >
              {/* Connecting line between nodes (desktop) */}
              <span
                aria-hidden="true"
                className="hidden lg:block absolute top-3 left-1/2 right-[-50%] h-px bg-white/10"
              />

              <div className="flex items-start lg:flex-col lg:items-center lg:text-center">
                {/* Node */}
                <span
                  aria-hidden="true"
                  className="relative z-10 mt-0.5 lg:mt-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#0B1720' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E53935]" />
                </span>

                <div className="ml-5 lg:ml-0 lg:mt-4">
                  <span className="block text-[11px] font-semibold tracking-[0.2em] tabular-nums text-[#E53935]">
                    {item.number}
                  </span>
                  <h3 className="mt-1.5 text-base font-semibold text-[#F4F3EF] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#A7B0B5] lg:max-w-[15rem]">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}