'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Tools, ClipboardCheck, Refresh } from 'tabler-icons-react';

const assurances = [
  {
    number: '01',
    title: 'Certified equipment',
    description:
      'Reliable fire-safety equipment selected for professional applications.',
    Icon: ShieldCheck,
  },
  {
    number: '02',
    title: 'Professional installation',
    description:
      'Systems installed with attention to safety, correct placement and proper setup.',
    Icon: Tools,
  },
  {
    number: '03',
    title: 'Inspection & testing',
    description:
      'Existing fire protection systems checked to help identify gaps and risks.',
    Icon: ClipboardCheck,
  },
  {
    number: '04',
    title: 'Ongoing maintenance',
    description:
      'Fire protection systems maintained so they stay ready when needed.',
    Icon: Refresh,
  },
];

export default function AssuranceStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="assurance-heading"
      className="w-full border-t border-gray-200"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Intro */}
          <motion.div
            initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: reduceMotion ? 0 : 0.6, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-2.5">
                <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5F5F5A]">
                  The assurance standard
                </span>
              </span>
              <span
                aria-hidden="true"
                className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
              >
                VS / STD — 04
              </span>
            </div>

            <h2
              id="assurance-heading"
              className="text-section-heading mt-6 text-gray-900"
            >
              The <span className="text-highlight">standard</span> behind every installation.
            </h2>
            <p className="text-subheading mt-5 text-gray-600 max-w-md">
              Four disciplines applied consistently across every fire
              protection system — from supply to ongoing maintenance.
            </p>
          </motion.div>

          {/* Items */}
          <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-7">
            {assurances.map((item, index) => (
              <motion.li
                key={item.number}
                initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : 0.1 + index * 0.07,
                  ease: 'easeOut',
                }}
                className="group"
              >
                <div className="flex items-center gap-3">
                  <item.Icon
                    size={22}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="text-[#D62828] transition-all duration-200 group-hover:scale-110 group-hover:text-[#A91D1D] motion-reduce:transition-none"
                  />
                  <span className="text-xs font-semibold tracking-[0.2em] tabular-nums text-gray-400">
                    {item.number}
                  </span>
                </div>
                <h3 className="mt-4 text-list-title text-gray-900 leading-snug transition-colors duration-200 group-hover:text-[#D62828] motion-reduce:transition-none">
                  {item.title}
                </h3>
                <p className="mt-2 text-body-sm text-gray-600">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}