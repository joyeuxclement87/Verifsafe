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
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  CloudFog,
  Flame,
  Radar,
  Building,
  BuildingSkyscraper,
  Bed,
  School,
  Home,
  BuildingWarehouse,
} from 'tabler-icons-react';
import Button from '@/components/ui/Button';
import RelatedEquipment from '@/components/equipment/RelatedEquipment';

/* ─── Data ──────────────────────────────────────────────────────────────── */

interface DeviceType {
  number: string;
  title: string;
  description: string;
  bestFor: string;
  icon: typeof CloudFog;
}

interface Application {
  name: string;
  description: string;
  tag: string;
  icon: typeof BuildingSkyscraper;
}

const deviceTypes: DeviceType[] = [
  {
    number: '01',
    title: 'Optical Smoke Detectors',
    description:
      'Use light sensors to detect larger smoke particles, making them well suited to spotting slow-burning, smouldering fires early.',
    bestFor: 'Bedrooms, living rooms and primary escape routes.',
    icon: CloudFog,
  },
  {
    number: '02',
    title: 'Heat Detectors',
    description:
      'Triggered by a set temperature threshold or a rapid rate of temperature rise, rather than by smoke.',
    bestFor: 'Kitchens, garages and areas where smoke detectors could cause false alarms.',
    icon: Flame,
  },
  {
    number: '03',
    title: 'Multi-Sensor Detectors',
    description:
      'Combine optical and heat sensing technology for accurate detection while helping to reduce false alarms.',
    bestFor: 'Complex commercial environments and areas with varying conditions.',
    icon: Radar,
  },
];

const applications: Application[] = [
  { name: 'Corporate Offices', description: 'Smoke and heat detection placed around office layouts.', tag: 'Commercial', icon: BuildingSkyscraper },
  { name: 'Commercial & Retail', description: 'Detection that suits busy public and trading spaces.', tag: 'Commercial', icon: Building },
  { name: 'Hotels', description: 'Detection across guest areas and shared corridors.', tag: 'Hospitality', icon: Bed },
  { name: 'Schools', description: 'Early warning that helps alert students and staff.', tag: 'Education', icon: School },
  { name: 'Residential Buildings', description: 'Protection that reaches homes and common areas.', tag: 'Residential', icon: Home },
  { name: 'Industrial Premises', description: 'Equipment scaled to larger, higher-risk spaces.', tag: 'Industrial', icon: BuildingWarehouse },
];

/* ─── Styles ────────────────────────────────────────────────────────────── */

const blueGridStyle = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
  backgroundSize: '60px 60px',
};

/* ─── Page ──────────────────────────────────────────────────────────────── */

