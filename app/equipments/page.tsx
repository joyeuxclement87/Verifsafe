'use client';

import { useRef } from 'react';
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
  Phone,
} from 'tabler-icons-react';
import Button from '@/components/ui/Button';

type CtaKind = 'enquiry' | 'navigation';

interface ProductType {
  title: string;
  tag?: string;
}

interface Category {
  id: string;
  number: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  href: string;
  linkLabel: string;
  ctaKind: CtaKind;
  products: ProductType[];
}

const categories: Category[] = [
  {
    id: 'fire-extinguishers',
    number: '01',
    title: 'Fire Extinguishers',
    intro:
      'Portable firefighting equipment designed to control small fires and protect lives before professional help arrives.',
    image: '/fire-extinguisher-guide.png',
    imageAlt: 'Fire extinguisher for commercial fire protection',
    href: '/equipments/fire-extinguishers',
    linkLabel: 'explore fire extinguishers',
    ctaKind: 'navigation',
    products: [
      { title: 'Water Extinguishers', tag: 'Class A' },
      { title: 'Foam Extinguishers', tag: 'Classes A · B' },
      { title: 'Dry Powder', tag: 'Classes A · B · C · E' },
      { title: 'CO₂ Extinguishers', tag: 'Classes B · E' },
      { title: 'Wet Chemical', tag: 'Classes A · F' },
    ],
  },
  {
    id: 'fire-alarm-systems',
    number: '02',
    title: 'Fire Alarm Systems',
    intro:
      'Detection and alarm solutions that help buildings identify and respond to fire quickly, with clear evacuation alerts.',
    image: '/fire-alarm-chain.png',
    imageAlt: 'Fire alarm control panel and fire alarm systems',
    href: '/equipments/fire-alarm-systems',
    linkLabel: 'explore fire alarm systems',
    ctaKind: 'navigation',
    products: [
      { title: 'Conventional Systems' },
      { title: 'Addressable Systems' },
      { title: 'Wireless Systems' },
    ],
  },
  {
    id: 'fire-hose-reels',
    number: '03',
    title: 'Fire Hose Reels',
    intro:
      'High-pressure water delivery systems that provide a continuous supply of water for larger fires in suitable environments.',
    image: '/fire-hose-guide.png',
    imageAlt: 'Fire hose reel installation for emergency and commercial use',
    href: '/equipments/fire-hose-reels',
    linkLabel: 'explore fire hose reels',
    ctaKind: 'navigation',
    products: [
      { title: 'Fixed Hose Reels' },
      { title: 'Swinging Hose Reels' },
      { title: 'Automatic Hose Reels' },
    ],
  },
  {
    id: 'fire-detection-devices',
    number: '04',
    title: 'Fire Detection Devices',
    intro:
      'Precision smoke, heat and flame sensors that identify fire risks at the earliest possible stage and report to the system.',
    image: '/fire-detection-guide.png',
    imageAlt: 'Fire detection and smoke detection devices',
    href: '/equipments/fire-detection-devices',
    linkLabel: 'explore fire detection devices',
    ctaKind: 'navigation',
    products: [
      { title: 'Optical Smoke Detectors' },
      { title: 'Heat Detectors' },
      { title: 'Multi-Sensor Detectors' },
    ],
  },
  {
    id: 'emergency-lights',
    number: '05',
    title: 'Emergency Lights & Exit Signs',
    intro:
      'Reliable backup illumination and exit signage that guide occupants safely during power failures.',
    image: '/emergency-light-guide.png',
    imageAlt: 'Emergency exit light and illuminated exit sign',
    href: '/equipments/emergency-lights',
    linkLabel: 'explore emergency lights',
    ctaKind: 'navigation',
    products: [
      { title: 'Non-Maintained Units' },
      { title: 'Maintained Units' },
      { title: 'Maintained Exit Signs' },
    ],
  },
  {
    id: 'fire-safety-accessories',
    number: '06',
    title: 'Fire Safety Accessories',
    intro:
      'Essential hardware including cabinets, blankets and signage that support your wider fire safety infrastructure.',
    image: '/fire-safety-accessories-guide.png',
    imageAlt: 'Fire safety accessories and equipment cabinets',
    href: '/equipments/fire-safety-accessories',
    linkLabel: 'explore fire safety accessories',
    ctaKind: 'navigation',
    products: [
      { title: 'Cabinets & Stands' },
      { title: 'Fire Blankets' },
      { title: 'Mandatory Signage' },
    ],
  },
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
  '@type': 'ItemList',
  name: 'Fire Protection Equipment',
  description:
    'Fire safety equipment supplied by VerifSafe for residential, commercial, industrial and other building environments across Rwanda.',
  itemListElement: categories.map((category, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: category.title,
    url: `https://verifsafe.com${category.href}`,
  })),
};

