'use client';

import { useCallback, useRef, useState, type KeyboardEvent } from 'react';
import Image from 'next/image';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import CtaBackground from '@/components/sections/marketing/CtaBackground';
import { ArrowUpRight, ArrowRight, Phone, Plus } from 'tabler-icons-react';
import Button from '@/components/ui/Button';
import RelatedEquipment from '@/components/equipment/RelatedEquipment';

/* ─── Data ──────────────────────────────────────────────────────────────── */

interface SignCategory {
  id: string;
  number: string;
  title: string;
  summary: string;
  purpose: string;
  examples: string[];
  image: string;
  imageAlt: string;
}

interface Application {
  name: string;
  description: string;
  tag: string;
}

const signCategories: SignCategory[] = [
  {
    id: 'fire-equipment',
    number: '01',
    title: 'Fire Equipment Signs',
    summary:
      'High-visibility photoluminescent signs that indicate where fire protection equipment is located.',
    purpose:
      'Helps people locate fire extinguishers and supporting equipment quickly during an emergency.',
    examples: ['Fire extinguisher location', 'Fire equipment location'],
    image: '/fire-safety-accessories-guide.png',
    imageAlt: 'Fire safety equipment signage and accessories',
  },
  {
    id: 'emergency-exit',
    number: '02',
    title: 'Emergency Exit Route Signs',
    summary:
      'Photoluminescent signs that mark the emergency exit routes people should follow.',
    purpose:
      'Shows the way out clearly and stays visible when the normal lighting is lost.',
    examples: ['Emergency exit route', 'Escape route marking'],
    image: '/emergency-light-guide.png',
    imageAlt: 'Illuminated exit sign guiding people along an escape route',
  },
  {
    id: 'illuminated-exit',
    number: '03',
    title: 'Illuminated Exit Signs',
    summary:
      'Permanently illuminated directional signs that keep escape routes, corridors and primary exits clearly visible.',
    purpose:
      'Provides clear, always-on guidance so people can follow the way out even when normal lighting fails.',
    examples: ['Directional exit sign', 'Maintained exit sign'],
    image: '/equipment-4.png',
    imageAlt: 'Emergency exit light and signage installed in a building',
  },
];

const applications: Application[] = [
  { name: 'Corporate Offices', description: 'Clear guidance across office floors and common areas.', tag: 'Commercial' },
  { name: 'Commercial Buildings', description: 'Signage that marks exits and fire equipment in public buildings.', tag: 'Commercial' },
  { name: 'Hotels & Hospitality', description: 'Directional signs for guests unfamiliar with the building.', tag: 'Hospitality' },
  { name: 'Schools & Education', description: 'Visible signs that help students and staff move to safety.', tag: 'Education' },
  { name: 'Industrial Sites & Warehouses', description: 'Signage scaled to larger workplaces and high-traffic areas.', tag: 'Industrial' },
  { name: 'Residential Buildings', description: 'Exit and fire-equipment signs across shared spaces.', tag: 'Residential' },
];

/* ─── Styles ────────────────────────────────────────────────────────────── */

const blueGridStyle = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
  backgroundSize: '60px 60px',
};

/* ─── Page ──────────────────────────────────────────────────────────────── */

