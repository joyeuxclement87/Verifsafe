'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faHotel, faWarehouse, faSchool, faHospital, faBuilding } from '@fortawesome/free-solid-svg-icons';

export default function WhoWeServe() {
  const industries = [
    { name: 'Offices', icon: faBriefcase },
    { name: 'Hotels', icon: faHotel },
    { name: 'Warehouses', icon: faWarehouse },
    { name: 'Schools', icon: faSchool },
    { name: 'Hospitals', icon: faHospital },
    { name: 'Residential buildings', icon: faBuilding }
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
            Who We Serve
          </p>

          {/* Main Heading */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Industries We <span className="text-[#E50914]">Protect</span>
          </h2>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-normal"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            We support industries and environments which require reliable fire safety solutions.
          </p>
        </div>

        {/* Industries Grid - Compact Grid Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-gray-100 rounded-lg p-6 sm:p-8 hover:border-[#E50914] hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-[#E50914] to-red-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto mb-4">
                <FontAwesomeIcon
                  icon={industry.icon}
                  className="w-8 h-8 text-white"
                />
              </div>

              {/* Content */}
              <div>
                {/* Industry Name */}
                <h3
                  className="text-base sm:text-lg font-bold text-gray-900"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  {industry.name}
                </h3>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E50914] to-transparent rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="flex items-center justify-center gap-3 pt-12 border-t border-gray-200">
          <div className="flex-1 h-1 bg-gradient-to-r from-transparent to-[#E50914]" />
          <p
            className="text-gray-700 text-sm sm:text-base font-semibold whitespace-nowrap px-4"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            Safety for Every Sector
          </p>
          <div className="flex-1 h-1 bg-gradient-to-l from-transparent to-[#E50914]" />
        </div>
      </div>
    </section>
  );
}
