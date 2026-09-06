'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'tabler-icons-react';
import { useReducedMotion } from 'framer-motion';

export interface ServiceSlide {
  src: string;
  alt: string;
  caption: string;
}

export const installationSlides: ServiceSlide[] = [
  {
    src: '/service-2.png',
    alt: 'Technician installing fire alarm and detection equipment',
    caption: 'installation',
  },
  {
    src: '/service-3.png',
    alt: 'Fire safety technician inspecting fire protection equipment',
    caption: 'inspection & testing',
  },
  {
    src: '/service-5.png',
    alt: 'Technician servicing fire protection equipment',
    caption: 'maintenance',
  },
];

export const maintenanceSlides: ServiceSlide[] = [
  {
    src: '/service-5.png',
    alt: 'Technician servicing fire protection equipment',
    caption: 'maintenance',
  },
  {
    src: '/service-3.png',
    alt: 'Fire safety technician inspecting fire protection equipment',
    caption: 'inspection & testing',
  },
  {
    src: '/service-2.png',
    alt: 'Technician installing fire alarm and detection equipment',
    caption: 'installation',
  },
];

export function ServiceSlides({
  slides,
  code,
  dark = false,
}: {
  slides: ServiceSlide[];
  code: string;
  dark?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, [paused, reduceMotion, slides.length]);

  const active = slides[index];
  const prev = () => setIndex((current) => (current - 1 + slides.length) % slides.length);
  const next = () => setIndex((current) => (current + 1) % slides.length);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className={`relative aspect-[4/3] rounded-lg overflow-hidden border bg-neutral ${
          dark ? 'border-white/10 bg-white/5' : 'border-gray-200'
        }`}
      >
        {slides.map((slide, slideIndex) => (
          <div
            key={slide.src}
            aria-hidden={slideIndex !== index}
            className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
              slideIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        ))}

        <div
          className={`absolute bottom-3 right-3 flex items-center gap-1.5 ${
            dark ? 'text-[#F4F3EF]' : 'text-gray-900'
          }`}
        >
          <button
            type="button"
            aria-label="Previous image"
            onClick={prev}
            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${
              dark
                ? 'bg-white/10 hover:bg-white/20 text-[#F4F3EF] focus-visible:outline-[#E53935]'
                : 'bg-white/80 hover:bg-white border border-gray-200 focus-visible:outline-[#D62828]'
            } motion-reduce:transition-none`}
          >
            <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={next}
            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${
              dark
                ? 'bg-white/10 hover:bg-white/20 text-[#F4F3EF] focus-visible:outline-[#E53935]'
                : 'bg-white/80 hover:bg-white border border-gray-200 focus-visible:outline-[#D62828]'
            } motion-reduce:transition-none`}
          >
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <p
          aria-live="polite"
          className={`text-[10px] font-mono tracking-widest uppercase ${
            dark ? 'text-[#A7B0B5]' : 'text-gray-400'
          }`}
        >
          {active.caption}
        </p>

        <div className="flex items-center gap-2">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Show image ${slideIndex + 1} of ${slides.length}`}
              aria-current={slideIndex === index}
              onClick={() => setIndex(slideIndex)}
              className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none ${
                slideIndex === index
                  ? 'w-6 bg-[#D62828]'
                  : dark
                    ? 'w-1.5 bg-white/25 hover:bg-white/50'
                    : 'w-1.5 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
          <span
            aria-hidden="true"
            className={`hidden sm:block text-[10px] font-mono tracking-widest ${
              dark ? 'text-[#A7B0B5]/50' : 'text-gray-400'
            }`}
          >
            {code}
          </span>
        </div>
      </div>
    </div>
  );
}