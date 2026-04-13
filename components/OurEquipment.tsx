'use client';

import Image from 'next/image';

export default function OurEquipment() {
  const equipment = [
    {
      image: 'https://images.unsplash.com/photo-1633356715461-ef5166ab0fed?w=500&h=500&fit=crop',
      title: 'Fire Extinguishers',
      description: 'Portable firefighting equipment which helps control small fires.'
    },
    {
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop',
      title: 'Fire Alarm Systems',
      description: 'Detection systems which alert occupants during emergencies.'
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
      title: 'Fire Hose Reels',
      description: 'Equipment which provides water supply for firefighting.'
    },
    {
      image: 'https://images.unsplash.com/photo-1578926314433-93b2f5e5a18d?w=500&h=500&fit=crop',
      title: 'Fire Detection Devices',
      description: 'Smoke and heat detectors which identify fire risks early.'
    },
    {
      image: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=500&h=500&fit=crop',
      title: 'Emergency Lights & Exit Signs',
      description: 'Lighting systems which guide people to safety.'
    },
    {
      image: 'https://images.unsplash.com/photo-1581092161562-40038fbbb237?w=500&h=500&fit=crop',
      title: 'Fire Safety Accessories',
      description: 'Additional safety equipment which supports fire protection.'
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-20 sm:py-24 lg:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          {/* Section Label */}
          <p
            className="text-[#E50914] text-sm sm:text-base font-bold tracking-widest uppercase mb-4"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            Our Equipment
          </p>

          {/* Main Heading */}
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            What We <span className="text-[#E50914]">Provide</span>
          </h2>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-normal"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            We supply fire safety equipment which helps detect, control, and respond to fire emergencies in different environments.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-16 sm:mb-20">
          {equipment.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-gray-100 rounded-lg p-8 sm:p-10 hover:border-[#E50914] hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="w-full h-48 sm:h-56 bg-gray-200 mb-6 overflow-hidden relative rounded-lg group-hover:shadow-md hover:scale-105 transition-all duration-300">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3
                className="text-xl sm:text-2xl font-bold text-gray-900 mb-3"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                {item.description}
              </p>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E50914] to-transparent rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-gray-200">
          <button
            className="px-8 py-4 bg-[#E50914] text-white font-bold rounded-lg text-lg transition-all duration-300 hover:bg-red-700 active:scale-95 shadow-md hover:shadow-lg inline-flex items-center gap-2 group"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            View All Equipment
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          {/* Accent Text */}
          <span
            className="text-gray-600 text-sm"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            Comprehensive fire safety solutions for every need
          </span>
        </div>
      </div>
    </section>
  );
}
