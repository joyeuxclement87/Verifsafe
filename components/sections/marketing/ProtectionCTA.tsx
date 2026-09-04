'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Button from '@/components/ui/Button';

const assurances = ['Response within 2 hours', '24/7 emergency support available'];

export default function ProtectionCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="w-full py-20 sm:py-24 lg:py-28 relative overflow-hidden bg-ink">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("/cta.jpg")` }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-ink/95 via-ink/85 to-ink/75" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <span aria-hidden="true" className="h-px w-8 bg-white/60" />
            <p className="text-label text-white/60">NEXT STEP</p>
          </div>

          <h2 className="text-section-heading text-white">
            Secure your building before risk becomes loss.
          </h2>

          <p className="text-subheading text-gray-300 mt-6 max-w-xl">
            Plan certified fire protection with equipment, system checks, and support tailored to
            your site.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
            <Button
              href="/contact#contact-form"
              variant="primary"
              size="lg"
              className="self-start"
            >
              Request a quote
            </Button>

            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="self-start sm:self-auto"
            >
              Talk to our team
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            {assurances.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-gray-400">
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#D62828]" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
