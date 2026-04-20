'use client';

import Link from 'next/link';
import Image from 'next/image';
import { InfoCircle, ArrowRight, Tool, Certificate, PhoneCall } from 'tabler-icons-react';

export default function AboutCompany() {
  return (
    <section className="w-full py-20 sm:py-24 lg:py-32 relative overflow-hidden bg-gray-950">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-company.png"
          alt="About Verifsafe"
          fill
          className="object-cover opacity-40"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/70 to-gray-950/70" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content (Text) */}
          <div className="flex flex-col justify-center">

            {/* Section Header */}
            <div className="text-left mb-8">
              {/* Section Label */}
              <div className="inline-block mb-4">
                <p
                  className="text-white text-sm sm:text-base font-bold tracking-widest px-4 py-2 bg-[#E53935]/20 border border-[#E53935]/30 rounded-full flex items-center gap-2"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  <InfoCircle size={16} />
                  About Verifsafe
                </p>
              </div>

              {/* Main Heading */}
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                Who <span className="text-[#E53935]">We Are</span>
              </h2>

              {/* Decorative Divider */}
              <div className="w-20 h-1 bg-[#E53935] mt-6 mb-6 rounded-full" />

              {/* Subheading */}
              <p
                className="text-lg sm:text-xl text-gray-200 font-normal leading-relaxed"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                Rwanda&apos;s leading fire protection company dedicated to protecting lives and property through professional fire safety solutions.
              </p>
            </div>

            {/* Main Description */}
            <p
              className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              VERIFSAFE is dedicated to providing professional fire safety equipment and comprehensive services across Rwanda. We supply, install, and maintain fire protection systems that keep buildings and people safe when emergencies occur.
            </p>

          </div>

          {/* Right Content (Highlights and Buttons) */}
          <div className="flex flex-col justify-center gap-10">
            
            {/* Key Highlights */}
            <div className="flex flex-col gap-4 mt-8 lg:mt-0">
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-start gap-4 overflow-hidden">
                <div className="shrink-0">
                  <Tool size={28} className="text-[#E53935]" strokeWidth={1.5} />
                </div>
                <span className="text-base text-white font-normal mt-0.5" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
                  100+ successful installations across Rwanda
                </span>
              </div>

              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-start gap-4 overflow-hidden">
                <div className="shrink-0">
                  <Certificate size={28} className="text-[#E53935]" strokeWidth={1.5} />
                </div>
                <span className="text-base text-white font-normal mt-0.5" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
                  Certified technicians with international standards
                </span>
              </div>

              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-start gap-4 overflow-hidden">
                <div className="shrink-0">
                  <PhoneCall size={28} className="text-[#E53935]" strokeWidth={1.5} />
                </div>
                <span className="text-base text-white font-normal mt-0.5" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
                  24/7 emergency support always available
                </span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white font-medium text-base rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 active:scale-95 shadow-lg group"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                Learn More
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
