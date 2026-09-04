'use client';

import Link from 'next/link';
import { ArrowRight } from 'tabler-icons-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const journey = [
  {
    number: '01',
    title: 'Assess',
    description: 'We start by understanding your fire safety needs through site assessment and requirements analysis.',
    details: 'Site audit · Requirements analysis · Compliance checks',
    href: '/contact#contact-form'
  },
  {
    number: '02',
    title: 'Equip',
    description: 'We supply certified fire protection equipment matched to your building and its fire risk.',
    details: 'Extinguishers · Alarm systems · Detection devices · Hose reels',
    href: '/equipments'
  },
  {
    number: '03',
    title: 'Install',
    description: 'We install and configure fire alarm systems, detection devices, and safety equipment to perform when needed.',
    details: 'Fire alarm systems · Detection devices · Safety equipment',
    href: '/services'
  },
  {
    number: '04',
    title: 'Maintain',
    description: 'We inspect, service, and refill equipment so your protection stays reliable over time.',
    details: 'Inspections · Servicing · Extinguisher refilling',
    href: '/services'
  }
];

export default function FireSafetyApproach() {
  return (
    <section id="fire-safety-approach" className="w-full bg-neutral py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl">
          {/* Introduction */}
          <div>
            <SectionHeading
              label="HOW WE PROTECT"
              title="Fire safety is not a one-time installation."
              description="Real protection comes from planning, the right equipment, professional installation, and consistent maintenance. Verifsafe manages the full journey so your building stays protected long after handover."
              className="mb-10"
            />
          </div>

          {/* Protection Journey */}
          <div>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 border-t border-gray-200">
              {journey.map((step) => (
                <li
                  key={step.number}
                  className="group relative border-b border-gray-200 transition-colors duration-200 hover:bg-gray-50/80 group-focus-within:bg-gray-50/80"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 inset-y-0 w-0.5 bg-[#D62828] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none"
                  />
                  <Link
                    href={step.href}
                    className="block pl-5 sm:pl-8 pr-3 py-8 sm:py-10 rounded-r-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828]"
                  >
                    <div className="flex items-start gap-5 sm:gap-8">
                      <span className="shrink-0 w-10 pt-0.5 text-lg font-bold text-gray-400 tabular-nums transition-colors duration-200 group-hover:text-[#D62828] group-focus-within:text-[#D62828]">
                        {step.number}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-card-title text-gray-900 mb-1.5">
                          {step.title}
                        </h3>
                        <p className="text-body text-gray-600">{step.description}</p>
                        <p className="mt-2 text-sm text-gray-400 transition-colors duration-200 group-hover:text-gray-600 group-focus-within:text-gray-600">
                          {step.details}
                        </p>
                      </div>
                      <ArrowRight
                        size={18}
                        strokeWidth={1.5}
                        aria-hidden="true"
                        className="shrink-0 mt-1 text-gray-300 transition-all duration-200 group-hover:text-[#D62828] group-focus-within:text-[#D62828] group-hover:translate-x-1 group-focus-within:translate-x-1 motion-reduce:transition-none"
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ol>

            <div className="mt-10 flex justify-start md:justify-end">
              <Button href="/services" variant="secondary">
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}