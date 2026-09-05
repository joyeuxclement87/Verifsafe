'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'tabler-icons-react';

const services = [
  {
    number: '01',
    title: 'Fire equipment supply',
    description: 'Extinguishers, fire safety equipment and essential protection systems.',
    href: '/equipments',
    image: '/service-1.png',
    alt: 'Fire safety equipment and extinguishers',
  },
  {
    number: '02',
    title: 'Installation',
    description: 'Professional installation of fire alarms, detection systems and safety equipment.',
    href: '/services',
    image: '/service-2.png',
    alt: 'Technician installing fire alarm and detection equipment',
  },
  {
    number: '03',
    title: 'Inspection & testing',
    description: 'Checks that help identify faults, gaps and areas requiring attention.',
    href: '/services',
    image: '/service-3.png',
    alt: 'Fire safety technician inspecting fire protection equipment',
  },
  {
    number: '04',
    title: 'Maintenance',
    description: 'Scheduled servicing to keep fire protection systems working as intended.',
    href: '/services',
    image: '/service-5.png',
    alt: 'Technician servicing fire protection equipment',
  },
  {
    number: '05',
    title: 'Extinguisher refilling',
    description: 'Refilling and servicing to help keep extinguishers ready for use.',
    href: '/services',
    image: '/refile.jpeg',
    alt: 'Fire extinguisher being refilled and serviced',
  },
  {
    number: '06',
    title: 'Fire safety training',
    description: 'Practical training that helps teams understand prevention, response and evacuation.',
    href: '/services',
    image: '/fire training 2.jpg',
    alt: 'Fire safety training session for a team',
  },
];

const TOTAL = services.length;

