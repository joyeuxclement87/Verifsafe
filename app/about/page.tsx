'use client';

import { Target, Eye, HeartHandshake, CircleCheck, Settings, Star, Users, Package, Award, Tool, Clock } from 'tabler-icons-react';

export default function AboutPage() {
  const impactMetrics = [
    {
      iconName: 'check',
      number: '500+',
      label: 'Projects Completed',
      description: 'Successful installations across diverse sectors and environments.'
    },
    {
      iconName: 'users',
      number: '150+',
      label: 'Clients Served',
      description: 'Trusted by businesses, institutions, and homeowners nationwide.'
    },
    {
      iconName: 'package',
      number: '10,000+',
      label: 'Equipment Installed',
      description: 'Protecting lives and assets through proven fire safety solutions.'
    }
  ];

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

  const aboutFeatures = [
    {
      iconName: 'award',
      label: 'Certified equipment',
      caption: 'Premium safety products sourced from trusted brands, backed by international approvals and proven performance in real deployments.'
    },
    {
      iconName: 'tool',
      label: 'Expert installation',
      caption: 'Professional setup by experienced technicians, ensuring every system is installed safely, accurately, and in line with regulations.'
    },
    {
      iconName: 'clock',
      label: '24/7 support',
      caption: 'Continuous availability for maintenance and emergencies, so your fire safety systems stay responsive around the clock.'
    },
    {
      iconName: 'check',
      label: 'Quality assured',
      caption: 'Strict testing, inspections, and regular servicing keep your protection systems reliable and ready when it matters most.'
    }
  ];

  const renderIcon = (iconName: string) => {
    switch(iconName) {
      case 'target': return <Target size={32} className="text-[#E53935]" />;
      case 'eye': return <Eye size={32} className="text-[#E53935]" />;
      case 'handshake': return <HeartHandshake size={32} className="text-[#E53935]" />;
      case 'award': return <Award size={32} className="text-[#E53935]" />;
      case 'tool': return <Tool size={32} className="text-[#E53935]" />;
      case 'clock': return <Clock size={32} className="text-[#E53935]" />;
      case 'check': return <CircleCheck size={32} className="text-[#E53935]" />;
      case 'users': return <Users size={32} className="text-[#E53935]" />;
      case 'package': return <Package size={32} className="text-[#E53935]" />;
      default: return null;
    }
  };

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden mt-0">
        {/* Background Image - Static */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/hero-3.webp")`,
            backgroundAttachment: 'fixed',
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/90 to-black/95" />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Section Label */}
            <div className="inline-block mb-4">
              <p
                className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-2 bg-[#E53935]/10 rounded-full border border-[#E53935]/40 flex items-center gap-2 justify-center"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Star size={16} />
                About VerifSafe
              </p>
            </div>

            {/* Main Heading */}
            <h1
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-3 sm:mb-5 leading-tight uppercase tracking-wider"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Who <span className="text-[#E53935]">We Are</span>
            </h1>

            {/* Subheading */}
            <p
              className="text-sm sm:text-base lg:text-base text-gray-200 mb-5 sm:mb-7 max-w-2xl leading-relaxed font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Protecting lives and property through reliable fire safety solutions.
            </p>

            {/* Description */}
            <p
              className="text-xs sm:text-sm lg:text-sm text-gray-300 max-w-3xl leading-relaxed font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              VerifSafe is a Rwanda-based fire safety company dedicated to delivering high-quality equipment, professional services, and practical training to help individuals and organizations stay prepared and protected.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-white py-12 sm:py-14 lg:py-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gray-400/5 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Section Label */}
              <div className="inline-block mb-4">
                <p
                  className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full inline-flex items-center gap-2"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  <Star size={16} />
                  Why Choose Us
                </p>
              </div>

              {/* Main Heading */}
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 leading-tight"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                We are committed to delivering <span className="text-[#E53935]">fire protection</span> solutions
              </h2>

              {/* Caption */}
              <p
                className="text-sm sm:text-base text-gray-500 mb-4 font-medium"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <span className="text-gray-900">Trusted protection</span> backed by quality, service, and long-term performance.
              </p>

              {/* Description */}
              <p
                className="text-sm sm:text-base lg:text-base text-gray-700 leading-relaxed font-normal"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                that focus on reliability, safety, and long-term performance.
              </p>
            </div>

            {/* Right - Features List */}
            <div className="space-y-6">
              {aboutFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#E53935]/10 flex items-center justify-center shrink-0 mt-1">
                    {renderIcon(feature.iconName)}
                  </div>
                  <div>
                    <p
                      className="text-sm sm:text-base font-semibold text-gray-900"
                      style={{ fontFamily: 'Oswald, sans-serif' }}
                    >
                      {feature.label}
                    </p>
                    <p
                      className="text-xs sm:text-sm text-gray-500 mt-1"
                      style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                    >
                      {feature.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="relative w-full bg-slate-50 py-12 sm:py-14 lg:py-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gray-400/5 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            {/* Section Label */}
            <div className="inline-block mb-3">
              <p
                className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2 justify-center"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Star size={16} />
                Our Impact
              </p>
            </div>

            {/* Main Heading */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Proven <span className="text-[#E53935]">Results</span>
            </h2>

            {/* Subheading */}
            <p
              className="text-sm sm:text-base lg:text-base text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Our commitment to fire safety has delivered measurable impact across Rwanda.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {impactMetrics.map((metric, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 sm:p-10 hover:border-[#E53935] hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col overflow-hidden"
                style={{ borderWidth: '1px' }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon Container */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#E53935]/20 to-red-600/20 rounded-lg flex items-center justify-center mb-5">
                  {renderIcon(metric.iconName)}
                </div>

                {/* Metric Number */}
                <h3
                  className="text-3xl sm:text-4xl font-black text-[#E53935] mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {metric.number}
                </h3>

                {/* Label */}
                <h4
                  className="text-sm sm:text-base font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {metric.label}
                </h4>

                {/* Description */}
                <p
                  className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal flex-grow"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  {metric.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="mt-6 absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E53935] to-transparent rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full bg-linear-to-b from-white to-gray-50 py-20 sm:py-24 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-yellow-100/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16">
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
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Our <span className="text-[#E53935]">Foundation</span>
            </h2>

            {/* Subheading */}
            <p
              className="text-sm sm:text-base lg:text-base text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Built on principles that guide every decision and action we take
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {missionVisionValues.map((item, index) => (
              <div
                key={index}
                className="relative group bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-10 sm:p-12 hover:border-[#E53935] hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                style={{ borderWidth: '1px' }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Container */}
                <div className="w-20 h-20 bg-linear-to-br from-[#E53935]/20 to-red-600/20 rounded-lg flex items-center justify-center mb-5">
                  {renderIcon(item.iconName)}
                </div>

                {/* Title */}
                <h3
                  className="text-lg sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p
                  className="text-sm sm:text-base font-semibold text-[#E53935] mb-3"
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

      {/* Work With Us Section */}
      <section className="w-full bg-gray-950 py-12 sm:py-14 lg:py-16 relative overflow-hidden mb-16 sm:mb-20 lg:mb-24">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E53935]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* 12-Column Grid Container */}
          <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          
          {/* Header - Spans full width */}
          <div className="col-span-12 text-center mb-10 sm:mb-12">
            {/* Section Label */}
            <div className="inline-block mb-4">
              <p
                className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-2 bg-[#E53935]/10 rounded-full border border-[#E53935]/40 flex items-center gap-2 justify-center"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Get Started
              </p>
            </div>

            {/* Main Heading */}
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-3 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Take <span className="text-[#E53935]">Action</span> - Work With <span className="text-[#E53935]">VERIFSAFE</span>
            </h2>

            {/* Description */}
            <p
              className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-normal mb-6"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              When safety is a priority, choosing the right fire protection partner matters. Let us help you build a safer environment with reliable equipment and professional services.
            </p>
          </div>

          {/* CTA Buttons - Spans full width */}
          <div className="col-span-12 flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
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
              className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-lg border border-white/30 transition-all duration-300 hover:border-[#E53935] hover:bg-white/15 hover:shadow-xl active:scale-95 inline-flex items-center gap-3 group"
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

          {/* Bottom Text - Spans full width */}
          <div className="col-span-12 text-center">
            <p
              className="text-gray-300 text-sm"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              Response within 2 hours • 24/7 Emergency Support Available
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* White Spacer */}
      <div className="w-full bg-white h-16 sm:h-20 lg:h-24" />
    </main>
  );
}
