'use client';

import { Heart, Gavel, Shield, Building } from 'tabler-icons-react';
import { motion, Variants } from 'framer-motion';

export default function IndustrialFireSolutions() {
  const solutions = [
    {
      iconName: 'heart',
      title: 'Life-Saving Protocols',
      description: 'Advanced detection provides the critical seconds needed for total building evacuation.'
    },
    {
      iconName: 'gavel',
      title: 'Uncompromising Compliance',
      description: 'Eliminate legal risk with systems that exceed local and international fire safety codes.'
    },
    {
      iconName: 'shield',
      title: 'Asset Preservation',
      description: 'Our clean-agent suppression protects electronics and high-value equipment from damage.'
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
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'heart': return <Heart size={44} className="text-[#E53935]" strokeWidth={1} />;
      case 'gavel': return <Gavel size={44} className="text-[#E53935]" strokeWidth={1} />;
      case 'shield': return <Shield size={44} className="text-[#E53935]" strokeWidth={1} />;
      default: return null;
    }
  };

  return (
    <section id="industrial-solutions" className="w-full bg-white py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-red-100/20 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gray-400/5 rounded-full blur-2xl" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
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
              <Building size={15} />
              Industrial Solutions
            </p>
          </div>

          <h2 className="text-section-heading text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-6">
            Why Our Industrial{' '}
            <span className="text-[#E53935]">Fire Solutions</span>
            {' '}Matter
          </h2>

          <div className="w-20 h-1 bg-[#E53935] mx-auto mb-6 rounded-full" />

          <p className="text-subheading text-gray-600 max-w-2xl mx-auto">
            Precision engineering and proven reliability for high-risk industrial environments.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-[#E53935]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left overflow-hidden"
              style={{ borderWidth: '1px' }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                {renderIcon(solution.iconName)}
              </div>

              <h3 className="text-card-title text-xl text-gray-900 mb-3 group-hover:text-[#E53935] transition-colors duration-300">
                {solution.title}
              </h3>

              <p className="text-body text-gray-600 flex-grow">
                {solution.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#E53935] to-transparent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
