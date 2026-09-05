'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'tabler-icons-react';
import { motion } from 'framer-motion';

const highlights = [
  {
    number: '01',
    text: '100+ successful installations across Rwanda'
  },
  {
    number: '02',
    text: 'Certified technicians working to international standards'
  },
  {
    number: '03',
    text: '24/7 emergency support always available'
  }
];

export default function AboutCompany() {
  return (
    <section className="w-full py-20 sm:py-24 lg:py-32 relative overflow-hidden bg-ink">

      <div className="absolute inset-0 z-0">
        <Image
          src="/about-company.png"
          alt=""
          fill
          className="object-cover opacity-40"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/60 to-ink/60" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 mb-5">
              <span aria-hidden="true" className="h-px w-8 bg-white/60" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                About Verifsafe
              </p>
            </div>

            <h2 className="text-section-heading  text-white">
              Who We Are
            </h2>

            <p className="text-subheading text-gray-300 mt-6 max-w-xl">
              Rwanda&apos;s leading fire protection company dedicated to protecting lives and
              property through professional fire safety solutions.
            </p>

            <p className="text-body text-gray-300 mt-5 max-w-xl">
              VERIFSAFE supplies, installs, and maintains fire protection systems that keep
              buildings and people safe when emergencies occur.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="flex flex-col justify-center"
          >
            <ol className="border-t border-white/15">
              {highlights.map((item) => (
                <li key={item.number} className="flex items-start gap-6 py-6 border-b border-white/15">
                  <span className="shrink-0 w-10 pt-0.5 text-index text-white/40 tabular-nums">
                    {item.number}
                  </span>
                  <p className="text-body text-gray-200">{item.text}</p>
                </li>
              ))}
            </ol>

            <div className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-body-sm font-semibold text-white transition-colors duration-200 hover:text-[#D62828] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828]"
              >
                Learn More
                <ArrowRight
                  size={18}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}