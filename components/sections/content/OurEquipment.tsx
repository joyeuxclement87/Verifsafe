'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'tabler-icons-react';
import { motion, useReducedMotion } from 'framer-motion';

const equipment = [
  {
    number: '01',
    title: 'Fire extinguishers',
    description:
      'Portable protection for a range of fire risks — from offices and kitchens to industrial environments.',
    href: '/equipments/fire-extinguishers',
    image: '/equipment-1.png',
    alt: 'Fire extinguishers for commercial fire protection',
  },
  {
    number: '02',
    title: 'Fire alarm systems',
    description:
      'Detection and alarm solutions designed to help buildings identify and respond to fire quickly.',
    href: '/equipments/fire-alarm-systems',
    image: '/equipment-2.png',
    alt: 'Fire alarm control panel and detection system',
  },
  {
    number: '03',
    title: 'Fire hose reels',
    description:
      'Accessible firefighting equipment for suitable building environments and first-response use.',
    href: '/equipments/fire-hose-reels',
    image: '/equipment-3.png',
    alt: 'Fire hose reel mounted for emergency use',
  },
  {
    number: '04',
    title: 'Emergency lights & exit signs',
    description:
      'Clear, reliable emergency guidance that works when normal lighting fails.',
    href: '/equipments/emergency-lights',
    image: '/equipment-4.png',
    alt: 'Emergency exit light and signage',
  },
];

export default function OurEquipment() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="equipment-heading"
      className="w-full bg-neutral py-20 sm:py-24 lg:py-32"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Intro */}
        <div className="max-w-3xl">
          <div className="flex items-center justify-between gap-4">
            <p className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                equipment
              </span>
            </p>
            <span
              aria-hidden="true"
              className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
            >
              VS / EQ — 04
            </span>
          </div>
          <h2 id="equipment-heading" className="text-section-heading mt-6 text-gray-900">
            The right <span className="text-highlight">equipment</span>. ready when it matters.
          </h2>
          <p className="text-subheading mt-5 text-gray-600 max-w-2xl">
            From portable extinguishers to fire detection and emergency systems,
            we supply equipment for different building needs.
          </p>
        </div>

        {/* Cards */}
        <ol
          className="mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
          aria-label="Equipment categories"
        >
          {equipment.map((item, index) => (
            <motion.li
              key={item.number}
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion ? 0 : index * 0.07,
                ease: 'easeOut',
              }}
              className="flex"
            >
              <Link
                href={item.href}
                aria-label={`${item.title} — ${item.description}`}
                className="group flex h-full w-full flex-col rounded-lg border border-black/10 bg-white transition-colors duration-200 hover:border-black/20 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#D62828] motion-reduce:transition-none"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-lg bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 23vw"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
                  />
                  {/* Top accent line — sweeps in on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-0.5 bg-[#E53935] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-focus-within:scale-x-100 motion-reduce:transition-none"
                  />
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  {/* Number */}
                  <span
                    aria-hidden="true"
                    className="text-index tabular-nums text-gray-400 transition-colors duration-200 group-hover:text-[#E53935] motion-reduce:transition-none"
                  >
                    {item.number}
                  </span>

                  {/* Red rule — appears on hover */}
                  <span
                    aria-hidden="true"
                    className="mt-1.5 block h-px w-5 bg-[#D62828] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none"
                  />

                  <h3 className="mt-3 text-card-title text-gray-900 leading-snug transition-colors duration-200 group-hover:text-[#A91D1D] group-focus-within:text-[#A91D1D] motion-reduce:transition-none">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-gray-600 flex-1">
                    {item.description}
                  </p>

                  {/* Footer link */}
                  <span className="mt-5 inline-flex items-center gap-1.5 text-body-sm font-semibold text-[#D62828]">
                    view equipment
                    <ArrowRight
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1 group-focus-within:translate-x-1 motion-reduce:transition-none"
                    />
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </ol>

        {/* Section CTA */}
        <div className="mt-12 lg:mt-16">
          <Link
            href="/equipments"
            aria-label="View all equipment"
            className="group inline-flex items-center gap-2 text-body-sm font-semibold text-[#D62828] hover:text-[#A91D1D] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828]"
          >
            view all equipment
            <ArrowRight
              size={18}
              strokeWidth={2}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
            />
          </Link>
        </div>

      </div>
    </section>
  );
}