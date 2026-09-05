'use client';

import { useEffect, useState } from 'react';
import { Phone, Mail, MapPin } from 'tabler-icons-react';

export default function TopBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const focusClasses =
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand';

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 h-10 bg-surface-dark border-b border-white/5 overflow-hidden transition-all duration-300 ${
        isScrolled ? 'h-0 border-b-0 opacity-0' : 'h-10 opacity-100'
      }`}
    >
      <div className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Service categories */}
        <p className="hidden sm:flex items-center gap-1.5 text-xs font-semibold tracking-wide text-gray-400">
          <span className="text-brand">Fire protection</span>
          <span className="text-white/20">·</span>
          <span>Installation</span>
          <span className="text-white/20">·</span>
          <span>Inspection</span>
          <span className="text-white/20">·</span>
          <span>Maintenance</span>
        </p>

        {/* Mobile: Service tagline */}
        <p className="sm:hidden text-xs font-semibold tracking-wide text-gray-400">
          Fire protection · Installation
        </p>

        {/* Right: Contact details */}
        <div className="flex items-center gap-3 sm:gap-4 text-xs text-gray-400">
          <a
            href="tel:+250788632620"
            aria-label="Call Verifsafe at +250 788 632 620"
            className={`hidden sm:flex items-center gap-1.5 whitespace-nowrap transition-colors duration-200 hover:text-white ${focusClasses}`}
          >
            <Phone size={12} strokeWidth={1.5} className="text-brand" />
            +250 788 632 620
          </a>
          <span className="hidden sm:block h-3 w-px bg-white/10 shrink-0" aria-hidden="true" />
          <a
            href="mailto:info@verifsafe.com"
            aria-label="Email Verifsafe at info@verifsafe.com"
            className={`flex items-center gap-1.5 whitespace-nowrap transition-colors duration-200 hover:text-white ${focusClasses}`}
          >
            <Mail size={12} strokeWidth={1.5} className="shrink-0" />
            <span className="hidden sm:inline">info@verifsafe.com</span>
            <span className="sm:hidden">Email</span>
          </a>
          <span className="h-3 w-px bg-white/10 shrink-0" aria-hidden="true" />
          <span className="flex items-center gap-1.5 whitespace-nowrap">
            <MapPin size={12} strokeWidth={1.5} />
            Kigali
          </span>
        </div>
      </div>
    </div>
  );
}
