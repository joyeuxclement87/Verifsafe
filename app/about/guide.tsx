'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'tabler-icons-react';
import Button from '@/components/ui/Button';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';

const blueGridStyle = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
  backgroundSize: '60px 60px',
};

const whatWeDo = [
  {
    number: '01',
    title: 'Fire safety equipment',
    text: 'Supply of fire extinguishers, alarm systems, hose reels, detection devices, emergency lighting and safety accessories for different environments.',
    link: { label: 'explore equipment', href: '/equipments' },
  },
  {
    number: '02',
    title: 'Installation & setup',
    text: 'Installation and setup of fire alarm systems, detection devices and safety equipment, configured around your building.',
    link: { label: 'see services', href: '/services' },
  },
  {
    number: '03',
    title: 'Inspection & maintenance',
    text: 'Inspection, testing, refilling and maintenance services that help keep protection systems working as intended over time.',
    link: { label: 'see services', href: '/services' },
  },
  {
    number: '04',
    title: 'Training & safety support',
    text: 'Fire awareness training and first aid training that help teams identify risks and respond correctly in an emergency.',
    link: { label: 'see services', href: '/services' },
  },
];

const environments = [
  {
    name: 'Residential buildings',
    summary: 'Fire protection for apartments, residential developments and shared living spaces.',
  },
  {
    name: 'Commercial properties',
    summary: 'Fire safety for retail spaces, shopping centers and commercial buildings.',
  },
  {
    name: 'Offices & workspaces',
    summary: 'Detection, extinguishers and training for offices and coworking environments.',
  },
  {
    name: 'Warehouses & industrial',
    summary: 'Protection for storage, manufacturing and large-scale industrial facilities.',
  },
  {
    name: 'Construction projects',
    summary: 'Site-ready extinguishers and practical training for construction teams.',
  },
  {
    name: 'Government & public',
    summary: 'Fire protection for public buildings and government facilities.',
  },
];

const whyVerifSafe = [
  {
    number: '01',
    title: 'Practical guidance',
    text: 'We help you understand what equipment or safety solution is appropriate for your building, workplace or project — so you can decide with confidence.',
  },
  {
    number: '02',
    title: 'Complete support',
    text: 'Support can extend from supply to installation, inspection and maintenance, so you have one partner across the life of your fire safety systems.',
    link: { label: 'view services', href: '/services' },
  },
  {
    number: '03',
    title: 'Reliable communication',
    text: 'Requesting information, quotations or project support is straightforward, and we keep communication clear and responsive.',
    link: { label: 'talk to us', href: '/contact' },
  },
  {
    number: '04',
    title: 'Local understanding',
    text: 'Our guidance is built with an understanding of the needs of buildings, businesses and projects in Rwanda.',
  },
];

