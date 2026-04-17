'use client';

import { Phone, MapPin, BrandInstagram, BrandFacebook, BrandTwitter, BrandLinkedin } from 'tabler-icons-react';

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-linear-to-r from-[#FF4D4D] to-[#E53935] h-12 z-50">
      <div className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Side - Location */}
        <div className="text-white text-xs sm:text-sm font-medium flex items-center gap-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
          <MapPin size={16} />
          Kigali, Kinamba Road
        </div>

        {/* Center - Phone */}
        <a
          href="tel:+250789000022"
          className="text-white text-xs sm:text-sm font-medium hover:opacity-80 transition-opacity duration-200 flex items-center gap-2"
          style={{ fontFamily: 'Noto Sans, sans-serif' }}
        >
          <Phone size={16} />
          +250 789 000 022
        </a>

        {/* Right Side - Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition-opacity duration-200"
            aria-label="Facebook"
          >
            <BrandFacebook size={16} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition-opacity duration-200"
            aria-label="Twitter"
          >
            <BrandTwitter size={16} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition-opacity duration-200"
            aria-label="Instagram"
          >
            <BrandInstagram size={16} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition-opacity duration-200"
            aria-label="LinkedIn"
          >
            <BrandLinkedin size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
