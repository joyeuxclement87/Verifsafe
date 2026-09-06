'use client';

import { useCallback, useRef, useState, type KeyboardEvent } from 'react';
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
  Plus,
  CloudFog,
  Flame,
  HandStop,
  BuildingSkyscraper,
  Bed,
  School,
  BuildingCommunity,
  Home,
  BuildingWarehouse,
} from 'tabler-icons-react';
import Button from '@/components/ui/Button';
import { ServiceSlides, installationSlides, maintenanceSlides } from '@/components/equipment/ServiceSlides';

/* ─── Data ──────────────────────────────────────────────────────────────── */

interface AlarmConfiguration {
  id: string;
  number: string;
  title: string;
  description: string;
  bestFor: string;
}

interface SystemComponent {
  id: string;
  number: string;
  title: string;
  summary: string;
  context: string;
  role: string;
}

interface SystemStep {
  number: string;
  title: string;
  text: string;
}

interface DetectionType {
  title: string;
  text: string;
  application: string;
  accent: string;
  tint: string;
  icon: typeof CloudFog;
}

interface Application {
  name: string;
  description: string;
  tag: string;
  icon: typeof BuildingSkyscraper;
}

const alarmConfigurations: AlarmConfiguration[] = [
  {
    id: 'conventional',
    number: '01',
    title: 'Conventional Systems',
    description: 'Divide buildings into zones to detect the general area of a fire.',
    bestFor: 'Small to medium buildings, offices and retail shops.',
  },
  {
    id: 'addressable',
    number: '02',
    title: 'Addressable Systems',
    description:
      'Identify the exact location of a fire within the system for precise response.',
    bestFor: 'Large buildings, hotels and complex commercial facilities.',
  },
  {
    id: 'wireless',
    number: '03',
    title: 'Wireless Systems',
    description:
      'Operate without extensive wiring, using secure wireless communication.',
    bestFor: 'Existing buildings, heritage sites and temporary setups.',
  },
];

const systemComponents: SystemComponent[] = [
  {
    id: 'control-panel',
    number: '01',
    title: 'Control Panel',
    summary: 'The central unit that monitors and manages all system alerts.',
    context: 'Connected to the detectors and notification devices across the building.',
    role: 'Monitors & manages',
  },
  {
    id: 'smoke-detection',
    number: '02',
    title: 'Smoke Detection',
    summary: 'Detects smoke particles to provide early fire warning.',
    context: 'Placed in general building areas to pick up fire conditions from the start.',
    role: 'Early warning',
  },
  {
    id: 'heat-detection',
    number: '03',
    title: 'Heat Detection',
    summary: 'Responds to temperature changes above set thresholds.',
    context: 'Often used in high-risk areas such as kitchens where heat detection suits the risk.',
    role: 'High-risk protection',
  },
  {
    id: 'manual-call-points',
    number: '04',
    title: 'Manual Call Points',
    summary: 'Manual triggers used when a fire is observed visually.',
    context: 'Positioned within reach so occupants can raise the alarm when they see a fire.',
    role: 'Manual trigger',
  },
  {
    id: 'alarm-notification',
    number: '05',
    title: 'Alarm Notification',
    summary: 'Audible alerts that notify occupants of a fire.',
    context: 'Sounders placed where people will hear them and respond.',
    role: 'Occupant alerts',
  },
];

const systemSteps: SystemStep[] = [
  {
    number: '01',
    title: 'Detect',
    text: 'Sensors monitor the building for smoke and heat conditions.',
  },
  {
    number: '02',
    title: 'Signal',
    text: 'Detected conditions are reported to the control panel.',
  },
  {
    number: '03',
    title: 'Alert',
    text: 'Sounders alert occupants across the building.',
  },
  {
    number: '04',
    title: 'Respond',
    text: 'People act on the building\u2019s fire safety plan.',
  },
];

