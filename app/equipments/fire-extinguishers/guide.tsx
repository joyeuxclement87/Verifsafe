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
} from 'tabler-icons-react';
import Button from '@/components/ui/Button';

/* ─── Data ──────────────────────────────────────────────────────────────── */

interface ExtinguisherType {
  id: string;
  number: string;
  title: string;
  fireClasses: string;
  description: string;
  bestFor: string;
  environments: string[];
  image: string;
  imageAlt: string;
}

const extinguisherTypes: ExtinguisherType[] = [
  {
    id: 'water',
    number: '01',
    title: 'Water Extinguishers',
    fireClasses: 'Class A',
    description:
      'Water extinguishers are designed for fires involving solid materials such as wood, paper, textiles and plastics. They cool the burning material and are one of the most common extinguisher types in buildings with general combustibles.',
    bestFor: 'Offices, schools, libraries, residential buildings.',
    environments: ['Offices', 'Schools', 'Libraries', 'Residential buildings'],
    image: '/equipment-1.png',
    imageAlt: 'Fire extinguisher equipment for Class A fire protection',
  },
  {
    id: 'foam',
    number: '02',
    title: 'Foam Extinguishers',
    fireClasses: 'Classes A · B',
    description:
      'Foam extinguishers produce a blanket of foam that smothers flammable liquid fires and cools burning solids. They are effective on fires involving fuels, oils, solvents and other flammable liquids, as well as general combustibles.',
    bestFor: 'Garages, workshops, fuel storage areas, warehouses.',
    environments: ['Garages', 'Workshops', 'Fuel storage', 'Warehouses'],
    image: '/equipment-1.png',
    imageAlt: 'Fire extinguisher equipment for Class A and B fire protection',
  },
  {
    id: 'dry-powder',
    number: '03',
    title: 'Dry Powder Extinguishers',
    fireClasses: 'Classes A · B · C · E',
    description:
      'Dry powder extinguishers are multi-purpose units suitable for a wide range of fire risks. They interrupt the chemical reaction of the fire and can be used on solid materials, flammable liquids, gases and electrical equipment.',
    bestFor: 'Vehicles, industrial settings, workshops, commercial premises.',
    environments: ['Vehicles', 'Industrial settings', 'Workshops', 'Commercial buildings'],
    image: '/equipment-1.png',
    imageAlt: 'Multi-purpose fire extinguisher equipment',
  },
  {
    id: 'co2',
    number: '04',
    title: 'CO₂ Extinguishers',
    fireClasses: 'Classes B · E',
    description:
      'CO₂ extinguishers discharge carbon dioxide gas that displaces oxygen around the fire. They leave no residue and are safe to use near electrical equipment, making them the standard choice for server rooms, offices and areas with sensitive electronics.',
    bestFor: 'Server rooms, offices, electrical panels, data centres.',
    environments: ['Server rooms', 'Offices', 'Data centres', 'Electrical areas'],
    image: '/equipment-1.png',
    imageAlt: 'Fire extinguisher equipment for electrical fire protection',
  },
  {
    id: 'wet-chemical',
    number: '05',
    title: 'Wet Chemical Extinguishers',
    fireClasses: 'Classes A · F',
    description:
      'Wet chemical extinguishers are designed for fires involving cooking oils, fats and grease. The agent cools the fire and forms a barrier that prevents re-ignition, making them the standard protection for commercial kitchens and catering environments.',
    bestFor: 'Commercial kitchens, restaurants, food preparation areas.',
    environments: ['Commercial kitchens', 'Restaurants', 'Catering environments'],
    image: '/equipment-1.png',
    imageAlt: 'Fire extinguisher equipment for commercial kitchen protection',
  },
];

