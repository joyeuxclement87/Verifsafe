'use client';

import { useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { ArrowUpRight, ArrowRight, Phone, Check } from 'tabler-icons-react';
import Button from '@/components/ui/Button';
import RelatedEquipment from '@/components/equipment/RelatedEquipment';

/* ─── Data ──────────────────────────────────────────────────────────────── */

const accessoryTypes = [
  {
    number: '01',
    title: 'Cabinets & Stands',
    text: 'Heavy-duty storage that protects extinguishers from theft, impact and environmental damage.',
    bestFor: 'High-traffic public areas, industrial sites and outdoor locations.',
  },
  {
    number: '02',
    title: 'Fire Blankets',
    text: 'Fiberglass blankets designed to smother small liquid or clothing fires by cutting off oxygen.',
    bestFor: 'Commercial kitchens, laboratory environments and workshop areas.',
  },
  {
    number: '03',
    title: 'Mandatory Signage',
    text: 'High-visibility photoluminescent signs that indicate equipment location and exit routes.',
    bestFor: 'All commercial and public buildings requiring regulatory compliance.',
  },
];

const introSteps = [
  {
    step: '01',
    title: 'Accessibility',
    text: 'Stands and brackets keep equipment at the correct height for immediate use.',
  },
  {
    step: '02',
    title: 'Identification',
    text: 'Strategic signage lets occupants locate fire tools within seconds during a crisis.',
  },
  {
    step: '03',
    title: 'Asset Protection',
    text: 'Durable cabinets protect safety hardware from environmental wear and tear.',
  },
];

const components = [
  { title: 'Mounting Gear', text: 'Wall brackets and floor stands.' },
  { title: 'Storage Boxes', text: 'Locked and unlocked safety cabinets.' },
  { title: 'Visual Signage', text: 'Regulatory fire and exit labels.' },
  { title: 'Fire Blankets', text: 'Fire-retardant fiberglass safety blankets.' },
  { title: 'Personal Gear', text: 'Safety helmets and basic response tools.' },
];

const buyerGuide = [
  {
    title: 'Environment',
    text: 'Outdoor equipment requires weatherproof, UV-resistant cabinets and stands.',
  },
  {
    title: 'Visibility',
    text: 'Signage should be photoluminescent so it stays visible during a power failure.',
  },
  {
    title: 'Material Quality',
    text: 'Fire blankets must meet recognised fire-retardancy standards.',
  },
  {
    title: 'Placement',
    text: 'Accessories should be positioned so they never obstruct primary exit pathways.',
  },
];

const applications = [
  'Corporate Headquarters',
  'Industrial Factories',
  'Logistics Warehouses',
  'Hospitality Venues',
  'Residential Complexes',
  'Public Institutions',
];

const features = [
  'Heavy-Duty Steel Construction',
  'UV-Resistant Powder Coating',
  'Photoluminescent Signage',
  'Anti-Tamper Cabinet Seals',
  'Fire-Retardant Fabric',
  'Easy-Install Mounting Brackets',
];

/* ─── Styles ────────────────────────────────────────────────────────────── */

const navyGridStyle = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
  backgroundSize: '60px 60px',
};

/* ─── Page ──────────────────────────────────────────────────────────────── */

