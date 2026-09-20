import type { Metadata } from 'next';
import ContactForm from '@/components/sections/forms/Contact';
import { Phone, Mail, Clock, MapPin, ArrowUpRight } from 'tabler-icons-react';
import Button from '@/components/ui/Button';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import CtaBackground from '@/components/sections/marketing/CtaBackground';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: {
    absolute: 'Contact VerifSafe | Fire Safety Equipment & Services Rwanda',
  },
  description:
    'Contact VerifSafe for fire safety equipment, installation, inspection and maintenance services in Rwanda. Request a quote or speak with our team in Kigali.',
  alternates: {
    canonical: 'https://verifsafe.com/contact',
  },
  openGraph: {
    title: 'Contact VerifSafe | Fire Safety Equipment & Services Rwanda',
    description:
      'Get in touch with VerifSafe for fire safety equipment, services and professional support in Rwanda.',
    url: 'https://verifsafe.com/contact',
    siteName: 'VerifSafe',
    type: 'website',
  },
};

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    phones: site.phones.map((phone) => ({
      value: phone.display,
      href: `tel:${phone.tel}`,
    })),
  },
  {
    icon: Mail,
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: site.address.country,
    href: site.address.mapsUrl,
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: site.hours,
    href: null,
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.png`,
  email: site.email,
  telephone: site.phones.map((phone) => phone.tel),
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressCountry: 'RW',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  areaServed: {
    '@type': 'Country',
    name: site.address.country,
  },
  sameAs: [
    site.social.facebook,
    site.social.x,
    site.social.instagram,
    site.social.tiktok,
  ],
};

export default function ContactPage() {
  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="contact-hero-h1"
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: '#0B1720' }}
      >
        <div className="absolute inset-0 bg-[#0B1720]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1720]/95 via-[#0B1720]/80 to-[#123B5D]/40" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
          <RevealGroup stagger={0.08} delayChildren={0.05} className="max-w-2xl">
            <RevealItem variant="up-sm">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#E53935]">
                contact verifsafe
              </p>
            </RevealItem>

            <RevealItem>
              <h1
                id="contact-hero-h1"
                className="text-hero-heading leading-[1.05] text-[#F4F3EF]"
              >
                let&apos;s talk about your <span className="text-highlight-dark">fire safety needs</span>.
              </h1>
            </RevealItem>

            <RevealItem variant="up-sm">
              <p className="text-subheading mt-5 max-w-xl text-[#A7B0B5] leading-relaxed">
                Tell us what you need for your building, workplace or project and our team
                can help you identify the right equipment, services or safety solutions.
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

      {/* ── Form + Contact Info ──────────────────────────────────── */}
      <section
        id="contact-form"
        aria-labelledby="contact-form-heading"
        className="w-full bg-neutral border-t border-gray-200 py-20 sm:py-24 lg:py-32"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,22rem)] gap-12 lg:gap-16 items-start">

            {/* Form */}
            <div>
              <RevealGroup stagger={0.08} delayChildren={0.05}>
                <RevealItem variant="up-sm">
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <p className="flex items-center gap-2.5">
                      <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                      <span className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                        request a quote
                      </span>
                    </p>
                    <span
                      aria-hidden="true"
                      className="hidden sm:block text-[10px] font-mono tracking-widest text-gray-400"
                    >
                      VS / CNT — 01
                    </span>
                  </div>
                </RevealItem>

                <RevealItem>
                  <h2 id="contact-form-heading" className="text-section-heading text-gray-900">
                    share a few details and we&apos;ll <span className="text-highlight">get back to you</span>.
                  </h2>
                </RevealItem>

                <RevealItem variant="up-sm">
                  <p className="text-body text-gray-600 mt-3 max-w-lg">
                    Tell us about your building or project and the type of support you need.
                  </p>
                </RevealItem>
              </RevealGroup>

              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <Reveal delay={0.08} className="lg:sticky lg:top-24">
              <div className="flex items-center gap-2.5 mb-6">
                <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
                <span className="text-xs font-semibold tracking-[0.2em] text-[#5F5F5A]">
                  contact details
                </span>
              </div>

              <h3 className="text-card-title text-gray-900 mb-2">
                prefer to reach us directly?
              </h3>

              <p className="text-body-sm text-gray-500 mb-8 leading-relaxed">
                Use any of these channels — we&apos;re ready to help.
              </p>

              <div className="border-t border-gray-200">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  const Wrapper: 'a' | 'div' = item.href ? 'a' : 'div';
                  const wrapperProps = item.href
                    ? { href: item.href, target: item.href.startsWith('http') ? '_blank' : undefined, rel: item.href.startsWith('http') ? 'noopener noreferrer' : undefined }
                    : {};

                  return (
                    <Wrapper
                      key={item.label}
                      {...wrapperProps}
                      className="group flex items-start gap-4 py-4 border-b border-gray-200 transition-colors duration-200 hover:bg-gray-50/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D62828]"
                    >
                      <span className="shrink-0 mt-0.5">
                        <Icon size={18} strokeWidth={1.5} className="text-[#D62828]" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-label text-gray-400 mb-1">{item.label}</p>
                        {item.phones ? (
                          <div className="space-y-1">
                            {item.phones.map((line) => (
                              <a
                                key={line.value}
                                href={line.href}
                                className="block text-list-title text-gray-900 transition-colors duration-200 hover:text-[#D62828] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D62828]"
                              >
                                {line.value}
                              </a>
                            ))}
                          </div>
                        ) : (
                          <p className="text-list-title text-gray-900 group-hover:text-[#D62828] transition-colors duration-200">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section
        aria-labelledby="contact-cta-heading"
        className="relative w-full overflow-hidden"
        style={{ backgroundColor: '#1a2332' }}
      >
        <CtaBackground />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-40">
          <RevealGroup stagger={0.08} delayChildren={0.05} className="max-w-3xl">
            <RevealItem variant="up-sm">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-8 bg-[#E53935]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A7B0B5]">
                  need help deciding?
                </span>
              </div>
            </RevealItem>

            <RevealItem>
              <h2 id="contact-cta-heading" className="text-section-heading text-[#F4F3EF] mt-6">
                not sure what you <span className="text-highlight-dark">need</span>?
              </h2>
            </RevealItem>

            <RevealItem variant="up-sm">
              <p className="text-subheading text-[#A7B0B5] mt-5 max-w-xl leading-relaxed">
                Tell us about your building, project or safety concern and we&apos;ll help
                you work out where to start.
              </p>
            </RevealItem>

            <RevealItem variant="up-sm">
              <div className="mt-10">
                <Button
                  href="#contact-form"
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
                  request a quote
                </Button>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

    </main>
  );
}
