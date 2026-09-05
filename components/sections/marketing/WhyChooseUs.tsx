'use client';

import { motion, useReducedMotion } from 'framer-motion';

const proofPoints = [
  {
    number: '01',
    label: 'Reliable equipment',
    description:
      'Quality fire protection equipment selected for the needs of your building.',
  },
  {
    number: '02',
    label: 'Professional installation',
    description:
      'Careful installation and setup designed around your building and its systems.',
  },
  {
    number: '03',
    label: 'Ongoing maintenance',
    description:
      'Regular inspection and servicing to help keep your protection ready.',
  },
  {
    number: '04',
    label: 'One trusted partner',
    description:
      'Supply, installation, inspection and maintenance under one roof.',
  },
];

const gridStyle = {
  backgroundImage: `
    linear-gradient(rgba(11,23,32,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(11,23,32,0.02) 1px, transparent 1px)
  `,
  backgroundSize: '60px 60px',
};

export default function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="why-heading"
      className="relative w-full bg-neutral overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      {/* Faint technical grid — light version */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-100 pointer-events-none"
        style={gridStyle}
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="flex items-center justify-between gap-4">
          <p className="flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
              why choose us
            </span>
          </p>
          <span
            aria-hidden="true"
            className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
          >
            VS / CHS — 04
          </span>
        </div>

        <div className="max-w-3xl">
          <h2 id="why-heading" className="text-section-heading mt-6 text-gray-900">
            Protection you can <span className="text-highlight">depend</span> on.
          </h2>
          <p className="text-subheading mt-5 text-gray-600 max-w-2xl">
            From the equipment we supply to the systems we maintain, we focus on
            doing the work properly — and keeping protection ready when it matters.
          </p>
        </div>

        {/* Proof points — editorial ruled columns */}
        <ol className="mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-gray-200 lg:divide-x lg:divide-gray-200">
          {proofPoints.map((point, index) => (
            <motion.li
              key={point.number}
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : index * 0.07,
                ease: 'easeOut',
              }}
              className="group border-b border-gray-200 lg:border-b-0"
            >
              <div className="py-8 sm:py-10 lg:py-12 px-0 sm:px-6 lg:px-8 xl:px-10 first:pl-0">
                <span
                  aria-hidden="true"
                  className="block text-index tabular-nums text-gray-400 transition-colors duration-200 group-hover:text-[#D62828] motion-reduce:transition-none"
                >
                  {point.number}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-3 block h-px w-6 bg-[#D62828]"
                />
                <h3 className="mt-3 text-list-title text-gray-900 leading-snug transition-colors duration-200 group-hover:text-[#A91D1D] motion-reduce:transition-none">
                  {point.label}
                </h3>
                <p className="mt-2 text-body-sm text-gray-600">
                  {point.description}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}