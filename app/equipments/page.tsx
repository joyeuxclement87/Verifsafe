'use client';

import Image from 'next/image';
import { Tool } from 'tabler-icons-react';
import Link from 'next/link';

const equipmentDetails = [
  {
    id: 1,
    image: '/equipment-1.png',
    title: 'Fire Extinguishers',
    description: 'Portable firefighting equipment which helps control small fires.',
    link: '/equipments/fire-extinguishers'
  },
  {
    id: 2,
    image: '/equipment-2.png',
    title: 'Fire Alarm Systems',
    description: 'Detection systems which alert occupants during emergencies.',
    link: '/equipments/fire-alarm-systems'
  },
  {
    id: 3,
    image: '/equipment-3.png',
    title: 'Fire Hose Reels',
    description: 'Equipment which provides water supply for firefighting.',
    link: '/equipments/fire-hose-reels'
  },
  {
    id: 4,
    image: '/equipment-4.png',
    title: 'Fire Detection Devices',
    description: 'Smoke and heat detectors which identify fire risks early.',
    link: '/equipments/fire-detection-devices'
  },
  {
    id: 5,
    image: '/equipment-5.png',
    title: 'Emergency Lights & Exit Signs',
    description: 'Lighting systems which guide people to safety.',
    link: '/equipments/emergency-lights'
  },
  {
    id: 6,
    image: '/equipment-6.png',
    title: 'Fire Safety Accessories',
    description: 'Additional safety equipment which supports fire protection.',
    link: '/equipments/fire-safety-accessories'
  }
];

export default function EquipmentsPage() {
  return (
    <main className="w-full">
      {/* Equipment Details Section */}
      <section className="relative w-full h-96 sm:h-125 lg:h-150 flex items-center justify-center overflow-hidden mt-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/hero-3.webp")`,
            backgroundAttachment: 'fixed',
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/90 to-black/95" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block mb-4">
              <p
                className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase px-4 py-2 bg-[#E53935]/10 rounded-full border border-[#E53935]/40 flex items-center gap-2 justify-center"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Tool size={16} />
                Our equipment
              </p>
            </div>

            <h1
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-3 sm:mb-5 leading-tight uppercase tracking-wider"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Fire Safety Equipment
            </h1>

            <p
              className="text-sm sm:text-base lg:text-base text-gray-200 mb-5 sm:mb-7 max-w-2xl leading-relaxed font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              We provide certified fire safety equipment designed to detect, control, and respond to fire emergencies in different environments.
            </p>

            <div className="flex justify-center">
              <Link
                href="/services#project-form"
                className="px-8 py-4 bg-[#E53935] hover:bg-[#D32F2F] text-white font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 active:scale-95 shadow-lg inline-flex items-center gap-3 group"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                Request Quote
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full bg-linear-to-b from-gray-50 via-white to-gray-50 py-20 sm:py-24 lg:py-32 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-4">
            <div className="inline-block mb-4">
              <p
                className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Tool size={16} />
                What we provide
              </p>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Reliable Fire Protection Tools
            </h2>

            <p
              className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-normal leading-relaxed"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Our equipment is selected to ensure safety, compliance, and dependable performance when it matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Grid Section */}
      <section className="w-full bg-linear-to-b from-gray-50 via-white to-gray-50 py-6 sm:py-8 lg:py-10 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-100/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Equipment Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-16 sm:mb-20">
            {equipmentDetails.map((equipment) => (
              <Link
                key={equipment.id}
                href={equipment.link}
                className="group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 sm:p-10 hover:border-[#E53935] hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                style={{ borderWidth: '1px', opacity: 0.95 }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Image Container */}
                <div className="w-full h-48 sm:h-56 bg-gray-200 mb-6 overflow-hidden relative rounded-lg group-hover:shadow-md transition-all duration-300">
                  <Image
                    src={equipment.image}
                    alt={equipment.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E53935] transition-colors duration-300"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {equipment.title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal mb-4"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  {equipment.description}
                </p>

                {/* Learn More */}
                <span className="inline-block text-[#E53935] font-semibold text-sm group-hover:gap-2 transition-all">
                  View Details →
                </span>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gray-950 py-8 sm:py-10 lg:py-12 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E53935]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Grid Container */}
          <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">

          {/* Header - Spans full width */}
          <div className="col-span-12 text-center mb-6 sm:mb-8">
            {/* Section Label */}
            <div className="inline-block mb-3">
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
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Take <span className="text-[#E53935]">the next step</span>
            </h2>

            {/* Subtitle */}
            <h3
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Get the Right Equipment Today
            </h3>

            {/* Description */}
            <p
              className="text-base sm:text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed font-normal mb-4"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Let us help you choose reliable fire safety equipment for your needs.
            </p>
          </div>

          {/* CTA Button - Spans full width */}
          <div className="col-span-12 flex items-center justify-center mb-4">
            <Link
              href="/services#project-form"
              className="px-8 py-3 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white font-bold text-base rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 active:scale-95 shadow-lg inline-flex items-center gap-2 group"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Request a Quote
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Bottom Text - Spans full width */}
          <div className="col-span-12 text-center">
            <p
              className="text-gray-300 text-xs"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              Response within 2 hours • 24/7 Emergency Support Available
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* Equipment Catalog Section */}
      <section className="w-full bg-linear-to-b from-white via-gray-50 to-white py-20 sm:py-24 lg:py-32 relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Catalog Download */}
            <div className="flex flex-col items-start">
              <h2
                className="text-4xl sm:text-5xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                Explore Full Equipment List
              </h2>

              <p
                className="text-lg sm:text-xl text-gray-700 mb-8 font-normal leading-relaxed"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                Download our equipment catalog to view available products, specifications, and options.
              </p>

              <Link
                href="#"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#E53935] hover:bg-[#D32F2F] text-white font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 active:scale-95 shadow-lg group"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                Download Catalog (PDF)
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Right: Get in Touch */}
            <div className="bg-white rounded-xl p-8 sm:p-10 border border-gray-200 shadow-lg">
              <h3
                className="text-3xl sm:text-4xl font-black text-gray-900 mb-3 leading-tight"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                Get in touch
              </h3>

              <p
                className="text-lg text-gray-700 mb-8 font-normal leading-relaxed"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                Need help choosing equipment? We&rsquo;re ready to assist.
              </p>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[#E53935] flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.707 12.293a.999.999 0 00-1.414 0L12 17.586l-4.293-4.293a.999.999 0 10-1.414 1.414l5 5a.999.999 0 001.414 0l5-5a.999.999 0 000-1.414z" />
                      <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-2.5 8.5h-7v-1h7v1z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-medium" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Phone</p>
                    <a href="tel:+250789000022" className="text-[#E53935] font-semibold hover:underline" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                      +250 789 000 022
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[#E53935] flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-medium" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Email</p>
                    <a href="mailto:info@verifsafe.com" className="text-[#E53935] font-semibold hover:underline" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                      info@verifsafe.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[#E53935] flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-medium" style={{ fontFamily: 'Noto Sans, sans-serif' }}>Location</p>
                    <p className="text-[#E53935] font-semibold" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                      Kigali, Rwanda
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
