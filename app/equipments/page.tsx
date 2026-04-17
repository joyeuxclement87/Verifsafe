'use client';

import Image from 'next/image';
import { Tool, FileText } from 'tabler-icons-react';
import Link from 'next/link';

const equipmentDetails = [
  {
    id: 1,
    image: '/equipment-1.png',
    title: 'Fire Extinguishers',
    description: 'Portable firefighting equipment which helps control small fires.',
    link: '/equipments/fire-extinguishers'
  },
  {
    id: 2,
    image: '/equipment-2.png',
    title: 'Fire Alarm Systems',
    description: 'Detection systems which alert occupants during emergencies.',
    link: '/equipments/fire-alarm-systems'
  },
  {
    id: 3,
    image: '/equipment-3.png',
    title: 'Fire Hose Reels',
    description: 'Equipment which provides water supply for firefighting.',
    link: '/equipments/fire-hose-reels'
  },
  {
    id: 4,
    image: '/equipment-4.png',
    title: 'Fire Detection Devices',
    description: 'Smoke and heat detectors which identify fire risks early.',
    link: '/equipments/fire-detection-devices'
  },
  {
    id: 5,
    image: '/equipment-5.png',
    title: 'Emergency Lights & Exit Signs',
    description: 'Lighting systems which guide people to safety.',
    link: '/equipments/emergency-lights'
  },
  {
    id: 6,
    image: '/equipment-6.png',
    title: 'Fire Safety Accessories',
    description: 'Additional safety equipment which supports fire protection.',
    link: '/equipments/fire-safety-accessories'
  }
];

export default function EquipmentsPage() {
  return (
    <main className="w-full">
      {/* Equipment Details Section */}
      <section className="w-full bg-linear-to-b from-gray-50 via-white to-gray-50 py-20 sm:py-24 lg:py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-100/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <p
                className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                <Tool size={16} />
                Equipment Details
              </p>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Our <span className="text-[#E53935]">Products</span>
            </h2>

            <p
              className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-normal leading-relaxed"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Click on any equipment below to learn more about features and applications
            </p>
          </div>

          {/* Equipment Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-16 sm:mb-20">
            {equipmentDetails.map((equipment) => (
              <Link
                key={equipment.id}
                href={equipment.link}
                className="group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 sm:p-10 hover:border-[#E53935] hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                style={{ borderWidth: '1px', opacity: 0.95 }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Image Container */}
                <div className="w-full h-48 sm:h-56 bg-gray-200 mb-6 overflow-hidden relative rounded-lg group-hover:shadow-md transition-all duration-300">
                  <Image
                    src={equipment.image}
                    alt={equipment.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Title */}
                <h3
                  className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E53935] transition-colors duration-300"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {equipment.title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal mb-4"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  {equipment.description}
                </p>

                {/* Learn More */}
                <span className="inline-block text-[#E53935] font-semibold text-sm group-hover:gap-2 transition-all">
                  View Details →
                </span>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-linear-to-r from-[#FF4D4D] to-[#E53935]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>
            Need the Right Equipment?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today to find the perfect fire safety equipment for your needs
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#E53935] font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            <FileText size={18} strokeWidth={1} />
            Request Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
