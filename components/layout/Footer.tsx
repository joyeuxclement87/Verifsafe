'use client';

import { Phone, Mail, MapPin, BrandInstagram, BrandFacebook, BrandTwitter, BrandLinkedin } from 'tabler-icons-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0F172A] text-gray-300 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-48 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-48 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <p
                className="text-[#FFC107] text-sm font-semibold"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                Peace of Mind, Verified
              </p>
            </div>
            
            <p
              className="text-gray-400 text-base leading-relaxed font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Rwanda&apos;s leading fire protection solutions provider. Trusted by businesses and organizations to keep people safe.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61577821846154"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E53935] flex items-center justify-center transition-all duration-300 group"
                aria-label="Facebook"
              >
                <BrandFacebook size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://x.com/verifsafe_rw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E53935] flex items-center justify-center transition-all duration-300 group"
                aria-label="Twitter"
              >
                <BrandTwitter size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/verifsafe_rw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E53935] flex items-center justify-center transition-all duration-300 group"
                aria-label="Instagram"
              >
                <BrandInstagram size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.tiktok.com/@verifsafe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E53935] flex items-center justify-center transition-all duration-300 group"
                aria-label="TikTok"
              >
                <BrandLinkedin size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Equipments */}
          <div>
            <h4
              className="text-white text-lg font-bold mb-6"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              Equipments
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Fire Extinguishers', href: '/equipments/fire-extinguishers' },
                { label: 'Fire Alarm Systems', href: '/equipments/fire-alarm-systems' },
                { label: 'Fire Hose Reels', href: '/equipments/fire-hose-reels' },
                { label: 'Fire Detection Devices', href: '/equipments/fire-detection-devices' },
                { label: 'Emergency Lights & Exit Signs', href: '/equipments/emergency-lights' },
                { label: 'Fire Safety Accessories', href: '/equipments/fire-safety-accessories' }
              ].map((equipment, index) => (
                <li key={index}>
                  <a
                    href={equipment.href}
                    className="text-gray-400 hover:text-[#E53935] transition-colors duration-300 font-normal"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    {equipment.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white text-lg font-bold mb-6"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              What We Do
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Fire Equipment Supply', href: '/services' },
                { label: 'Installation Services', href: '/services' },
                { label: 'Inspection & Testing', href: '/services' },
                { label: 'Maintenance Services', href: '/services' },
                { label: 'Fire Safety Training', href: '/services' }
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-[#E53935] transition-colors duration-300 font-normal"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="text-white text-lg font-bold mb-6"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              Get in Touch
            </h4>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-3 group cursor-pointer">
                <Phone
                  size={20}
                  className="text-[#E53935] transition-colors"
                />
                <div>
                  <p
                    className="text-gray-400 text-sm font-normal"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:+250790478265"
                    className="text-white group-hover:text-[#E53935] transition-colors font-normal"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    +250 790 478 265
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 group cursor-pointer">
                <Mail
                  size={20}
                  className="text-[#E53935] transition-colors"
                />
                <div>
                  <p
                    className="text-gray-400 text-sm font-normal"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:info@verifsafe.com"
                    className="text-white group-hover:text-[#E53935] transition-colors font-normal"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    info@verifsafe.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 group cursor-pointer">
                <MapPin
                  size={20}
                  className="text-[#E53935] transition-colors"
                />
                <div>
                  <p
                    className="text-gray-400 text-sm font-normal"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    Location
                  </p>
                  <p
                    className="text-white font-normal"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    Kigali, Rwanda
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p
            className="text-gray-500 text-sm text-center sm:text-left font-normal"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            © {currentYear} Verifsafe. All rights reserved. Peace of Mind, Verified.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            {[
              { label: 'Privacy Policy', href: '#' },
              { label: 'Terms of Service', href: '#' },
              { label: 'Sitemap', href: '#' }
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-500 hover:text-[#E53935] text-sm transition-colors duration-300 font-normal"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Top Border Accent */}
      <div className="h-1 bg-gradient-to-r from-[#E53935] via-red-600 to-[#E53935]" />
    </footer>
  );
}