const fireClasses = [
  {
    letter: 'A',
    label: 'Solid Materials',
    detail: 'Wood, paper, textiles and plastics.',
    suitableTypes: ['Water', 'Foam', 'Dry Powder'],
  },
  {
    letter: 'B',
    label: 'Flammable Liquids',
    detail: 'Fuel, oil, paint and solvents.',
    suitableTypes: ['Foam', 'Dry Powder', 'CO₂'],
  },
  {
    letter: 'C',
    label: 'Flammable Gases',
    detail: 'Methane, propane and butane.',
    suitableTypes: ['Dry Powder'],
  },
  {
    letter: 'E',
    label: 'Electrical Fires',
    detail: 'Computers, motors and appliances.',
    suitableTypes: ['Dry Powder', 'CO₂'],
  },
  {
    letter: 'F',
    label: 'Cooking Fires',
    detail: 'Cooking oils, fats and grease.',
    suitableTypes: ['Wet Chemical'],
  },
];

const environments = [
  { name: 'Homes & residential buildings', description: 'Portable units positioned at key points such as kitchens, hallways and escape routes.' },
  { name: 'Offices & commercial buildings', description: 'Standard ABC or CO₂ extinguishers at key access points and near high-risk areas.' },
  { name: 'Workshops, garages & vehicles', description: 'Foam or dry powder units for flammable liquid and general fire risks.' },
  { name: 'Warehouses & industrial facilities', description: 'Larger capacity foam or dry powder units for higher-risk storage and operations.' },
  { name: 'Restaurants & commercial kitchens', description: 'Wet chemical extinguishers for cooking oil and fat fires.' },
  { name: 'Server rooms & data centres', description: 'CO₂ extinguishers for electrical fires near sensitive equipment.' },
];

/* ─── Styles ────────────────────────────────────────────────────────────── */

const blueGridStyle = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
  backgroundSize: '60px 60px',
};

/* ─── Page ──────────────────────────────────────────────────────────────── */

