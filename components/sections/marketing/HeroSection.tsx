'use client';

import Button from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-svh flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("/hero2.jpg")` }}
      />

      {/* Controlled overlay — strongest behind the content, right side stays visible */}
      <div className="absolute inset-0 bg-ink/60" />
      <div className="absolute inset-0 bg-linear-to-r from-ink/85 via-ink/45 to-transparent" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl flex flex-col items-start py-20 sm:py-24">

          {/* Eyebrow / Context Label */}
          <p
            className="hero-enter mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-white/60"
            style={{ animationDelay: '0.05s' }}
          >
            Fire Protection &middot; Rwanda
          </p>

          {/* Main Headline */}
          <h1
            className="hero-enter text-hero-heading text-white"
            style={{ fontWeight: 700, animationDelay: '0.15s' }}
          >
            Protect What
            <br />
            Matters Most.
          </h1>

          {/* Supporting Copy */}
          <p
            className="hero-enter text-subheading text-gray-300 mt-6 max-w-xl"
            style={{ animationDelay: '0.3s' }}
          >
            We supply, install, inspect, and maintain fire protection systems and certified
            safety equipment for businesses and buildings across Rwanda.
          </p>

          {/* Call to Action */}
          <div
            className="hero-enter mt-9 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5"
            style={{ animationDelay: '0.45s' }}
          >
            <Button
              href="/contact#contact-form"
              variant="primary"
              size="lg"
              className="self-start"
            >
              Request a Fire Safety Inspection
            </Button>

            <Button
              href="/equipments"
              variant="secondary"
              size="lg"
              className="self-start sm:self-auto"
            >
              Explore Solutions
            </Button>
          </div>

          {/* Proof Line */}
          <div
            className="hero-enter mt-14 w-full max-w-xl border-t border-white/15 pt-6"
            style={{ animationDelay: '0.6s' }}
          >
            <ul className="flex flex-wrap items-center gap-x-2.5 gap-y-2 text-sm text-gray-400">
              <li>Certified equipment</li>
              <li aria-hidden="true" className="text-white/25">&middot;</li>
              <li>Professional installation</li>
              <li aria-hidden="true" className="text-white/25">&middot;</li>
              <li>Inspection &amp; maintenance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}