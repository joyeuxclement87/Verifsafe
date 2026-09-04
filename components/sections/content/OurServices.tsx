'use client';

import { useRef, useState, type KeyboardEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'tabler-icons-react';
import { motion, useReducedMotion } from 'framer-motion';
import { serviceCategories, type ServiceCategory } from '@/lib/services';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const categoryLinks: Record<string, { href: string; label: string }> = {
  supply: { href: '/equipments', label: 'Explore equipment solutions' },
  installation: { href: '/services', label: 'Explore installation and maintenance services' },
  inspection: { href: '/services', label: 'Explore inspection and testing services' },
  training: { href: '/services', label: 'Explore fire safety training services' },
};

const getCategoryLink = (categoryId: string) =>
  categoryLinks[categoryId] || { href: '/services', label: 'Explore this solution' };

const getCategoryCapabilities = (category: ServiceCategory) => {
  const uniqueFeatures = Array.from(
    new Set(category.services.flatMap((service) => service.features))
  );
  return uniqueFeatures.slice(0, 4);
};

export default function OurServices() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeCategory = serviceCategories[activeIndex];
  const activeCategoryImage = activeCategory.services[0]?.image;
  const activeCategoryLink = getCategoryLink(activeCategory.id);
  const activeCapabilities = getCategoryCapabilities(activeCategory);

  const selectCategory = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  const handleListKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    let nextIndex: number | null = null;

    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        nextIndex = (activeIndex + 1) % serviceCategories.length;
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        nextIndex = (activeIndex - 1 + serviceCategories.length) % serviceCategories.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = serviceCategories.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    selectCategory(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section className="w-full bg-white py-20 sm:py-24 lg:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="OUR SOLUTIONS"
          title="Protection for every stage of your building's safety."
          description="Practical fire protection solutions covering equipment, systems, inspection, maintenance, and staff readiness."
          className="mb-14"
        />

        <div className="hidden lg:grid lg:grid-cols-[minmax(0,24rem)_1fr] gap-12 lg:gap-16 xl:gap-20 items-start">
          <div
            role="tablist"
            aria-label="Fire protection solutions"
            onKeyDown={handleListKeyDown}
            className="border-t border-gray-200 lg:sticky lg:top-24"
          >
            {serviceCategories.map((category, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={category.id}
                  ref={(el) => {
                    tabRefs.current[index] = el;
                  }}
                  role="tab"
                  id={`solution-tab-${category.id}`}
                  aria-selected={isActive}
                  aria-controls="solution-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => selectCategory(index)}
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
                    className={`shrink-0 w-10 text-sm font-bold tabular-nums transition-colors duration-200 motion-reduce:transition-none ${
                      isActive ? 'text-[#D62828]' : 'text-gray-400'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="flex-1 pr-2">
                    <span className="block text-lg font-semibold tracking-tight">{category.label}</span>
                    <span className="block mt-1 text-body-sm text-gray-500">{category.description}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="solution-panel"
            role="tabpanel"
            aria-labelledby={`solution-tab-${activeCategory.id}`}
            className="border-t border-gray-200 pt-10 sm:pt-12 min-w-0"
          >
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.25, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                <p className="text-label text-gray-500">
                  {String(activeIndex + 1).padStart(2, '0')} · SOLUTION DIRECTORY
                </p>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 xl:gap-12 items-start">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">
                    {activeCategory.label}
                  </h3>
                  <p className="text-subheading text-gray-600 mt-4">{activeCategory.description}</p>

                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <p className="text-label text-gray-500 mb-4">KEY CAPABILITIES</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {activeCapabilities.map((feature) => (
                        <li key={feature} className="text-body text-gray-700 border-b border-gray-200 pb-2">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                <div className="xl:pl-4">
                  {activeCategoryImage && (
                    <div className="w-full bg-neutral overflow-hidden">
                      <Image
                        src={activeCategoryImage}
                        alt={activeCategory.label}
                        width={1200}
                        height={900}
                        sizes="(min-width: 1280px) 34vw, (min-width: 1024px) 40vw, 100vw"
                        className="h-auto w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      href={activeCategoryLink.href}
                      className="inline-flex items-center gap-2 text-base font-semibold text-[#D62828] hover:text-[#A91D1D] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828]"
                    >
                      {activeCategoryLink.label}
                      <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="lg:hidden border-t border-gray-200">
          {serviceCategories.map((category, index) => {
            const isOpen = activeIndex === index;
            const categoryLink = getCategoryLink(category.id);
            const capabilities = getCategoryCapabilities(category);
            const categoryImage = category.services[0]?.image;

            return (
              <div key={category.id} className="border-b border-gray-200">
                <button
                  id={`solution-mobile-trigger-${category.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`solution-mobile-panel-${category.id}`}
                  onClick={() => selectCategory(index)}
                  className={`w-full flex items-center gap-4 py-5 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828] ${
                    isOpen ? 'bg-[#FAF7F7]' : 'bg-white'
                  }`}
                >
                  <span
                    className={`shrink-0 w-10 text-sm font-bold tabular-nums ${
                      isOpen ? 'text-[#D62828]' : 'text-gray-400'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="flex-1">
                    <span className="block text-base font-semibold text-gray-900">{category.label}</span>
                    <span className="block mt-1 text-body-sm text-gray-500">{category.description}</span>
                  </span>

                  <ChevronDown
                    size={18}
                    strokeWidth={1.6}
                    aria-hidden="true"
                    className={`shrink-0 text-gray-400 transition-transform duration-200 motion-reduce:transition-none ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <motion.div
                    id={`solution-mobile-panel-${category.id}`}
                    role="region"
                    aria-labelledby={`solution-mobile-trigger-${category.id}`}
                    initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.2, ease: 'easeOut' }}
                    className="pb-6 pl-14 pr-1"
                  >
                    <ul className="space-y-2 mb-5">
                      {capabilities.map((feature) => (
                        <li key={feature} className="text-body-sm text-gray-700">
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {categoryImage && (
                      <div className="w-full bg-neutral overflow-hidden mb-5">
                        <Image
                          src={categoryImage}
                          alt={category.label}
                          width={1200}
                          height={750}
                          sizes="100vw"
                          className="h-auto w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}

                    <Link
                      href={categoryLink.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#D62828] hover:text-[#A91D1D] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828]"
                    >
                      {categoryLink.label}
                      <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                    </Link>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 sm:mt-20 pt-8 border-t border-gray-200 flex items-center justify-between gap-6">
          <p className="text-body-sm text-gray-500 max-w-md">
            Explore practical fire protection solutions for supply, installation, inspection, and training.
          </p>
          <Button
            href="/services"
            variant="secondary"
            className="shrink-0 self-start sm:self-auto"
          >
            Explore all solutions
          </Button>
        </div>
      </div>
    </section>
  );
}
