'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { ChevronLeft, ChevronRight, PlayerPause, PlayerPlay } from 'tabler-icons-react';

const slides = [
  {
    id: 1,
    eyebrow: 'fire protection · Rwanda',
    headline: 'Fire protection, verified.',
    highlight: 'verified',
    headlineTag: 'h1',
    description:
      'Reliable fire safety equipment, installation, inspection and maintenance for buildings across Rwanda.',
    cta: { label: 'Request a quote', href: '/contact#contact-form' },
    secondaryCta: { label: 'Explore solutions', href: '/equipments' },
    image: '/hero2.jpg',
    alt: 'Fire safety equipment and protection systems installed in a commercial building in Rwanda',
  },
  {
    id: 2,
    eyebrow: 'fire detection systems',
    headline: 'Detect it before it spreads.',
    highlight: 'spreads',
    headlineTag: 'h2',
    description:
      'Professional fire detection and alarm systems designed to help buildings respond faster.',
    cta: { label: 'Explore fire alarm systems', href: '/equipments/fire-alarm-systems' },
    secondaryCta: null,
    image: '/alarms.png',
    alt: 'Fire alarm control panel and detection system installed in a building',
  },
  {
    id: 3,
    eyebrow: 'inspection · testing · maintenance',
    headline: 'Protection needs to stay ready.',
    highlight: 'ready',
    headlineTag: 'h2',
    description:
      'Inspection, testing and maintenance that keep your fire protection systems prepared when they matter.',
    cta: { label: 'Book an inspection', href: '/contact#contact-form' },
    secondaryCta: null,
    image: '/fire training 2.jpg',
    alt: 'Fire safety technician inspecting and testing fire protection equipment',
  },
  {
    id: 4,
    eyebrow: 'complete fire protection',
    headline: 'From equipment to readiness.',
    highlight: 'readiness',
    headlineTag: 'h2',
    description:
      'Supply, installation, testing, maintenance and training — handled through one reliable fire-safety partner.',
    cta: { label: 'Talk to our team', href: '/contact#contact-form' },
    secondaryCta: null,
    image: '/hero-3.webp',
    alt: 'Professional fire protection installation with multiple safety systems in a building',
  },
];

const SLIDE_DURATION = 6000;
const TRANSITION_DURATION = 800;

