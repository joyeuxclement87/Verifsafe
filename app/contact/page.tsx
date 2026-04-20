'use client';

import Contact from '@/components/sections/Contact';
import { Phone, Flame, ShieldCheck, Clock } from 'tabler-icons-react';

export default function ContactPage() {
  return (
    <main className="w-full">

      {/* ─── HERO SECTION ─────────────────────────────────────── */}
      <section className="relative w-full h-96 sm:h-125 lg:h-150 flex items-center justify-center overflow-hidden mt-0">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("/hero-3.webp")` }}
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
                <Phone size={16} />
                Get in Touch
              </p>
            </div>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 leading-tight uppercase tracking-wider"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Let's Talk Fire Safety
            </h1>

            <p
              className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl leading-relaxed font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Reach out to our team for inquiries, quotations, or support on fire protection solutions.
            </p>
          </div>
        </div>
      </section>

      {/* ─── INTRO / HOW WE CAN HELP ──────────────────────────── */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-10 right-10 w-48 h-48 bg-red-50/60 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gray-100/80 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-5">
              <Flame size={15} className="text-[#E53935]" />
              <span className="text-[#E53935] text-sm font-bold tracking-widest uppercase" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                How We Can Help
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              We're Here to <span className="text-[#E53935]">Assist</span>
            </h2>
            <div className="w-12 h-1 bg-[#E53935] rounded-full mx-auto mb-5" />
            <p
              className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Whether you need equipment, installation, or consultation, our team is ready to guide you with the right fire safety solution.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <ShieldCheck size={24} />,
                title: 'Equipment & Supply',
                desc: 'Get the right fire safety equipment for your facility — extinguishers, alarms, hose reels, and more.',
              },
              {
                icon: <Flame size={24} />,
                title: 'Installation & Inspection',
                desc: 'Professional installation and routine inspection of fire systems to ensure compliance and performance.',
              },
              {
                icon: <Clock size={24} />,
                title: 'Fast Response',
                desc: 'We respond to all inquiries within 2 business hours and offer 24/7 emergency support when needed.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-[#E53935]/10 text-[#E53935] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-1" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT FORM SECTION ─────────────────────────────── */}
      <Contact />

    </main>
  );
}
