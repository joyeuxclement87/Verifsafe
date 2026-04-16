'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faFireExtinguisher, faBolt, faPersonWalking, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export default function FireSafetyTraining() {
  const trainingPoints = [
    {
      icon: faFire,
      title: 'How to identify fire risks',
      description: 'Learn to spot structural and electrical vulnerabilities.'
    },
    {
      icon: faFireExtinguisher,
      title: 'How to use fire extinguishers correctly',
      description: 'Master proper handling and operation techniques.'
    },
    {
      icon: faBolt,
      title: 'Emergency response procedures',
      description: 'Know the right steps when every second counts.'
    },
    {
      icon: faPersonWalking,
      title: 'Evacuation planning and safety practices',
      description: 'Create and practice effective escape routes.'
    }
  ];

  return (
    <section id="fire-safety-training" className="w-full bg-gradient-to-b from-white to-gray-50 py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-100/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-100/20 rounded-full blur-3xl opacity-20" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          {/* Section Label */}
          <div className="inline-block mb-4">
            <p
              className="text-[#E50914] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <FontAwesomeIcon icon={faGraduationCap} className="w-4 h-4" />
              Education & Training
            </p>
          </div>

          {/* Main Heading */}
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Fire Safety <span className="text-[#E50914]">Training</span>
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
                className="bg-white border border-gray-200 rounded-xl p-8 sm:p-6 hover:border-[#E50914] hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden"
                style={{ borderWidth: '1px', opacity: 0.95 }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E50914] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Container */}
                <div className="mb-4">
                  <div className="relative inline-block">
                    <div className="relative bg-gradient-to-br from-[#E50914]/10 to-red-600/10 p-3 rounded-lg group-hover:from-[#E50914]/20 group-hover:to-red-600/20 transition-all duration-300">
                      <FontAwesomeIcon
                        icon={point.icon}
                        className="w-6 h-6 text-[#E50914] transition-colors duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#E50914] transition-colors duration-300 mb-2 leading-snug"
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
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E50914] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </div>
          ))}
        </div>

        {/* Key Message Box */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-[#E50914]/5 to-red-600/5 rounded-2xl" />
          
          <div className="relative bg-white border border-gray-200 rounded-2xl p-8 sm:p-10 text-center hover:border-[#E50914] hover:shadow-xl transition-all duration-300"
            style={{ borderWidth: '1px', opacity: 0.95 }}
          >
            <p
              className="text-xl sm:text-2xl font-bold text-gray-900 leading-relaxed"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Training is <span className="text-[#E50914]">practical, easy to understand</span>, and designed for <span className="text-[#E50914]">real-life situations</span>.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            className="px-10 py-4 bg-gradient-to-r from-[#E50914] to-red-600 text-white font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 active:scale-95 shadow-lg inline-flex items-center gap-3 group border border-[#E50914]"
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