export function AboutContent() {
  return (
    <main className="w-full">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="about-hero-h1"
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: '#0B1720' }}
      >
        <Image
          src="/about-company.png"
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1720]/95 via-[#0B1720]/80 to-[#123B5D]/60" />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={blueGridStyle}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 sm:pt-32 sm:pb-24">
          <RevealGroup stagger={0.08} delayChildren={0.05} className="max-w-2xl">
            <RevealItem variant="up-sm">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#E53935]">
                about verifsafe
              </p>
            </RevealItem>

            <RevealItem>
              <h1
                id="about-hero-h1"
                className="text-hero-heading leading-[1.05] text-[#F4F3EF]"
              >
                building safer spaces through <span className="text-highlight-dark">better protection</span>.
              </h1>
            </RevealItem>

            <RevealItem variant="up-sm">
              <p className="text-subheading mt-6 max-w-xl text-[#A7B0B5] leading-relaxed">
                VerifSafe provides fire safety equipment, protection solutions and related
                services for buildings, workplaces and projects across Rwanda.
              </p>
            </RevealItem>
          </RevealGroup>
        </div>

        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ backgroundColor: 'rgba(167, 176, 181, 0.1)' }}
        />
      </section>

      {/* ── Who We Are ───────────────────────────────────────────── */}
      <section
        aria-labelledby="about-who-heading"
        className="w-full bg-white border-t border-gray-200 py-20 sm:py-24 lg:py-32"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <Reveal>
              <div className="flex items-center justify-between gap-4">
                <p className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                    who we are
                  </span>
                </p>
                <span
                  aria-hidden="true"
                  className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
                >
                  VS / A — 01
                </span>
              </div>

              <h2
                id="about-who-heading"
                className="text-section-heading text-gray-900 mt-6 leading-snug"
              >
                practical protection, built around <span className="text-highlight">real needs</span>.
              </h2>

              <p className="text-body text-gray-600 mt-6 max-w-xl leading-relaxed">
                VerifSafe is a Rwandan company that helps buildings, workplaces and projects
                stay protected. We supply fire safety equipment, install protection systems,
                and provide ongoing inspection, maintenance and safety support — so the
                protection you rely on stays ready when it matters.
              </p>

              <p className="text-body text-gray-600 mt-4 max-w-xl leading-relaxed">
                Our work covers the equipment people need to respond in an emergency —
                extinguishers, alarm systems, hose reels, detection devices, emergency
                lighting and exit signs — along with the services that keep them working
                over time.
              </p>
            </Reveal>

            <Reveal
              delay={0.08}
              className="relative"
            >
              <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden border border-black/10 bg-gray-100">
                <Image
                  src="/about-story.jpg"
                  alt="VerifSafe team working on fire safety equipment and operations"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── What We Do ───────────────────────────────────────────── */}
      <section
        aria-labelledby="about-do-heading"
        className="w-full bg-neutral border-t border-gray-200 py-20 sm:py-24 lg:py-28"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,26rem)_1fr] gap-12 lg:gap-16 items-start">
            <Reveal>
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
                  VS / A — 02
                </span>
              </div>

              <h2
                id="about-do-heading"
                className="text-section-heading text-gray-900 mt-6 leading-snug"
              >
                from equipment to <span className="text-highlight">ongoing support</span>.
              </h2>

              <p className="text-body text-gray-600 mt-5 max-w-md leading-relaxed">
                We keep the focus on what keeps people and buildings protected — from
                choosing the right equipment to keeping it working over time.
              </p>

              <div className="mt-8">
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 text-body-sm font-semibold text-[#D62828] hover:text-[#A91D1D] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828]"
                >
                  view all services
                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </Link>
              </div>
            </Reveal>

            <RevealGroup stagger={0.05} className="border-t border-gray-200 min-w-0">
              {whatWeDo.map((item) => (
                <RevealItem
                  key={item.number}
                  variant="up-sm"
                  className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 sm:gap-10 py-6 sm:py-7 border-b border-gray-200"
                >
                  <span className="text-index tabular-nums text-[#D62828] shrink-0">
                    {item.number}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-card-title text-gray-900">{item.title}</h3>
                    <p className="text-body-sm text-gray-600 mt-2 max-w-prose leading-relaxed">
                      {item.text}
                    </p>
                    <Link
                      href={item.link.href}
                      className="group inline-flex items-center gap-2 mt-3 text-body-sm font-semibold text-[#D62828] hover:text-[#A91D1D] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828]"
                    >
                      {item.link.label}
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                      />
                    </Link>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      {/* ── Who We Serve ─────────────────────────────────────────── */}
      <section
        aria-labelledby="about-serve-heading"
        className="w-full bg-white border-t border-gray-200 py-20 sm:py-24 lg:py-28"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <RevealGroup stagger={0.08} delayChildren={0.05}>
              <RevealItem variant="up-sm">
                <div className="flex items-center justify-between gap-4">
                  <p className="flex items-center gap-2.5">
                    <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                    <span className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                      who we serve
                    </span>
                  </p>
                  <span
                    aria-hidden="true"
                    className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
                  >
                    VS / A — 03
                  </span>
                </div>
              </RevealItem>

              <RevealItem>
                <h2
                  id="about-serve-heading"
                  className="text-section-heading text-gray-900 mt-6 leading-snug"
                >
                  protection for different <span className="text-highlight">environments</span>.
                </h2>
              </RevealItem>

              <RevealItem variant="up-sm">
                <p className="text-body text-gray-600 mt-5 max-w-2xl leading-relaxed">
                  Different buildings carry different risks. VerifSafe works across a range of
                  environments in Rwanda to help identify the right protection for the people,
                  spaces and operations inside them.
                </p>
              </RevealItem>
            </RevealGroup>
          </div>

          <RevealGroup stagger={0.05} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {environments.map((environment, index) => (
              <RevealItem
                key={environment.name}
                variant="up-sm"
                className="group flex items-start gap-4 py-5 sm:py-6 border-b border-gray-200"
              >
                <span className="shrink-0 mt-0.5 text-label tabular-nums text-gray-300 transition-colors duration-200 group-hover:text-[#D62828] motion-reduce:transition-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-list-title text-gray-900">{environment.name}</h3>
                  <p className="text-body-sm text-gray-500 mt-1 leading-relaxed">
                    {environment.summary}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── Why VerifSafe ────────────────────────────────────────── */}
      <section
        aria-labelledby="about-why-heading"
        className="w-full bg-neutral border-t border-gray-200 py-20 sm:py-24 lg:py-28"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealGroup stagger={0.08} delayChildren={0.05}>
            <RevealItem variant="up-sm">
              <div className="flex items-center justify-between gap-4">
                <p className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                    why verifsafe
                  </span>
                </p>
                <span
                  aria-hidden="true"
                  className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
                >
                  VS / A — 04
                </span>
              </div>
            </RevealItem>

            <RevealItem>
              <div className="max-w-3xl mt-6">
                <h2 id="about-why-heading" className="text-section-heading text-gray-900 leading-snug">
                  why customers choose to <span className="text-highlight">work with us</span>.
                </h2>
                <p className="text-body text-gray-600 mt-5 max-w-2xl leading-relaxed">
                  We aim to make fire safety practical and straightforward — helping you decide
                  what you need and keeping it working over time.
                </p>
              </div>
            </RevealItem>
          </RevealGroup>

          <RevealGroup stagger={0.05} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {whyVerifSafe.map((reason) => (
              <RevealItem
                key={reason.number}
                variant="up-sm"
                className="border-t border-gray-200 py-6 sm:py-7"
              >
                <div className="flex items-start gap-5 sm:gap-6">
                  <span className="text-index tabular-nums text-[#D62828] shrink-0 pt-1">
                    {reason.number}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-card-title text-gray-900">{reason.title}</h3>
                    <p className="text-body-sm text-gray-600 mt-2 max-w-prose leading-relaxed">
                      {reason.text}
                    </p>
                    {reason.link && (
                      <Link
                        href={reason.link.href}
                        className="group inline-flex items-center gap-2 mt-3 text-body-sm font-semibold text-[#D62828] hover:text-[#A91D1D] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828]"
                      >
                        {reason.link.label}
                        <ArrowRight
                          size={16}
                          strokeWidth={2}
                          aria-hidden="true"
                          className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section
        aria-labelledby="about-cta-heading"
        className="relative w-full overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src="/cta.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(67, 3, 3, 0.92) 0%, rgba(72, 7, 7, 0.70) 20%, rgba(31,10,10,0.95) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <RevealGroup stagger={0.08} delayChildren={0.05} className="max-w-3xl">
            <RevealItem variant="up-sm">
              <p className="flex items-center gap-3 mb-5">
                <span aria-hidden="true" className="h-px w-8 bg-[#E53935]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A7B0B5]">
                  work with verifsafe
                </span>
              </p>
            </RevealItem>

            <RevealItem>
              <h2 id="about-cta-heading" className="text-section-heading text-white">
                let&apos;s make your <span className="text-highlight-dark">space safer</span>.
              </h2>
            </RevealItem>

            <RevealItem variant="up-sm">
              <p className="text-subheading text-white mt-5 max-w-xl">
                Whether you need equipment, installation, maintenance or guidance, tell us
                what you are working on and we&apos;ll help you find the right place to start.
              </p>
            </RevealItem>

            <RevealItem variant="up-sm">
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
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
                  className="w-full sm:w-auto !rounded-lg !h-12 !px-7 !bg-[#E53935] hover:!bg-[#C62828] !shadow-[0_10px_24px_-10px_rgba(229,57,53,0.5)] font-semibold"
                >
                  request a quote
                </Button>
                <Button
                  href="/services"
                  variant="secondary"
                  size="lg"
                  icon={<ArrowRight size={18} strokeWidth={2} />}
                  className="w-full sm:w-auto !rounded-lg !bg-transparent !border-white/25 !text-[#F4F3EF] hover:!border-white/60 hover:!bg-white/5 !shadow-none font-semibold"
                >
                  explore our services
                </Button>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>
    </main>
  );
}