export function SafetySignsGuide() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const categoryRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [openCategoryId, setOpenCategoryId] = useState<string | null>(
    signCategories[0].id
  );

  const activeCategory = signCategories[activeCategoryIndex];

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroParallax = useTransform(heroProgress, [0, 1], [0, '10%']);
  const heroFade = useTransform(heroProgress, [0, 0.8], [1, 0.15]);

  const selectCategory = useCallback((index: number) => {
    setActiveCategoryIndex(index);
  }, []);

  const handleTabKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      let nextIndex: number | null = null;

      switch (event.key) {
        case 'ArrowDown':
        case 'ArrowRight':
          nextIndex = (activeCategoryIndex + 1) % signCategories.length;
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
          nextIndex =
            (activeCategoryIndex - 1 + signCategories.length) %
            signCategories.length;
          break;
        case 'Home':
          nextIndex = 0;
          break;
        case 'End':
          nextIndex = signCategories.length - 1;
          break;
        default:
          return;
      }

      event.preventDefault();
      selectCategory(nextIndex);
      categoryRefs.current[nextIndex]?.focus();
    },
    [activeCategoryIndex, selectCategory]
  );

  return (
    <main className="w-full">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        aria-labelledby="ssg-hero-h1"
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
              05 / 06
            </span>

            <div>
              <RevealGroup stagger={0.08} delayChildren={0.05}>
              <RevealItem variant="up-sm">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#E53935]">
                safety signs & signage
              </p>
              </RevealItem>

              <RevealItem>
              <h1
                id="ssg-hero-h1"
                className="text-hero-heading leading-[1.05] text-[#F4F3EF] max-w-xl"
              >
                clear signs for <span className="text-highlight-dark">safer spaces</span>.
              </h1>
              </RevealItem>

              <RevealItem variant="up-sm">
              <p className="text-subheading mt-5 max-w-xl text-[#A7B0B5] leading-relaxed">
                VerifSafe supplies illuminated exit signs and photoluminescent fire &
                emergency signage that help people find equipment, follow escape routes
                and know what to do.
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

            {/* Signage image */}
            <div className="hidden lg:block relative">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-white/10 bg-[#0B1720]">
                <Image
                  src="/emergency-light-guide.png"
                  alt="Illuminated exit sign mounted in a building"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 24rem, 0px"
                />
              </div>
              <p className="text-[10px] font-mono tracking-widest text-[#A7B0B5]/60 mt-3 pl-0.5 uppercase">
                exit signs · fire signage · guidance
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
        aria-labelledby="ssg-overview-heading"
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
                  VS / SGN — 01
                </span>
              </div>

              <h2
                id="ssg-overview-heading"
                className="text-section-heading text-gray-900 mt-6"
              >
                signage that helps people know <span className="text-highlight">what to do</span>.
              </h2>

              <p className="text-body text-gray-600 mt-4 max-w-lg leading-relaxed">
                Safety signs give people the information they need to act. Exit signs
                point the way to safety, while fire & emergency signage shows where fire
                equipment is kept and how to reach an exit route.
              </p>

              <p className="text-body text-gray-600 mt-4 max-w-lg leading-relaxed">
                The right signage helps occupants recognise what matters, follow the
                correct routes and understand important instructions — so decisions are
                easier to make in a stressful moment.
              </p>

              <div className="mt-10 border-t border-gray-200">
                {[
                  {
                    step: '01',
                    title: 'Find the way out',
                    text: 'Exit signs keep escape routes, corridors and exits visible and easy to follow.',
                  },
                  {
                    step: '02',
                    title: 'Locate the equipment',
                    text: 'Fire & emergency signage marks where protection equipment is stored.',
                  },
                  {
                    step: '03',
                    title: 'Built to be noticed',
                    text: 'Illuminated and photoluminescent signs stay visible when normal lighting is lost.',
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
                  src="/equipment-4.png"
                  alt="Emergency exit light and signage installed in a building"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Sign categories ──────────────────────────────────────── */}
      <section
        aria-labelledby="ssg-categories-heading"
        className="w-full bg-paper border-t border-gray-200 py-20 sm:py-24 lg:py-28"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <p className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                sign categories
              </span>
            </p>
            <span
              aria-hidden="true"
              className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
            >
              VS / SGN — 02
            </span>
          </div>

          <div className="max-w-3xl mt-6">
            <h2 id="ssg-categories-heading" className="text-section-heading text-gray-900">
              signs for every <span className="text-highlight">space</span>, purpose and situation.
            </h2>
            <p className="text-subheading mt-5 text-gray-600 max-w-2xl">
              Organised around the needs of different buildings and situations, each
              category shows the signage available and the purpose it serves.
            </p>
          </div>

          {/* Desktop: numbered category selector */}
          <div className="mt-14 hidden lg:grid lg:grid-cols-[minmax(0,20rem)_1fr] gap-12 xl:gap-16 items-start">
            <div
              role="tablist"
              aria-label="Safety sign categories"
              onKeyDown={handleTabKeyDown}
              className="border-t border-gray-200 lg:sticky lg:top-24"
            >
              {signCategories.map((category, index) => {
                const isActive = index === activeCategoryIndex;
                return (
                  <h3 key={category.id}>
                    <button
                      ref={(el) => {
                        categoryRefs.current[index] = el;
                      }}
                      role="tab"
                      id={`category-tab-${category.id}`}
                      aria-selected={isActive}
                      aria-controls="sign-categories-panel"
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => selectCategory(index)}
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
                        {category.number}
                      </span>
                      <span className="text-list-title">{category.title}</span>
                    </button>
                  </h3>
                );
              })}
            </div>

            <div
              id="sign-categories-panel"
              role="tabpanel"
              aria-labelledby={`category-tab-${activeCategory.id}`}
              className="border-t border-gray-200 min-w-0"
            >
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: reduceMotion ? 1 : 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: reduceMotion ? 0 : 0.35, ease: 'easeOut' }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 min-h-[22rem] pt-0"
              >
                <div className="relative aspect-[4/5] sm:aspect-square rounded-lg overflow-hidden border border-black/10 bg-gray-100">
                  <Image
                    src={activeCategory.image}
                    alt={activeCategory.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 30vw, 40vw"
                  />
                </div>
                <div className="pt-4">
                  <div className="flex items-center gap-3">
                    <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                    <p className="text-label tabular-nums text-gray-500">
                      {activeCategory.number} / {signCategories.length}
                    </p>
                  </div>

                  <h3 className="text-card-title text-gray-900 mt-5 leading-snug">
                    {activeCategory.title}
                  </h3>

                  <div aria-hidden="true" className="mt-6 h-px w-16 bg-gray-200" />

                  <p className="text-body text-gray-900 font-medium mt-6 max-w-xl leading-relaxed">
                    {activeCategory.summary}
                  </p>
                  <p className="text-body-sm text-gray-500 mt-2.5 max-w-xl leading-relaxed">
                    {activeCategory.purpose}
                  </p>

                  <ul className="mt-6 space-y-2.5" role="list">
                    {activeCategory.examples.map((example) => (
                      <li
                        key={example}
                        className="flex items-center gap-3 text-body-sm text-gray-700"
                      >
                        <span
                          aria-hidden="true"
                          className="h-px w-4 bg-[#D62828] shrink-0"
                        />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Mobile: accessible accordion */}
          <div className="mt-14 lg:hidden">
            <div className="border-t border-gray-200">
              {signCategories.map((category) => {
                const isOpen = openCategoryId === category.id;
                return (
                  <div key={category.id} className="border-b border-gray-200">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`mobile-category-panel-${category.id}`}
                      onClick={() => setOpenCategoryId(isOpen ? null : category.id)}
                      className="w-full flex items-center gap-5 py-4 px-2 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828] transition-colors duration-200 motion-reduce:transition-none"
                    >
                      <span className="text-index tabular-nums text-gray-400 shrink-0">
                        {category.number}
                      </span>
                      <span className="text-list-title flex-1 text-gray-900">
                        {category.title}
                      </span>
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
                        id={`mobile-category-panel-${category.id}`}
                        className="px-2 pb-6"
                      >
                        <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-black/10 bg-gray-100 mt-1">
                          <Image
                            src={category.image}
                            alt={category.imageAlt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 92vw, 0px"
                          />
                        </div>
                        <p className="text-body text-gray-900 font-medium mt-5 leading-relaxed">
                          {category.summary}
                        </p>
                        <p className="text-body-sm text-gray-500 mt-2.5 leading-relaxed">
                          {category.purpose}
                        </p>
                        <ul className="mt-5 space-y-2.5" role="list">
                          {category.examples.map((example) => (
                            <li
                              key={example}
                              className="flex items-center gap-3 text-body-sm text-gray-700"
                            >
                              <span
                                aria-hidden="true"
                                className="h-px w-4 bg-[#D62828] shrink-0"
                              />
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Applications ─────────────────────────────────────────── */}
      <section
        aria-labelledby="ssg-applications-heading"
        className="w-full bg-white border-t border-gray-200 py-20 sm:py-24 lg:py-28"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <p className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                applications
              </span>
            </p>
            <span
              aria-hidden="true"
              className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
            >
              VS / SGN — 03
            </span>
          </div>

          <div className="max-w-3xl mt-6">
            <h2 id="ssg-applications-heading" className="text-section-heading text-gray-900">
              where signage makes a <span className="text-highlight">difference</span>.
            </h2>
            <p className="text-subheading mt-5 text-gray-600 max-w-2xl">
              From offices to industrial sites, buildings rely on clear signs to keep
              people safe and informed.
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

      {/* ── Related Equipment ────────────────────────────────────── */}
      <RelatedEquipment excludeId="emergency-lights" code="VS / NAV — 05" />

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section
        aria-labelledby="ssg-cta-heading"
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: '#1a2332' }}
      >
        <CtaBackground />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-40">
          <div className="max-w-3xl text-left">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-[#E53935]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A7B0B5]">
                need safety signage?
              </span>
            </div>

            <h2 id="ssg-cta-heading" className="text-section-heading text-[#F4F3EF] mt-6">
              make important information <span className="text-highlight-dark">impossible to miss</span>.
            </h2>

            <p className="text-subheading text-[#A7B0B5] mt-5 max-w-xl leading-relaxed">
              Tell us what your building, workplace or site needs and we can help you
              identify the right safety and informational signs.
            </p>

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
              From exit signs to fire & emergency signage, we help buildings and
              workplaces stay clear, safe and well guided.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