export function FireDetectionDevicesGuide() {
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
        aria-labelledby="fdd-hero-h1"
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: '#0B1720' }}
      >
        <div className="absolute inset-0 bg-[#0B1720]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1720]/95 via-[#0B1720]/80 to-[#123B5D]/40" />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={blueGridStyle}
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
              04 / 06
            </span>

            <div>
              <RevealGroup stagger={0.08} delayChildren={0.05}>
              <RevealItem variant="up-sm">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#E53935]">
                fire detection devices
              </p>
              </RevealItem>

              <RevealItem>
              <h1
                id="fdd-hero-h1"
                className="text-hero-heading leading-[1.05] text-[#F4F3EF] max-w-xl"
              >
                detect fire risks before they become{' '}
                <span className="text-highlight-dark">bigger problems</span>.
              </h1>
              </RevealItem>

              <RevealItem variant="up-sm">
              <p className="text-subheading mt-5 max-w-xl text-[#A7B0B5] leading-relaxed">
                Fire detection devices give buildings an early warning of developing fire
                conditions. Choose the right fire safety equipment for your building.
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

            {/* Detection device image */}
            <div className="hidden lg:block relative">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-white/10 bg-[#0B1720]">
                <Image
                  src="/fire-detection-guide.png"
                  alt="Optical smoke, heat and multi-sensor fire detection devices for buildings"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 24rem, 0px"
                />
              </div>
              <p className="text-[10px] font-mono tracking-widest text-[#A7B0B5]/60 mt-3 pl-0.5 uppercase">
                smoke · heat · multi-sensor
              </p>
            </div>
          </div>
        </motion.div>

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ backgroundColor: 'rgba(167, 176, 181, 0.1)' }}
        />
      </section>

      {/* ── Overview ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="fdd-overview-heading"
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
                    the basics
                  </span>
                </p>
                <span
                  aria-hidden="true"
                  className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
                >
                  VS / DET — 01
                </span>
              </div>

              <h2
                id="fdd-overview-heading"
                className="text-section-heading text-gray-900 mt-6"
              >
                what are fire detection <span className="text-highlight">devices</span>?
              </h2>

              <p className="text-body text-gray-600 mt-4 max-w-lg leading-relaxed">
                Fire detection devices are the fire safety equipment that senses the early
                signs of a fire — such as smoke or rising heat — before flames fully take
                hold. They form the sensing layer of a fire detection system, feeding
                information back so a building can respond quickly.
              </p>

              <div className="mt-10 border-t border-gray-200">
                {[
                  {
                    step: '01',
                    title: 'The first line of warning',
                    text: 'Fire detection systems watch the environment and pick up the earliest signals of a developing fire.',
                  },
                  {
                    step: '02',
                    title: 'Part of a wider system',
                    text: 'Detectors work alongside control panels and alarm devices so detection leads to a clear alert.',
                  },
                  {
                    step: '03',
                    title: 'Selection that matters',
                    text: 'The right type of device depends on the space, so choosing fire detectors in Rwanda is matched to each building.',
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
              <div className="relative aspect-square rounded-lg overflow-hidden border border-black/10 bg-gray-100">
                <Image
                  src="/fire-detection-guide.png"
                  alt="A fire detection device sensing smoke and heat in a building"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Detection device types ───────────────────────────────── */}
      <section
        aria-labelledby="fdd-types-heading"
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
                  device types
                </p>
              </div>

              <h2 id="fdd-types-heading" className="text-section-heading text-gray-900">
                which detection device do you <span className="text-highlight">need</span>?
              </h2>
              <p className="text-body text-gray-600 mt-4 max-w-sm">
                Different devices suit different spaces. Understanding what each one
                detects helps you choose the right fire safety equipment.
              </p>
            </motion.div>

            <div>
              {deviceTypes.map((device, index) => (
                <motion.div
                  key={device.title}
                  initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
                  className="grid grid-cols-[2.5rem_1fr] sm:grid-cols-[3rem_1fr] gap-x-5 gap-y-1 py-5 sm:py-6 border-t border-gray-200"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-gray-200 tabular-nums">
                    {device.number}
                  </span>
                  <div>
                    <h3 className="text-card-title text-gray-900">{device.title}</h3>
                    <p className="text-body-sm text-gray-500 mt-1">{device.description}</p>
                    <p className="text-body-sm text-gray-700 mt-2 font-medium">
                      Best suited for: <span className="text-[#D62828]">{device.bestFor}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
              <div aria-hidden="true" className="border-t border-gray-200" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Applications ─────────────────────────────────────────── */}
      <section
        aria-labelledby="fdd-applications-heading"
        className="w-full bg-white border-t border-gray-200 py-20 sm:py-24 lg:py-28"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <p className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                where they are used
              </span>
            </p>
            <span
              aria-hidden="true"
              className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
            >
              VS / APP — 02
            </span>
          </div>

          <div className="max-w-3xl mt-6">
            <h2 id="fdd-applications-heading" className="text-section-heading text-gray-900">
              fire detection devices across{' '}
              <span className="text-highlight">buildings</span>.
            </h2>
            <p className="text-subheading mt-5 text-gray-600 max-w-2xl">
              Detection equipment is supplied for a range of building environments, with
              the right device matched to each space.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {applications.map((application, index) => (
              <motion.div
                key={application.name}
                initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
                className="group flex items-start gap-4 py-5 sm:py-6 border-b border-gray-200"
              >
                <span
                  aria-hidden="true"
                  className="shrink-0 mt-1 text-label tabular-nums text-gray-300 transition-colors duration-200 group-hover:text-[#D62828] motion-reduce:transition-none"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-card-title text-gray-900">{application.name}</h3>
                    <span className="hidden sm:block shrink-0 text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                      {application.tag}
                    </span>
                  </div>
                  <p className="text-body-sm text-gray-500 mt-1">{application.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features & benefits ────────────────────────────────── */}
      <section
        aria-labelledby="fdd-features-heading"
        className="w-full bg-paper border-t border-gray-200 py-20 sm:py-24 lg:py-28"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <p className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                features & benefits
              </span>
            </p>
            <span
              aria-hidden="true"
              className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
            >
              VS / FTR — 03
            </span>
          </div>

          <div className="max-w-3xl mt-6">
            <h2 id="fdd-features-heading" className="text-section-heading text-gray-900">
              detection that works with <span className="text-highlight">your space</span>.
            </h2>
            <p className="text-subheading mt-5 text-gray-600 max-w-2xl">
              Each device type brings a distinct approach to fire detection, so the right
              equipment can be matched to the environment and the risk.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[
              {
                title: 'Early warning of smoke',
                text: 'Optical detectors sense the larger particles from slow-burning fires early.',
              },
              {
                title: 'Heat-based response',
                text: 'Heat detectors react to rising temperatures where smoke detection could false-alarm.',
              },
              {
                title: 'Reduced false alarms',
                text: 'Multi-sensor units combine optical and heat sensing for accurate, reliable detection.',
              },
              {
                title: 'Matched to the risk',
                text: 'Selection follows the environment, so protection fits kitchens, offices and more.',
              },
              {
                title: 'Part of a wider system',
                text: 'Devices work alongside control panels and alarms to turn detection into an alert.',
              },
              {
                title: 'Guidance on selection',
                text: 'The right fire detection equipment is identified around your building needs.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
                className="flex items-start gap-4"
              >
                <span
                  aria-hidden="true"
                  className="shrink-0 mt-1.5 h-2 w-2 rounded-full bg-[#D62828]"
                />
                <div>
                  <h3 className="text-list-title text-gray-900">{feature.title}</h3>
                  <p className="text-body-sm text-gray-500 mt-1.5 leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related equipment ──────────────────────────────────── */}
      <RelatedEquipment excludeId="fire-detection-devices" />

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section
        aria-labelledby="fdd-cta-heading"
        className="relative w-full overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/fire-detection-guide.png"
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
                not sure what you need?
              </span>
            </p>

            <h2 id="fdd-cta-heading" className="text-section-heading text-white">
              let&apos;s find the right detection{' '}
              <span className="text-highlight-dark">solution</span> for your building.
            </h2>

            <p className="text-subheading text-white mt-5 max-w-xl">
              Tell us about your building and fire-safety requirements and our team can
              help you identify the appropriate equipment.
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
              From choosing detection devices to full fire protection systems, we help
              buildings stay protected with the right fire safety equipment.
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2" role="list">
              {[
                'Equipment supply',
                'Guidance on selection',
                'Fire protection systems',
                'Inspection & maintenance',
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