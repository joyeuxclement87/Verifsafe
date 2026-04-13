'use client';

import Image from 'next/image';

export default function OurServices() {
  const services = [
    {
      image: '/service-1.png',
      title: 'Fire Equipment Supply',
      description: 'Providing certified fire safety equipment for reliable protection.',
      features: ['Extinguishers', 'Fire hoses', 'Safety signs', 'Emergency lighting']
    },
    {
      image: '/service-2.png',
      title: 'Installation Services',
      description: 'Professional installation of fire safety systems and equipment.',
      features: ['System setup', 'Safety testing', 'Compliance check', 'Documentation']
    },
    {
      image: '/service-3.png',
      title: 'Inspection & Testing',
      description: 'Ensuring fire protection equipment works properly and safely.',
      features: ['Regular inspections', 'Performance testing', 'Safety audits', 'Reports']
    },
    {
      image: '/service-4.png',
      title: 'Fire Extinguisher Refilling',
      description: 'Refilling and servicing extinguishers to keep them ready for use.',
      features: ['Pressure testing', 'Agent refilling', 'Seal replacement', 'Certification']
    },
    {
      image: '/service-5.png',
      title: 'Maintenance Services',
      description: 'Regular maintenance to keep fire protection systems reliable.',
      features: ['Preventive care', 'System updates', 'Emergency repairs', '24/7 support']
    }
  ];

  return (
    <section id="our-services" className="w-full bg-gradient-to-br from-gray-50 via-red-50 to-gray-50 py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(229, 9, 20, 0.1) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-red-100 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-yellow-100 rounded-full blur-lg animate-bounce" style={{ animationDelay: '1s' }} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          {/* Section Label */}
          <p
            className="text-[#E50914] text-sm sm:text-base font-bold tracking-widest uppercase mb-4"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            Our Services
          </p>

          {/* Main Heading */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            What We <span className="text-[#E50914]">Do</span>
          </h2>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-normal"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            We provide fire safety services which ensure that fire protection systems are installed, inspected, and maintained properly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 rounded-xl p-6 sm:p-8 overflow-hidden hover:border-red-400 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:bg-white"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-md mb-6 group-hover:shadow-lg transition-all duration-300">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Title */}
              <h3
                className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-gray-700 text-base font-normal leading-relaxed mb-4"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full flex-shrink-0" />
                    <span className="text-sm text-gray-600 font-normal" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="flex items-center justify-center gap-3 mt-16 sm:mt-20 pt-12 border-t border-red-200/50">
          <div className="flex-1 h-1 bg-gradient-to-r from-transparent to-red-400" />
          <div className="bg-red-100 px-6 py-2 rounded-full">
            <p
              className="text-red-700 text-sm sm:text-base font-semibold whitespace-nowrap"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              🔥 Comprehensive Fire Safety Solutions
            </p>
          </div>
          <div className="flex-1 h-1 bg-gradient-to-l from-transparent to-red-400" />
        </div>
      </div>
    </section>
  );
}
