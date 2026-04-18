'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faBriefcase, faShoppingCart, faWarehouse, faHardHat, faFlag, faUsers, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function WhoWeServe() {
  const industries = [
    {
      name: 'Residential Buildings',
      icon: faBuilding,
      description: 'Apartments, condominiums, and housing complexes',
      features: ['Fire alarms', 'Sprinkler systems', 'Emergency lighting']
    },
    {
      name: 'Commercial Properties',
      icon: faShoppingCart,
      description: 'Retail spaces, shopping centers, and commercial buildings',
      features: ['Extinguishers', 'Detection systems', 'Evacuation plans']
    },
    {
      name: 'Offices & Workspaces',
      icon: faBriefcase,
      description: 'Corporate offices, coworking spaces, and business centers',
      features: ['Safety training', 'Equipment maintenance', 'Compliance audits']
    },
    {
      name: 'Warehouses & Industrial Sites',
      icon: faWarehouse,
      description: 'Storage facilities, manufacturing plants, and industrial complexes',
      features: ['Hazard control', 'Specialized equipment', '24/7 monitoring']
    },
    {
      name: 'Construction Projects',
      icon: faHardHat,
      description: 'Building sites, infrastructure projects, and construction zones',
      features: ['Temporary systems', 'Site safety', 'Regulatory compliance']
    },
    {
      name: 'Government',
      icon: faFlag,
      description: 'Public buildings, institutions, and government facilities',
      features: ['High standards', 'Public safety', 'Official certifications']
    }
  ];

  return (
    <section className="w-full bg-linear-to-b from-gray-50 to-white py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-100/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-100/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
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
            We deliver tailored fire safety solutions across diverse industries and sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:border-[#E53935] hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
            >

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon Container */}
              <div className="mb-4">
                <div className="relative inline-block">
                  <div className="relative bg-linear-to-br from-[#E53935]/10 to-red-600/10 p-4 rounded-xl group-hover:shadow-lg transition-all duration-300">
                    <FontAwesomeIcon
                      icon={industry.icon}
                      className="w-8 h-8 text-[#E53935] transition-colors duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Industry Name */}
              <h3
                className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#E53935] transition-colors duration-300"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {industry.name}
              </h3>

              {/* Description */}
              <p
                className="text-gray-600 text-sm leading-relaxed mb-4 font-normal"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                {industry.description}
              </p>

              {/* Features List */}
              <div className="space-y-2">
                {industry.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="w-4 h-4 text-[#E53935] shrink-0"
                    />
                    <span className="text-xs text-gray-500" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        {/* Service Commitment */}
        <div className="mt-16 sm:mt-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative group bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#E53935] hover:shadow-2xl transition-all duration-300 overflow-hidden">

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(229, 57, 53, 0.3) 1px, transparent 0)`,
                  backgroundSize: '30px 30px'
                }} />
              </div>

              <div className="relative z-10 text-center">
                <div className="w-16 h-16 bg-[#E53935]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FontAwesomeIcon icon={faUsers} className="w-8 h-8 text-[#E53935]" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  Industry Expertise
                </h3>

                <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-6" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                  Regardless of your industry or sector, we understand the unique fire safety challenges you face and provide customized solutions that meet your specific needs and regulatory requirements.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-black text-[#E53935]" style={{ fontFamily: 'Oswald, sans-serif' }}>
                      6+
                    </div>
                    <div className="text-sm text-gray-500" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                      Industries
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-[#E53935]" style={{ fontFamily: 'Oswald, sans-serif' }}>
                      500+
                    </div>
                    <div className="text-sm text-gray-500" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                      Projects
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-[#E53935]" style={{ fontFamily: 'Oswald, sans-serif' }}>
                      150+
                    </div>
                    <div className="text-sm text-gray-500" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                      Clients
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black text-[#E53935]" style={{ fontFamily: 'Oswald, sans-serif' }}>
                      24/7
                    </div>
                    <div className="text-sm text-gray-500" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                      Support
                    </div>
                  </div>
                </div>
              </div>

              {/* Accent Lines */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
