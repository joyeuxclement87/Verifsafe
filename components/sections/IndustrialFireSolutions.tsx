'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faGavel, faShieldAlt, faIndustry } from '@fortawesome/free-solid-svg-icons';

export default function IndustrialFireSolutions() {
  const solutions = [
    {
      icon: faHeartbeat,
      title: 'Life-Saving Protocols',
      description: 'Advanced detection provides the critical seconds needed for total building evacuation.'
    },
    {
      icon: faGavel,
      title: 'Uncompromising Compliance',
      description: 'Eliminate legal risk with systems that exceed local and international fire safety codes.'
    },
    {
      icon: faShieldAlt,
      title: 'Asset Preservation',
      description: 'Our clean-agent suppression protects electronics and high-value equipment from damage.'
    }
  ];

  return (
    <section id="industrial-solutions" className="w-full bg-gradient-to-b from-white to-gray-50 py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-100/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          {/* Section Label */}
          <div className="inline-block mb-4">
            <p
              className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <FontAwesomeIcon icon={faIndustry} className="w-4 h-4" />
              Industrial Solutions
            </p>
          </div>

          {/* Main Heading */}
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Why Our Industrial{' '}
            <span className="text-[#E53935]">Fire Solutions</span>
            {' '}Matter
          </h2>

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
              className="group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 sm:p-10 hover:border-[#E53935] hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col overflow-hidden"
              style={{ borderWidth: '1px' }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Icon Container */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#E53935]/20 to-red-600/20 rounded-lg flex items-center justify-center mb-6">
                <FontAwesomeIcon 
                  icon={solution.icon} 
                  className="w-8 h-8 text-[#E53935]" 
                />
              </div>

              {/* Title */}
              <h3
                className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E53935] transition-colors duration-300"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {solution.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal flex-grow"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                {solution.description}
              </p>

              {/* Bottom Accent Line */}
              <div className="mt-6 absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E53935] to-transparent rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
