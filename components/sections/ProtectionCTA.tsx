'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function ProtectionCTA() {
  const features = [
    {
      icon: faClipboardCheck,
      title: 'Free On-Site Inspection',
      description: 'Comprehensive audit of your fire safety infrastructure'
    },
    {
      icon: faPhone,
      title: 'Direct Line',
      description: 'Reach our experts instantly at +250 789 000 022'
    },
    {
      icon: faWhatsapp,
      title: 'WhatsApp Response',
      description: 'Quick support through your preferred messaging platform'
    }
  ];

  return (
    <section className="w-full bg-gradient-to-r from-gray-900 via-red-900 to-gray-900 py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          {/* Main Heading */}
          <h2
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Do Not Wait For The <span className="text-yellow-400">Smoke.</span>
          </h2>

          {/* Description */}
          <p
            className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-normal"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            Protect your people and your assets with the authority in industrial fire safety. Schedule your professional audit today.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-16 sm:mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 sm:p-10 hover:border-yellow-400/50 hover:bg-white/15 hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
                style={{ borderWidth: '1px' }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Container */}
                <div className="mb-6">
                  <div className="relative inline-block">
                    <div className="relative bg-gradient-to-br from-[#FF4D4D]/20 to-[#E53935]/20 p-4 rounded-lg">
                      <FontAwesomeIcon
                        icon={feature.icon}
                        className="w-7 h-7 text-yellow-400 transition-colors duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-lg sm:text-xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 mb-3 leading-snug"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm text-gray-300 leading-relaxed font-normal"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF4D4D] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Primary Button */}
          <button
            className="px-10 py-4 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 active:scale-95 shadow-lg inline-flex items-center gap-3 group"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Schedule Audit Now
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          {/* Secondary Button */}
          <button
            className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-lg border border-white/30 transition-all duration-300 hover:border-yellow-400 hover:bg-white/15 hover:shadow-xl active:scale-95 inline-flex items-center gap-3 group"
            style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948-.684l1.498-4.493a1 1 0 011.502-.684l1.498 4.493a1 1 0 00.948.684H19a2 2 0 012 2v1M3 5a2 2 0 002 2h3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 001.502.684l1.498-4.493a1 1 0 00.948-.684H19a2 2 0 012-2m-2 5v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6m14 0H9" />
            </svg>
            Contact Us Today
          </button>
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center">
          <p
            className="text-gray-300 text-sm"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            Response within 2 hours • 24/7 Emergency Support Available
          </p>
        </div>
      </div>
    </section>
  );
}
