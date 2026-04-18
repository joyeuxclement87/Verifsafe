'use client';

export default function ProtectionCTA() {
  return (
    <section className="w-full bg-gray-950 py-12 sm:py-14 lg:py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E53935]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Main Heading */}
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Do Not Wait For The <span className="text-yellow-400">Smoke.</span>
          </h2>

          {/* Description */}
          <p
            className="text-lg sm:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-normal"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            Protect your people and your assets with the authority in industrial fire safety. Schedule your professional audit today.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          {/* Primary Button */}
          <button
            onClick={() => {
              window.location.href = '/services#project-form';
            }}
            className="px-10 py-4 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 active:scale-95 shadow-lg inline-flex items-center gap-3 group"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Request Quote
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          {/* Secondary Button */}
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-10 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-lg border border-white/30 transition-all duration-300 hover:border-yellow-400 hover:bg-white/15 hover:shadow-xl active:scale-95 inline-flex items-center gap-3 group"
            style={{ fontFamily: 'Noto Sans, sans-serif', borderWidth: '1px' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Us
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        {/* Bottom Text */}
        <div className="text-center">
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
