'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { FileText } from 'tabler-icons-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ProtectionCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={containerRef} className="w-full py-20 sm:py-24 lg:py-32 relative overflow-hidden bg-gray-950">
      
      {/* Background Image with Subtle Parallax */}
      <motion.div
        className="absolute -inset-x-0 -top-[20%] -bottom-[20%] bg-cover bg-center"
        style={{
          backgroundImage: `url("/cta.jpg")`,
          y
        }}
      />
      <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/90 to-gray-950/90" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Do Not Wait For The <span className="text-[#E53935]">Smoke.</span>
          </h2>

          {/* Description */}
          <p
            className="text-lg sm:text-xl text-gray-200 leading-relaxed font-normal mb-10"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            Protect your people and your assets with the authority in industrial fire safety. Schedule your professional audit today.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            {/* Primary Button */}
            <Link
              href="/services#project-form"
              className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white font-medium text-base rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 shadow-lg group hover:scale-105 active:scale-95"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <FileText size={20} strokeWidth={1} />
              Request Quote
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>

            {/* Secondary Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-white/5 backdrop-blur-md text-white font-medium text-base rounded-lg border border-[#E53935] hover:bg-[#E53935]/20 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20 group"
              style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
              <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
          </div>

          {/* Bottom Text */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center mt-8"
          >
            <p
              className="text-gray-300 text-sm"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              Response within 2 hours • 24/7 Emergency Support Available
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