function CategoryLink({ category }: { category: Category }) {
  const isEnquiry = category.ctaKind === 'enquiry';
  return (
    <Link
      href={category.href}
      className="group inline-flex items-center gap-2 mt-8 text-body-sm font-semibold text-[#D62828] hover:text-[#A91D1D] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828]"
    >
      {category.linkLabel}
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

function ProductRow({ product }: { product: ProductType }) {
  return (
    <li className="flex items-baseline justify-between gap-4 py-3 border-t border-gray-200">
      <span className="text-body-sm text-gray-700 font-medium">{product.title}</span>
      {product.tag && (
        <span className="shrink-0 text-xs font-semibold text-[#D62828] tracking-wide">
          {product.tag}
        </span>
      )}
    </li>
  );
}

export default function EquipmentsPage() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroParallax = useTransform(scrollYProgress, [0, 1], [0, '14%']);
  const heroFade = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);

  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        aria-labelledby="equipment-h1"
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
              00 / 06
            </span>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#E53935]">
              fire protection equipment
            </p>

            <h1
              id="equipment-h1"
              className="text-hero-heading leading-[1.05] text-[#F4F3EF]"
            >
              equipment designed for <span className="text-highlight-dark">protection</span>.
            </h1>

            <p className="text-subheading mt-5 max-w-xl text-[#A7B0B5] leading-relaxed">
              Explore fire safety equipment supplied for residential, commercial, industrial
              and other building environments.
            </p>

            <div className="mt-8">
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
                className="!rounded-lg !h-12 !px-7 !bg-[#E53935] hover:!bg-[#C62828] !shadow-[0_10px_24px_-10px_rgba(229,57,53,0.5)] font-semibold"
              >
                Request a Quote
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

      {/* ── Category navigation ──────────────────────────────────── */}
      <nav
        aria-label="Equipment categories"
        className="w-full sticky top-0 z-30 border-b border-gray-200 bg-white/95 backdrop-blur"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex gap-7 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden touch-auto">
            {categories.map((category) => (
              <li key={category.id} className="shrink-0">
                <a
                  href={`#${category.id}`}
                  className="group inline-flex items-center gap-2 py-1 text-body-sm font-semibold text-gray-500 hover:text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828]"
                >
                  <span aria-hidden="true" className="text-index tabular-nums text-gray-400 transition-colors group-hover:text-[#D62828]">
                    {category.number}
                  </span>
                  <span className="whitespace-nowrap">{category.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── Catalogue intro ──────────────────────────────────────── */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <p className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                the equipment
              </span>
            </p>
            <span
              aria-hidden="true"
              className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
            >
              VS / EQ — 06
            </span>
          </div>

          <div className="max-w-3xl mt-6">
            <h2 className="text-section-heading text-gray-900">
              Six categories of fire protection equipment.
            </h2>
            <p className="text-subheading mt-5 text-gray-600 max-w-2xl">
              From portable extinguishers and alarm systems to hose reels, detection devices,
              emergency lighting and supporting accessories. Select a category to see the
              equipment within it.
            </p>
          </div>
        </div>
      </section>

      {/* ── Category sections ────────────────────────────────────── */}
      {categories.map((category, index) => {
        const reversed = index % 2 === 1;
        const sectionBg = reversed ? 'bg-neutral' : 'bg-white';

        return (
          <section
            key={category.id}
            id={category.id}
            aria-labelledby={`${category.id}-heading`}
            className={`relative w-full overflow-hidden scroll-mt-20 ${sectionBg} ${
              index === 0 ? 'border-t border-gray-200' : ''
            } py-20 sm:py-24 lg:py-28`}
          >
            {reversed && (
              <motion.div
                aria-hidden="true"
                className="absolute -inset-y-24 inset-x-0 pointer-events-none"
                style={paperGridStyle}
              />
            )}

            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  reversed ? '' : ''
                }`}
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className={`relative lg:col-span-7 ${reversed ? 'lg:order-2' : ''}`}
                >
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-black/10 bg-gray-100">
                    <Image
                      src={category.image}
                      alt={category.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 92vw, 58vw"
                      priority={index === 0}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                  </div>
                </motion.div>

                {/* Panel */}
                <motion.div
                  initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className={`lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-index tabular-nums text-[#D62828]">
                      {category.number}
                    </span>
                    <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                  </div>

                  <h2
                    id={`${category.id}-heading`}
                    className="text-section-heading text-gray-900 mt-4"
                  >
                    {category.title}
                  </h2>

                  <p className="text-body text-gray-600 mt-4 leading-relaxed">
                    {category.intro}
                  </p>

                  <ul className="mt-6" role="list" aria-label={`${category.title} types`}>
                    {category.products.map((product) => (
                      <ProductRow key={product.title} product={product} />
                    ))}
                    <li aria-hidden="true" className="border-t border-gray-200" />
                  </ul>

                  <CategoryLink category={category} />
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── CTA between content ──────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: '#1a2332' }}
        aria-labelledby="equipment-cta-heading"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 55% at 50% 45%, rgba(30,41,59,0.55) 0%, rgba(26,35,50,0) 70%)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={blueGridStyle}
        />
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-px"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
          <motion.div
            initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-[#E53935]" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A7B0B5]">
                not sure where to start
              </p>
            </div>

            <h2
              id="equipment-cta-heading"
              className="text-section-heading text-[#F4F3EF] mt-6"
            >
              need help choosing the right equipment?
            </h2>

            <p className="text-subheading text-[#A7B0B5] mt-5 max-w-xl leading-relaxed">
              Tell us about your building or project and our team can help you identify suitable
              fire protection equipment.
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
                className="w-full sm:w-auto !rounded-lg !h-12 !px-8 !bg-[#E53935] hover:!bg-[#C62828] !shadow-[0_10px_24px_-10px_rgba(229,57,53,0.5)] font-semibold"
              >
                Request a Quote
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                icon={<Phone size={18} strokeWidth={2} />}
                className="w-full sm:w-auto !rounded-lg !h-12 !px-8 !bg-transparent !border-white/25 !text-[#F4F3EF] hover:!border-white/60 hover:!bg-white/5 !shadow-none font-semibold"
              >
                Talk to Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}