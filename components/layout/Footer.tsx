'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  BrandInstagram,
  BrandFacebook,
  BrandTwitter,
  BrandTiktok,
} from 'tabler-icons-react';
import Button from '@/components/ui/Button';

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Equipment', href: '/equipments' },
  { label: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { label: 'Equipment Supply', href: '/services' },
  { label: 'Installation', href: '/services' },
  { label: 'Inspection & Testing', href: '/services' },
  { label: 'Maintenance', href: '/services' },
  { label: 'Training', href: '/services' },
];

const equipmentLinks = [
  { label: 'Fire Extinguishers', href: '/equipments/fire-extinguishers' },
  { label: 'Fire Alarm Systems', href: '/equipments/fire-alarm-systems' },
  { label: 'Fire Hose Reels', href: '/equipments/fire-hose-reels' },
  { label: 'Emergency Lighting', href: '/equipments/emergency-lights' },
];

const contactDetails = [
  {
    label: 'Location',
    value: 'Kigali, Rwanda',
    href: null as string | null,
    Icon: MapPin,
  },
  {
    label: 'Phone',
    value: '+250 788 632 620',
    href: 'tel:+250788632620',
    Icon: Phone,
  },
  {
    label: 'Email',
    value: 'info@verifsafe.com',
    href: 'mailto:info@verifsafe.com',
    Icon: Mail,
  },
];

const socialLinks = [
  {
    href: 'https://www.facebook.com/profile.php?id=61577821846154',
    label: 'Facebook',
    Icon: BrandFacebook,
  },
  {
    href: 'https://x.com/verifsafe_rw',
    label: 'X (Twitter)',
    Icon: BrandTwitter,
  },
  {
    href: 'https://www.instagram.com/verifsafe_rw',
    label: 'Instagram',
    Icon: BrandInstagram,
  },
  {
    href: 'https://www.tiktok.com/@verifsafe',
    label: 'TikTok',
    Icon: BrandTiktok,
  },
];

const gridLineStyle = {
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
  `,
  backgroundSize: '60px 60px',
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#0B1720' }}
      aria-label="Site footer"
    >
      {/* Top hairline */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{ backgroundColor: 'rgba(167, 176, 181, 0.1)' }}
      />

      {/* Faint technical blueprint grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={gridLineStyle}
      />

      {/* Industrial blue wash — right side */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-transparent to-[#123B5D]/25"
      />

      {/* Main body */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.7fr_1fr_1.15fr_1.25fr_1.25fr] gap-x-8 gap-y-12 border-t border-white/10 pt-12 lg:pt-14">
          {/* Brand statement */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="VerifSafe — Home" className="inline-block">
              <Image
                src="/logo.png"
                alt="VerifSafe"
                width={124}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 text-list-title text-[#F4F3EF] leading-snug">
              peace of mind, verified.
            </p>

            <p className="mt-3 text-body-sm text-[#A7B0B5] leading-relaxed max-w-xs">
              Fire protection equipment, installation, inspection and maintenance for buildings
              across Rwanda.
            </p>

            {/* Compact CTA */}
            <Button
              href="/contact#contact-form"
              variant="dark"
              size="md"
              icon={
                <ArrowUpRight
                  size={18}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
                />
              }
              className="mt-7 !rounded-lg !h-12 !px-8 !bg-[#E53935] hover:!bg-[#C62828] !shadow-[0_10px_24px_-10px_rgba(229,57,53,0.5)] !text-white font-semibold"
            >
              Request a Quote
            </Button>
          </div>

          {/* Company */}
          <nav aria-labelledby="footer-company-title">
            <h2
              id="footer-company-title"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A7B0B5] mb-6"
            >
              Company
            </h2>
            <ul className="space-y-3" role="list">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-body-sm text-[#A7B0B5] hover:text-[#F4F3EF] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E53935]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-labelledby="footer-services-title">
            <h2
              id="footer-services-title"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A7B0B5] mb-6"
            >
              Services
            </h2>
            <ul className="space-y-3" role="list">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-body-sm text-[#A7B0B5] hover:text-[#F4F3EF] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E53935]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Equipment */}
          <nav aria-labelledby="footer-equipment-title">
            <h2
              id="footer-equipment-title"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A7B0B5] mb-6"
            >
              Equipment
            </h2>
            <ul className="space-y-3" role="list">
              {equipmentLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-body-sm text-[#A7B0B5] hover:text-[#F4F3EF] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E53935]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2
              id="footer-contact-title"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A7B0B5] mb-6"
            >
              Contact
            </h2>
            <address className="not-italic">
              <ul className="space-y-5" role="list">
                {contactDetails.map(({ label, value, href, Icon }) => (
                  <li key={label} className="flex items-start gap-3">
                    <Icon
                      size={16}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="shrink-0 mt-0.5 text-[#E53935]"
                    />
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/30 mb-1">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-body-sm text-[#A7B0B5] hover:text-[#F4F3EF] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E53935]"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-body-sm text-[#A7B0B5]">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-body-sm text-white/30 text-center sm:text-left">
            © {currentYear} VerifSafe. All rights reserved.
          </p>

          <ul className="flex items-center gap-3" role="list">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#A7B0B5] hover:border-[#E53935] hover:text-white transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E53935]"
                >
                  <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}