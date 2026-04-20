'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function OurServices() {
  const services = [
    {
      image: '/service-1.png',
      title: 'Equipment Supply',
      description: 'Certified fire safety equipment for immediate protection against potential hazards.'
    },
    {
      image: '/service-2.png',
      title: 'Installation Services',
      description: 'Professional system setup with full compliance verification for safety standards.'
    },
    {
      image: '/service-3.png',
      title: 'Inspection & Testing',
      description: 'Regular maintenance checks to ensure peak performance of all installed systems.'
    },
    {
      image: '/service-5.png',
      title: 'Fire Safety Training',
      description: 'Expert-led practical courses for complete organizational emergency preparedness.'
    }
  ];

  return (
    <section className="w-full bg-slate-50 py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(229, 9, 20, 0.1) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-red-100 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gray-400/5 rounded-full blur-lg animate-bounce" style={{ animationDelay: '1s' }} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          {/* Section Label */}
          <div className="inline-block mb-4">
            <p
              className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <FontAwesomeIcon icon={faTools} className="w-4 h-4" />
              Our Services
            </p>
          </div>

          {/* Main Heading */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            What We <span className="text-[#E53935]">Do</span>
          </h2>

          {/* Decorative Divider */}
          <div className="w-20 h-1 bg-[#E53935] mx-auto mt-6 mb-6 rounded-full" />

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            We provide fire safety services which ensure that fire protection systems are installed, inspected, and maintained properly.
          </p>
        </div>

        {/* Services Grid (Redesigned 2-column horizontal cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-14">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-400/20 rounded-2xl p-4 sm:p-5 hover:border-[#E53935]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row items-stretch gap-6 overflow-hidden cursor-pointer"
              style={{ borderWidth: '1px' }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Image Container */}
              <div className="relative w-full sm:w-5/12 aspect-[4/3] sm:aspect-auto rounded-xl overflow-hidden shrink-0 border border-gray-400/20">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Container */}
              <div className="flex flex-col justify-center py-2 flex-1 pr-4">
                {/* Title */}
                <h3
                  className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#E53935] transition-colors duration-300"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-base text-gray-600 font-normal leading-relaxed mb-6"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  {service.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#E53935] to-transparent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link href="/services">
            <button
              className="px-8 py-3 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white font-medium text-base rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 active:scale-95 shadow-lg inline-flex items-center gap-3"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              Explore All Services
              <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
