'use client';

import { useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  Droplet,
  Bell,
  Flame,
  Bulb,
  BuildingSkyscraper,
  BuildingWarehouse,
  Building,
} from 'tabler-icons-react';
import Button from '@/components/ui/Button';
import {
  ServiceSlides,
  installationSlides,
  maintenanceSlides,
} from '@/components/equipment/ServiceSlides';

/* ─── Data ──────────────────────────────────────────────────────────────── */

interface FhrApplication {
  number: string;
  title: string;
  text: string;
  icon: typeof BuildingSkyscraper;
}

const fhrApplications: FhrApplication[] = [
  {
    number: '01',
    title: 'Commercial',
    text: 'Standard commercial buildings and multi-story offices.',
    icon: BuildingSkyscraper,
  },
  {
    number: '02',
    title: 'Industrial',
    text: 'Industrial workshops and areas with complex layouts.',
    icon: BuildingWarehouse,
  },
  {
    number: '03',
    title: 'Public & high-traffic',
    text: 'High-traffic public areas requiring rapid, simple operation.',
    icon: Building,
  },
];

interface RelatedEquipment {
  icon: typeof Droplet;
  title: string;
  text: string;
  href: string;
}

const relatedEquipment: RelatedEquipment[] = [
  {
    icon: Droplet,
    title: 'Fire Extinguishers',
    text: 'Portable protection for a range of fire risks.',
    href: '/equipments/fire-extinguishers',
  },
  {
    icon: Bell,
    title: 'Fire Alarm Systems',
    text: 'Detection and alarm solutions for buildings.',
    href: '/equipments/fire-alarm-systems',
  },
  {
    icon: Flame,
    title: 'Fire Detection Devices',
    text: 'Devices that help identify fire risks early.',
    href: '/equipments/fire-detection-devices',
  },
  {
    icon: Bulb,
    title: 'Emergency Lights & Exit Signs',
    text: 'Guidance that works when normal lighting fails.',
    href: '/equipments/emergency-lights',
  },
];

/* ─── Styles ────────────────────────────────────────────────────────────── */

const navyGridStyle = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
  backgroundSize: '60px 60px',
};

/* ─── Page ──────────────────────────────────────────────────────────────── */

