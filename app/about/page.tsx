'use client';

import { Target, Eye, HeartHandshake, CircleCheck, Bulb, Settings, Star } from 'tabler-icons-react';

export default function AboutPage() {
  const missionVisionValues = [
    {
      iconName: 'target',
      title: 'Mission',
      subtitle: 'Protect lives and critical assets',
      description: 'Deliver dependable safety solutions that reduce incidents, support compliance, and strengthen emergency readiness.'
    },
    {
      iconName: 'eye',
      title: 'Vision',
      subtitle: 'Set the benchmark in industrial safety',
      description: 'Be the preferred partner for organizations seeking high-performance risk management and resilient operations.'
    },
    {
      iconName: 'handshake',
      title: 'Values',
      subtitle: 'Integrity, precision, accountability',
      description: 'We operate transparently, execute with discipline, and take ownership from planning through implementation.'
    }
  ];

  const renderIcon = (iconName: string) => {
    switch(iconName) {
      case 'target': return <Target size={32} className="text-[#E53935]" />;
      case 'eye': return <Eye size={32} className="text-[#E53935]" />;
      case 'handshake': return <HeartHandshake size={32} className="text-[#E53935]" />;
      default: return null;
    }
  };

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-linear-to-b from-red-900 via-red-800 to-red-900 py-20 sm:py-24 lg:py-32 mt-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Section Label */}
            <div className="inline-block mb-4">
              <p
                className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2 justify-center mx-auto"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Star size={16} />
                About VerifSafe
              </p>
            </div>

            {/* Main Heading */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Who <span className="text-yellow-300">We Are</span>
            </h1>

            {/* Subheading */}
            <p
              className="text-lg sm:text-xl text-red-100 max-w-2xl mx-auto font-normal leading-relaxed mb-8"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Protecting lives and property through reliable fire safety solutions.
            </p>

            {/* Description */}
            <p
              className="text-base sm:text-lg text-red-100 max-w-3xl mx-auto leading-relaxed font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              VerifSafe is a Rwanda-based fire safety company dedicated to delivering high-quality equipment, professional services, and practical training to help individuals and organizations stay prepared and protected.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="relative w-full bg-linear-to-b from-white to-gray-50 py-20 sm:py-24 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-yellow-100/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            {/* Section Label */}
            <div className="inline-block mb-4">
              <p
                className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Settings size={16} />
                Core Pillars
              </p>
            </div>

            {/* Main Heading */}
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Our <span className="text-[#E53935]">Foundation</span>
            </h2>

            {/* Subheading */}
            <p
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Built on principles that guide every decision and action we take
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {missionVisionValues.map((item, index) => (
              <div
                key={index}
                className="relative group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 sm:p-10 hover:border-[#E53935] hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                style={{ borderWidth: '1px' }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Container */}
                <div className="w-16 h-16 bg-linear-to-br from-[#E53935]/20 to-red-600/20 rounded-lg flex items-center justify-center mb-6">
                  {renderIcon(item.iconName)}
                </div>

                {/* Title */}
                <h3
                  className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p
                  className="text-base sm:text-lg font-semibold text-[#E53935] mb-4"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  {item.subtitle}
                </p>

                {/* Description */}
                <p
                  className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  {item.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="relative w-full bg-linear-to-b from-gray-50 to-white py-20 sm:py-24 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-yellow-100/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            {/* Section Label */}
            <div className="inline-block mb-4">
              <p
                className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Bulb size={16} />
                Our Process
              </p>
            </div>

            {/* Main Heading */}
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              How We <span className="text-[#E53935]">Work</span>
            </h2>

            {/* Subheading */}
            <p
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Simple, structured, and highly effective approach to fire safety
            </p>
          </div>

          {/* Content Card */}
          <div className="max-w-4xl mx-auto">
            <div className="relative group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 sm:p-12 hover:border-[#E53935] hover:shadow-2xl transition-all duration-300 overflow-hidden">
              
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="space-y-6">
                <p
                  className="text-lg sm:text-xl text-gray-700 leading-relaxed font-normal"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  We start by understanding your environment, identifying risks, and recommending the right solutions. From there, we handle supply, installation, and ongoing maintenance to ensure continuous protection.
                </p>
                
                <div className="flex items-start gap-4 pt-4 border-t border-gray-200">
                  <CircleCheck size={24} className="text-[#E53935] shrink-0" />
                  <p
                    className="text-lg sm:text-xl font-bold text-gray-900"
                    style={{ fontFamily: 'Oswald, sans-serif' }}
                  >
                    Our goal is to make fire safety clear, practical, and reliable for every client.
                  </p>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          </div>
        </div>
      </section>

      {/* Work With Us Section */}
      <section className="w-full bg-linear-to-r from-gray-900 via-red-900 to-gray-900 py-20 sm:py-24 lg:py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20">
            {/* Main Heading */}
            <h2
              className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Ready to <span className="text-yellow-400">Collaborate?</span>
            </h2>

            {/* Description */}
            <p
              className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-normal mb-8"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Whether you need fire safety equipment, professional installation, or training, VerifSafe is ready to support you.
            </p>

            <p
              className="text-xl sm:text-2xl text-yellow-400 font-bold max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Let&apos;s help you create a safer environment today.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            {/* Primary Button */}
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-10 py-4 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 active:scale-95 shadow-lg inline-flex items-center gap-3 group"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Contact Us
              <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {/* Secondary Button */}
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-lg border border-white/30 transition-all duration-300 hover:border-yellow-400 hover:bg-white/15 hover:shadow-xl active:scale-95 inline-flex items-center gap-3 group"
              style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Request a Quote
              <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* Bottom Text */}
          <div className="text-center">
            <p
              className="text-gray-300 text-sm"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              Response within 2 hours • 24/7 Emergency Support Available
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