function renderHeadline(text: string, highlight?: string) {
  if (!highlight) return text;

  const index = text.toLowerCase().indexOf(highlight.toLowerCase());
  if (index === -1) return text;

  const before = text.slice(0, index);
  const after = text.slice(index + highlight.length);

  return (
    <>
      {before}
      <span className="text-highlight-dark">{highlight}</span>
      {after}
    </>
  );
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPausedByInteraction, setIsPausedByInteraction] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Mark as loaded after mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentSlide(index);
      if (isPlaying && !isPausedByInteraction) {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, SLIDE_DURATION);
      }
    },
    [isPlaying, isPausedByInteraction]
  );

  const goNext = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const goPrev = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
    setIsPausedByInteraction(false);
  }, []);

  const pauseOnInteraction = useCallback(() => {
    if (isPlaying) {
      setIsPausedByInteraction(true);
      if (timerRef.current) clearInterval(timerRef.current);
    }
  }, [isPlaying]);

  // Autoplay
  useEffect(() => {
    if (!isPlaying || isPausedByInteraction) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isPausedByInteraction]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        pauseOnInteraction();
        goPrev();
      } else if (e.key === 'ArrowRight') {
        pauseOnInteraction();
        goNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev, pauseOnInteraction]);

  const slide = slides[currentSlide];
  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <section
      ref={containerRef}
      aria-roledescription="carousel"
      aria-label="VerifSafe fire protection services"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#0B1720' }}
      onMouseEnter={pauseOnInteraction}
      onFocus={pauseOnInteraction}
    >
      {/* Background color */}
      <div className="absolute inset-0 bg-[#0B1720]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1720]/95 via-[#0B1720]/80 to-[#123B5D]/40" />

      {/* Technical grid overlay - extremely subtle */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[520px] lg:min-h-[700px] pt-14 pb-8 sm:pt-20 sm:pb-10 lg:py-0">

          {/* Left: Text content */}
          <div className="flex flex-col items-start">
            {/* Eyebrow */}
            <p
              className={`mb-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all ${
                isReducedMotion ? 'duration-0' : 'duration-500'
              } ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
              style={{ color: '#E53935' }}
              key={`eyebrow-${currentSlide}`}
            >
              {slide.eyebrow}
            </p>

            {/* Headline */}
            {slide.headlineTag === 'h1' ? (
              <h1
                className={`text-hero-heading leading-[1.05] transition-all ${
                  isReducedMotion ? 'duration-0' : 'duration-500 delay-100'
                } ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ color: '#F4F3EF' }}
                key={`headline-${currentSlide}`}
              >
                {renderHeadline(slide.headline, slide.highlight)}
              </h1>
            ) : (
              <h2
                className={`text-hero-heading leading-[1.05] transition-all ${
                  isReducedMotion ? 'duration-0' : 'duration-500 delay-100'
                } ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ color: '#F4F3EF' }}
                key={`headline-${currentSlide}`}
              >
                {renderHeadline(slide.headline, slide.highlight)}
              </h2>
            )}

            {/* Description */}
            <p
              className={`text-subheading mt-5 max-w-lg transition-all ${
                isReducedMotion ? 'duration-0' : 'duration-500 delay-200'
              } ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ color: '#A7B0B5' }}
              key={`desc-${currentSlide}`}
            >
              {slide.description}
            </p>

            {/* CTAs */}
            <div
              className={`mt-8 w-full sm:w-auto flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 transition-all ${
                isReducedMotion ? 'duration-0' : 'duration-500 delay-300'
              } ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              key={`cta-${currentSlide}`}
            >
              <Button
                href={slide.cta.href}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto sm:self-auto !rounded-lg !h-12 !px-7 !bg-[#E53935] hover:!bg-[#C62828] !shadow-[0_10px_24px_-10px_rgba(229,57,53,0.5)]"
              >
                {slide.cta.label}
              </Button>
              {slide.secondaryCta && (
                <Button
                  href={slide.secondaryCta.href}
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto sm:self-auto !rounded-lg !bg-transparent !border-white/25 !text-[#F4F3EF] hover:!border-white/60 hover:!bg-white/5 !shadow-none"
                >
                  {slide.secondaryCta.label}
                </Button>
              )}
            </div>
          </div>

          {/* Right: Visual area with technical elements */}
          <div className="relative w-full aspect-[16/10] lg:aspect-[3/4]">
            {/* Technical frame element */}
            <div
              className={`absolute -inset-2 lg:-inset-4 border border-white/5 rounded-xl transition-all ${
                isReducedMotion ? 'duration-0' : 'duration-700 delay-200'
              } ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            />

            {/* Corner coordinates - technical detail */}
            <div
              className={`absolute -top-6 -left-6 text-[10px] font-mono tracking-wider transition-all ${
                isReducedMotion ? 'duration-0' : 'duration-500 delay-400'
              } ${isLoaded ? 'opacity-40' : 'opacity-0'}`}
              style={{ color: '#A7B0B5' }}
            >
              <span className="hidden lg:inline">0{currentSlide + 1}/04</span>
            </div>

            {/* Current slide image in the visual area */}
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              {slides.map((s, index) => (
                <div
                  key={s.id}
                  className={`absolute inset-0 transition-opacity ${
                    isReducedMotion ? 'duration-0' : `duration-[${TRANSITION_DURATION}ms]`
                  } ease-in-out`}
                  style={{ opacity: index === currentSlide ? 1 : 0 }}
                  aria-hidden={true}
                >
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={index === 0}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    className="object-cover"
                  />
                </div>
              ))}
              {/* Image overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1720]/40 via-transparent to-transparent" />
            </div>
          </div>

        </div>

        {/* Bottom controls bar — in flow on mobile, anchored bottom on desktop */}
        <div className="mt-4 pb-16 sm:pb-20 lg:mt-0 lg:pb-0 lg:absolute lg:bottom-8 lg:left-8 lg:right-8 flex items-center justify-between">
          {/* Slide counter */}
          <div className="flex items-center gap-3">
            <span
              className="text-xs font-mono tracking-wider"
              style={{ color: '#A7B0B5' }}
            >
              0{currentSlide + 1} / 04
            </span>
            {/* Progress bar */}
            <div className="w-16 h-px bg-white/20 overflow-hidden">
              <div
                className={`h-full transition-all ${isReducedMotion ? 'duration-0' : 'duration-500'}`}
                style={{
                  width: `${progress}%`,
                  backgroundColor: '#E53935',
                }}
              />
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center gap-2">
            {/* Play/Pause */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              {isPlaying ? (
                <PlayerPause size={14} style={{ color: '#F4F3EF' }} />
              ) : (
                <PlayerPlay size={14} style={{ color: '#F4F3EF' }} />
              )}
            </button>

            {/* Previous */}
            <button
              type="button"
              onClick={() => {
                pauseOnInteraction();
                goPrev();
              }}
              aria-label="Previous slide"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={16} style={{ color: '#F4F3EF' }} />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={() => {
                pauseOnInteraction();
                goNext();
              }}
              aria-label="Next slide"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={16} style={{ color: '#F4F3EF' }} />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ backgroundColor: 'rgba(167, 176, 181, 0.1)' }} />
    </section>
  );
}
