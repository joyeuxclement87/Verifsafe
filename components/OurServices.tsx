'use client';

import Image from 'next/image';

export default function OurServices() {
  const services = [
    {
      image: 'https://images.unsplash.com/photo-1578926314433-93b2f5e5a18d?w=500&h=500&fit=crop',
      title: 'Fire Equipment Supply',
      description: 'Providing certified fire safety equipment for reliable protection.'
    },
    {
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop',
      title: 'Installation Services',
      description: 'Professional installation of fire safety systems and equipment.'
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
      title: 'Inspection & Testing',
      description: 'Ensuring fire protection equipment works properly and safely.'
    },
    {
      image: 'https://images.unsplash.com/photo-1633356715461-ef5166ab0fed?w=500&h=500&fit=crop',
      title: 'Fire Extinguisher Refilling',
      description: 'Refilling and servicing extinguishers to keep them ready for use.'
    },
    {
      image: 'https://images.unsplash.com/photo-1581092161562-40038fbbb237?w=500&h=500&fit=crop',
      title: 'Maintenance Services',
      description: 'Regular maintenance to keep fire protection systems reliable.'
    }
  ];

  return (
    <section className="w-full bg-white py-20 sm:py-24 lg:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-gray-100 rounded-lg p-6 overflow-hidden hover:border-[#E50914] hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-md mb-4 group-hover:shadow-lg transition-all duration-300">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3
                className="text-lg sm:text-xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-gray-700 text-sm font-normal leading-relaxed"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                {service.description}
              </p>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E50914] to-transparent rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="flex items-center justify-center gap-3 mt-16 sm:mt-20 pt-12 border-t border-gray-200">
          <div className="flex-1 h-1 bg-gradient-to-r from-transparent to-[#E50914]" />
          <p
            className="text-gray-700 text-sm sm:text-base font-semibold whitespace-nowrap px-4"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            Comprehensive Fire Safety Solutions
          </p>
          <div className="flex-1 h-1 bg-gradient-to-l from-transparent to-[#E50914]" />
        </div>
      </div>
    </section>
  );
}
