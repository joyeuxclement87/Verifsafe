'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Button from '@/components/ui/Button';

const proof = [
  { value: '500+', label: 'Buildings protected' },
  { value: '24/7', label: 'Emergency support' },
  { value: '2 hrs', label: 'Response time' },
];

const gridLineStyle = {
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
  `,
  backgroundSize: '60px 60px',
};

export default function ProtectionCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#1a2332' }}
      aria-labelledby="cta-heading"
    >
      {/* Background Image Layer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-luminosity"
        style={{ backgroundImage: 'url("/cta.jpg")' }}
      />

      {/* Layered Gradient — ensures crisp legibility across all viewport sizes */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 20% 50%, rgba(26,35,50,0.92) 0%, #1a2332 100%)',
        }}
      />

      {/* Blueprint grid overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={gridLineStyle}
      />

      {/* Top Hairline border */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-[1fr_auto] lg:gap-16 xl:gap-24 lg:items-end">

          {/* Left Column — Content & Primary/Secondary CTAs */}
          <motion.div
            initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Eyebrow Header */}
            <div className="flex items-center justify-between gap-4 mb-8">
              <p className="flex items-center gap-2.5">
                <span aria-hidden="true" className="h-px w-8 bg-[#E53935]" />
                <span className="text-xs font-semibold tracking-[0.2em] text-[#A7B0B5] uppercase">
                  ready to safeguard your property?
                </span>
              </p>
              <span
                aria-hidden="true"
                className="hidden sm:block text-[10px] font-mono tracking-widest text-white/30"
              >
                VS / CTA — 08
              </span>
            </div>

            {/* Display Heading */}
            <h2
              id="cta-heading"
              className="text-section-heading text-[#F4F3EF] max-w-2xl"
            >
              Protect your building <br className="hidden sm:block" /> before it <span className="text-highlight-dark">matters</span> most.
            </h2>

            {/* Subheading */}
            <p className="text-subheading text-[#A7B0B5] mt-6 max-w-xl leading-relaxed">
              From initial risk assessment to equipment supply, installation, and scheduled maintenance —
              we keep your fire safety systems fully certified and operational.
            </p>

            {/* CTA Buttons — matching exact Hero dark section treatment */}
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
              <Button
                href="/contact#contact-form"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto !rounded-lg !h-12 !px-8 !bg-[#E53935] hover:!bg-[#C62828] !shadow-[0_10px_24px_-10px_rgba(229,57,53,0.5)] !text-white font-semibold"
              >
                Request a Quote
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto !rounded-lg !h-12 !px-8 !bg-transparent !border-white/25 !text-[#F4F3EF] hover:!border-white/60 hover:!bg-white/5 !shadow-none font-semibold"
              >
                Talk to Our Team
              </Button>
            </div>
          </motion.div>

          {/* Right Column — Key Proof Numbers */}
          <motion.div
            initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: reduceMotion ? 0 : 0.15, ease: 'easeOut' }}
            className="mt-14 lg:mt-0 flex flex-row lg:flex-col gap-0 border-t border-white/10 lg:border-t-0 lg:border-l lg:border-white/10 pt-10 lg:pt-0 lg:pl-12 xl:pl-16"
          >
            {proof.map((item, i) => (
              <div
                key={item.label}
                className={`flex-1 lg:flex-none py-0 lg:py-6 pr-6 sm:pr-10 lg:pr-0 ${
                  i > 0 ? 'border-l lg:border-l-0 lg:border-t border-white/10 pl-6 sm:pl-10 lg:pl-0 lg:pt-6' : ''
                }`}
              >
                <p
                  className="text-[#F4F3EF] font-semibold tabular-nums tracking-tight"
                  style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1' }}
                >
                  {item.value}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-[#A7B0B5]">{item.label}</p>
              </div>
            ))}
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