export default function OurServices() {
  const trackRef = useRef<HTMLUListElement>(null);
  const dragState = useRef({ active: false, pointerId: -1, startX: 0, scrollLeft: 0, moved: false });
  const [index, setIndex] = useState(0);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.children.length < 2) return 0;
    return track.children[1].getBoundingClientRect().left - track.children[0].getBoundingClientRect().left;
  }, []);

  const updateIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const step = measure();
    if (step <= 0) return;
    const next = Math.max(0, Math.min(TOTAL - 1, Math.round(track.scrollLeft / step)));
    setIndex((prev) => (prev === next ? prev : next));
  }, [measure]);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      const track = trackRef.current;
      if (!track) return;
      const step = measure();
      if (step <= 0) return;
      const target = Math.max(0, Math.min(TOTAL - 1, index + dir));
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      track.scrollTo({ left: target * step, behavior: reduced ? 'auto' : 'smooth' });
      setIndex(target);
    },
    [index, measure]
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => updateIndex();
    track.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      track.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [updateIndex]);

  const handleDragStart = (e: React.PointerEvent<HTMLUListElement>) => {
    if (e.pointerType === 'touch') return;
    const track = trackRef.current;
    if (!track) return;
    dragState.current = {
      active: true,
      pointerId: e.pointerId,
      startX: e.clientX,
      scrollLeft: track.scrollLeft,
      moved: false,
    };
    try {
      track.setPointerCapture(e.pointerId);
    } catch {
      /* noop */
    }
    track.classList.add('snap-none', 'cursor-grabbing', 'select-none');
  };

  const handleDragMove = (e: React.PointerEvent<HTMLUListElement>) => {
    const state = dragState.current;
    const track = trackRef.current;
    if (!state.active || !track) return;
    const dx = e.clientX - state.startX;
    if (Math.abs(dx) > 6) state.moved = true;
    if (state.moved) track.scrollLeft = state.scrollLeft - dx;
  };

  const handleDragEnd = (e: React.PointerEvent<HTMLUListElement>) => {
    const state = dragState.current;
    const track = trackRef.current;
    state.active = false;
    try {
      track?.releasePointerCapture(e.pointerId);
    } catch {
      /* noop */
    }
    track?.classList.remove('snap-none', 'cursor-grabbing', 'select-none');
    if (state.moved) {
      window.setTimeout(() => {
        dragState.current.moved = false;
      }, 0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      navigate(1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      navigate(-1);
    }
  };

  const handleTrackClick = (e: React.MouseEvent) => {
    if (dragState.current.moved) {
      e.preventDefault();
      dragState.current.moved = false;
    }
  };

  const progressPct = ((index + 1) / TOTAL) * 100;

  return (
    <section
      aria-labelledby="services-heading"
      className="w-full bg-neutral py-20 sm:py-24 lg:py-28"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center justify-between gap-4">
            <p className="flex items-center gap-2.5">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <span className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                what we do
              </span>
            </p>
            <span
              aria-hidden="true"
              className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
            >
              VS / SVC — 06
            </span>
          </div>
          <h2
            id="services-heading"
            className="text-section-heading mt-6 text-gray-900"
          >
            Fire protection built around your <span className="text-highlight">building</span>.
          </h2>
          <p className="text-subheading mt-5 text-gray-600 max-w-2xl">
            From equipment supply to installation, inspection and ongoing
            maintenance, we help keep your building prepared.
          </p>
        </div>

        {/* Carousel */}
        <div className="mt-12 lg:mt-16">
          <ul
            ref={trackRef}
            aria-label="Our services"
            onPointerDown={handleDragStart}
            onPointerMove={handleDragMove}
            onPointerUp={handleDragEnd}
            onPointerLeave={handleDragEnd}
            onClick={handleTrackClick}
            onKeyDown={handleKeyDown}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory cursor-grab scroll-smooth motion-reduce:scroll-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [touch-action:pan-x_pinch-zoom] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
          >
            {services.map((service, i) => (
              <li
                key={service.number}
                className="shrink-0 w-[86%] sm:w-[58%] lg:w-[37%] xl:w-[34%] snap-start"
              >
                <Link
                  href={service.href}
                  aria-label={`${service.title} — ${service.description}`}
                  className="group flex h-full flex-col rounded-lg border border-black/10 bg-white focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#D62828]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-t-lg bg-gray-200">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 640px) 86vw, (max-width: 1024px) 58vw, (max-width: 1280px) 37vw, 34vw"
                      priority={i === 0}
                      loading={i === 0 ? undefined : 'lazy'}
                      className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-0.5 bg-[#E53935] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <span
                      aria-hidden="true"
                      className="text-index tabular-nums text-gray-400 transition-colors duration-300 group-hover:text-[#E53935] motion-reduce:transition-none"
                    >
                      {service.number}
                    </span>
                    <h3 className="text-card-title text-gray-900 mt-3 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-body-sm text-gray-600 mt-2">
                      {service.description}
                    </p>
                    <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-body-sm font-semibold text-[#D62828]">
                      view service
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                      />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {/* Controls */}
          <div className="mt-8 sm:mt-10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold tracking-[0.2em] text-gray-500 tabular-nums">
                {String(index + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
              </span>
              <span
                aria-hidden="true"
                className="hidden sm:block relative h-px w-28 bg-gray-300 overflow-visible"
              >
                <span
                  className="absolute inset-y-0 left-0 bg-[#D62828] transition-[width] duration-300 motion-reduce:transition-none"
                  style={{ width: `${progressPct}%` }}
                />
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => navigate(-1)}
                disabled={index === 0}
                aria-label="Previous services"
                className="flex h-11 w-11 items-center justify-center rounded-md border border-black/15 text-gray-700 transition-colors duration-200 hover:border-[#D62828] hover:text-[#D62828] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828] disabled:opacity-40 disabled:pointer-events-none motion-reduce:transition-none"
              >
                <ArrowLeft size={20} strokeWidth={1.5} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => navigate(1)}
                disabled={index === TOTAL - 1}
                aria-label="Next services"
                className="flex h-11 w-11 items-center justify-center rounded-md border border-black/15 text-gray-700 transition-colors duration-200 hover:border-[#D62828] hover:text-[#D62828] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828] disabled:opacity-40 disabled:pointer-events-none motion-reduce:transition-none"
              >
                <ArrowRight size={20} strokeWidth={1.5} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12">
          <Link
            href="/services"
            aria-label="View all services"
            className="group inline-flex items-center gap-2 text-body-sm font-semibold text-[#D62828] hover:text-[#A91D1D] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828]"
          >
            view all services
            <ArrowRight
              size={18}
              strokeWidth={2}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}