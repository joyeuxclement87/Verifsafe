'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Building, ArrowRight } from 'tabler-icons-react';

export default function AboutCompany() {
  return (
    <section className="w-full bg-white py-18 sm:py-21 lg:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-gray-400/5 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          {/* Section Label */}
          <div className="inline-block mb-4">
            <p
              className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <Building size={16} />
              About Verifsafe
            </p>
          </div>

          {/* Main Heading */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Who <span className="text-[#E53935]">We Are</span>
          </h2>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            Rwanda&apos;s leading fire protection company dedicated to protecting lives and property through professional fire safety solutions.
          </p>
        </div>

        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Image */}
          <div className="relative group">
            <div className="relative w-full h-80 sm:h-96 lg:h-full overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl border border-gray-200 group-hover:border-[#E53935] transition-all duration-500">
              <Image
                src="/about-company.png"
                alt="Fire Protection Equipment"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
              {/* Overlay Accent */}
              <div className="absolute inset-0 bg-linear-to-tr from-[#E53935]/20 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 right-8 bg-white rounded-xl p-5 shadow-2xl backdrop-blur-sm border border-[#E53935] group-hover:scale-110 transition-transform duration-300">
                <div
                  className="text-xl font-black text-[#E53935] mb-1"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  10+
                </div>
                <p
                  className="text-sm text-gray-700 font-semibold"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  Years in Business
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            
            {/* Main Description */}
            <p
              className="text-sm sm:text-base text-gray-700 mb-7 leading-relaxed font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              VERIFSAFE is dedicated to providing professional fire safety equipment and comprehensive services across Rwanda. We supply, install, and maintain fire protection systems that keep buildings and people safe when emergencies occur.
            </p>

            {/* Key Highlights */}
            <div className="space-y-3 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#E53935]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span
                  className="text-base text-gray-700 font-normal"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  100+ successful installations across Rwanda
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#E53935]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span
                  className="text-base text-gray-700 font-normal"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  Certified technicians with international standards
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#E53935]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span
                  className="text-base text-gray-700 font-normal"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  24/7 emergency support always available
                </span>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="flex gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white font-bold rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 active:scale-95 shadow-lg group"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                Learn More
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-white text-[#E53935] font-bold rounded-lg border-2 border-[#E53935] hover:bg-red-50 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 shadow-md"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
