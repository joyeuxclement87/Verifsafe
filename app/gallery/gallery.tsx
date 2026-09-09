'use client';

import Image from 'next/image';
import { useCallback, useState, useRef, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, AlertTriangle, Refresh } from 'tabler-icons-react';
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';

export type GalleryItem = {
  id: string;
  title: string;
  label: string;
  category: string;
  image: string;
  imageWidth?: number | null;
  imageHeight?: number | null;
};

export default function GalleryShowcase({
  initialItems,
  fetchFailed = false,
}: {
  initialItems: GalleryItem[];
  fetchFailed?: boolean;
}) {
  const [galleryItems] = useState<GalleryItem[]>(initialItems);
  const [activeCategory, setActiveCategory] = useState('All');
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);

  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroParallax = useTransform(heroProgress, [0, 1], [0, '14%']);
  const heroFade = useTransform(heroProgress, [0, 0.8], [1, 0.15]);

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = useCallback(
    (index: number) => {
      setCurrentImageIndex(index);
      setLightboxOpen(true);
    },
    []
  );

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === filteredItems.length - 1 ? 0 : prev + 1
    );
  }, [filteredItems.length]);

  const handlePrev = useCallback(() => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  }, [filteredItems.length]);

  useEffect(() => {
    const cats = Array.from(
      new Set(galleryItems.map((item) => item.category))
    )
      .filter(Boolean)
      .sort();
    setAvailableCategories(cats);
  }, [galleryItems]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen, closeLightbox, handleNext, handlePrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;
    const distance = touchStartRef.current - touchEndRef.current;
    if (distance > 50) handleNext();
    if (distance < -50) handlePrev();
    touchStartRef.current = 0;
    touchEndRef.current = 0;
  };

  const isEmptyState = !fetchFailed && galleryItems.length === 0;

  return (
    <main className="w-full">
      {/* Hero */}
      <section
        ref={heroRef}
        aria-labelledby="gallery-h1"
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: '#0B1720' }}
      >
        <div className="absolute inset-0 bg-[#0B1720]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1720]/95 via-[#0B1720]/80 to-[#123B5D]/40" />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        <motion.div
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          style={reduceMotion ? undefined : { y: heroParallax, opacity: heroFade }}
        >
          <div className="flex flex-col items-start justify-center min-h-[400px] lg:min-h-[520px] pt-24 pb-20 sm:pt-28 sm:pb-24">
            <RevealGroup stagger={0.08} delayChildren={0.05}>
              <RevealItem variant="up-sm">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#E53935]">
                  our work
                </p>
              </RevealItem>

              <RevealItem>
                <h1
                  id="gallery-h1"
                  className="text-hero-heading leading-[1.05] text-[#F4F3EF]"
                >
                  protection you can see.
                </h1>
              </RevealItem>

              <RevealItem variant="up-sm">
                <p className="text-subheading mt-5 max-w-lg text-[#A7B0B5] leading-relaxed">
                  Explore selected equipment, installations and safety solutions
                  delivered by VerifSafe.
                </p>
              </RevealItem>
            </RevealGroup>
          </div>
        </motion.div>

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ backgroundColor: 'rgba(167, 176, 181, 0.1)' }}
        />
      </section>

      {/* Gallery */}
      <section className="w-full bg-paper py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter — only shown when categories exist */}
          {!fetchFailed && availableCategories.length > 0 && (
            <motion.div
              initial={{ opacity: reduceMotion ? 1 : 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-2 mb-12 sm:mb-16"
            >
              <button
                onClick={() => setActiveCategory('All')}
                className={`px-5 py-2 text-[0.8125rem] font-semibold tracking-[0.02em] rounded-[8px] border transition-all duration-200 ${
                  activeCategory === 'All'
                    ? 'bg-ink text-white border-ink'
                    : 'bg-white text-ink-soft border-line hover:border-ink/30 hover:text-ink'
                }`}
              >
                All
              </button>
              {availableCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 text-[0.8125rem] font-semibold tracking-[0.02em] rounded-[8px] border transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-ink text-white border-ink'
                      : 'bg-white text-ink-soft border-line hover:border-ink/30 hover:text-ink'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          )}

          {/* Error State */}
          {fetchFailed && (
            <div className="flex w-full flex-col items-center gap-4 py-20 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-muted">
                <AlertTriangle size={24} aria-hidden="true" />
              </span>
              <div className="space-y-2">
                <h2 className="text-[1.125rem] font-semibold tracking-tight text-ink">
                  We couldn&apos;t load our projects
                </h2>
                <p className="mx-auto max-w-md text-body text-muted">
                  Something went wrong while fetching the gallery. This is usually
                  temporary — please try again, or contact us directly if it keeps happening.
                </p>
              </div>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
                <Button
                  onClick={() => window.location.reload()}
                  icon={<Refresh size={16} aria-hidden="true" />}
                >
                  Try again
                </Button>
                <Button variant="secondary" href="/contact">
                  Contact us
                </Button>
              </div>
            </div>
          )}

          {/* Empty State */}
          {isEmptyState && (
            <div className="w-full py-24 text-center">
              <p className="text-muted text-body">
                projects will appear here soon.
              </p>
            </div>
          )}

          {/* Filtered empty state */}
          {!fetchFailed && galleryItems.length > 0 && filteredItems.length === 0 && (
            <div className="w-full py-24 text-center">
              <p className="text-muted text-body">
                No projects found for this category.
              </p>
            </div>
          )}

          {/* Masonry Grid */}
          {!fetchFailed && filteredItems.length > 0 && (
            <motion.div
              layout
              className="columns-1 sm:columns-2 lg:columns-3 gap-5 sm:gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.35,
                      delay: reduceMotion ? 0 : index * 0.04,
                    }}
                    onClick={() => openLightbox(index)}
                    className="break-inside-avoid mb-5 sm:mb-6 group relative bg-white overflow-hidden cursor-pointer"
                  >
                    <div className="relative w-full bg-neutral overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.label || item.title}
                        width={item.imageWidth ?? 800}
                        height={item.imageHeight ?? 600}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                        loading={index < 3 ? 'eager' : 'lazy'}
                      />
                    </div>
                    {/* Hover Label — only if real label data exists */}
                    {item.label && (
                      <div className="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-label text-white/70 block mb-1">
                          {item.label}
                        </span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && filteredItems[currentImageIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            {/* Backdrop click to close */}
            <div
              className="absolute inset-0"
              onClick={closeLightbox}
              aria-hidden="true"
            />

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>

            {/* Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="hidden sm:flex absolute left-4 sm:left-6 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="hidden sm:flex absolute right-4 sm:right-6 z-50 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Container */}
            <div
              className="relative w-full max-w-5xl mx-auto px-12 sm:px-20 pointer-events-none"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div
                key={currentImageIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative w-full pointer-events-auto"
              >
                <Image
                  src={filteredItems[currentImageIndex].image}
                  alt={filteredItems[currentImageIndex].title}
                  width={1600}
                  height={1000}
                  className="w-full h-auto max-h-[80vh] object-contain"
                  sizes="100vw"
                />
              </motion.div>

              {/* Caption */}
              {(filteredItems[currentImageIndex].title ||
                filteredItems[currentImageIndex].label) && (
                <div className="mt-4 text-center pointer-events-none">
                  {filteredItems[currentImageIndex].label && (
                    <span className="text-label text-white/50 block mb-1.5">
                      {filteredItems[currentImageIndex].label}
                    </span>
                  )}
                  {filteredItems[currentImageIndex].title && (
                    <h3 className="text-card-title text-white">
                      {filteredItems[currentImageIndex].title}
                    </h3>
                  )}
                </div>
              )}
            </div>

            {/* Counter */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-[0.75rem] font-semibold tracking-[0.15em] text-white/40 tabular-nums">
              {currentImageIndex + 1} / {filteredItems.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="relative w-full overflow-hidden bg-cta-red" aria-labelledby="gallery-cta-heading">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            opacity: 0.04,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-px"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-36">
          <RevealGroup stagger={0.08} delayChildren={0.05} className="max-w-3xl">
            <RevealItem variant="up-sm">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-[#E53935]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A7B0B5]">
                  need a safety solution?
                </span>
              </div>
            </RevealItem>

            <RevealItem>
              <h2
                id="gallery-cta-heading"
                className="text-section-heading text-[#F4F3EF] mt-6"
              >
                let&apos;s talk about your project.
              </h2>
            </RevealItem>

            <RevealItem variant="up-sm">
              <p className="text-subheading text-[#A7B0B5] mt-5 max-w-xl leading-relaxed">
                Tell us what your building, workplace or project needs and
                we&apos;ll help you find the right equipment or safety solution.
              </p>
            </RevealItem>

            <RevealItem variant="up-sm">
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
                  className="w-full sm:w-auto !rounded-lg !h-12 !px-8 !bg-[#E53935] hover:!bg-[#C62828] !shadow-[0_10px_24px_-10px_rgba(229,57,53,0.5)] !text-white font-semibold"
                >
                  Request a Quote
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto !rounded-lg !h-12 !px-8 !bg-transparent !border-white/25 !text-[#F4F3EF] hover:!border-white/60 hover:!bg-white/5 !shadow-none font-semibold"
                >
                  Contact Our Team
                </Button>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        />
      </section>
    </main>
  );
}