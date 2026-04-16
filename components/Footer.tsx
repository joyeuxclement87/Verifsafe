'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
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
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E50914] flex items-center justify-center transition-all duration-300 group"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E50914] flex items-center justify-center transition-all duration-300 group"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E50914] flex items-center justify-center transition-all duration-300 group"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E50914] flex items-center justify-center transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white text-lg font-bold mb-6"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#' },
                { label: 'Products', href: '#' },
                { label: 'Services', href: '#' },
                { label: 'About Us', href: '#' },
                { label: 'Contact', href: '#' }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#E50914] transition-colors duration-300 font-normal"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    {link.label}
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
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Equipment Supply', href: '#' },
                { label: 'Installation', href: '#' },
                { label: 'Inspection & Testing', href: '#' },
                { label: 'Maintenance', href: '#' },
                { label: 'Emergency Support', href: '#' }
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-[#E50914] transition-colors duration-300 font-normal"
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
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-5 h-5 text-[#E50914] mt-0.5 group-hover:scale-110 transition-transform"
                />
                <div>
                  <p
                    className="text-gray-400 text-sm font-normal"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:+250789000022"
                    className="text-white group-hover:text-[#E50914] transition-colors font-normal"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    +250 789 000 022
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 group cursor-pointer">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-5 h-5 text-[#E50914] mt-0.5 group-hover:scale-110 transition-transform"
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
                    className="text-white group-hover:text-[#E50914] transition-colors font-normal"
                    style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  >
                    info@verifsafe.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 group cursor-pointer">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="w-5 h-5 text-[#E50914] mt-0.5 group-hover:scale-110 transition-transform"
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
                className="text-gray-500 hover:text-[#E50914] text-sm transition-colors duration-300 font-normal"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Top Border Accent */}
      <div className="h-1 bg-gradient-to-r from-[#E50914] via-red-600 to-[#E50914]" />
    </footer>
  );
}
