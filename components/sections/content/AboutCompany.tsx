'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { InfoCircle, ArrowRight, Tool, Certificate, PhoneCall } from 'tabler-icons-react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

export default function AboutCompany() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="w-full py-20 sm:py-24 lg:py-32 relative overflow-hidden bg-gray-950">
      
      {/* Background Image with Subtle Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute -inset-x-0 -top-[15%] -bottom-[15%]"
          style={{ y }}
        >
          <Image
            src="/about-company.png"
            alt="About Verifsafe"
            fill
            className="object-cover opacity-40"
          />
        </motion.div>
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/70 to-gray-950/70" />
      </div>

      {/* Main outer container that maintains page alignment and responsive padding */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Responsive grid that stacks on mobile and splits into two columns on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Column for primary narrative and brand mission statement */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="flex flex-col justify-center"
          >

            {/* Header sub-container for badges and titles */}
            <div className="text-left mb-8">
              {/* Wrapper for the "About Verifsafe" floating badge */}
              <div className="inline-block mb-4">
                <p
                  className="text-white text-sm sm:text-base font-bold tracking-widest px-4 py-2 bg-[#E53935]/20 border border-[#E53935]/30 rounded-full flex items-center gap-2"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  <InfoCircle size={16} />
                  About Verifsafe
                </p>
              </div>

              {/* Primary section title */}
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                Who <span className="text-[#E53935]">We Are</span>
              </h2>

              {/* Red underline decorative element */}
              <div className="w-20 h-1 bg-[#E53935] mt-6 mb-6 rounded-full" />

              {/* Secondary heading or high-level summary paragraph */}
              <p
                className="text-lg sm:text-xl text-gray-200 font-normal leading-relaxed"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                Rwanda&apos;s leading fire protection company dedicated to protecting lives and property through professional fire safety solutions.
              </p>
            </div>

            {/* Detailed company history and service philosophy description */}
            <p
              className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              VERIFSAFE is dedicated to providing professional fire safety equipment and comprehensive services across Rwanda. We supply, install, and maintain fire protection systems that keep buildings and people safe when emergencies occur.
            </p>

          </motion.div>

          {/* Column for key performance indicators (KPIs) and conversion buttons */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="flex flex-col justify-center gap-10"
          >
            
            {/* Grouping container for the highlight/statistic cards */}
            <div className="flex flex-col gap-4 mt-8 lg:mt-0">
              {/* Individual highlight card for installations */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-start gap-4 overflow-hidden"
              >
                <div className="shrink-0">
                  <Tool size={28} className="text-[#E53935]" strokeWidth={1.5} />
                </div>
                <span className="text-base text-white font-normal mt-0.5" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
                  100+ successful installations across Rwanda
                </span>
              </motion.div>

              {/* Individual highlight card for certifications */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-start gap-4 overflow-hidden"
              >
                <div className="shrink-0">
                  <Certificate size={28} className="text-[#E53935]" strokeWidth={1.5} />
                </div>
                <span className="text-base text-white font-normal mt-0.5" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
                  Certified technicians with international standards
                </span>
              </motion.div>

              {/* Individual highlight card for support availability */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex items-start gap-4 overflow-hidden"
              >
                <div className="shrink-0">
                  <PhoneCall size={28} className="text-[#E53935]" strokeWidth={1.5} />
                </div>
                <span className="text-base text-white font-normal mt-0.5" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
                  24/7 emergency support always available
                </span>
              </motion.div>
            </div>

            {/* Container for navigation links and primary CTAs */}
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

          </motion.div>
        </div>
      </div>
    </section>
  );
}
