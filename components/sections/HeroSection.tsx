'use client';

import Link from 'next/link';
import { FileText, ArrowRight, Shield } from 'tabler-icons-react';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-start justify-center overflow-hidden pt-50 sm:pt-40">
      {/* Background Image - Single Static Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("/hero-3.webp")`,
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/90 to-gray-950/90" />

      {/* Background Glow Effects */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-48 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-48 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Section Label */}
          <div className="inline-block mb-4">
            <div
              className="text-white text-xs sm:text-sm font-bold tracking-widest px-4 py-2 bg-[#E53935]/10 rounded-full border border-[#E53935]/40 flex items-center gap-2"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontVariant: 'small-caps' }}
            >
              <Shield size={16} strokeWidth={1.5} />
              Premium fire safety solutions
            </div>
          </div>

          {/* Main Headline */}
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-3 sm:mb-5 leading-tight uppercase tracking-wider"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Absolute <span className="text-[#E53935]">Fire Protection</span><br />
            You Can Trust
          </h1>

          {/* Subheadline */}
          <p
            className="text-sm sm:text-base lg:text-base text-gray-200 mb-7 sm:mb-9 max-w-2xl leading-relaxed font-normal"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            State-of-the-art detection and suppression technology for industrial-scale safety. We safeguard high-risk environments with precision engineering.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            {/* Primary Button */}
            <Link
              href="/services#project-form"
              className="inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white font-medium text-base transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 shadow-lg rounded-lg uppercase tracking-wide"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <FileText size={16} strokeWidth={1} />
              Request Inspection
            </Link>

            {/* Secondary Button */}
            <Link
              href="/equipments"
              className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white font-medium text-base transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 rounded-lg bg-white/20 backdrop-blur-sm uppercase tracking-wide"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              Explore Systems
              <ArrowRight size={16} strokeWidth={1.5} />
            </Link>
          </div>

          {/* Decorative Accent Line */}
          <div className="mt-8 sm:mt-10 flex items-center gap-4 text-white/80">
            <div className="h-1 w-8 bg-gradient-to-r from-[#E53935] to-transparent" />
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase">
              Certified & Trusted
            </span>
            <div className="h-1 w-8 bg-gradient-to-l from-[#E53935] to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
