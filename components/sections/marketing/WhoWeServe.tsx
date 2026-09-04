'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'tabler-icons-react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';

interface IndustryLink {
  href: string;
  label: string;
}

interface Industry {
  id: string;
  name: string;
  descriptor: string;
  summary: string;
  support: string[];
  link: IndustryLink;
}

const industries: Industry[] = [
  {
    id: 'residential',
    name: 'Residential Buildings',
    descriptor: 'Apartments · Condominiums · Housing complexes',
    summary:
      'Multi-unit housing depends on dependable early detection, working extinguishers, and illuminated escape routes. We supply, install, and maintain the core systems that keep residents protected.',
    support: [
      'Fire alarm & detection system installation',
      'Certified extinguishers & emergency lighting',
      'Scheduled maintenance & extinguisher refilling',
    ],
    link: { href: '/equipments', label: 'Explore fire safety equipment' },
  },
  {
    id: 'commercial',
    name: 'Commercial Properties',
    descriptor: 'Retail spaces · Shopping centers · Commercial buildings',
    summary:
      'High occupant loads and complex layouts mean protection must be verified, not assumed. We keep systems compliant through routine inspection and testing, backed by certified equipment and staff training.',
    support: [
      'Fire alarm system supply & installation',
      'Routine inspection & testing for compliance',
      'Fire safety awareness training for staff',
    ],
    link: { href: '/services', label: 'Explore inspection & testing services' },
  },
  {
    id: 'offices',
    name: 'Offices & Workspaces',
    descriptor: 'Corporate offices · Coworking spaces · Business centers',
    summary:
      'Workplaces need reliable equipment and people who know how to respond. We pair compliant installations with practical fire safety and first aid training for your team.',
    support: [
      'Inspection & testing for businesses and offices',
      'Fire safety awareness & first aid training',
      'Extinguisher supply, siting & refilling',
    ],
    link: { href: '/services', label: 'Explore our services' },
  },
  {
    id: 'industrial',
    name: 'Warehouses & Industrial',
    descriptor: 'Storage facilities · Manufacturing plants · Industrial complexes',
    summary:
      'Large floor areas concentrate valuable stock and machinery, so coverage and upkeep matter. From hose reels and extinguishers to alarm systems and ongoing maintenance, we keep protection ready.',
    support: [
      'Hose reels & extinguishers for large areas',
      'Alarm & detection device installation',
      'Ongoing maintenance programs',
    ],
    link: { href: '/equipments', label: 'Explore fire safety equipment' },
  },
  {
    id: 'construction',
    name: 'Construction Projects',
    descriptor: 'Building sites · Infrastructure projects · Construction zones',
    summary:
      'Sites change quickly, and safety provision needs to keep pace. We equip site teams with the right extinguishers and the practical training to use them when it counts.',
    support: [
      'Fire extinguisher supply for site coverage',
      'Fire safety awareness training for crews',
      'First aid training for site personnel',
    ],
    link: { href: '/services', label: 'Explore training services' },
  },
  {
    id: 'government',
    name: 'Government & Public',
    descriptor: 'Public buildings · Institutions · Government facilities',
    summary:
      'Public buildings face strict requirements and heavy daily use. We deliver certified systems and documented servicing schedules that stand up to scrutiny over time.',
    support: [
      'Alarm systems & emergency lighting',
      'Routine inspection & testing',
      'Long-term maintenance programs',
    ],
    link: { href: '/services', label: 'Explore our services' },
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
    <section className="w-full bg-neutral py-20 sm:py-24 lg:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="INDUSTRIES WE SERVE"
          title="Protection designed for your environment."
          description="Different environments carry different fire risks. Select your type of building to see how Verifsafe adapts equipment, systems, inspection, and training to it."
          className="mb-14 sm:mb-16"
        />

        {/* Desktop: industry explorer */}
        <div className="hidden lg:grid lg:grid-cols-[minmax(0,24rem)_1fr] gap-12 xl:gap-20 items-start">
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
                    className={`group relative w-full flex items-start gap-5 py-5 sm:py-6 px-2 text-left border-b border-gray-200 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828] ${
                      isActive ? 'bg-[#FAF7F7] text-gray-900' : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 inset-y-0 w-0.5 bg-[#D62828] transition-opacity duration-200 motion-reduce:transition-none ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    />

                    <span
                      className={`shrink-0 w-8 pt-0.5 text-sm font-bold tabular-nums transition-colors duration-200 motion-reduce:transition-none ${
                        isActive ? 'text-[#D62828]' : 'text-gray-400'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="flex-1 min-w-0">
                      <span className="block font-semibold tracking-tight">
                        {industry.name}
                      </span>
                      <span className="block mt-1 text-body-sm text-gray-500">
                        {industry.descriptor}
                      </span>
                    </span>
                  </button>
                </h3>
              );
            })}
          </div>

          <div
            id="industry-panel"
            role="tabpanel"
            aria-labelledby={`industry-tab-${active.id}`}
            className="border-t border-gray-200 pt-10 sm:pt-12 min-w-0 lg:min-h-[26rem]"
          >
            <motion.div
              key={active.id}
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.25, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                <p className="text-label text-gray-500">
                  {String(activeIndex + 1).padStart(2, '0')} · {active.name.toUpperCase()}
                </p>
              </div>

              <p className="text-subheading text-gray-600 max-w-2xl">{active.summary}</p>

              <div className="mt-10 max-w-xl">
                <p className="text-label text-gray-500 mb-4">WHAT WE CAN SUPPORT</p>
                <ul>
                  {active.support.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 py-3 border-b border-gray-200 text-body text-gray-700"
                    >
                      <span
                        aria-hidden="true"
                        className="shrink-0 mt-2.5 h-px w-4 bg-[#D62828]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={active.link.href}
                  className="group inline-flex items-center gap-2 mt-8 text-base font-semibold text-[#D62828] hover:text-[#A91D1D] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828]"
                >
                  {active.link.label}
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

        {/* Mobile: vertical disclosure */}
        <div className="lg:hidden border-t border-gray-200">
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
                    className={`w-full flex items-start gap-4 py-5 pr-1 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828] ${
                      isOpen ? 'bg-[#FAF7F7]' : ''
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`shrink-0 w-8 pt-0.5 text-sm font-bold tabular-nums transition-colors duration-200 ${
                        isOpen ? 'text-[#D62828]' : 'text-gray-400'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="flex-1 min-w-0">
                      <span className="block text-base sm:text-lg font-semibold tracking-tight text-gray-900">
                        {industry.name}
                      </span>
                      <span className="block mt-1 text-body-sm text-gray-500">
                        {industry.descriptor}
                      </span>
                    </span>

                    {/* Open/close indicator: rotates; not color-only */}
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
                  className="pl-12 pr-1 pb-6"
                >
                  <p className="text-body-sm text-gray-600">{industry.summary}</p>

                  <p className="text-label text-gray-500 mt-5 mb-3">WHAT WE CAN SUPPORT</p>
                  <ul className="space-y-2">
                    {industry.support.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-body-sm text-gray-700">
                        <span aria-hidden="true" className="shrink-0 mt-2 h-px w-3.5 bg-[#D62828]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={industry.link.href}
                    className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-[#D62828] hover:text-[#A91D1D] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828]"
                  >
                    {industry.link.label}
                    <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
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
