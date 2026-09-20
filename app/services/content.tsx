'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Tools,
  ClipboardCheck,
  Refresh,
  Users,
} from 'tabler-icons-react';
import Button from '@/components/ui/Button';
import FireSafetyApproach from '@/components/sections/marketing/FireSafetyApproach';
import ProtectionCTA from '@/components/sections/marketing/ProtectionCTA';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { services, type Service } from '@/lib/services';

const processSteps = [
  {
    number: '01',
    title: 'Assess',
    description: 'Understand the building, occupancy, risks and existing protection.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Plan the right fire protection solution for the environment.',
  },
  {
    number: '03',
    title: 'Install',
    description: 'Install and configure systems with care and precision.',
  },
  {
    number: '04',
    title: 'Test',
    description: 'Verify systems function correctly when installed.',
  },
  {
    number: '05',
    title: 'Maintain',
    description: 'Inspect, test and maintain protection so it stays ready.',
  },
];

const matterItems = [
  { label: 'Appropriate equipment', description: 'Equipment selected for the needs of your building and its systems.', Icon: ShieldCheck },
  { label: 'Correct installation', description: 'Systems installed and configured with care and precision.', Icon: Tools },
  { label: 'Regular inspection', description: 'Checks that help identify faults, gaps and areas requiring attention.', Icon: ClipboardCheck },
  { label: 'Ongoing maintenance', description: 'Scheduled servicing that keeps protection working as intended.', Icon: Refresh },
  { label: 'Informed people', description: 'Training that helps teams identify risks and respond effectively.', Icon: Users },
];

