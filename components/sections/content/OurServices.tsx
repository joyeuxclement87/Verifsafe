'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Tool, ArrowRight } from 'tabler-icons-react';
import { motion, Variants } from 'framer-motion';

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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' }
    }
  };

  return (
    <section className="w-full bg-slate-50 py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-red-100/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gray-400/5 rounded-full blur-lg" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#E53935]" />
            <p className="text-label text-[#E53935] flex items-center gap-2">
              <Tool size={15} />
              Our Services
            </p>
          </div>

          <h2 className="text-section-heading text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
            What We <span className="text-[#E53935]">Do</span>
          </h2>

          <div className="w-20 h-1 bg-[#E53935] mx-auto mb-6 rounded-full" />

          <p className="text-subheading text-gray-600 max-w-2xl mx-auto">
            We provide fire safety services which ensure that fire protection systems are installed, inspected, and maintained properly.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-14"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 hover:border-[#E53935]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row items-stretch gap-6 overflow-hidden cursor-pointer"
              style={{ borderWidth: '1px' }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative w-full sm:w-5/12 aspect-[4/3] sm:aspect-auto rounded-xl overflow-hidden shrink-0 border border-gray-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="flex flex-col justify-center py-2 flex-1 pr-4">
                <h3 className="text-card-title text-xl text-gray-900 mb-3 group-hover:text-[#E53935] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-body text-gray-600 mb-6">
                  {service.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#E53935] to-transparent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link href="/services">
            <button className="px-8 py-3 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white text-btn text-base rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 hover:scale-105 active:scale-95 shadow-md inline-flex items-center gap-3">
              Explore All Services
              <ArrowRight size={18} strokeWidth={1.5} />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