export function FireExtinguishersGuide() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const typeRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeTypeIndex, setActiveTypeIndex] = useState(0);

  const activeType = extinguisherTypes[activeTypeIndex];

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroParallax = useTransform(heroProgress, [0, 1], [0, '14%']);
  const heroFade = useTransform(heroProgress, [0, 0.8], [1, 0.15]);

  const selectType = useCallback((index: number) => {
    setActiveTypeIndex(index);
  }, []);

  const handleTabKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      let nextIndex: number | null = null;

      switch (event.key) {
        case 'ArrowDown':
        case 'ArrowRight':
          nextIndex = (activeTypeIndex + 1) % extinguisherTypes.length;
          break;
        case 'ArrowUp':
        case 'ArrowLeft':
          nextIndex = (activeTypeIndex - 1 + extinguisherTypes.length) % extinguisherTypes.length;
          break;
        case 'Home':
          nextIndex = 0;
          break;
        case 'End':
          nextIndex = extinguisherTypes.length - 1;
          break;
        default:
          return;
      }

      event.preventDefault();
      selectType(nextIndex);
      typeRefs.current[nextIndex]?.focus();
    },
    [activeTypeIndex, selectType]
  );

  return (
    <main className="w-full">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        aria-labelledby="ext-hero-h1"
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
          <div className="relative flex flex-col items-start justify-center min-h-[480px] lg:min-h-[600px] pt-24 pb-28 sm:pt-28 sm:pb-32">
            <span
              aria-hidden="true"
              className="absolute right-0 top-8 text-[10px] font-mono tracking-wider opacity-40 text-[#A7B0B5]"
            >
              01 / 05
            </span>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#E53935]">
              fire extinguishers
            </p>

            <h1
              id="ext-hero-h1"
              className="text-hero-heading leading-[1.05] text-[#F4F3EF] max-w-2xl"
            >
              the right extinguisher for the right{' '}
              <span className="text-highlight-dark">fire risk</span>.
            </h1>

            <p className="text-subheading mt-5 max-w-xl text-[#A7B0B5] leading-relaxed">
              Explore fire extinguishers supplied for different fire risks, building
              environments and protection needs.
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
        </motion.div>

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ backgroundColor: 'rgba(167, 176, 181, 0.1)' }}
        />
      </section>

      {/* ── Intro ────────────────────────────────────────────────── */}
      <section
        aria-labelledby="ext-overview-heading"
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
              <div className="flex items-center gap-3 mb-5">
                <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                <p className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                  the basics
                </p>
              </div>

              <h2
                id="ext-overview-heading"
                className="text-section-heading text-gray-900"
              >
                First line of <span className="text-highlight">defence</span>.
              </h2>

              <div className="mt-8 space-y-8">
                {[
                  {
                    step: '01',
                    title: 'Immediate response',
                    text: 'Enables quick action when fire starts, providing the crucial first line of defence before professional help arrives.',
                  },
                  {
                    step: '02',
                    title: 'Prevents escalation',
                    text: 'Controls small fires early to stop them spreading and becoming larger, more dangerous hazards.',
                  },
                  {
                    step: '03',
                    title: 'Portable and accessible',
                    text: 'Designed to be mounted or placed at key points throughout a building for rapid access in an emergency.',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-6">
                    <span className="text-index text-gray-400 tabular-nums shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-card-title text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-body text-gray-600">{item.text}</p>
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
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-black/10 bg-gray-100">
                <Image
                  src="/fire-extinguisher-guide.png"
                  alt="Fire extinguisher guide showing portable extinguisher types"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <motion.div
                initial={{ opacity: reduceMotion ? 1 : 0, scale: reduceMotion ? 1 : 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-5 -left-5 bg-white px-5 py-4 rounded-lg border border-gray-200 shadow-sm"
              >
                <p className="text-card-title font-bold text-[#D62828]">6 KG</p>
                <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-widest mt-1">
                  Standard unit
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Type selector ────────────────────────────────────────── */}
      <section
        aria-labelledby="ext-types-heading"
        className="w-full bg-paper border-t border-gray-200 py-20 sm:py-24 lg:py-32"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="flex items-center justify-between gap-4">
            <p className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                extinguisher types
              </span>
            </p>
            <span
              aria-hidden="true"
              className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
            >
              VS / EXT — 02
            </span>
          </div>

          <div className="max-w-3xl mt-6">
            <h2 id="ext-types-heading" className="text-section-heading text-gray-900">
              choose the right <span className="text-highlight">type</span>.
            </h2>
            <p className="text-subheading mt-5 text-gray-600 max-w-2xl">
              Each extinguisher type is designed for specific fire risks. Select the
              type to see what it covers, where it works best and which fire classes
              it handles.
            </p>
          </div>

          {/* ── Mobile: horizontal scroll tabs + panel ──────────── */}
          <div className="mt-14 lg:hidden">
            <nav
              aria-label="Extinguisher types"
              className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-4 px-4"
            >
              <div className="flex gap-2 min-w-max pb-4" role="tablist" aria-label="Extinguisher types">
                {extinguisherTypes.map((type, index) => {
                  const isActive = index === activeTypeIndex;
                  return (
                    <button
                      key={type.id}
                      role="tab"
                      id={`mobile-tab-${type.id}`}
                      aria-selected={isActive}
                      aria-controls="ext-types-panel-mobile"
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => selectType(index)}
                      className={`shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828] ${
                        isActive
                          ? 'bg-[#0B1720] text-white'
                          : 'bg-white text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-700'
                      }`}
                    >
                      <span className="text-[10px] tabular-nums font-mono opacity-60">
                        {type.number}
                      </span>
                      {type.title.replace(' Extinguishers', '')}
                    </button>
                  );
                })}
              </div>
            </nav>

            <div
              id="ext-types-panel-mobile"
              role="tabpanel"
              aria-labelledby={`mobile-tab-${activeType.id}`}
            >
              <motion.div
                key={activeType.id}
                initial={{ opacity: reduceMotion ? 1 : 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: reduceMotion ? 0 : 0.3, ease: 'easeOut' }}
                className="mt-6"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-black/10 bg-gray-100">
                  <Image
                    src={activeType.image}
                    alt={activeType.imageAlt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>

                {/* Content */}
                <div className="mt-6">
                  <div className="flex items-center gap-3">
                    <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                    <p className="text-label tabular-nums text-gray-500">
                      {activeType.number} / 05
                    </p>
                  </div>
                  <h3 className="text-card-title text-gray-900 mt-4">{activeType.title}</h3>
                  <p className="text-xs font-semibold text-[#D62828] tracking-wide mt-1.5">
                    {activeType.fireClasses}
                  </p>
                  <p className="text-body text-gray-600 mt-3">{activeType.description}</p>

                  <div className="mt-5 bg-white border border-gray-200 rounded-lg p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-2">
                      Best for
                    </p>
                    <p className="text-body-sm text-gray-700 font-medium">{activeType.bestFor}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── Desktop: split selector ──────────────────────────── */}
          <div className="mt-14 lg:mt-20 hidden lg:grid lg:grid-cols-[minmax(0,20rem)_1fr] gap-12 xl:gap-16 items-start">
            <div
              role="tablist"
              aria-label="Extinguisher types"
              onKeyDown={handleTabKeyDown}
              className="border-t border-gray-200 lg:sticky lg:top-24"
            >
              {extinguisherTypes.map((type, index) => {
                const isActive = index === activeTypeIndex;
                return (
                  <h3 key={type.id}>
                    <button
                      ref={(el) => { typeRefs.current[index] = el; }}
                      role="tab"
                      id={`type-tab-${type.id}`}
                      aria-selected={isActive}
                      aria-controls="ext-types-panel"
                      tabIndex={isActive ? 0 : -1}
                      onClick={() => selectType(index)}
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
                        {type.number}
                      </span>
                      <span className="text-list-title">{type.title}</span>
                    </button>
                  </h3>
                );
              })}
            </div>

            <div
              id="ext-types-panel"
              role="tabpanel"
              aria-labelledby={`type-tab-${activeType.id}`}
              className="border-t border-gray-200 min-w-0"
            >
              <motion.div
                key={activeType.id}
                initial={{ opacity: reduceMotion ? 1 : 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: reduceMotion ? 0 : 0.35, ease: 'easeOut' }}
                className="relative pt-10 sm:pt-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,19rem)] gap-10 lg:gap-12 lg:items-stretch">
                  {/* Content */}
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-center gap-3">
                      <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                      <p className="text-label tabular-nums text-gray-500">
                        {activeType.number} / 05
                      </p>
                    </div>

                    <h3 className="text-card-title text-gray-900 mt-5 leading-snug">
                      {activeType.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#D62828] tracking-wide mt-1.5">
                      {activeType.fireClasses}
                    </p>

                    <p className="text-body text-gray-600 mt-4 max-w-xl">
                      {activeType.description}
                    </p>

                    <ul
                      className="mt-8 max-w-xl"
                      role="list"
                      aria-label={`${activeType.title} applications`}
                    >
                      {activeType.environments.map((env) => (
                        <li
                          key={env}
                          className="flex items-start gap-3 py-3 border-t border-gray-200 text-body-sm text-gray-700"
                        >
                          <span aria-hidden="true" className="shrink-0 mt-2.5 h-px w-4 bg-[#D62828]" />
                          {env}
                        </li>
                      ))}
                      <li aria-hidden="true" className="border-t border-gray-200" />
                    </ul>

                    <div className="mt-6 bg-neutral p-4 rounded-lg border border-line max-w-xl">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500 mb-1">
                        Best for
                      </p>
                      <p className="text-body-sm text-gray-700 font-medium">{activeType.bestFor}</p>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="hidden lg:block relative">
                    <div className="relative w-full h-full min-h-[24rem] rounded-lg overflow-hidden border border-black/10 bg-gray-100">
                      <Image
                        src={activeType.image}
                        alt={activeType.imageAlt}
                        fill
                        className="object-cover transition-opacity duration-300"
                        sizes="(max-width: 1280px) 45vw, 380px"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fire classes ─────────────────────────────────────────── */}
      <section
        aria-labelledby="ext-classes-heading"
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
                  quick reference
                </p>
              </div>

              <h2 id="ext-classes-heading" className="text-section-heading text-gray-900">
                fire classes <span className="text-highlight">explained</span>.
              </h2>
              <p className="text-body text-gray-600 mt-4 max-w-sm">
                Understanding fire classes helps you choose the right extinguishing agent
                for the risk in your building.
              </p>
            </motion.div>

            <div>
              {fireClasses.map((cls, index) => (
                <motion.div
                  key={cls.letter}
                  initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
                  className="group grid grid-cols-[2.5rem_1fr] sm:grid-cols-[3rem_1fr] gap-x-5 gap-y-1 py-5 sm:py-6 border-t border-gray-200"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-gray-200 group-hover:text-[#D62828] transition-colors duration-200 tabular-nums">
                    {cls.letter}
                  </span>
                  <div>
                    <h3 className="text-card-title text-gray-900">{cls.label}</h3>
                    <p className="text-body-sm text-gray-500 mt-1">{cls.detail}</p>
                    <p className="text-body-sm text-gray-700 mt-2 font-medium">
                      Suitable:{' '}
                      <span className="text-[#D62828]">{cls.suitableTypes.join(', ')}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
              <div aria-hidden="true" className="border-t border-gray-200" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Where they are used ──────────────────────────────────── */}
      <section
        aria-labelledby="ext-environments-heading"
        className="w-full bg-neutral border-t border-gray-200 py-20 sm:py-24 lg:py-32"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-black/10 bg-gray-100">
                <Image
                  src="/ext.png"
                  alt="Fire extinguisher placement in a commercial building"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                <p className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                  environments
                </p>
              </div>

              <h2 id="ext-environments-heading" className="text-section-heading text-gray-900">
                where they are <span className="text-highlight">used</span>.
              </h2>
              <p className="text-body text-gray-600 mt-4 max-w-lg">
                Strategically placed fire extinguishers form the first line of
                defence across a wide range of building environments.
              </p>

              <div className="mt-8">
                {environments.map((env, index) => (
                  <div
                    key={env.name}
                    className={`py-4 ${
                      index === 0 ? 'border-t border-gray-200' : ''
                    } border-b border-gray-200`}
                  >
                    <h3 className="text-card-title text-gray-900">{env.name}</h3>
                    <p className="text-body-sm text-gray-500 mt-1">{env.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section
        aria-labelledby="ext-cta-heading"
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: '#1a2332' }}
      >
        {/* Blueprint grid */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Hairlines */}
        <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px bg-white/[0.04]" />
        <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.04]" />
        <div aria-hidden="true" className="absolute top-0 bottom-0 left-[20%] w-px bg-white/[0.04]" />
        <div aria-hidden="true" className="absolute top-0 bottom-0 right-[20%] w-px bg-white/[0.04]" />

        {/* Glow */}
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
                need help choosing?
              </span>
            </p>

            <h2 id="ext-cta-heading" className="text-section-heading text-white">
              let&apos;s find the right protection for your{' '}
              <span className="text-highlight-dark">building</span>.
            </h2>

            <p className="text-subheading text-[#A7B0B5] mt-5 max-w-xl">
              Tell us about your building, fire-safety needs or equipment requirements and
              our team can help you identify the appropriate next step.
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

            {/* Support line */}
            <p className="text-body-sm text-[#7A7A74] mt-6">
              From inspection and maintenance to equipment supply and refilling, we help
              buildings stay protected.
            </p>

            {/* Tick list */}
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2" role="list">
              {['Equipment supply', 'Inspection & maintenance', 'Refilling', 'Fire safety training'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-[#A7B0B5]">
                    <span aria-hidden="true" className="h-px w-3 bg-[#E53935] shrink-0" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
