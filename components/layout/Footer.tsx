'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, BrandInstagram, BrandFacebook, BrandTwitter, BrandLinkedin } from 'tabler-icons-react';

const equipmentLinks = [
  { label: 'Fire Extinguishers', href: '/equipments/fire-extinguishers' },
  { label: 'Fire Alarm Systems', href: '/equipments/fire-alarm-systems' },
  { label: 'Fire Hose Reels', href: '/equipments/fire-hose-reels' },
  { label: 'Fire Detection Devices', href: '/equipments/fire-detection-devices' },
  { label: 'Emergency Lights & Exit Signs', href: '/equipments/emergency-lights' },
  { label: 'Fire Safety Accessories', href: '/equipments/fire-safety-accessories' },
];

const serviceLinks = [
  { label: 'Fire Equipment Supply', href: '/services' },
  { label: 'Installation Services', href: '/services' },
  { label: 'Inspection & Testing', href: '/services' },
  { label: 'Maintenance Services', href: '/services' },
  { label: 'Fire Safety Training', href: '/services' },
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
    Icon: BrandLinkedin,
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
      {/* Top hairline — matches Hero / FireSafetyApproach */}
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

      {/* ── Main body ──────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-10">

        {/* Eyebrow row */}
        <div className="flex items-center justify-between gap-4 mb-12 lg:mb-16">
          <p className="flex items-center gap-2.5">
            <span aria-hidden="true" className="h-px w-8 bg-[#E53935]" />
            <span className="text-xs font-semibold tracking-[0.2em] text-[#A7B0B5]">
              verifsafe · rwanda
            </span>
          </p>
          <span
            aria-hidden="true"
            className="hidden sm:block text-[10px] font-mono tracking-widest text-white/30"
          >
            VS / FTR
          </span>
        </div>

        {/* ── Four-column grid ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 border-t border-white/10 pt-10 lg:pt-12">

          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-6">
            {/* Wordmark */}
            <div>
              <p className="text-[#F4F3EF] text-list-title font-semibold tracking-tight">
                Verif<span style={{ color: '#E53935' }}>Safe</span>
              </p>
              <p className="mt-1 text-xs font-semibold tracking-[0.15em] text-[#A7B0B5]">
                Peace of Mind, Verified
              </p>
            </div>

            <p className="text-body-sm text-[#A7B0B5] leading-relaxed max-w-xs">
              Rwanda&apos;s trusted fire protection partner — supplying, installing,
              inspecting and maintaining fire safety systems for buildings across the country.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#A7B0B5] hover:border-[#E53935] hover:text-white transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E53935]"
                >
                  <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Equipment */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-[#A7B0B5] mb-6">
              Equipment
            </h3>
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
          </div>

          {/* Col 3 — Services */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-[#A7B0B5] mb-6">
              What We Do
            </h3>
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
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-[#A7B0B5] mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-5" role="list">
              {/* Phone */}
              <li className="flex items-start gap-3">
                <Phone
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="shrink-0 mt-0.5 text-[#E53935]"
                />
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.15em] text-white/30 uppercase mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+250788632620"
                    className="text-body-sm text-[#A7B0B5] hover:text-[#F4F3EF] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E53935]"
                  >
                    +250 788 632 620
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3">
                <Mail
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="shrink-0 mt-0.5 text-[#E53935]"
                />
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.15em] text-white/30 uppercase mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@verifsafe.com"
                    className="text-body-sm text-[#A7B0B5] hover:text-[#F4F3EF] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E53935]"
                  >
                    info@verifsafe.com
                  </a>
                </div>
              </li>

              {/* Location */}
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="shrink-0 mt-0.5 text-[#E53935]"
                />
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.15em] text-white/30 uppercase mb-1">
                    Location
                  </p>
                  <p className="text-body-sm text-[#A7B0B5]">Kigali, Rwanda</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────────────────────── */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-white/30 text-center sm:text-left">
            © {currentYear} VerifSafe. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {[
              { label: 'Privacy Policy', href: '#' },
              { label: 'Terms of Service', href: '#' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-body-sm text-white/30 hover:text-[#A7B0B5] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E53935]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
