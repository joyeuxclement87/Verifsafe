'use client';

import { Building, ShoppingCart, Briefcase, BuildingWarehouse, Crane, Flag } from 'tabler-icons-react';
import { motion, Variants } from 'framer-motion';

export default function WhoWeServe() {
  const industries = [
    {
      name: 'Residential Buildings',
      icon: <Building size={22} strokeWidth={1.5} />,
      description: 'Apartments, condominiums, and housing complexes',
    },
    {
      name: 'Commercial Properties',
      icon: <ShoppingCart size={22} strokeWidth={1.5} />,
      description: 'Retail spaces, shopping centers, and commercial buildings',
    },
    {
      name: 'Offices & Workspaces',
      icon: <Briefcase size={22} strokeWidth={1.5} />,
      description: 'Corporate offices, coworking spaces, and business centers',
    },
    {
      name: 'Warehouses & Industrial',
      icon: <BuildingWarehouse size={22} strokeWidth={1.5} />,
      description: 'Storage facilities, manufacturing plants, and industrial complexes',
    },
    {
      name: 'Construction Projects',
      icon: <Crane size={22} strokeWidth={1.5} />,
      description: 'Building sites, infrastructure projects, and construction zones',
    },
    {
      name: 'Government & Public',
      icon: <Flag size={22} strokeWidth={1.5} />,
      description: 'Public buildings, institutions, and government facilities',
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section className="w-full bg-white py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gray-100/20 rounded-full blur-2xl" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-red-50 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#E53935]" />
            <p className="text-label text-[#E53935] flex items-center gap-2">
              <Building size={15} />
              Industries
            </p>
          </div>

          <h2 className="text-section-heading text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
            Who We <span className="text-[#E53935]">Serve</span>
          </h2>

          <div className="w-20 h-1 bg-[#E53935] mx-auto mb-6 rounded-full" />

          <p className="text-subheading text-gray-600 max-w-2xl mx-auto">
            Tailored fire safety solutions across diverse industries and sectors.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#E53935]/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
              style={{ borderWidth: '1px' }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="shrink-0 w-11 h-11 rounded-xl bg-[#E53935]/10 border border-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935]/15 group-hover:scale-110 transition-all duration-300">
                {industry.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-card-title text-base text-gray-900 mb-1 group-hover:text-[#E53935] transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-body-sm text-gray-500">
                  {industry.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#E53935] to-transparent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
