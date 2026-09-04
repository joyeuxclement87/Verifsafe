'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'tabler-icons-react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const equipment = [
  {
    slug: 'fire-extinguishers',
    image: '/equipment-1.png',
    title: 'Fire Extinguishers',
    description: 'Portable firefighting equipment for controlling small fires before they spread.',
    features: ['CO₂, Powder, Foam, Water', 'Wall-mounted & trolley units', 'BS EN 3 certified'],
  },
  {
    slug: 'fire-alarm-systems',
    image: '/equipment-2.png',
    title: 'Fire Alarm Systems',
    description: 'Detection and alert systems that give occupants critical evacuation time.',
    features: ['Conventional & addressable', 'Smoke, heat, multi-sensor', 'BS 5839 compliant'],
  },
  {
    slug: 'fire-hose-reels',
    image: '/equipment-3.png',
    title: 'Fire Hose Reels',
    description: 'Fixed firefighting equipment providing continuous water supply for trained personnel.',
    features: ['Swinging & fixed mounting', '30m semi-rigid hose', 'BS EN 671 certified'],
  },
  {
    slug: 'emergency-lighting',
    image: '/equipment-4.png',
    title: 'Emergency Lighting',
    description: 'Illuminated escape routes and exit signs that operate during power failure.',
    features: ['Maintained & non-maintained', 'Self-test & DALI options', 'BS 5266 compliant'],
  },
  {
    slug: 'fire-safety-signs',
    image: '/equipment-5.png',
    title: 'Fire Safety Signs',
    description: 'Photoluminescent and illuminated signage for clear evacuation guidance.',
    features: ['Escape route & exit signs', 'Extinguisher ID signs', 'ISO 7010 / BS 5499'],
  },
  {
    slug: 'first-aid-equipment',
    image: '/equipment-6.png',
    title: 'First Aid Equipment',
    description: 'Workplace first aid kits and supplies for immediate emergency response.',
    features: ['BS 8599 compliant kits', 'Burns & eyewash stations', 'Refill packs available'],
  },
];

export default function OurEquipment() {
  return (
    <section className="w-full bg-white py-20 sm:py-24 lg:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="OUR EQUIPMENT"
          title="Certified equipment for frontline response."
          description="Core fire safety equipment categories — selected for practical deployment, long-term reliability, and regulatory compliance."
          className="mb-14 sm:mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 xl:gap-12">
          {equipment.slice(0, 3).map((item, index) => (
            <motion.article
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              className="group relative flex flex-col overflow-hidden bg-white transition-colors duration-200 hover:bg-gray-50/80 group-focus-within:bg-gray-50/80"
            >
              <Link
                href={`/equipments/${item.slug}`}
                className="relative flex flex-col flex-1 p-5 sm:p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828] rounded-r-lg"
                aria-label={`View ${item.title} details`}
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#D62828] scale-x-0 origin-center transition-transform duration-300 group-hover:scale-x-100 group-focus-within:scale-x-100 motion-reduce:transition-none"
                />
                <div className="relative aspect-[4/3] bg-neutral overflow-hidden mb-5 sm:mb-6 -mx-5 sm:-mx-6 -mt-5 sm:-mt-6 mb-5 sm:mb-6 rounded-t-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />
                </div>

                <h3 className="text-card-title text-gray-900 tracking-tight transition-colors duration-200 group-hover:text-[#D62828] group-focus-within:text-[#D62828]">
                  {item.title}
                </h3>

                <p className="text-body text-gray-600 mt-3 flex-1">{item.description}</p>

                <ul className="mt-4 space-y-2 border-t border-gray-200 pt-4" role="list" aria-label={`${item.title} key features`}>
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-body-sm text-gray-700 transition-colors duration-200 group-hover:text-gray-600 group-focus-within:text-gray-600">
                      <span
                        className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#D62828]"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <span className="inline-flex items-center gap-2 font-semibold text-[#D62828] hover:text-[#A91D1D] transition-colors duration-200 group-hover:translate-x-1 group-focus-within:translate-x-1 motion-reduce:transition-none">
                    View specifications
                    <ArrowRight
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1 group-focus-within:translate-x-1 motion-reduce:transition-none"
                    />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 sm:mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-body-sm text-gray-600 max-w-xl">
            All equipment is sourced from certified manufacturers and meets current British and European standards.
          </p>
          <Button
            href="/equipments"
            variant="secondary"
            className="shrink-0 self-start sm:self-auto"
          >
            Explore all equipment
          </Button>
        </div>
      </div>
    </section>
  );
}