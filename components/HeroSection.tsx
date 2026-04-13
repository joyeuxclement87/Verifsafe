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
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
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
      
      {/* Blur Effect */}
      <div className="absolute inset-0 backdrop-blur-sm" />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/65" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        
        {/* Main Headline */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight uppercase tracking-wider"
          style={{ fontFamily: 'Oswald, sans-serif' }}
        >
          Rwanda&apos;s Leading{' '}
          <span className="text-yellow-400 drop-shadow-lg">Fire Protection</span>
          {' '}Solutions
        </h1>

        {/* Subheadline */}
        <p
          className="text-base sm:text-lg lg:text-xl text-gray-100 mb-10 sm:mb-12 max-w-2xl leading-relaxed font-normal"
          style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
        >
          Supplying, installing, and maintaining reliable fire safety equipment for homes and businesses.
        </p>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
          {/* Primary Button */}
          <button
            className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-[#E50914] text-white font-medium text-lg transition-all duration-300 hover:bg-red-700 hover:shadow-lg active:scale-95 shadow-md rounded-lg"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            Get a Quote
          </button>

          {/* Secondary Button */}
          <button
            className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-white text-white font-medium text-lg transition-all duration-300 hover:bg-white hover:text-[#E50914] active:scale-95 rounded-lg"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            Explore Equipment
          </button>
        </div>

        {/* Decorative Accent Line */}
        <div className="mt-12 sm:mt-16 flex items-center gap-4 text-white/70">
          <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-yellow-400" />
          <span className="text-xs sm:text-sm font-medium tracking-widest uppercase">
            Certified & Trusted
          </span>
          <div className="h-0.5 w-12 bg-gradient-to-l from-transparent to-yellow-400" />
        </div>
      </div>

      {/* Slideshow Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-yellow-400 shadow-lg'
                : 'w-3 bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent z-0" />
    </section>
  );
}
