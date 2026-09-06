'use client';

import { useCallback, useRef, useState, type KeyboardEvent } from 'react';
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

type CtaKind = 'enquiry' | 'navigation';

interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
  cta: { label: string; href: string; kind: CtaKind };
}

const services: Service[] = [
  {
    id: 'equipment-supply',
    number: '01',
    title: 'Equipment Supply',
    description:
      'From extinguishers and alarms to hose reels and safety accessories, we supply fire protection equipment for different environments.',
    points: ['Extinguishers', 'Fire alarm systems', 'Fire hose reels', 'Safety accessories'],
    image: '/service-1.png',
    imageAlt: 'Fire safety equipment and extinguishers',
    cta: { label: 'Explore equipment', href: '/equipments', kind: 'navigation' },
  },
  {
    id: 'installation',
    number: '02',
    title: 'Installation',
    description:
      'Professional installation of fire alarm systems, detection devices and safety equipment, configured around your building.',
    points: ['Fire alarm systems', 'Detection devices', 'Safety equipment'],
    image: '/service-2.png',
    imageAlt: 'Technician installing fire alarm and detection equipment',
    cta: { label: 'Discuss your project', href: '/contact#contact-form', kind: 'enquiry' },
  },
  {
    id: 'inspection-testing',
    number: '03',
    title: 'Inspection & Testing',
    description:
      'Routine inspection and testing that helps identify faults, gaps and areas requiring attention in your fire safety systems.',
    points: ['Identifies faults & gaps', 'Routine testing', 'Verified performance'],
    image: '/service-3.png',
    imageAlt: 'Fire safety technician inspecting fire protection equipment',
    cta: { label: 'Request an inspection', href: '/contact#contact-form', kind: 'enquiry' },
  },
  {
    id: 'maintenance',
    number: '04',
    title: 'Maintenance',
    description:
      'Ongoing servicing that keeps fire protection systems working as intended and reliable over time.',
    points: ['Regular servicing', 'System reliability', 'Prevents failure'],
    image: '/service-5.png',
    imageAlt: 'Technician servicing fire protection equipment',
    cta: { label: 'Request a quote', href: '/contact#contact-form', kind: 'enquiry' },
  },
  {
    id: 'refilling',
    number: '05',
    title: 'Extinguisher Refilling',
    description:
      'Refilling and servicing fire extinguishers to keep them ready and effective for emergency use.',
    points: ['Quick service', 'Ready for use', 'Emergency readiness'],
    image: '/refile.jpeg',
    imageAlt: 'Fire extinguisher being refilled and serviced',
    cta: { label: 'Request a quote', href: '/contact#contact-form', kind: 'enquiry' },
  },
  {
    id: 'fire-safety-training',
    number: '06',
    title: 'Fire Safety Training',
    description:
      'Practical training that helps teams identify fire risks, use extinguishers correctly and respond in an emergency.',
    points: ['Fire risk identification', 'Correct extinguisher use', 'Emergency response'],
    image: '/fire training 2.jpg',
    imageAlt: 'Fire safety training session for a team',
    cta: { label: 'Book training', href: '/contact#contact-form', kind: 'enquiry' },
  },
  {
    id: 'first-aid-training',
    number: '07',
    title: 'First Aid Training',
    description:
      'Basic first aid training that equips individuals with the skills to respond quickly and effectively during emergencies.',
    points: ['Emergency response', 'Workplace safety', 'Life-saving skills'],
    image: '/first aid.png',
    imageAlt: 'First aid training session',
    cta: { label: 'Request a quote', href: '/contact#contact-form', kind: 'enquiry' },
  },
];

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

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': services.map((service) => ({
    '@type': 'Service',
    name: service.title,
    description: service.description,
    serviceType: 'Fire Safety Services',
    provider: { '@type': 'Organization', name: 'VerifSafe', url: 'https://verifsafe.com' },
    areaServed: { '@type': 'Country', name: 'Rwanda' },
  })),
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

