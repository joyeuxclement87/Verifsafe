'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faBriefcase, faShoppingCart, faWarehouse, faHardHat, faFlag, faUsers } from '@fortawesome/free-solid-svg-icons';

export default function WhoWeServe() {
  const industries = [
    { name: 'Residential Buildings', icon: faBuilding },
    { name: 'Commercial Properties', icon: faShoppingCart },
    { name: 'Offices & Workspaces', icon: faBriefcase },
    { name: 'Warehouses & Industrial Sites', icon: faWarehouse },
    { name: 'Construction Projects', icon: faHardHat },
    { name: 'Government', icon: faFlag }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-100 via-white to-gray-50 py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-red-100/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-20 w-56 h-56 bg-yellow-100/20 rounded-full blur-3xl opacity-20" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          {/* Section Label */}
          <div className="inline-block mb-4">
            <p
              className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <FontAwesomeIcon icon={faUsers} className="w-4 h-4" />
              Our Coverage
            </p>
          </div>

          {/* Main Heading */}
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Who We <span className="text-[#E53935]">Serve</span>
          </h2>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            We work with a wide range of clients, delivering tailored fire safety solutions for different needs.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div
                className="bg-white border border-gray-200 rounded-xl p-8 sm:p-10 hover:border-[#E53935] hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden"
                style={{ borderWidth: '1px', opacity: 0.95 }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Container */}
                <div className="mb-6">
                  <div className="relative inline-block">
                    <div className="relative bg-gradient-to-br from-[#E53935]/10 to-red-600/10 p-4 rounded-xl group-hover:from-[#E53935]/20 group-hover:to-red-600/20 transition-all duration-300">
                      <FontAwesomeIcon
                        icon={industry.icon}
                        className="w-7 h-7 text-[#E53935] transition-colors duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Industry Name */}
                <h3
                  className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#E53935] transition-colors duration-300 leading-snug"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {industry.name}
                </h3>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="relative">
          {/* Background card */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#E53935]/5 to-red-600/5 rounded-2xl" />
          
          <div className="relative bg-white border border-gray-200 rounded-2xl p-8 sm:p-12 text-center hover:border-[#E53935] hover:shadow-xl transition-all duration-300"
            style={{ borderWidth: '1px', opacity: 0.95 }}
          >
            <p
              className="text-xl sm:text-2xl font-bold text-gray-900"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              No matter the size or type of your space, we ensure the <span className="text-[#E53935]">right level of protection</span>.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                className="px-8 py-3 bg-[#E53935] text-white font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 shadow-md inline-flex items-center gap-2 group border border-[#E53935]"
                style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px' }}
              >
                Get Your Solution
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
