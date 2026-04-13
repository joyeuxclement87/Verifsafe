'use client';

export default function FireSafetyAwareness() {
  return (
    <section id="fire-safety" className="w-full bg-white py-20 sm:py-24 lg:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          {/* Section Label */}
          <p
            className="text-[#E50914] text-sm sm:text-base font-bold tracking-widest uppercase mb-4"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            Fire safety awareness
          </p>

          {/* Main Heading */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Why Fire <span className="text-[#E50914]">Protection</span> Matters
          </h2>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto font-normal leading-relaxed"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            Fire safety preparation helps reduce risks and ensures buildings remain protected when emergencies happen.
          </p>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Card 1 */}
          <div className="group relative bg-white border-2 border-gray-100 rounded-lg p-8 sm:p-10 hover:border-[#E50914] hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center h-16 w-16 bg-gradient-to-br from-[#E50914] to-red-700 rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4v2m0 4v2M7.08 6.47a7 7 0 1 1 9.84 0M3.68 3.68a9 9 0 1 1 12.72 0" />
              </svg>
            </div>
            
            <h3
              className="text-2xl font-bold text-gray-900 mb-3"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Early Detection
            </h3>
            
            <p
              className="text-gray-700 text-base font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Smoke and heat detectors provide early warning, giving occupants precious time to evacuate safely.
            </p>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E50914] to-transparent rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white border-2 border-gray-100 rounded-lg p-8 sm:p-10 hover:border-[#E50914] hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center h-16 w-16 bg-gradient-to-br from-[#E50914] to-red-700 rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h3
              className="text-2xl font-bold text-gray-900 mb-3"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Risk Reduction
            </h3>
            
            <p
              className="text-gray-700 text-base font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Proper equipment and maintenance minimize fire risks and prevent small incidents from becoming disasters.
            </p>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E50914] to-transparent rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white border-2 border-gray-100 rounded-lg p-8 sm:p-10 hover:border-[#E50914] hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center h-16 w-16 bg-gradient-to-br from-[#E50914] to-red-700 rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h3
              className="text-2xl font-bold text-gray-900 mb-3"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Peace of Mind
            </h3>
            
            <p
              className="text-gray-700 text-base font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Knowing your building is protected with certified systems lets you focus on what matters most.
            </p>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E50914] to-transparent rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-center justify-center gap-6 pt-12 border-t border-gray-200">
          <button
            className="px-8 py-4 bg-[#E50914] text-white font-medium rounded-lg text-lg transition-all duration-300 hover:bg-red-700 hover:shadow-lg active:scale-95 shadow-md inline-flex items-center gap-2 group"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            Get Fire Safety Consultation
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <span
            className="text-gray-600 text-sm"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            Schedule your assessment today
          </span>
        </div>
      </div>
    </section>
  );
}
