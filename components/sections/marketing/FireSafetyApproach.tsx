'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface FireSafetyApproachProps {
  steps?: ProcessStep[];
  eyebrow?: string;
  code?: string;
  heading?: ReactNode;
  description?: string;
}

const homepageSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Assess',
    description: 'Understand the building, occupancy, risks and existing protection.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Plan the right fire protection solution for the environment.',
  },
  {
    number: '03',
    title: 'Equip',
    description: 'Supply the appropriate fire safety equipment and systems.',
  },
  {
    number: '04',
    title: 'Install',
    description: 'Install and configure systems with care and precision.',
  },
  {
    number: '05',
    title: 'Maintain',
    description: 'Inspect, test and maintain protection so it stays ready.',
  },
];

const homepageHeading = (
  <>
    Protection starts before <span className="text-highlight-dark">installation</span>.
  </>
);

const gridLineStyle = {
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
  `,
  backgroundSize: '60px 60px',
};

export default function FireSafetyApproach({
  steps = homepageSteps,
  eyebrow = 'how we protect',
  code = 'VS / PRC — 05',
  heading = homepageHeading,
  description = 'Every building has different risks. We assess the environment, plan the right solution, install it correctly and keep it ready over time.',
}: FireSafetyApproachProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="fire-safety-approach"
      aria-labelledby="process-heading"
      className="relative w-full overflow-hidden scroll-mt-24"
      style={{ backgroundColor: '#0B1720' }}
    >
      {/* Faint technical blueprint grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={gridLineStyle}
      />
      {/* Industrial blue wash on the right */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-transparent to-[#123B5D]/25"
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        {/* Meta row */}
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-6 bg-[#E53935]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#A7B0B5]">
              {eyebrow}
            </span>
          </span>
          <span
            aria-hidden="true"
            className="hidden sm:block text-[10px] font-mono tracking-widest text-white/30"
          >
            {code}
          </span>
        </div>

        {/* Heading block */}
        <div className="mt-8 lg:mt-10 max-w-3xl border-b border-white/10 pb-8 lg:pb-10">
          <h2
            id="process-heading"
            className="text-section-heading leading-[1.1] text-[#F4F3EF]"
          >
            {heading}
          </h2>
          <p className="mt-5 text-subheading text-[#A7B0B5] max-w-2xl">
            {description}
          </p>
        </div>

        {/* Process */}
        <div className="relative mt-10 lg:mt-12">
          {/* Vertical timeline rail (mobile / tablet) */}
          <span
            aria-hidden="true"
            className="absolute left-[11px] top-3 bottom-6 w-px bg-white/10 lg:hidden"
          />

          <ol className="relative grid grid-cols-1 gap-y-10 lg:grid-cols-5 lg:gap-y-0">
            {steps.map((step, index) => (
              <motion.li
                key={step.number}
                initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: reduceMotion ? 0 : 0.5,
                  delay: reduceMotion ? 0 : index * 0.08,
                  ease: 'easeOut',
                }}
                className="group relative flex gap-4 lg:block lg:px-6"
              >
                {/* Connecting segment to the next stage (desktop) */}
                {index < steps.length - 1 && (
                  <motion.span
                    aria-hidden="true"
                    initial={{ scaleX: reduceMotion ? 1 : 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.5,
                      delay: reduceMotion ? 0 : 0.3 + index * 0.06,
                      ease: 'easeOut',
                    }}
                    className="hidden lg:block absolute top-[11px] left-1/2 right-[-50%] z-0 h-px origin-left"
                  >
                    <span className="block h-px bg-white/10 transition-colors duration-200 group-hover:bg-[#E53935] motion-reduce:transition-none" />
                  </motion.span>
                )}

                {/* Node */}
                <span
                  aria-hidden="true"
                  className="relative z-10 mt-0.5 lg:mt-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-all duration-200 group-hover:border-[#E53935] group-hover:shadow-[0_0_0_4px_rgba(229,57,53,0.15)] motion-reduce:transition-none lg:mx-auto"
                  style={{ backgroundColor: '#0B1720' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E53935] transition-transform duration-200 group-hover:scale-150 motion-reduce:transition-none" />
                </span>

                {/* Content */}
                <div className="min-w-0 flex-1 lg:mt-4 lg:flex-none lg:w-full lg:text-center">
                  <span className="block text-index tabular-nums text-white/45 transition-colors duration-200 group-hover:text-[#E53935] motion-reduce:transition-none">
                    {step.number}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-1.5 block h-px w-6 bg-[#E53935] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none lg:mx-auto lg:origin-center"
                  />
                  <h3 className="mt-1.5 text-list-title text-[#F4F3EF]/90 leading-snug transition-colors duration-200 group-hover:text-[#F4F3EF] motion-reduce:transition-none">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-[#A7B0B5] transition-colors duration-200 group-hover:text-[#C7CED3] motion-reduce:transition-none lg:mt-3 lg:max-w-[14rem] lg:mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>

          {/* Return path — protection is a continuous cycle */}
          <div
            aria-hidden="true"
            className="relative hidden lg:block mt-14 h-11 pointer-events-none"
          >
            {/* Left rise into stage 01 */}
            <span className="absolute left-[10%] top-0 h-2 w-2 -translate-x-1/2 rotate-45 border-t border-l border-[#E53935]" />
            <span className="absolute left-[10%] top-2 h-9 w-px bg-white/10" />
            {/* Horizontal return line */}
            <span className="absolute left-[10%] right-[10%] top-[43px] h-px bg-white/10" />
            {/* Right descent from stage 05 */}
            <span className="absolute right-[10%] top-0 h-9 w-px bg-white/10" />
            <span className="absolute right-[10%] top-9 h-2 w-2 -translate-x-1/2 rotate-[225deg] border-t border-l border-[#E53935]" />
          </div>
        </div>
      </div>

      {/* Bottom hairline */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ backgroundColor: 'rgba(167, 176, 181, 0.1)' }}
      />
    </section>
  );
}