'use client';

import { Phone, Mail, MapPin } from 'tabler-icons-react';

export default function TopBar() {
  const focusClasses =
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D62828]';

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-12 bg-surface-dark border-b border-white/5 overflow-hidden">
      {/*
        Mobile (<sm): two centered micro-rows inside the same 48px strip so
        phone, email, and full address stay visible without truncation.
        sm+: single row — primary contact left, secondary details right.
      */}
      <div className="w-full h-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-y-0.5 sm:flex-row sm:justify-between sm:gap-x-5">
        {/* Phone — primary contact action */}
        <a
          href="tel:+250788632620"
          aria-label="Call Verifsafe at +250 788 632 620"
          className={`flex shrink-0 items-center gap-1.5 sm:gap-2 whitespace-nowrap text-[11px] sm:text-xs font-medium text-white transition-opacity duration-200 hover:opacity-80 ${focusClasses}`}
        >
          <Phone size={13} strokeWidth={1.5} className="text-brand" />
          +250 788 632 620
        </a>

        {/* Email & location — secondary details */}
        <div className="flex items-center gap-2 sm:gap-3.5 text-[11px] sm:text-xs text-gray-400 max-[299px]:text-[10px]">
          <a
            href="mailto:info@verifsafe.com"
            aria-label="Email Verifsafe at info@verifsafe.com"
            className={`flex items-center gap-1.5 whitespace-nowrap transition-colors duration-200 hover:text-white ${focusClasses}`}
          >
            <Mail size={13} strokeWidth={1.5} className="shrink-0" />
            info@verifsafe.com
          </a>
          <span className="h-3.5 w-px bg-white/10 shrink-0" aria-hidden="true" />
          <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap">
            <MapPin size={13} strokeWidth={1.5} />
            Kigali&nbsp;&middot;&nbsp;Kinamba Road
          </span>
        </div>
      </div>
    </div>
  );
}
