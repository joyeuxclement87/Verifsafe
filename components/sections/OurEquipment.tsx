'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

export default function OurEquipment() {
  const equipment = [
    {
      image: '/equipment-1.png',
      title: 'Fire Extinguishers',
      description: 'Portable firefighting equipment which helps control small fires.',
      link: '/equipments/fire-extinguishers'
    },
    {
      image: '/equipment-2.png',
      title: 'Fire Alarm Systems',
      description: 'Detection systems which alert occupants during emergencies.',
      link: '/equipments/fire-alarm-systems'
    },
    {
      image: '/equipment-3.png',
      title: 'Fire Hose Reels',
      description: 'Equipment which provides water supply for firefighting.',
      link: '/equipments/fire-hose-reels'
    },
    {
      image: '/equipment-4.png',
      title: 'Fire Detection Devices',
      description: 'Smoke and heat detectors which identify fire risks early.'
    },
    {
      image: '/equipment-5.png',
      title: 'Emergency Lights & Exit Signs',
      description: 'Lighting systems which guide people to safety.'
    },
    {
      image: '/equipment-6.png',
      title: 'Fire Safety Accessories',
      description: 'Additional safety equipment which supports fire protection.'
    }
  ];

  return (
    <section className="w-full bg-white py-18 sm:py-21 lg:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gray-400/5 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-18">
          {/* Section Label */}
          <div className="inline-block mb-4">
            <p
              className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <FontAwesomeIcon icon={faCogs} className="w-4 h-4" />
              Our Equipment
            </p>
          </div>

          {/* Main Heading */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            What We <span className="text-[#E53935]">Provide</span>
          </h2>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-normal leading-relaxed"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            We supply fire safety equipment which helps detect, control, and respond to fire emergencies in different environments.
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-9 mb-14 sm:mb-18">
          {equipment.slice(0, 3).map((item, index) => (
            <Link
              key={index}
              href={item.link || '#'}
              className="group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 sm:p-10 hover:border-[#E53935] hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
              style={{ borderWidth: '1px', opacity: 0.95 }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Image Container */}
              <div className="w-full h-48 sm:h-56 bg-gray-200 mb-6 overflow-hidden relative rounded-lg group-hover:shadow-md transition-all duration-300">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3
                className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E53935] transition-colors duration-300"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal mb-4"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                {item.description}
              </p>

              {/* View Details */}
              <span className="inline-block text-[#E53935] font-semibold text-sm group-hover:gap-2 transition-all">
                View Details →
              </span>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E53935] to-transparent rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-gray-200">
          <Link
            href="/equipments"
            className="px-7 py-3 bg-[#E53935] text-white font-medium rounded-lg text-base transition-all duration-300 hover:bg-red-700 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg inline-flex items-center gap-2 group border border-[#E53935]"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            View All Equipment
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>

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
