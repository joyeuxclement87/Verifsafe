'use client';

import Contact from '@/components/sections/forms/Contact';
import { Phone, Flame, ShieldCheck, Clock, ArrowRight } from 'tabler-icons-react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

export default function ContactPage() {
  const helpItems = [
    {
      number: '01',
      icon: <ShieldCheck size={44} className="text-[#E53935]" strokeWidth={1} />,
      title: 'Equipment & Supply',
      desc: 'Get the right fire safety equipment for your facility — extinguishers, alarms, hose reels, and more.',
    },
    {
      number: '02',
      icon: <Flame size={44} className="text-[#E53935]" strokeWidth={1} />,
      title: 'Installation & Inspection',
      desc: 'Professional installation and routine inspection of fire systems to ensure compliance and performance.',
    },
    {
      number: '03',
      icon: <Clock size={44} className="text-[#E53935]" strokeWidth={1} />,
      title: 'Fast Response',
      desc: 'We respond to all inquiries within 2 business hours and offer 24/7 emergency support when needed.',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

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
        <div className="absolute inset-0 bg-linear-to-r from-gray-950 via-gray-950/90 to-gray-950/80" />

        {/* Background Glow Effects */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-48 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-block mb-4">
              <p className="text-label text-white px-4 py-2 bg-[#E53935]/10 rounded-full border border-[#E53935]/40 flex items-center gap-2 justify-center">
                <Phone size={16} />
                Get in Touch
              </p>
            </div>

            <h1 className="text-section-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 tracking-wider">
              Let&apos;s Talk <span className="text-[#E53935]">Fire Safety</span>
            </h1>

            <p className="text-subheading text-gray-200 max-w-2xl">
              Reach out to our team for inquiries, quotations, or support on fire protection solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── HOW WE CAN HELP ──────────────────────────────────── */}
      <section className="relative w-full bg-white py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute top-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gray-400/5 rounded-full blur-2xl" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#E53935]" />
              <p className="text-label text-[#E53935]">
                How We Can Help
              </p>
            </div>
            <h2 className="text-section-heading text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6 capitalize">
              We&apos;re Here to <span className="text-[#E53935]">Assist</span>
            </h2>
            <div className="w-20 h-1 bg-[#E53935] mx-auto mb-6 rounded-full" />
            <p className="text-subheading text-gray-600 max-w-2xl mx-auto">
              Whether you need equipment, installation, or consultation, our team is ready to guide you with the right fire safety solution.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12"
          >
            {helpItems.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-[#E53935]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left overflow-hidden cursor-pointer"
                style={{ borderWidth: '1px' }}
              >
                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-full flex justify-between items-start mb-6">
                  <span className="text-6xl font-black text-gray-200 group-hover:text-[#E53935]/40 transition-colors duration-300 leading-none">
                    {item.number}
                  </span>
                  <div className="transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-card-title text-xl text-gray-900 mb-4 group-hover:text-[#E53935] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-body text-gray-600">
                  {item.desc}
                </p>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#E53935] to-transparent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CONTACT FORM SECTION ─────────────────────────────── */}
      <Contact />

      {/* ─── BOTTOM CTA ──────────────────────────────────────── */}
      <section className="w-full py-20 sm:py-24 lg:py-28 relative overflow-hidden bg-gray-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url("/cont.jpeg")` }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-950/90 via-gray-950/80 to-gray-950/70" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
          >
            <h2 className="text-section-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-6">
              Don&apos;t Wait For The <span className="text-[#E53935]">Emergency.</span>
            </h2>
            <p className="text-subheading text-gray-200 mb-10 max-w-2xl">
              Get your facility assessed by certified professionals. We&apos;ll respond within 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Link
                href="/equipments"
                className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-white/5 backdrop-blur-md text-white font-medium text-base rounded-lg border border-[#E53935] hover:bg-[#E53935]/20 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20 hover:scale-105 active:scale-95 group"
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
