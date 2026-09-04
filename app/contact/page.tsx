'use client';

import Contact from '@/components/sections/forms/Contact';
import { Flame, ShieldCheck, Clock, ArrowRight } from 'tabler-icons-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactPage() {
  const helpItems = [
    {
      number: '01',
      icon: <ShieldCheck size={44} className="text-[#D62828]" strokeWidth={1} />,
      title: 'Equipment & Supply',
      desc: 'Get the right fire safety equipment for your facility — extinguishers, alarms, hose reels, and more.',
    },
    {
      number: '02',
      icon: <Flame size={44} className="text-[#D62828]" strokeWidth={1} />,
      title: 'Installation & Inspection',
      desc: 'Professional installation and routine inspection of fire systems to ensure compliance and performance.',
    },
    {
      number: '03',
      icon: <Clock size={44} className="text-[#D62828]" strokeWidth={1} />,
      title: 'Fast Response',
      desc: 'We respond to all inquiries within 2 business hours and offer 24/7 emergency support when needed.',
    },
  ];

  return (
    <main className="w-full">

      {/* ─── HERO SECTION ─────────────────────────────────────── */}
      <section className="relative w-full h-96 sm:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden mt-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/cont.jpeg")`,
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/90 to-ink/80" />

        {/* Background Glow Effects */}

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span aria-hidden="true" className="h-px w-8 bg-white/60" />
              <p className="text-label text-white/60">Get in Touch</p>
              <span aria-hidden="true" className="h-px w-8 bg-white/60" />
            </div>

            <h1 className="text-page-heading  text-white mb-4 tracking-wider">
              Let&apos;s Talk Fire Safety
            </h1>

            <p className="text-subheading text-gray-200 max-w-2xl">
              Reach out to our team for inquiries, quotations, or support on fire protection solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── HOW WE CAN HELP ──────────────────────────────────── */}
      <section className="relative w-full bg-white py-20 sm:py-24 lg:py-32 overflow-hidden">

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <p className="text-label text-gray-500">How We Can Help</p>
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
            </div>
            <h2 className="text-section-heading  text-gray-900 mb-6 capitalize">
              We&apos;re Here to Assist
            </h2>
            <p className="text-subheading text-gray-600 max-w-2xl mx-auto">
              Whether you need equipment, installation, or consultation, our team is ready to guide you with the right fire safety solution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8">
            {helpItems.map((item, i) => (
              <div
                key={i}
                className="border-t border-gray-200 pt-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="shrink-0 w-8 text-base font-bold text-gray-400 tabular-nums">
                    {item.number}
                  </span>
                  <span className="shrink-0">{item.icon}</span>
                </div>
                <h3 className="text-card-title text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-body text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT FORM SECTION ─────────────────────────────── */}
      <Contact />

      {/* ─── BOTTOM CTA ──────────────────────────────────────── */}
      <section className="w-full py-20 sm:py-24 lg:py-28 relative overflow-hidden bg-ink">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url("/cont.jpeg")` }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink/90 via-ink/80 to-ink/70" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
          >
            <h2 className="text-section-heading  text-white mb-6">
              Don&apos;t Wait For The Emergency.
            </h2>
            <p className="text-subheading text-gray-200 mb-10 max-w-2xl">
              Get your facility assessed by certified professionals. We&apos;ll respond within 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Link
                href="/equipments"
                className="inline-flex items-center justify-center gap-3 px-8 py-3 text-white font-medium text-base rounded-md border border-white/30 hover:border-[#D62828] hover:text-white transition-colors duration-200 group"
                style={{ borderWidth: '1px' }}
              >
                Explore Equipment
                <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-center mt-8"
            >
              <p className="text-gray-300 text-sm">
                Response within 2 hours • 24/7 Emergency Support Available
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
