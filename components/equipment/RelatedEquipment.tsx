'use client';

import { ArrowRight } from 'tabler-icons-react';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';

interface RelatedEquipmentItem {
  id: string;
  title: string;
  text: string;
  href: string;
}

const equipment: RelatedEquipmentItem[] = [
  {
    id: 'fire-extinguishers',
    title: 'Fire Extinguishers',
    text: 'Portable protection for a range of fire risks.',
    href: '/equipments/fire-extinguishers',
  },
  {
    id: 'fire-alarm-systems',
    title: 'Fire Alarm Systems',
    text: 'Detection and alarm solutions for buildings.',
    href: '/equipments/fire-alarm-systems',
  },
  {
    id: 'fire-hose-reels',
    title: 'Fire Hose Reels',
    text: 'Continuous water supply for larger fires.',
    href: '/equipments/fire-hose-reels',
  },
  {
    id: 'fire-detection-devices',
    title: 'Fire Detection Devices',
    text: 'Devices that help identify fire risks early.',
    href: '/equipments/fire-detection-devices',
  },
  {
    id: 'emergency-lights',
    title: 'Emergency Lights & Exit Signs',
    text: 'Guidance that works when normal lighting fails.',
    href: '/equipments/emergency-lights',
  },
  {
    id: 'fire-safety-accessories',
    title: 'Fire Safety Accessories',
    text: 'Cabinets, blankets and signage that complete the setup.',
    href: '/equipments/fire-safety-accessories',
  },
];

interface RelatedEquipmentProps {
  excludeId?: string;
  code?: string;
}

export default function RelatedEquipment({
  excludeId,
  code = 'VS / NAV — 05',
}: RelatedEquipmentProps) {
  const items = equipment.filter((item) => item.id !== excludeId);

  return (
    <section
      aria-labelledby="related-equipment-heading"
      className="w-full bg-neutral border-t border-gray-200 py-16 sm:py-20"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealGroup stagger={0.08} delayChildren={0.05}>
          <RevealItem variant="up-sm">
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
                {code}
              </span>
            </div>
          </RevealItem>

          <RevealItem>
            <div className="max-w-3xl mt-6">
              <h2 id="related-equipment-heading" className="text-section-heading text-gray-900">
                explore more fire protection <span className="text-highlight">equipment</span>.
              </h2>
            </div>
          </RevealItem>
        </RevealGroup>

        <RevealGroup stagger={0.05} className="mt-8 border-t border-gray-200">
          {items.map((item) => (
            <RevealItem key={item.id} variant="up-sm">
              <a
                href={item.href}
                className="group flex items-center gap-4 sm:gap-6 py-4 sm:py-5 border-b border-gray-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D62828]"
              >
                <h3 className="text-list-title text-gray-900 transition-colors duration-200 group-hover:text-[#D62828] motion-reduce:transition-none">
                  {item.title}
                </h3>
                <span className="hidden sm:block flex-1 text-body-sm text-gray-500 leading-relaxed">
                  {item.text}
                </span>
                <ArrowRight
                  size={16}
                  strokeWidth={2}
                  aria-hidden="true"
                  className="shrink-0 text-gray-400 transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#D62828] motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
                />
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}