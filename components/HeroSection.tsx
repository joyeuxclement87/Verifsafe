'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/hero-1.webp',
    '/hero-2.webp',
    '/hero-3.webp',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url("${slide}")`,
            backgroundAttachment: 'fixed',
          }}
        />
      ))}
      
      {/* Strong Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/80" />

      {/* Content Container - Dark Card */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl flex flex-col items-center text-center">
          
          {/* Main Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight uppercase tracking-wider"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Absolute{' '}
            <span className="text-[#E50914]">Fire Protection</span>
            {' '}You Can Trust
          </h1>

          {/* Subheadline */}
          <p
            className="text-base sm:text-lg text-gray-200 mb-10 sm:mb-12 max-w-2xl leading-relaxed font-normal"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            Precision engineering for industrial-scale safety. We safeguard high-risk environments with state-of-the-art detection and instant suppression technology.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            {/* Primary Button */}
            <button
              className="px-8 sm:px-10 py-4 sm:py-5 bg-[#E50914] text-white font-bold text-lg transition-all duration-300 hover:bg-red-700 hover:shadow-2xl active:scale-95 shadow-lg rounded-lg border border-[#E50914]"
              style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px' }}
            >
              Request Fire Inspection
            </button>

            {/* Secondary Button */}
            <button
              className="px-8 sm:px-10 py-4 sm:py-5 border-2 border-white text-white font-bold text-lg transition-all duration-300 hover:bg-white/20 active:scale-95 rounded-lg bg-white/10 backdrop-blur-sm"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              Explore Systems
            </button>
          </div>

          {/* Decorative Accent Line */}
          <div className="mt-8 sm:mt-10 flex items-center gap-4 text-white/80">
            <div className="h-1 w-8 bg-gradient-to-r from-[#E50914] to-transparent" />
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase">
              Certified & Trusted
            </span>
            <div className="h-1 w-8 bg-gradient-to-l from-[#E50914] to-transparent" />
          </div>
        </div>
      </div>

      {/* Slideshow Indicators */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-8 bg-[#E50914] shadow-lg'
                : 'w-3 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