const detectionTypes: DetectionType[] = [
  {
    title: 'Smoke Detection',
    text: 'Detects smoke particles to provide early fire warning.',
    application: 'General building areas such as offices, hotels and commercial facilities.',
    accent: '#2E6E9E',
    tint: '#EDF3F8',
    icon: CloudFog,
  },
  {
    title: 'Heat Detection',
    text: 'Responds to temperature changes above set thresholds.',
    application: 'High-risk areas such as kitchens, where specialised heat detection suits the risk.',
    accent: '#B45309',
    tint: '#FBF1E4',
    icon: Flame,
  },
  {
    title: 'Manual Call Points',
    text: 'Manual triggers used when a fire is observed visually.',
    application: 'Positioned so a person who sees a fire can raise the alarm immediately.',
    accent: '#D62828',
    tint: '#FDECEC',
    icon: HandStop,
  },
];

const applications: Application[] = [
  { name: 'Corporate Offices', description: 'Systems designed around office building layouts.', tag: 'Commercial', icon: BuildingSkyscraper },
  { name: 'Commercial Hotels', description: 'Detection and alerting across guest areas and common spaces.', tag: 'Hospitality', icon: Bed },
  { name: 'Educational Institutions', description: 'Solutions that help alert students and staff in good time.', tag: 'Education', icon: School },
  { name: 'Healthcare Facilities', description: 'Systems suited to the needs of care environments.', tag: 'Healthcare', icon: BuildingCommunity },
  { name: 'Residential Complexes', description: 'Alerting that reaches residents across the building.', tag: 'Residential', icon: Home },
  { name: 'Industrial Warehouses', description: 'Systems scaled to larger, higher-risk spaces.', tag: 'Industrial', icon: BuildingWarehouse },
];

/* ─── Styles ────────────────────────────────────────────────────────────── */

const blueGridStyle = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
  backgroundSize: '60px 60px',
};

/* ─── Page ──────────────────────────────────────────────────────────────── */

