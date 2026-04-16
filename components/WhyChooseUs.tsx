'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faShieldAlt, faClock, faAward } from '@fortawesome/free-solid-svg-icons';

export default function WhyChooseUs() {
  const features = [
    {
      icon: faAward,
      title: 'Certified Equipment',
      description: 'Premium, internationally certified fire safety equipment',
      number: '01'
    },
    {
      icon: faShieldAlt,
      title: 'Expert Installation',
      description: 'Professional technicians with years of experience',
      number: '02'
    },
    {
      icon: faClock,
      title: '24/7 Support',
      description: 'Round-the-clock maintenance and emergency services',
      number: '03'
    },
    {
      icon: faCheckCircle,
      title: 'Quality Assured',
      description: 'Regular inspections and compliance verification',
      number: '04'
    }
  ];

  return (
    <section id="why-choose-us" className="relative w-full bg-white py-20 sm:py-24 lg:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 sm:mb-20">
          <p
            className="text-[#E50914] text-sm sm:text-base font-bold tracking-widest uppercase mb-4"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            Our Advantages
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 text-center mb-6 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Why Choose{' '}
            <span className="text-[#E50914]">Verifisafe</span>
          </h2>
          <p
            className="text-center text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-normal"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            We combine cutting-edge technology with professional expertise to deliver the best fire protection solutions.
          </p>
        </div>

        {/* Features Grid - Modern Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white border border-gray-300 rounded-lg p-8 sm:p-10 hover:border-[#E50914] hover:shadow-2xl hover:scale-105 transition-all duration-300"
              style={{ borderWidth: '1px', opacity: 0.9 }}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#E50914]/20 to-red-600/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#E50914] group-hover:to-red-600 transition-all duration-300 transform group-hover:scale-110">
                <FontAwesomeIcon icon={feature.icon} className="w-8 h-8 text-[#E50914] group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Feature Title */}
              <h3
                className="text-lg sm:text-xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p
                className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                {feature.description}
              </p>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E50914] to-transparent rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
