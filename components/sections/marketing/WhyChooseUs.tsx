'use client';

import { motion, useReducedMotion } from 'framer-motion';

const features = [
  {
    number: '01',
    label: 'Certified equipment',
    description:
      'Extinguishers, alarm systems, hose reels, and safety accessories sourced from approved manufacturers and certified to required safety standards.',
  },
  {
    number: '02',
    label: 'Expert installation',
    description:
      'Licensed technicians install and configure fire alarm systems, detection devices, and safety equipment for reliable performance when it matters.',
  },
  {
    number: '03',
    label: 'Responsive support',
    description:
      'Urgent fire safety issues get attention fast — with 24/7 emergency support and response within 2 hours.',
  },
  {
    number: '04',
    label: 'Dependable over time',
    description:
      'Routine inspection, testing, maintenance, and refilling keep your protection compliant and ready year after year.',
  },
];

export default function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="w-full bg-ink py-20 sm:py-24 lg:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,26rem)_1fr] gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Intro */}
          <div className="lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                  WHY VERIFSAFE
                </p>
              </div>

              <h2 className="text-section-heading text-white">
                Serious protection, handled end to end.
              </h2>

              <p className="text-subheading text-gray-400 mt-6">
                Practical fire protection delivered with certified equipment, skilled execution,
                and consistent support.
              </p>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-body-sm text-gray-400">
                  Serving Kigali and the entire Rwanda region.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Differentiators */}
          <ol className="border-t border-white/10">
            {features.map((feature, index) => (
              <motion.li
                key={feature.number}
                initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
                className="group relative border-b border-white/10 transition-colors duration-200 hover:bg-white/[0.04] motion-reduce:transition-none"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 inset-y-0 w-0.5 bg-[#D62828] opacity-0 transition-opacity duration-200 group-hover:opacity-100 motion-reduce:transition-none"
                />

                <div className="flex items-start gap-6 px-4 sm:px-6 py-7 sm:py-9">
                  <span
                    aria-hidden="true"
                    className="shrink-0 w-10 pt-1 text-base font-bold text-white/30 tabular-nums transition-colors duration-200 group-hover:text-[#D62828] motion-reduce:transition-none"
                  >
                    {feature.number}
                  </span>

                  <div>
                    <h3 className="text-card-title text-white mb-2">{feature.label}</h3>
                    <p className="text-body text-gray-400 transition-colors duration-200 group-hover:text-gray-300 motion-reduce:transition-none">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
