'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'tabler-icons-react';
import { motion, useReducedMotion } from 'framer-motion';

interface Industry {
  id: string;
  name: string;
  summary: string;
  support: string[];
  href: string;
}

const industries: Industry[] = [
  {
    id: 'residential',
    name: 'residential buildings',
    summary: 'Fire protection for apartments, residential developments and shared living spaces.',
    support: ['Fire extinguishers', 'Detection & alarm systems', 'Emergency lighting'],
    href: '/equipments',
  },
  {
    id: 'commercial',
    name: 'commercial properties',
    summary: 'Fire safety for retail spaces, shopping centers and commercial buildings.',
    support: ['Fire alarm systems', 'Inspection & testing', 'Staff fire safety training'],
    href: '/services',
  },
  {
    id: 'offices',
    name: 'offices & workspaces',
    summary: 'Detection, extinguishers and training for offices and coworking environments.',
    support: ['Detection & alarm systems', 'Extinguisher supply & siting', 'Fire safety training'],
    href: '/services',
  },
  {
    id: 'industrial',
    name: 'warehouses & industrial',
    summary: 'Protection for storage, manufacturing and large-scale industrial facilities.',
    support: ['Fire hose reels', 'Alarm & detection systems', 'Ongoing maintenance'],
    href: '/equipments',
  },
  {
    id: 'construction',
    name: 'construction projects',
    summary: 'Site-ready extinguishers and practical training for construction teams.',
    support: ['Fire extinguishers', 'Crew fire safety training', 'First aid training'],
    href: '/services',
  },
  {
    id: 'government',
    name: 'government & public',
    summary: 'Fire protection for public buildings and government facilities.',
    support: ['Fire alarm systems', 'Emergency lighting', 'Routine inspection & testing'],
    href: '/services',
  },
];

export default function WhoWeServe() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const active = industries[activeIndex];

  const selectIndustry = (index: number) => {
    setActiveIndex(index);
  };

  const handleListKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    let nextIndex: number | null = null;

    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        nextIndex = (activeIndex + 1) % industries.length;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        nextIndex = (activeIndex - 1 + industries.length) % industries.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = industries.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    selectIndustry(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section
      aria-labelledby="industries-heading"
      className="w-full bg-white border-t border-gray-200 py-20 sm:py-24 lg:py-32"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="flex items-center justify-between gap-4">
          <p className="flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
              industries we serve
            </span>
          </p>
          <span
            aria-hidden="true"
            className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
          >
            VS / IND — 06
          </span>
        </div>

        <div className="max-w-3xl">
          <h2 id="industries-heading" className="text-section-heading mt-6 text-gray-900">
            Protection designed for your <span className="text-highlight">environment</span>.
          </h2>
          <p className="text-subheading mt-5 text-gray-600 max-w-2xl">
            Different buildings carry different risks. We help identify the right
            fire protection approach for the people, spaces and operations inside them.
          </p>
        </div>

        {/* Desktop: exploratory split */}
        <div className="mt-14 lg:mt-20 hidden lg:grid lg:grid-cols-[minmax(0,26rem)_1fr] gap-12 xl:gap-20 items-start">
          <div
            role="tablist"
            aria-label="Industries we serve"
            onKeyDown={handleListKeyDown}
            className="border-t border-gray-200 lg:sticky lg:top-24"
          >
            {industries.map((industry, index) => {
              const isActive = index === activeIndex;

              return (
                <h3 key={industry.id}>
                  <button
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    role="tab"
                    id={`industry-tab-${industry.id}`}
                    aria-selected={isActive}
                    aria-controls="industry-panel"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => selectIndustry(index)}
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
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-list-title capitalize">{industry.name}</span>
                  </button>
                </h3>
              );
            })}
          </div>

          <div
            id="industry-panel"
            role="tabpanel"
            aria-labelledby={`industry-tab-${active.id}`}
            className="border-t border-gray-200 min-w-0"
          >
            <motion.div
              key={active.id}
              initial={{ opacity: reduceMotion ? 1 : 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.35, ease: 'easeOut' }}
              className="relative pt-10 sm:pt-12 min-h-[26rem] flex flex-col"
            >
              {/* Ghost numeral — editorial depth without imagery */}
              <span
                aria-hidden="true"
                className="absolute right-0 top-6 select-none text-[7rem] leading-none font-semibold text-gray-100"
              >
                {String(activeIndex + 1).padStart(2, '0')}
              </span>

              <div className="relative flex flex-1 flex-col">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                  <p className="text-label tabular-nums text-gray-500">
                    {String(activeIndex + 1).padStart(2, '0')} / 06
                  </p>
                </div>

                <h3 className="text-card-title text-gray-900 mt-5 leading-snug capitalize">
                  {active.name}
                </h3>
                <p className="text-body text-gray-600 mt-3 max-w-xl">{active.summary}</p>

                <ul
                  className="mt-8 max-w-xl"
                  role="list"
                  aria-label={`${active.name} support points`}
                >
                  {active.support.map((item) => (
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

                <Link
                  href={active.href}
                  className="group inline-flex items-center gap-2 mt-8 text-body-sm font-semibold text-[#D62828] hover:text-[#A91D1D] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828]"
                >
                  explore protection
                  <ArrowRight
                    size={18}
                    strokeWidth={2}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile: vertical stacked selector */}
        <div className="mt-12 lg:hidden border-t border-gray-200">
          {industries.map((industry, index) => {
            const isOpen = index === activeIndex;

            return (
              <div key={industry.id} className="border-b border-gray-200">
                <h3>
                  <button
                    id={`industry-disclosure-${industry.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`industry-disclosure-panel-${industry.id}`}
                    onClick={() => selectIndustry(index)}
                    className="w-full flex items-center gap-4 py-5 pr-1 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828]"
                  >
                    <span
                      aria-hidden="true"
                      className={`shrink-0 w-8 text-index tabular-nums transition-colors duration-200 motion-reduce:transition-none ${
                        isOpen ? 'text-[#D62828]' : 'text-gray-400'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="flex-1 min-w-0 text-list-title text-gray-900 capitalize">
                      {industry.name}
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
                  id={`industry-disclosure-panel-${industry.id}`}
                  role="region"
                  aria-labelledby={`industry-disclosure-${industry.id}`}
                  hidden={!isOpen}
                  className="pb-7 pl-12 pr-1"
                >
                  <p className="text-body-sm text-gray-600">{industry.summary}</p>

                  <ul className="mt-4 space-y-2" role="list" aria-label={`${industry.name} support points`}>
                    {industry.support.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-body-sm text-gray-700">
                        <span aria-hidden="true" className="shrink-0 mt-2 h-px w-3.5 bg-[#D62828]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={industry.href}
                    className="inline-flex items-center gap-2 mt-5 text-body-sm font-semibold text-[#D62828] hover:text-[#A91D1D] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828]"
                  >
                    explore protection
                    <ArrowRight
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}