'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faGavel, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

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
    <section id="industrial-solutions" className="w-full bg-white py-20 sm:py-24 lg:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          {/* Main Heading */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Why Our Industrial{' '}
            <span className="text-[#E50914]">Fire Solutions</span>
            {' '}Matter
          </h2>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-normal leading-relaxed"
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
              className="group relative bg-white border border-gray-300 rounded-lg p-8 sm:p-10 hover:border-[#E50914] hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col"
              style={{ borderWidth: '1px', opacity: 0.9 }}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#E50914]/20 to-red-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#E50914] group-hover:to-red-600 transition-all duration-300 transform group-hover:scale-110">
                <FontAwesomeIcon 
                  icon={solution.icon} 
                  className="w-8 h-8 text-[#E50914] group-hover:text-white transition-colors duration-300" 
                />
              </div>

              {/* Title */}
              <h3
                className="text-lg sm:text-xl font-bold text-gray-900 mb-3"
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
              <div className="mt-6 absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E50914] to-transparent rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
