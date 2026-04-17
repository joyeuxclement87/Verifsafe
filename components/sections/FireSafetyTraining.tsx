'use client';

import { Flame, Tool, Bolt, Walk, School } from 'tabler-icons-react';

export default function FireSafetyTraining() {
  const trainingPoints = [
    {
      iconName: 'fire',
      title: 'How to identify fire risks',
      description: 'Learn to spot structural and electrical vulnerabilities.'
    },
    {
      iconName: 'extinguisher',
      title: 'How to use fire extinguishers correctly',
      description: 'Master proper handling and operation techniques.'
    },
    {
      iconName: 'bolt',
      title: 'Emergency response procedures',
      description: 'Know the right steps when every second counts.'
    },
    {
      iconName: 'walk',
      title: 'Evacuation planning and safety practices',
      description: 'Create and practice effective escape routes.'
    }
  ];

  const renderIcon = (iconName: string) => {
    switch(iconName) {
      case 'fire': return <Flame size={24} className="text-[#E53935]" />;
      case 'extinguisher': return <Tool size={24} className="text-[#E53935]" />;
      case 'bolt': return <Bolt size={24} className="text-[#E53935]" />;
      case 'walk': return <Walk size={24} className="text-[#E53935]" />;
      default: return null;
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20 sm:py-24 lg:py-32 relative overflow-hidden\">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-100/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-100/20 rounded-full blur-3xl opacity-20" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          {/* Section Label */}
          <div className="inline-block mb-4">
            <p
              className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <School size={16} />
              Education & Training
            </p>
          </div>

          {/* Main Heading */}
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Fire Safety <span className="text-[#E53935]">Training</span>
          </h2>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            Our fire safety training programs equip individuals and teams with the knowledge and confidence to respond effectively during emergencies.
          </p>
        </div>

        {/* Training Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {trainingPoints.map((point, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div
                className="bg-white border border-gray-200 rounded-xl p-8 sm:p-6 hover:border-[#E53935] hover:shadow-2xl hover:scale-105 transition-all duration-300 h-full relative overflow-hidden"
                style={{ borderWidth: '1px' }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Container */}
                <div className="mb-4">
                  <div className="relative inline-block">
                    <div className="relative bg-gradient-to-br from-[#E53935]/10 to-red-600/10 p-3 rounded-lg">
                      {renderIcon(point.iconName)}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#E53935] transition-colors duration-300 mb-2 leading-snug"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {point.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm text-gray-600 leading-relaxed font-normal"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  {point.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E53935] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </div>
          ))}
        </div>

        {/* Key Message Box */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-[#E53935]/5 to-red-600/5 rounded-2xl" />
          
          <div className="relative bg-white border border-gray-200 rounded-2xl p-8 sm:p-10 text-center hover:border-[#E53935] hover:shadow-xl transition-all duration-300"
            style={{ borderWidth: '1px', opacity: 0.95 }}
          >
            <p
              className="text-xl sm:text-2xl font-bold text-gray-900 leading-relaxed"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Training is <span className="text-[#E53935]">practical, easy to understand</span>, and designed for <span className="text-[#E53935]">real-life situations</span>.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            className="px-10 py-4 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 shadow-lg inline-flex items-center gap-3 group border border-[#E53935]"
            style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m0 0h6m-6-6h6m-6 6h6" />
            </svg>
            Book Training Session
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