export function FireHoseReelsGuide() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroParallax = useTransform(heroProgress, [0, 1], [0, '10%']);
  const heroFade = useTransform(heroProgress, [0, 0.8], [1, 0.15]);

  return (
    <main className="w-full">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        aria-labelledby="fhr-hero-h1"
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
              01 / 08
            </span>

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#E53935]">
                fire hose reels
              </p>

              <h1
                id="fhr-hero-h1"
                className="text-hero-heading leading-[1.05] text-[#F4F3EF] max-w-xl"
              >
                accessible fire protection, built into the{' '}
                <span className="text-highlight-dark">space</span>.
              </h1>

              <p className="text-subheading mt-5 max-w-xl text-[#A7B0B5] leading-relaxed">
                Explore fire hose reel solutions that draw on the building&apos;s water
                supply to provide a continuous flow of water for larger fires in suitable
                environments.
              </p>

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
            </div>

            {/* Reel image */}
            <div className="hidden lg:block relative">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-white/10 bg-[#0B1720]">
                <Image
                  src="/equipment-3.png"
                  alt="Fire hose reel mounted for emergency use"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 24rem, 0px"
                />
              </div>
              <p className="text-[10px] font-mono tracking-widest text-[#A7B0B5]/60 mt-3 pl-0.5 uppercase">
                fixed · accessible · building-integrated
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Overview ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="fhr-overview-heading"
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
                  VS / FHR — 01
                </span>
              </div>

              <h2 id="fhr-overview-heading" className="text-section-heading text-gray-900 mt-6">
                connected to the building&apos;s water{' '}
                <span className="text-highlight">supply</span>.
              </h2>

              <p className="text-body text-gray-600 mt-4 max-w-lg leading-relaxed">
                A fire hose reel is fixed firefighting equipment that draws on the
                building&apos;s water supply, providing a continuous flow of water for
                larger fires in suitable environments.
              </p>

              <div className="mt-10 border-t border-gray-200">
                {[
                  {
                    step: '01',
                    title: 'Accessibility',
                    text: 'Located in high-visibility areas to ensure immediate access during an emergency.',
                  },
                  {
                    step: '02',
                    title: 'Continuous supply',
                    text: "Connected to the building's water supply, a hose reel provides a continuous flow of water for larger fires.",
                  },
                  {
                    step: '03',
                    title: 'Simple operation',
                    text: 'Intuitive operation that requires minimal training for building occupants.',
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-5 sm:gap-6 py-5 sm:py-6 border-b border-gray-200"
                  >
                    <span className="text-label tabular-nums text-[#D62828] shrink-0 pt-1">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-card-title text-gray-900">{item.title}</h3>
                      <p className="text-body-sm text-gray-600 mt-1 leading-relaxed max-w-prose">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-black/10 bg-gray-100">
                <Image
                  src="/fire-hose-guide.png"
                  alt="Fire hose reel installation for emergency and commercial use"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="text-[10px] font-mono tracking-widest text-gray-400 mt-3 pl-0.5 uppercase">
                installed fire hose reel
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Equipment focus ──────────────────────────────────────── */}
      <section
        aria-labelledby="fhr-equipment-heading"
        className="w-full bg-neutral border-t border-gray-200 py-20 sm:py-24 lg:py-28"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <p className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                the equipment
              </span>
            </p>
            <span
              aria-hidden="true"
              className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
            >
              VS / FHR — 02
            </span>
          </div>

          <div className="max-w-3xl mt-6">
            <h2 id="fhr-equipment-heading" className="text-section-heading text-gray-900">
              fixed equipment, in the right{' '}
              <span className="text-highlight">position</span>.
            </h2>
            <p className="text-subheading mt-5 text-gray-600 max-w-2xl">
              What makes a hose reel useful is how it is mounted, where it sits, and
              whether it is integrated into the building.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-black/10 bg-gray-100">
                <Image
                  src="/equipment-3.png"
                  alt="Fire hose reel mounted for emergency use"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="text-[10px] font-mono tracking-widest text-gray-400 mt-3 pl-0.5 uppercase">
                wall-mounted fire hose reel
              </p>
            </motion.div>

            <div className="border-t border-gray-200">
              {[
                {
                  step: '01',
                  title: 'Hose reel',
                  text: "Fixed equipment connected to a building's primary water supply, holding the hose ready for use.",
                },
                {
                  step: '02',
                  title: 'Accessibility',
                  text: 'Positioned in high-visibility areas so it can be reached quickly during an emergency.',
                },
                {
                  step: '03',
                  title: 'Building integration',
                  text: 'Mounted into the building itself, ready for first-response use where it is needed.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
                  className="flex items-start gap-5 sm:gap-6 py-6 sm:py-7 border-b border-gray-200"
                >
                  <span className="text-label tabular-nums text-[#D62828] shrink-0 pt-1">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-card-title text-gray-900">{item.title}</h3>
                    <p className="text-body-sm text-gray-600 mt-1 leading-relaxed max-w-prose">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How it fits into a building ───────────────────────────── */}
      <section
        aria-labelledby="fhr-building-heading"
        className="w-full bg-white border-t border-gray-200 py-20 sm:py-24 lg:py-32 overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <p className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                in the building
              </span>
            </p>
            <span
              aria-hidden="true"
              className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
            >
              VS / FHR — 03
            </span>
          </div>

          <div className="max-w-3xl mt-6">
            <h2 id="fhr-building-heading" className="text-section-heading text-gray-900">
              part of the <span className="text-highlight">building</span>, not an add-on.
            </h2>
            <p className="text-subheading mt-5 text-gray-600 max-w-2xl">
              A hose reel only works when it is planned into the space — located, reached
              and used in the right way.
            </p>
          </div>

          <div className="mt-16 relative">
            <span
              aria-hidden="true"
              className="hidden lg:block absolute inset-x-0 top-[4px] h-px bg-gray-200"
            />
            <span
              aria-hidden="true"
              className="hidden lg:flex absolute right-0 top-0 text-gray-400 text-sm w-3 justify-center"
            >
              →
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12">
              {[
                {
                  number: '01',
                  title: 'location',
                  text: 'Placed in high-visibility areas so it can be found quickly during an emergency.',
                },
                {
                  number: '02',
                  title: 'access',
                  text: 'Reached without obstruction, with operation that needs little training.',
                },
                {
                  number: '03',
                  title: 'use',
                  text: "Opened to draw a continuous flow of water from the building's supply for first-response use.",
                },
              ].map((step, index, steps) => {
                const isLast = index === steps.length - 1;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                    className="relative flex gap-5 sm:gap-6 lg:gap-0 lg:block"
                  >
                    <span
                      aria-hidden="true"
                      className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#D62828] ring-4 ring-white"
                    />

                    <div
                      aria-hidden="true"
                      className="lg:hidden flex flex-col items-center shrink-0 pt-1.5"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D62828] shrink-0" />
                      {!isLast && <span className="w-px flex-1 bg-gray-200 mt-2" />}
                    </div>

                    <div className="pb-12 lg:pb-0 lg:pt-10">
                      <div className="flex items-baseline gap-3">
                        <span className="text-label tabular-nums text-[#D62828]">
                          {step.number}
                        </span>
                        <h3 className="text-list-title text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-body-sm text-gray-600 mt-2.5 leading-relaxed max-w-xs">
                        {step.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Applications ─────────────────────────────────────────── */}
      <section
        aria-labelledby="fhr-applications-heading"
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

              <h2 id="fhr-applications-heading" className="text-section-heading text-gray-900">
                hose reels belong to the buildings they{' '}
                <span className="text-highlight">serve</span>.
              </h2>
              <p className="text-body text-gray-600 mt-4 max-w-sm">
                These are the environments the project&apos;s hose reel solutions cover.
              </p>
            </motion.div>

            <div>
              {fhrApplications.map((application, index) => (
                <motion.div
                  key={application.number}
                  initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
                  className="py-7 sm:py-8 border-b border-gray-200 flex items-start gap-4 sm:gap-6"
                >
                  <span
                    aria-hidden="true"
                    className="shrink-0 mt-0.5 w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-gray-900 text-white flex items-center justify-center"
                  >
                    <application.icon size={24} strokeWidth={1.8} />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <span className="text-label tabular-nums text-[#D62828]">
                        {application.number}
                      </span>
                      <h3 className="text-card-title text-gray-900">{application.title}</h3>
                    </div>
                    <p className="text-body-sm text-gray-600 mt-1.5 leading-relaxed max-w-prose">
                      {application.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Installation ─────────────────────────────────────────── */}
      <section
        aria-labelledby="fhr-installation-heading"
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: '#0B1720' }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={navyGridStyle}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-12 lg:gap-16 items-start">
            <div className="relative order-1">
              <ServiceSlides slides={installationSlides} code="VS / SVC — 02" dark />
            </div>

            <div className="order-2">
              <p className="flex items-center gap-2.5 mb-5">
                <span aria-hidden="true" className="h-px w-8 bg-[#E53935]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A7B0B5]">
                  installation
                </span>
              </p>
              <h2 id="fhr-installation-heading" className="text-section-heading text-white">
                the installation matters as much as the{' '}
                <span className="text-highlight-dark">equipment</span>.
              </h2>
              <p className="text-body text-[#A7B0B5] mt-4 max-w-lg leading-relaxed">
                VerifSafe supports professional installation of fire-protection equipment,
                configured around your building, so hose reels end up where they can be
                reached and used.
              </p>

              <ul className="mt-8 space-y-4 max-w-md" role="list">
                {['Fire alarm systems', 'Detection devices', 'Safety equipment'].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 py-3 border-b border-white/10 text-body-sm text-[#F4F3EF]"
                  >
                    <span aria-hidden="true" className="h-px w-4 bg-[#E53935] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  href="/services"
                  variant="secondary"
                  size="lg"
                  icon={<ArrowRight size={18} strokeWidth={2} />}
                  className="w-full sm:w-auto !rounded-lg !bg-transparent !border-white/25 !text-[#F4F3EF] hover:!border-white/60 hover:!bg-white/5 !shadow-none font-semibold"
                >
                  Explore Installation Services
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ backgroundColor: 'rgba(167, 176, 181, 0.1)' }}
        />
      </section>

      {/* ── Inspection & maintenance ─────────────────────────────── */}
      <section
        aria-labelledby="fhr-maintenance-heading"
        className="w-full bg-white border-t border-gray-200 py-16 sm:py-20"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="flex items-center gap-2.5 mb-5">
                <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                <span className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                  after installation
                </span>
              </p>
              <h2 id="fhr-maintenance-heading" className="text-section-heading text-gray-900">
                protection needs to stay <span className="text-highlight">ready</span>.
              </h2>
              <p className="text-body text-gray-600 mt-5 max-w-xl leading-relaxed">
                Routine inspection, testing and maintenance help keep installed
                fire-protection equipment working as intended and ready when it is needed.
              </p>

              <ul className="mt-7 flex flex-wrap gap-3" role="list">
                {['Inspection', 'Testing', 'Maintenance'].map((svc) => (
                  <li
                    key={svc}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-neutral border border-line text-sm text-gray-700 font-medium"
                  >
                    <span aria-hidden="true" className="h-px w-3 bg-[#D62828] shrink-0" />
                    {svc}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  href="/services"
                  variant="secondary"
                  size="lg"
                  icon={<ArrowRight size={18} strokeWidth={2} />}
                  className="w-full sm:w-auto !rounded-lg !border !border-gray-300 !bg-transparent !text-gray-900 hover:!bg-gray-100 !shadow-none font-semibold"
                >
                  Explore Maintenance
                </Button>
              </div>
            </div>

            <div className="relative">
              <ServiceSlides slides={maintenanceSlides} code="VS / SVC — 04" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Related equipment ────────────────────────────────────── */}
      <section
        aria-labelledby="fhr-related-heading"
        className="w-full bg-neutral border-t border-gray-200 py-20 sm:py-24 lg:py-28"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <p className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                keep exploring
              </span>
            </p>
            <span
              aria-hidden="true"
              className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
            >
              VS / NAV — 05
            </span>
          </div>

          <div className="max-w-3xl mt-6">
            <h2 id="fhr-related-heading" className="text-section-heading text-gray-900">
              explore more fire protection <span className="text-highlight">equipment</span>.
            </h2>
          </div>

          <div className="mt-10 border-t border-gray-200">
            {relatedEquipment.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
                className="group flex items-center gap-4 sm:gap-6 py-6 sm:py-7 border-b border-gray-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D62828]"
              >
                <span
                  aria-hidden="true"
                  className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-white border border-gray-200 text-gray-900 flex items-center justify-center group-hover:border-[#D62828] group-hover:text-[#D62828] transition-colors duration-200 motion-reduce:transition-none"
                >
                  <item.icon size={22} strokeWidth={1.8} />
                </span>
                <span className="flex-1">
                  <span className="block">
                    <h3 className="text-card-title text-gray-900 group-hover:text-[#D62828] transition-colors duration-200 motion-reduce:transition-none">
                      {item.title}
                    </h3>
                  </span>
                  <span className="block text-body-sm text-gray-600 mt-0.5 leading-relaxed">
                    {item.text}
                  </span>
                </span>
                <ArrowRight
                  size={20}
                  strokeWidth={2}
                  aria-hidden="true"
                  className="shrink-0 text-gray-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#D62828] motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ──────────────────────────────────────────── */}
      <section
        aria-labelledby="fhr-cta-heading"
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: '#1a2332' }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px bg-white/[0.04]" />
        <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.04]" />
        <div aria-hidden="true" className="absolute top-0 bottom-0 left-[20%] w-px bg-white/[0.04]" />
        <div aria-hidden="true" className="absolute top-0 bottom-0 right-[20%] w-px bg-white/[0.04]" />

        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #E53935 0%, transparent 70%)' }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="flex items-center gap-3 mb-5">
              <span aria-hidden="true" className="h-px w-8 bg-[#E53935]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A7B0B5]">
                planning fire protection?
              </span>
            </p>

            <h2 id="fhr-cta-heading" className="text-section-heading text-white">
              let&apos;s find the right equipment for your{' '}
              <span className="text-highlight-dark">building</span>.
            </h2>

            <p className="text-subheading text-[#A7B0B5] mt-5 max-w-xl">
              Tell us about your building and fire-safety requirements so we can help you
              determine the appropriate equipment and next step.
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
                href="/contact#contact-form"
                variant="secondary"
                size="lg"
                icon={<Phone size={18} strokeWidth={2} />}
                className="w-full sm:w-auto !rounded-lg !bg-transparent !border-white/25 !text-[#F4F3EF] hover:!border-white/60 hover:!bg-white/5 !shadow-none font-semibold"
              >
                Contact Our Team
              </Button>
            </div>

            <p className="text-body-sm text-[#7A7A74] mt-6">
              From supply and installation to inspection, testing and maintenance, we help
              buildings stay protected.
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2" role="list">
              {[
                'Equipment supply',
                'Installation',
                'Inspection & testing',
                'Maintenance',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-[#A7B0B5]">
                  <span aria-hidden="true" className="h-px w-3 bg-[#E53935] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}