export function FireAlarmSystemsGuide() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const componentRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeComponentIndex, setActiveComponentIndex] = useState(0);
  const [openComponentId, setOpenComponentId] = useState<string | null>(
    systemComponents[0].id
  );

  const activeComponent = systemComponents[activeComponentIndex];

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroParallax = useTransform(heroProgress, [0, 1], [0, '10%']);
  const heroFade = useTransform(heroProgress, [0, 0.8], [1, 0.15]);

  const selectComponent = useCallback((index: number) => {
    setActiveComponentIndex(index);
  }, []);

  const handleTabKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      let nextIndex: number | null = null;

      switch (event.key) {
        case 'ArrowDown':
        case 'ArrowRight':
          nextIndex = (activeComponentIndex + 1) % systemComponents.length;
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
          nextIndex = (activeComponentIndex - 1 + systemComponents.length) % systemComponents.length;
          break;
        case 'Home':
          nextIndex = 0;
          break;
        case 'End':
          nextIndex = systemComponents.length - 1;
          break;
        default:
          return;
      }

      event.preventDefault();
      selectComponent(nextIndex);
      componentRefs.current[nextIndex]?.focus();
    },
    [activeComponentIndex, selectComponent]
  );

  return (
    <main className="w-full">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        aria-labelledby="fas-hero-h1"
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
              01 / 08
            </span>

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#E53935]">
                fire alarm systems
              </p>

              <h1
                id="fas-hero-h1"
                className="text-hero-heading leading-[1.05] text-[#F4F3EF] max-w-xl"
              >
                early detection starts with the right{' '}
                <span className="text-highlight-dark">system</span>.
              </h1>

              <p className="text-subheading mt-5 max-w-xl text-[#A7B0B5] leading-relaxed">
                Explore fire alarm solutions designed to help detect fire risks early
                and support safer building environments.
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

            {/* System image */}
            <div className="hidden lg:block relative">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-white/10 bg-[#0B1720]">
                <Image
                  src="/alarms.png"
                  alt="Fire alarm control panel and detection system installed in a building"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 24rem, 0px"
                />
              </div>
              <p className="text-[10px] font-mono tracking-widest text-[#A7B0B5]/60 mt-3 pl-0.5 uppercase">
                control panel · detection · notification
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

      {/* ── System overview ──────────────────────────────────────── */}
      <section
        aria-labelledby="fas-overview-heading"
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
                    the system
                  </span>
                </p>
                <span
                  aria-hidden="true"
                  className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
                >
                  VS / FAS — 01
                </span>
              </div>

              <h2
                id="fas-overview-heading"
                className="text-section-heading text-gray-900 mt-6"
              >
                a system of connected <span className="text-highlight">components</span>.
              </h2>

              <p className="text-body text-gray-600 mt-4 max-w-lg leading-relaxed">
                A fire alarm system works as one connected unit rather than a single
                device. Depending on the building and configuration, a system can bring
                together detectors, a control panel and notification devices that work
                together to identify a fire early and alert the people inside.
              </p>

              <div className="mt-10 border-t border-gray-200">
                {[
                  {
                    step: '01',
                    title: 'Detection',
                    text: 'Smoke and heat sensors monitor the building for signs of fire.',
                  },
                  {
                    step: '02',
                    title: 'Control & alert',
                    text: 'The control panel receives signals and activates sounders to alert occupants.',
                  },
                  {
                    step: '03',
                    title: 'A careful installation',
                    text: 'Systems are configured around the building so protection fits the environment.',
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
                  src="/fire-alarm-chain.png"
                  alt="Fire alarm control panel with connected fire alarm system components"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Configurations ───────────────────────────────────────── */}
      <section
        aria-labelledby="fas-config-heading"
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
                  system configurations
                </p>
              </div>

              <h2 id="fas-config-heading" className="text-section-heading text-gray-900">
                standard <span className="text-highlight">configurations</span>.
              </h2>
              <p className="text-body text-gray-600 mt-4 max-w-sm">
                From basic zone-based alerts to precision addressable technology,
                the right approach depends on the building.
              </p>
            </motion.div>

            <div>
              {alarmConfigurations.map((config, index) => (
                <motion.div
                  key={config.id}
                  initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
                  className="grid grid-cols-[2.5rem_1fr] sm:grid-cols-[3rem_1fr] gap-x-5 gap-y-1 py-5 sm:py-6 border-t border-gray-200"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-gray-200 tabular-nums">
                    {config.number}
                  </span>
                  <div>
                    <h3 className="text-card-title text-gray-900">{config.title}</h3>
                    <p className="text-body-sm text-gray-500 mt-1">{config.description}</p>
                    <p className="text-body-sm text-gray-700 mt-2 font-medium">
                      Best for: <span className="text-[#D62828]">{config.bestFor}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
              <div aria-hidden="true" className="border-t border-gray-200" />
            </div>
          </div>
        </div>
      </section>

      {/* ── System components ────────────────────────────────────── */}
      <section
        aria-labelledby="fas-components-heading"
        className="w-full bg-white border-t border-gray-200 py-20 sm:py-24 lg:py-32"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <p className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                system components
              </span>
            </p>
            <span
              aria-hidden="true"
              className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
            >
              VS / CMP — 03
            </span>
          </div>

          <div className="max-w-3xl mt-6">
            <h2 id="fas-components-heading" className="text-section-heading text-gray-900">
              the components of a <span className="text-highlight">system</span>.
            </h2>
            <p className="text-subheading mt-5 text-gray-600 max-w-2xl">
              Select each component to see the role it plays within a fire alarm system.
            </p>
          </div>

          {/* Desktop: numbered component selector */}
          <div className="mt-14 hidden lg:grid lg:grid-cols-[minmax(0,20rem)_1fr] gap-12 xl:gap-16 items-start">
            <div
              role="tablist"
              aria-label="Fire alarm system components"
              onKeyDown={handleTabKeyDown}
              className="border-t border-gray-200 lg:sticky lg:top-24"
            >
              {systemComponents.map((component, index) => {
                const isActive = index === activeComponentIndex;
                return (
                  <h3 key={component.id}>
                    <button
                      ref={(el) => {
                        componentRefs.current[index] = el;
                      }}
                      role="tab"
                      id={`component-tab-${component.id}`}
                      aria-selected={isActive}
                      aria-controls="components-panel"
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => selectComponent(index)}
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
                        {component.number}
                      </span>
                      <span className="text-list-title">{component.title}</span>
                    </button>
                  </h3>
                );
              })}
            </div>

            <div
              id="components-panel"
              role="tabpanel"
              aria-labelledby={`component-tab-${activeComponent.id}`}
              className="border-t border-gray-200 min-w-0"
            >
              <motion.div
                key={activeComponent.id}
                initial={{ opacity: reduceMotion ? 1 : 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: reduceMotion ? 0 : 0.35, ease: 'easeOut' }}
                className="relative pt-10 sm:pt-12 min-h-[22rem]"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-2 right-0 text-[6rem] sm:text-[8rem] leading-none font-extrabold text-gray-100 tabular-nums select-none pointer-events-none"
                >
                  {activeComponent.number}
                </span>

                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                  <p className="text-label tabular-nums text-gray-500">
                    {activeComponent.number} / {systemComponents.length}
                  </p>
                </div>

                <h3 className="text-card-title text-gray-900 mt-5 leading-snug">
                  {activeComponent.title}
                </h3>

                <div aria-hidden="true" className="mt-6 h-px w-16 bg-gray-200" />

                <p className="text-body text-gray-900 font-medium mt-6 max-w-xl leading-relaxed">
                  {activeComponent.summary}
                </p>
                <p className="text-body-sm text-gray-500 mt-2.5 max-w-xl leading-relaxed">
                  {activeComponent.context}
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D62828]">
                    {activeComponent.role}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile: accessible accordion */}
          <div className="mt-14 lg:hidden">
            <div className="border-t border-gray-200">
              {systemComponents.map((component) => {
                const isOpen = openComponentId === component.id;
                return (
                  <div key={component.id} className="border-b border-gray-200">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`mobile-component-panel-${component.id}`}
                      onClick={() => setOpenComponentId(isOpen ? null : component.id)}
                      className="w-full flex items-center gap-5 py-4 px-2 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828] transition-colors duration-200 motion-reduce:transition-none"
                    >
                      <span className="text-index tabular-nums text-gray-400 shrink-0">
                        {component.number}
                      </span>
                      <span className="text-list-title flex-1 text-gray-900">{component.title}</span>
                      <Plus
                        size={18}
                        strokeWidth={2}
                        aria-hidden="true"
                        className={`shrink-0 text-gray-400 transition-transform duration-200 motion-reduce:transition-none ${
                          isOpen ? 'rotate-45' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div
                        id={`mobile-component-panel-${component.id}`}
                        className="px-2 pb-5 pl-11"
                      >
                        <p className="text-body text-gray-900 font-medium">{component.summary}</p>
                        <p className="text-body-sm text-gray-500 mt-1.5 max-w-prose">
                          {component.context}
                        </p>
                        <div className="mt-4 flex items-center gap-2.5">
                          <span aria-hidden="true" className="h-px w-4 bg-[#D62828]" />
                          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D62828]">
                            {component.role}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── How the system works ─────────────────────────────────── */}
      <section
        aria-labelledby="fas-flow-heading"
        className="relative w-full bg-neutral border-t border-gray-200 py-20 sm:py-24 lg:py-28 overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <p className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                how it works
              </span>
            </p>
            <span
              aria-hidden="true"
              className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
            >
              VS / FLW — 04
            </span>
          </div>

          <div className="max-w-3xl mt-6">
            <h2 id="fas-flow-heading" className="text-section-heading text-gray-900">
              from detection to <span className="text-highlight">response</span>.
            </h2>
            <p className="text-subheading mt-5 text-gray-600 max-w-2xl">
              Every active system moves through the same sequence of stages.
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 lg:gap-x-12">
              {systemSteps.map((step, index) => {
                const isLast = index === systemSteps.length - 1;
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
                      className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#D62828] ring-4 ring-neutral"
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

      {/* ── Detection technologies ───────────────────────────────── */}
      <section
        aria-labelledby="fas-detection-heading"
        className="w-full bg-white border-t border-gray-200 py-20 sm:py-24 lg:py-32"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,22rem)_1fr] gap-12 lg:gap-16 items-start">
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
                  detection technologies
                </p>
              </div>

              <h2 id="fas-detection-heading" className="text-section-heading text-gray-900">
                how fires are <span className="text-highlight">detected</span>.
              </h2>
              <p className="text-body text-gray-600 mt-4 max-w-sm">
                Each method responds to a different trigger — suited to different environments.
              </p>
            </motion.div>

            <div>
              {detectionTypes.map((detection, index) => (
                <motion.div
                  key={detection.title}
                  initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
                  className="py-7 sm:py-8 border-b border-gray-200 sm:grid sm:grid-cols-[1fr_minmax(0,16rem)] sm:gap-10 lg:gap-12"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <span
                      aria-hidden="true"
                      className="shrink-0 mt-0.5 w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: detection.tint }}
                    >
                      <detection.icon
                        size={20}
                        strokeWidth={1.8}
                        style={{ color: detection.accent }}
                      />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-card-title text-gray-900">{detection.title}</h3>
                      <p className="text-body text-gray-600 mt-1.5 max-w-xl leading-relaxed">
                        {detection.text}
                      </p>
                    </div>
                  </div>

                  <p
                    className="mt-5 sm:mt-0 text-body-sm text-gray-700 leading-relaxed rounded-r-lg border-l-2 px-4 py-3.5"
                    style={{
                      backgroundColor: detection.tint,
                      borderLeftColor: detection.accent,
                    }}
                  >
                    <span
                      className="block mb-1 text-label uppercase tracking-[0.14em]"
                      style={{ color: detection.accent }}
                    >
                      Where it applies
                    </span>
                    {detection.application}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Where they are used ──────────────────────────────────── */}
      <section
        aria-labelledby="fas-applications-heading"
        className="w-full bg-paper border-t border-gray-200 py-20 sm:py-24 lg:py-28"
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
              VS / APP — 06
            </span>
          </div>

          <div className="max-w-3xl mt-6">
            <h2 id="fas-applications-heading" className="text-section-heading text-gray-900">
              fire alarm systems in the <span className="text-highlight">buildings</span>{' '}
              they protect.
            </h2>
            <p className="text-subheading mt-5 text-gray-600 max-w-2xl">
              Detection and alerting are supplied across a range of building environments,
              with configurations matched to each space.
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
                  className="shrink-0 mt-0.5 w-11 h-11 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-900 transition-colors duration-200 group-hover:text-[#D62828] motion-reduce:transition-none"
                >
                  <application.icon size={19} strokeWidth={1.8} />
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

      {/* ── Installation connection ──────────────────────────────── */}
      <section
        aria-labelledby="fas-installation-heading"
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: '#0B1720' }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={blueGridStyle}
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
              <h2 id="fas-installation-heading" className="text-section-heading text-white">
                a system is only useful when it is properly{' '}
                <span className="text-highlight-dark">installed</span>.
              </h2>
              <p className="text-body text-[#A7B0B5] mt-4 max-w-lg leading-relaxed">
                VerifSafe provides professional installation of fire alarm systems,
                detection devices and safety equipment, configured around your building.
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
        aria-labelledby="fas-maintenance-heading"
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
              <h2 id="fas-maintenance-heading" className="text-section-heading text-gray-900">
                protection continues after{' '}
                <span className="text-highlight">installation</span>.
              </h2>
              <p className="text-body text-gray-600 mt-5 max-w-xl leading-relaxed">
                Routine inspection, testing and maintenance help keep fire alarm systems
                working as intended and ready when they are needed.
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
            </div>

            <div className="relative">
              <ServiceSlides slides={maintenanceSlides} code="VS / SVC — 04" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section
        aria-labelledby="fas-cta-heading"
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
                planning a fire alarm system?
              </span>
            </p>

            <h2 id="fas-cta-heading" className="text-section-heading text-white">
              let&apos;s plan the right protection for your{' '}
              <span className="text-highlight-dark">building</span>.
            </h2>

            <p className="text-subheading text-[#A7B0B5] mt-5 max-w-xl">
              Tell us about your building and fire-safety requirements so we can help you
              determine the appropriate next step.
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