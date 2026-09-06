'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Phone } from 'tabler-icons-react';
import Button from '@/components/ui/Button';

interface ProtectionCTAProps {
  heading?: string;
  description?: string;
}

const gridLineStyle = {
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
  `,
  backgroundSize: '60px 60px',
};

const hairlineStyle = {
  backgroundImage: `
    repeating-linear-gradient(
      90deg,
      rgba(255,255,255,0.05) 0px,
      rgba(255,255,255,0.05) 1px,
      transparent 1px,
      transparent 33.333%
    )
  `,
};

export default function ProtectionCTA({
  heading = 'Let\u2019s make your building safer.',
  description = 'Tell us what you need — from equipment supply and installation to inspection, maintenance or training.',
}: ProtectionCTAProps) {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#1a2332' }}
      aria-labelledby="cta-heading"
    >
      {/* Subtle industrial-blue glow behind the content */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 45%, rgba(30,41,59,0.55) 0%, rgba(26,35,50,0) 70%)',
        }}
      />

      {/* Subtle engineering line graphic — vertical hairlines with gentle parallax */}
      <motion.div
        aria-hidden="true"
        className="absolute -inset-y-24 inset-x-0 pointer-events-none"
        style={reduceMotion ? undefined : { y: bgY }}
      >
        <div className="absolute inset-0" style={hairlineStyle} />
      </motion.div>

      {/* Blueprint grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={gridLineStyle}
      />

      {/* Engineering reference ticks */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none font-mono text-base text-white/[0.07] select-none"
      >
        <span className="absolute left-4 sm:left-8 top-6">+</span>
        <span className="absolute right-4 sm:right-8 bottom-6">+</span>
      </div>

      {/* Top Hairline border */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-40">
        <div className="max-w-3xl text-left">
          <motion.div
            initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-[#E53935]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A7B0B5]">
                ready when it matters
              </span>
            </div>

            {/* Heading */}
            <h2 id="cta-heading" className="text-section-heading text-[#F4F3EF] mt-6">
              {heading}
            </h2>

            {/* Supporting text */}
            <p className="text-subheading text-[#A7B0B5] mt-5 max-w-xl leading-relaxed">
              {description}
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
              <Button
                href="/contact#contact-form"
                variant="primary"
                size="lg"
                icon={
                  <ArrowUpRight
                    size={18}
                    strokeWidth={2}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
                  />
                }
                className="w-full sm:w-auto !rounded-lg !h-12 !px-8 !bg-[#E53935] hover:!bg-[#C62828] !shadow-[0_10px_24px_-10px_rgba(229,57,53,0.5)] !text-white font-semibold"
              >
                Request a Quote
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                icon={<Phone size={18} strokeWidth={2} />}
                className="w-full sm:w-auto !rounded-lg !h-12 !px-8 !bg-transparent !border-white/25 !text-[#F4F3EF] hover:!border-white/60 hover:!bg-white/5 !shadow-none font-semibold"
              >
                Talk to Our Team
              </Button>
            </div>

            {/* Service line */}
            <p className="mt-12 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
              equipment · installation · inspection · maintenance
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Hairline border */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
      />
    </section>
  );
}