'use client';

import { Phone, MapPin, BrandInstagram, BrandFacebook, BrandTwitter, BrandTiktok } from 'tabler-icons-react';

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-linear-to-r from-[#FF4D4D] to-[#E53935] h-12 z-50">
      <div className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Side - Location */}
        <div className="text-white text-xs sm:text-sm font-regular flex items-center gap-1" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
          <MapPin size={14} />
          Kigali, Kinamba Road
        </div>

        {/* Center - Phone */}
        <a
          href="tel:+250790478265"
          className="text-white text-xs sm:text-sm font-medium hover:opacity-80 transition-opacity duration-200 flex items-center gap-2"
          style={{ fontFamily: 'Noto Sans, sans-serif' }}
        >
          <Phone size={16} />
          +250 790 478 265
        </a>

        {/* Right Side - Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/profile.php?id=61577821846154"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition-opacity duration-200"
            aria-label="Facebook"
          >
            <BrandFacebook size={16} />
          </a>
          <a
            href="https://x.com/verifsafe_rw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition-opacity duration-200"
            aria-label="X"
          >
            <BrandTwitter size={16} />
          </a>
          <a
            href="https://www.instagram.com/verifsafe_rw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition-opacity duration-200"
            aria-label="Instagram"
          >
            <BrandInstagram size={16} />
          </a>
          <a
            href="https://www.tiktok.com/@verifsafe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition-opacity duration-200"
            aria-label="TikTok"
          >
            <BrandTiktok size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