export default function FireSafetyAccessoriesGuide() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroParallax = useTransform(heroProgress, [0, 1], [0, '10%']);
  const heroFade = useTransform(heroProgress, [0, 0.8], [1, 0.15]);

  const gridTransition = (delay = 0) => ({
    duration: reduceMotion ? 0 : 0.5,
    delay: reduceMotion ? 0 : delay,
    ease: 'easeOut' as const,
  });

  return (
    <main className="w-full">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        aria-labelledby="accessories-h1"
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: '#0B1720' }}
      >
        <div className="absolute inset-0 bg-[#0B1720]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1720]/95 via-[#0B1720]/80 to-[#123B5D]/40" />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={navyGridStyle}
        />

        <motion.div
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          style={reduceMotion ? undefined : { y: heroParallax, opacity: heroFade }}
        >
          <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,24rem)] gap-12 lg:gap-16 items-center min-h-[480px] lg:min-h-[620px] pt-24 pb-28 sm:pt-28 sm:pb-32">
            <span
              aria-hidden="true"
              className="absolute right-0 top-8 text-[10px] font-mono tracking-wider opacity-40 text-[#A7B0B5]"
            >
              06 / 06
            </span>

            <div>
              <RevealGroup stagger={0.08} delayChildren={0.05}>
                <RevealItem variant="up-sm">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#E53935]">
                    fire safety accessories
                  </p>
                </RevealItem>

                <RevealItem>
                  <h1
                    id="accessories-h1"
                    className="text-hero-heading leading-[1.05] text-[#F4F3EF] max-w-xl"
                  >
                    the supporting hardware that makes protection{' '}
                    <span className="text-highlight-dark">usable</span>.
                  </h1>
                </RevealItem>

                <RevealItem variant="up-sm">
                  <p className="text-subheading mt-5 max-w-xl text-[#A7B0B5] leading-relaxed">
                    Cabinets, stands, blankets and signage that keep your primary fire
                    safety equipment visible, accessible and protected.
                  </p>
                </RevealItem>

                <RevealItem variant="up-sm">
                  <div className="mt-8 w-full sm:w-auto flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
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
                      className="w-full sm:w-auto !rounded-lg !h-12 !px-7 !bg-[#E53935] hover:!bg-[#C62828] !shadow-[0_10px_24px_-10px_rgba(229,57,53,0.5)] font-semibold"
                    >
                      Request a Quote
                    </Button>
                    <Button
                      href="/equipments"
                      variant="secondary"
                      size="lg"
                      icon={<ArrowRight size={18} strokeWidth={2} />}
                      className="w-full sm:w-auto !rounded-lg !bg-transparent !border-white/25 !text-[#F4F3EF] hover:!border-white/60 hover:!bg-white/5 !shadow-none font-semibold"
                    >
                      Explore Equipment
                    </Button>
                  </div>
                </RevealItem>
              </RevealGroup>
            </div>

            {/* Accessories image */}
            <div className="hidden lg:block relative">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-white/10 bg-[#0B1720]">
                <Image
                  src="/fire-safety-accessories-guide.png"
                  alt="Fire safety accessories and equipment cabinets"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 24rem, 0px"
                />
              </div>
              <p className="text-[10px] font-mono tracking-widest text-[#A7B0B5]/60 mt-3 pl-0.5 uppercase">
                cabinets · blankets · signage
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Overview ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="accessories-overview-heading"
        className="w-full bg-white border-t border-gray-200 py-20 sm:py-24 lg:py-32"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                    overview
                  </span>
                </p>
                <span
                  aria-hidden="true"
                  className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
                >
                  VS / ACS — 01
                </span>
              </div>

              <h2 id="accessories-overview-heading" className="text-section-heading text-gray-900 mt-6">
                protection works when the supporting hardware is{' '}
                <span className="text-highlight">right</span>.
              </h2>

              <p className="text-body text-gray-600 mt-4 max-w-lg leading-relaxed">
                Accessories are the supporting layer around your primary fire equipment —
                the stands that hold it, the cabinets that protect it and the signs that
                point people to it.
              </p>

              <p className="text-body-sm text-gray-500 mt-5 max-w-lg leading-relaxed">
                Chosen well, they keep equipment reachable, identified and in working
                condition for the moments it is needed.
              </p>

              <ul className="mt-8 max-w-lg" role="list" aria-label="What supporting hardware provides">
                {introSteps.map((item) => (
                  <li
                    key={item.step}
                    className="flex items-baseline gap-3 py-3 border-b border-gray-200 text-body text-gray-700"
                  >
                    <span aria-hidden="true" className="shrink-0 self-center h-px w-4 bg-[#D62828]" />
                    <span className="font-medium">{item.title}</span>
                    <span className="text-body-sm text-gray-500">— {item.text}</span>
                  </li>
                ))}
                <li aria-hidden="true" className="border-b border-gray-200" />
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="relative"
            >
              <div className="relative aspect-[4/4] rounded-lg overflow-hidden border border-black/10 bg-gray-100">
                <Image
                  src="/fire-safety-accessories-guide.png"
                  alt="Cabinets and stands protecting fire safety equipment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="text-[10px] font-mono tracking-widest text-gray-400 mt-3 pl-0.5 uppercase">
                the supporting layer around primary equipment
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Types ────────────────────────────────────────────────── */}
      <section
        aria-labelledby="accessories-types-heading"
        className="w-full bg-neutral border-t border-gray-200 py-20 sm:py-24 lg:py-28"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,20rem)_1fr] gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:sticky lg:top-24"
            >
              <div className="flex items-center gap-3 mb-5">
                <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                <p className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                  the range
                </p>
              </div>

              <h2 id="accessories-types-heading" className="text-section-heading text-gray-900">
                accessories that{' '}
                <span className="text-highlight">complete</span> the setup.
              </h2>
              <p className="text-body text-gray-600 mt-4 max-w-sm">
                Each type of accessory has a clear role — improving access, visibility or
                protection of the equipment around it.
              </p>
            </motion.div>

            <div className="border-t border-gray-200">
              {accessoryTypes.map((type, index) => (
                <motion.div
                  key={type.number}
                  initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={gridTransition(index * 0.06)}
                  className="group py-7 sm:py-8 border-b border-gray-200"
                >
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-label tabular-nums text-[#D62828]">
                        {type.number}
                      </span>
                      <h3 className="text-card-title text-gray-900 transition-colors duration-200 group-hover:text-[#D62828] motion-reduce:transition-none">
                        {type.title}
                      </h3>
                    </div>
                    <p className="text-body-sm text-gray-600 mt-1.5 leading-relaxed max-w-prose">
                      {type.text}
                    </p>
                    <p className="flex items-start gap-2.5 text-body-sm text-gray-500 mt-2 leading-relaxed max-w-prose">
                      <span aria-hidden="true" className="shrink-0 mt-[0.65rem] h-px w-4 bg-[#D62828]" />
                      Best for — {type.bestFor}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Buyer's guide ────────────────────────────────────────── */}
      <section
        aria-labelledby="accessories-buyers-heading"
        className="w-full bg-paper border-t border-gray-200 py-20 sm:py-24 lg:py-28"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,20rem)_1fr] gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:sticky lg:top-24"
            >
              <div className="flex items-center gap-3 mb-5">
                <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                <p className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                  choosing
                </p>
              </div>

              <h2 id="accessories-buyers-heading" className="text-section-heading text-gray-900">
                choose accessories that fit the{' '}
                <span className="text-highlight">environment</span>.
              </h2>
              <p className="text-body text-gray-600 mt-4 max-w-sm">
                Four things determine whether supporting hardware will actually do its job
                over time.
              </p>
            </motion.div>

            <div className="border-t border-gray-200">
              {buyerGuide.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={gridTransition(index * 0.05)}
                  className="group py-6 sm:py-7 border-b border-gray-200"
                >
                  <div className="flex items-start gap-5 sm:gap-6">
                    <span
                      aria-hidden="true"
                      className="shrink-0 mt-1 w-5 h-5 rounded-full border border-[#D62828]/30 flex items-center justify-center"
                    >
                      <Check size={12} strokeWidth={2.5} className="text-[#D62828]" />
                    </span>
                    <div>
                      <h3 className="text-card-title text-gray-900 transition-colors duration-200 group-hover:text-[#D62828] motion-reduce:transition-none">
                        {item.title}
                      </h3>
                      <p className="text-body-sm text-gray-600 mt-1.5 leading-relaxed max-w-prose">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Included elements ────────────────────────────────────── */}
      <section
        aria-labelledby="accessories-components-heading"
        className="w-full bg-white border-t border-gray-200 py-20 sm:py-24 lg:py-32"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <p className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                in the range
              </span>
            </p>
            <span
              aria-hidden="true"
              className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
            >
              VS / ACS — 02
            </span>
          </div>

          <div className="max-w-3xl mt-6">
            <h2 id="accessories-components-heading" className="text-section-heading text-gray-900">
              what the range <span className="text-highlight">includes</span>.
            </h2>
            <p className="text-subheading mt-5 text-gray-600 max-w-2xl">
              The pieces that hold, store, mark and support primary fire equipment in a
              building.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 mt-12">
            {components.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={gridTransition(index * 0.05)}
                className="border-t border-gray-200 pt-5"
              >
                <span className="text-[10px] font-mono tabular-nums text-[#D62828]">
                  0{index + 1}
                </span>
                <h3 className="text-list-title text-gray-900 mt-2">{item.title}</h3>
                <p className="text-body-sm text-gray-500 mt-1.5 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Applications ─────────────────────────────────────────── */}
      <section
        aria-labelledby="accessories-applications-heading"
        className="w-full bg-paper border-t border-gray-200 py-20 sm:py-24 lg:py-28"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,20rem)_1fr] gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:sticky lg:top-24"
            >
              <div className="flex items-center gap-3 mb-5">
                <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                <p className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                  where they are used
                </p>
              </div>

              <h2 id="accessories-applications-heading" className="text-section-heading text-gray-900">
                supporting gear for every{' '}
                <span className="text-highlight">environment</span>.
              </h2>
              <p className="text-body text-gray-600 mt-4 max-w-sm">
                Accessories are specified against how a building is actually used — its
                traffic, its risks and its regulatory requirements.
              </p>
            </motion.div>

            <div>
              {applications.map((application, index) => (
                <motion.div
                  key={application}
                  initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={gridTransition(index * 0.06)}
                  className="group py-6 sm:py-7 border-b border-gray-200"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-label tabular-nums text-[#D62828]">
                      0{index + 1}
                    </span>
                    <h3 className="text-card-title text-gray-900 transition-colors duration-200 group-hover:text-[#D62828] motion-reduce:transition-none">
                      {application}
                    </h3>
                  </div>
                  <p className="text-body-sm text-gray-500 mt-1.5 max-w-prose">
                    Supporting safety
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features & benefits ──────────────────────────────────── */}
      <section
        aria-labelledby="accessories-features-heading"
        className="w-full bg-white border-t border-gray-200 py-20 sm:py-24 lg:py-32"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <p className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                built to last
              </span>
            </p>
            <span
              aria-hidden="true"
              className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
            >
              VS / ACS — 03
            </span>
          </div>

          <div className="max-w-3xl mt-6">
            <h2 id="accessories-features-heading" className="text-section-heading text-gray-900">
              made to hold up in real{' '}
              <span className="text-highlight">environments</span>.
            </h2>
            <p className="text-subheading mt-5 text-gray-600 max-w-2xl">
              Construction, coatings and hardware selected for the demands of daily
              commercial use.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={gridTransition(index * 0.05)}
                className="flex items-start gap-3 border-t border-gray-200 pt-5"
              >
                <span
                  aria-hidden="true"
                  className="shrink-0 mt-1 w-5 h-5 rounded-full border border-[#D62828]/30 flex items-center justify-center"
                >
                  <Check size={12} strokeWidth={2.5} className="text-[#D62828]" />
                </span>
                <p className="text-body text-gray-900">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related equipment ────────────────────────────────────── */}
      <RelatedEquipment excludeId="fire-safety-accessories" />

      {/* ── Final CTA ──────────────────────────────────────────── */}
      <section
        aria-labelledby="accessories-cta-heading"
        className="relative w-full overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/verif.png"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(67, 3, 3, 0.92) 0%, rgba(72, 7, 7, 0.70) 20%, rgba(31,10,10,0.95) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="flex items-center gap-3 mb-5">
              <span aria-hidden="true" className="h-px w-8 bg-[#E53935]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A7B0B5]">
                complete your setup
              </span>
            </p>

            <h2 id="accessories-cta-heading" className="text-section-heading text-white">
              let&apos;s find the right accessories for your{' '}
              <span className="text-highlight-dark">building</span>.
            </h2>

            <p className="text-subheading text-white mt-5 max-w-xl">
              Tell us about your building and fire-safety requirements so we can recommend
              the supporting hardware and signage that fits.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
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
                className="w-full sm:w-auto !rounded-lg !h-12 !px-7 !bg-[#E53935] hover:!bg-[#C62828] !shadow-[0_10px_24px_-10px_rgba(229,57,53,0.5)] font-semibold"
              >
                Request a Quote
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                icon={<Phone size={18} strokeWidth={2} />}
                className="w-full sm:w-auto !rounded-lg !bg-transparent !border-white/25 !text-[#F4F3EF] hover:!border-white/60 hover:!bg-white/5 !shadow-none font-semibold"
              >
                Contact Our Team
              </Button>
            </div>

            <p className="text-body-sm text-white mt-6">
              From supply and installation to inspection, testing and maintenance, we help
              buildings stay protected.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}