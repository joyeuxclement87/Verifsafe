'use client';

import { Building, ShoppingCart, Briefcase, BuildingWarehouse, Crane, Flag } from 'tabler-icons-react';

export default function WhoWeServe() {
  const industries = [
    {
      name: 'Residential Buildings',
      icon: <Building size={22} strokeWidth={1.5} />,
      description: 'Apartments, condominiums, and housing complexes',
    },
    {
      name: 'Commercial Properties',
      icon: <ShoppingCart size={22} strokeWidth={1.5} />,
      description: 'Retail spaces, shopping centers, and commercial buildings',
    },
    {
      name: 'Offices & Workspaces',
      icon: <Briefcase size={22} strokeWidth={1.5} />,
      description: 'Corporate offices, coworking spaces, and business centers',
    },
    {
      name: 'Warehouses & Industrial',
      icon: <BuildingWarehouse size={22} strokeWidth={1.5} />,
      description: 'Storage facilities, manufacturing plants, and industrial complexes',
    },
    {
      name: 'Construction Projects',
      icon: <Crane size={22} strokeWidth={1.5} />,
      description: 'Building sites, infrastructure projects, and construction zones',
    },
    {
      name: 'Government & Public',
      icon: <Flag size={22} strokeWidth={1.5} />,
      description: 'Public buildings, institutions, and government facilities',
    }
  ];

  return (
    <section className="w-full bg-linear-to-b from-white to-gray-50 py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gray-100/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          {/* Section Label */}
          <div className="inline-block mb-4">
            <p
              className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <Building size={16} />
              Industries
            </p>
          </div>

          {/* Main Heading */}
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Who We <span className="text-[#E53935]">Serve</span>
          </h2>

          {/* Decorative Divider */}
          <div className="w-20 h-1 bg-[#E53935] mx-auto mt-6 mb-6 rounded-full" />

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            Tailored fire safety solutions across diverse industries and sectors.
          </p>
        </div>

        {/* Industries Grid — compact 2-row, 3-col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#E53935]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="shrink-0 w-11 h-11 rounded-xl bg-[#E53935]/8 border border-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935]/15 group-hover:scale-110 transition-all duration-300">
                {industry.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3
                  className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#E53935] transition-colors duration-300"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {industry.name}
                </h3>
                <p
                  className="text-sm text-gray-500 leading-relaxed font-normal"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  {industry.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#E53935] to-transparent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
