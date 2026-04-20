'use client';

import { Heart, Gavel, Shield, Building } from 'tabler-icons-react';

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

  const renderIcon = (iconName: string) => {
    switch(iconName) {
      case 'heart': return <Heart size={44} className="text-[#E53935]" strokeWidth={1} />;
      case 'gavel': return <Gavel size={44} className="text-[#E53935]" strokeWidth={1} />;
      case 'shield': return <Shield size={44} className="text-[#E53935]" strokeWidth={1} />;
      default: return null;
    }
  };

  return (
    <section id="industrial-solutions" className="w-full bg-white py-18 sm:py-21 lg:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gray-400/5 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-18">
          {/* Section Label */}
          <div className="inline-block mb-4">
            <p
              className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest  px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <Building size={16} />
              Industrial Solutions
            </p>
          </div>

          {/* Main Heading */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Why Our Industrial{' '}
            <span className="text-[#E53935]">Fire Solutions</span>
            {' '}Matter
          </h2>

          {/* Decorative Divider */}
          <div className="w-20 h-1 bg-[#E53935] mx-auto mt-6 mb-6 rounded-full" />

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            Precision engineering and proven reliability for high-risk industrial environments.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-[#E53935]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left overflow-hidden"
              style={{ borderWidth: '1px' }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon Container */}
              <div className="mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                {renderIcon(solution.iconName)}
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E53935] transition-colors duration-300"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {solution.title}
              </h3>

              {/* Description */}
              <p
                className="text-base text-gray-600 leading-relaxed font-normal flex-grow"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                {solution.description}
              </p>

              {/* Bottom Accent Line */}
              <div className="mt-6 absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#E53935] to-transparent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