const blueGridStyle = {
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
  `,
  backgroundSize: '60px 60px',
};

const paperGridStyle = {
  backgroundImage: `
    linear-gradient(rgba(11,23,32,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(11,23,32,0.02) 1px, transparent 1px)
  `,
  backgroundSize: '60px 60px',
};

function CtaLink({ service }: { service: Service }) {
  const isEnquiry = service.cta.kind === 'enquiry';
  return (
    <Link
      href={service.cta.href}
      className="group inline-flex items-center gap-2 mt-8 text-body-sm font-semibold text-[#D62828] hover:text-[#A91D1D] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828]"
    >
      {service.cta.label}
      {isEnquiry ? (
        <ArrowUpRight
          size={18}
          strokeWidth={2}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
        />
      ) : (
        <ArrowRight
          size={18}
          strokeWidth={2}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
        />
      )}
    </Link>
  );
}

export default function ServicesContent() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const whyRef = useRef<HTMLElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroParallax = useTransform(heroProgress, [0, 1], [0, '14%']);
  const heroFade = useTransform(heroProgress, [0, 0.8], [1, 0.15]);

  const { scrollYProgress: whyProgress } = useScroll({
    target: whyRef,
    offset: ['start end', 'end start'],
  });
  const whyGridY = useTransform(whyProgress, [0, 1], ['-6%', '6%']);

  return (
    <main className="w-full">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        aria-labelledby="services-h1"
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: '#0B1720' }}
      >
        <div className="absolute inset-0 bg-[#0B1720]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1720]/95 via-[#0B1720]/80 to-[#123B5D]/40" />

        {/* Technical grid overlay — extremely subtle */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={blueGridStyle}
        />

        <motion.div
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          style={reduceMotion ? undefined : { y: heroParallax, opacity: heroFade }}
        >
          <div className="relative flex flex-col items-start justify-center min-h-[480px] lg:min-h-[620px] pt-24 pb-28 sm:pt-28 sm:pb-32">
            {/* Corner coordinate */}
            <span
              aria-hidden="true"
              className="absolute right-0 top-8 text-[10px] font-mono tracking-wider opacity-40 text-[#A7B0B5]"
            >
              01 / 01
            </span>

            <RevealGroup stagger={0.08} delayChildren={0.05}>
              <RevealItem variant="up-sm">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#E53935]">
                  fire protection services
                </p>
              </RevealItem>

              <RevealItem>
                <h1
                  id="services-h1"
                  className="text-hero-heading leading-[1.05] text-[#F4F3EF]"
                >
                  protection from installation to ongoing{' '}
                  <span className="text-highlight-dark">care</span>.
                </h1>
              </RevealItem>

              <RevealItem variant="up-sm">
                <p className="text-subheading mt-5 max-w-xl text-[#A7B0B5] leading-relaxed">
                  From supplying the right equipment to installation, inspection, maintenance and
                  training, we help buildings stay prepared for fire risks.
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
                    href="#services-catalogue"
                    variant="secondary"
                    size="lg"
                    icon={<ArrowRight size={18} strokeWidth={2} />}
                    className="w-full sm:w-auto !rounded-lg !bg-transparent !border-white/25 !text-[#F4F3EF] hover:!border-white/60 hover:!bg-white/5 !shadow-none font-semibold"
                  >
                    Explore Our Services
                  </Button>
                </div>
              </RevealItem>
            </RevealGroup>
          </div>
        </motion.div>

        {/* Bottom hairline */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ backgroundColor: 'rgba(167, 176, 181, 0.1)' }}
        />
      </section>

      {/* ── Service navigation ───────────────────────────────────── */}
      <nav
        aria-label="Service navigation"
        className="w-full sticky top-0 z-30 border-b border-gray-200 bg-white/95 backdrop-blur"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex gap-7 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden touch-auto">
            {services.map((service) => (
              <li key={service.id} className="shrink-0">
                <a
                  href={`#${service.id}`}
                  className="group inline-flex items-center gap-2 py-1 text-body-sm font-semibold text-gray-500 hover:text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828]"
                >
                  <span
                    aria-hidden="true"
                    className="text-index tabular-nums text-gray-400 transition-colors group-hover:text-[#D62828]"
                  >
                    {service.number}
                  </span>
                  <span className="whitespace-nowrap">{service.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── Catalogue intro ──────────────────────────────────────── */}
      <section
        id="services-catalogue"
        aria-labelledby="services-heading"
        className="w-full bg-white py-16 sm:py-20 lg:py-24 scroll-mt-20"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <p className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                what we offer
              </span>
            </p>
            <span
              aria-hidden="true"
              className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
            >
              VS / SVC — 07
            </span>
          </div>

          <div className="max-w-3xl mt-6">
            <h2 id="services-heading" className="text-section-heading text-gray-900">
              Seven services, one <span className="text-highlight">partner</span>.
            </h2>
            <p className="text-subheading mt-5 text-gray-600 max-w-2xl">
              From equipment supply to installation, inspection, maintenance and training, we
              help keep buildings prepared.
            </p>
          </div>
        </div>
      </section>

      {/* ── Service sections ─────────────────────────────────────── */}
      {services.map((service, index) => {
        const reversed = index % 2 === 1;
        const sectionBg = reversed ? 'bg-neutral' : 'bg-white';

        return (
          <section
            key={service.id}
            id={service.id}
            aria-labelledby={`${service.id}-heading`}
            className={`relative w-full overflow-hidden scroll-mt-20 ${sectionBg} ${
              index === 0 ? 'border-t border-gray-200' : ''
            } py-20 sm:py-24 lg:py-28`}
          >
            {reversed && (
              <motion.div
                aria-hidden="true"
                className="absolute -inset-y-24 inset-x-0 pointer-events-none"
                style={paperGridStyle}
              />
            )}

            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Image */}
                <Reveal
                  className={`relative lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}
                >
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-black/10 bg-gray-100">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 92vw, 58vw"
                      priority={index === 0}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                  </div>
                </Reveal>

                {/* Panel */}
                <Reveal
                  className={`lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-index tabular-nums text-[#D62828]">
                      {service.number}
                    </span>
                    <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                  </div>

                  <h2
                    id={`${service.id}-heading`}
                    className="text-section-heading text-gray-900 mt-4"
                  >
                    {service.title}
                  </h2>

                  <p className="text-body text-gray-600 mt-4 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-6" role="list" aria-label={`${service.title} inclusions`}>
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 py-3 border-t border-gray-200"
                      >
                        <span aria-hidden="true" className="h-px w-4 shrink-0 bg-[#D62828]" />
                        <span className="text-body-sm text-gray-700 font-medium">{point}</span>
                      </li>
                    ))}
                    <li aria-hidden="true" className="border-t border-gray-200" />
                  </ul>

                  <CtaLink service={service} />
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Process ───────────────────────────────────────────────── */}
      <FireSafetyApproach
        eyebrow="how we work"
        code="VS / PRC — 05"
        heading={
          <>
            from assessment to ongoing{' '}
            <span className="text-highlight-dark">protection</span>.
          </>
        }
        description="We assess the environment, plan the right solution, install it correctly, then test and maintain it so it stays ready."
        steps={processSteps}
      />

      {/* ── Why it matters ────────────────────────────────────────── */}
      <section
        ref={whyRef}
        aria-labelledby="why-heading"
        className="relative w-full bg-neutral overflow-hidden py-20 sm:py-24 lg:py-32"
      >
        {/* Faint technical grid — light version, subtle parallax */}
        <motion.div
          aria-hidden="true"
          className="absolute -inset-y-24 inset-x-0 pointer-events-none"
          style={reduceMotion ? undefined : { y: whyGridY, ...paperGridStyle }}
        />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Intro */}
            <Reveal className="lg:col-span-5">
              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5F5F5A]">
                    why it matters
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
                >
                  VS / CHS — 05
                </span>
              </div>

              <h2 id="why-heading" className="text-section-heading mt-6 text-gray-900">
                protection is more than <span className="text-highlight">equipment</span>.
              </h2>
              <p className="text-subheading mt-5 text-gray-600 max-w-md">
                Effective fire protection depends on the right equipment, correct installation,
                regular inspection, ongoing maintenance and people who know what to do.
              </p>
            </Reveal>

            {/* Items */}
            <RevealGroup
              as="ol"
              stagger={0.07}
              delayChildren={0.1}
              className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-7"
            >
              {matterItems.map((item, index) => (
                <RevealItem key={item.label} as="li" variant="up-sm" className="group">
                  <div className="flex items-center gap-3">
                    <item.Icon
                      size={22}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="text-[#D62828] transition-all duration-200 group-hover:scale-110 group-hover:text-[#A91D1D] motion-reduce:transition-none"
                    />
                    <span className="text-xs font-semibold tracking-[0.2em] tabular-nums text-gray-400">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-4 text-list-title text-gray-900 leading-snug transition-colors duration-200 group-hover:text-[#D62828] motion-reduce:transition-none">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-body-sm text-gray-600">{item.description}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────── */}
      <ProtectionCTA
        heading="let&apos;s make your building ready."
        description="Tell us about your building, project or team and we&apos;ll help you prepare fire protection that stays ready when it matters."
      />
    </main>
  );
}