function ServicePanelContent({ service }: { service: Service }) {
  return (
    <>
      <p className="text-body text-gray-600 mt-3 max-w-xl">{service.description}</p>

      <ul
        className="mt-8 max-w-xl"
        role="list"
        aria-label={`${service.title} inclusions`}
      >
        {service.points.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 py-3 border-t border-gray-200 text-body-sm text-gray-700"
          >
            <span aria-hidden="true" className="shrink-0 mt-2.5 h-px w-4 bg-[#D62828]" />
            {item}
          </li>
        ))}
        <li aria-hidden="true" className="border-t border-gray-200" />
      </ul>

      <CtaLink service={service} />
    </>
  );
}

export default function ServicesPage() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const whyRef = useRef<HTMLElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = services[activeIndex];

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

  const selectService = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleTabKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      let nextIndex: number | null = null;

      switch (event.key) {
        case 'ArrowDown':
        case 'ArrowRight':
          nextIndex = (activeIndex + 1) % services.length;
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
          nextIndex = (activeIndex - 1 + services.length) % services.length;
          break;
        case 'Home':
          nextIndex = 0;
          break;
        case 'End':
          nextIndex = services.length - 1;
          break;
        default:
          return;
      }

      event.preventDefault();
      selectService(nextIndex);
      tabRefs.current[nextIndex]?.focus();
    },
    [activeIndex, selectService]
  );

  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#E53935]">
              fire protection services
            </p>

            <h1
              id="services-h1"
              className="text-hero-heading leading-[1.05] text-[#F4F3EF]"
            >
              protection from installation to ongoing{' '}
              <span className="text-highlight-dark">care</span>.
            </h1>

            <p className="text-subheading mt-5 max-w-xl text-[#A7B0B5] leading-relaxed">
              From supplying the right equipment to installation, inspection, maintenance and
              training, we help buildings stay prepared for fire risks.
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
                href="#services"
                variant="secondary"
                size="lg"
                icon={<ArrowRight size={18} strokeWidth={2} />}
                className="w-full sm:w-auto !rounded-lg !bg-transparent !border-white/25 !text-[#F4F3EF] hover:!border-white/60 hover:!bg-white/5 !shadow-none font-semibold"
              >
                Explore Our Services
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom hairline */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ backgroundColor: 'rgba(167, 176, 181, 0.1)' }}
        />
      </section>

      {/* ── Service directory ────────────────────────────────────── */}
      <section
        aria-labelledby="services-heading"
        className="w-full bg-white border-t border-gray-200 py-20 sm:py-24 lg:py-32"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
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

          <div className="max-w-3xl">
            <h2 id="services-heading" className="text-section-heading mt-6 text-gray-900">
              Seven services, one <span className="text-highlight">partner</span>.
            </h2>
            <p className="text-subheading mt-5 text-gray-600 max-w-2xl">
              From equipment supply to installation, inspection, maintenance and training, we
              help keep buildings prepared.
            </p>
          </div>

          {/* Desktop: exploratory split */}
          <div className="mt-14 lg:mt-20 hidden lg:grid lg:grid-cols-[minmax(0,20rem)_1fr] gap-12 xl:gap-16 items-start">
            <div
              role="tablist"
              aria-label="Our services"
              onKeyDown={handleTabKeyDown}
              className="border-t border-gray-200 lg:sticky lg:top-24"
            >
              {services.map((service, index) => {
                const isActive = index === activeIndex;

                return (
                  <h3 key={service.id}>
                    <button
                      ref={(el) => {
                        tabRefs.current[index] = el;
                      }}
                      role="tab"
                      id={`service-tab-${service.id}`}
                      aria-selected={isActive}
                      aria-controls="services-panel"
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => selectService(index)}
                      className={`group relative w-full flex items-center gap-5 py-5 sm:py-6 px-2 text-left border-b border-gray-200 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828] motion-reduce:transition-none ${
                        isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`absolute left-0 inset-y-0 w-0.5 bg-[#D62828] transition-opacity duration-200 motion-reduce:transition-none ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                      <span
                        aria-hidden="true"
                        className={`shrink-0 w-8 text-index tabular-nums transition-colors duration-200 motion-reduce:transition-none ${
                          isActive ? 'text-[#D62828]' : 'text-gray-400'
                        }`}
                      >
                        {service.number}
                      </span>
                      <span className="text-list-title">{service.title}</span>
                    </button>
                  </h3>
                );
              })}
            </div>

            <div
              id="services-panel"
              role="tabpanel"
              aria-labelledby={`service-tab-${activeService.id}`}
              className="border-t border-gray-200 min-w-0"
            >
              <motion.div
                key={activeService.id}
                initial={{ opacity: reduceMotion ? 1 : 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: reduceMotion ? 0 : 0.35, ease: 'easeOut' }}
                className="relative pt-10 sm:pt-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,19rem)] gap-10 lg:gap-12 lg:items-stretch">
                  <div className="relative flex flex-1 flex-col">
                    <div className="flex items-center gap-3">
                      <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                      <p className="text-label tabular-nums text-gray-500">
                        {activeService.number} / 07
                      </p>
                    </div>

                    <h3 className="text-card-title text-gray-900 mt-5 leading-snug">
                      {activeService.title}
                    </h3>

                    <ServicePanelContent service={activeService} />
                  </div>

                  {/* Visual */}
                  <div className="hidden lg:block relative">
                    <div className="relative w-full h-full min-h-[24rem] rounded-lg overflow-hidden border border-black/10 bg-gray-100">
                      <Image
                        src={activeService.image}
                        alt={activeService.imageAlt}
                        fill
                        sizes="(max-width: 1280px) 30vw, 304px"
                        priority={activeIndex === 0}
                        loading={activeIndex === 0 ? 'eager' : 'lazy'}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile: vertical stacked selector */}
          <div className="mt-12 lg:hidden border-t border-gray-200">
            {services.map((service, index) => {
              const isOpen = index === activeIndex;

              return (
                <div key={service.id} className="border-b border-gray-200">
                  <h3>
                    <button
                      id={`service-disclosure-${service.id}`}
                      aria-expanded={isOpen}
                      aria-controls={`service-disclosure-panel-${service.id}`}
                      onClick={() => selectService(index)}
                      className="w-full flex items-center gap-4 py-5 pr-1 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828]"
                    >
                      <span
                        aria-hidden="true"
                        className={`shrink-0 w-8 text-index tabular-nums transition-colors duration-200 motion-reduce:transition-none ${
                          isOpen ? 'text-[#D62828]' : 'text-gray-400'
                        }`}
                      >
                        {service.number}
                      </span>

                      <span className="flex-1 min-w-0 text-list-title text-gray-900">
                        {service.title}
                      </span>

                      <span
                        aria-hidden="true"
                        className={`shrink-0 relative w-5 h-5 mt-0.5 transition-transform duration-200 motion-reduce:transition-none ${
                          isOpen ? 'rotate-45' : ''
                        }`}
                      >
                        <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-gray-400" />
                        <span className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gray-400" />
                      </span>
                    </button>
                  </h3>

                  <div
                    id={`service-disclosure-panel-${service.id}`}
                    role="region"
                    aria-labelledby={`service-disclosure-${service.id}`}
                    hidden={!isOpen}
                    className="pb-7 pl-12 pr-1"
                  >
                    <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="100vw"
                        loading="lazy"
                        className="object-cover"
                      />
                    </div>
                    <ServicePanelContent service={service} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
            <motion.div
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: reduceMotion ? 0 : 0.6, ease: 'easeOut' }}
              className="lg:col-span-5"
            >
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
            </motion.div>

            {/* Items */}
            <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-7">
              {matterItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : 0.1 + index * 0.07,
                    ease: 'easeOut',
                  }}
                  className="group"
                >
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
                </motion.li>
              ))}
            </ol>
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