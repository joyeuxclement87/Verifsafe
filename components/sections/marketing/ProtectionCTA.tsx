'use client';

import { ArrowUpRight, Phone } from 'tabler-icons-react';
import Button from '@/components/ui/Button';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import CtaBackground from './CtaBackground';

interface ProtectionCTAProps {
  heading?: string;
  description?: string;
}

export default function ProtectionCTA({
  heading = 'Let\u2019s make your building safer.',
  description = 'Tell us what you need — from equipment supply and installation to inspection, maintenance or training.',
}: ProtectionCTAProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#1a2332' }}
      aria-labelledby="cta-heading"
    >
      <CtaBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-40">
        <div className="max-w-3xl text-left">
          <RevealGroup stagger={0.08} delayChildren={0.05}>
            {/* Eyebrow */}
            <RevealItem variant="up-sm">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-[#E53935]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A7B0B5]">
                  ready when it matters
                </span>
              </div>
            </RevealItem>

            {/* Heading */}
            <RevealItem>
              <h2 id="cta-heading" className="text-section-heading text-[#F4F3EF] mt-6">
                {heading}
              </h2>
            </RevealItem>

            {/* Supporting text */}
            <RevealItem variant="up-sm">
              <p className="text-subheading text-[#A7B0B5] mt-5 max-w-xl leading-relaxed">
                {description}
              </p>
            </RevealItem>

            {/* CTA buttons */}
            <RevealItem variant="up-sm">
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
            </RevealItem>

            {/* Service line */}
            <RevealItem variant="up-sm">
              <p className="mt-12 text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                equipment · installation · inspection · maintenance
              </p>
            </RevealItem>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}