'use client';

export default function CallToAction() {
  return (
    <section id="cta" className="w-full bg-gray-900 py-20 sm:py-24 lg:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Label */}
            <p
              className="text-[#FFC107] text-sm sm:text-base font-bold tracking-widest uppercase"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              Ready to Protect?
            </p>

            {/* Main Heading */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Take the <span className="text-[#FFC107]">Next Step</span>
            </h2>

            {/* Description */}
            <p
              className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Don&apos;t wait for emergencies. Our expert team is ready to help you build comprehensive fire safety solutions tailored to your specific needs.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                { title: 'Expert Assessment', desc: 'Professional evaluation of your current fire safety setup' },
                { title: 'Custom Solutions', desc: 'Tailored equipment and services for your requirements' },
                { title: 'Full Support', desc: '24/7 assistance and maintenance after installation' }
              ].map((point, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 bg-[#E50914]">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-bold" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                      {point.title}
                    </h4>
                    <p className="text-gray-400 text-sm font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - CTA Box */}
          <div className="bg-gradient-to-br from-[#E50914] to-red-700 p-10 sm:p-12">
            {/* Icon */}
            <div className="mb-8">
              <div className="h-16 w-16 bg-white/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>

            {/* Heading */}
            <h3
              className="text-xl sm:text-2xl font-black text-white mb-4"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Get Your Fire Safety Consultation
            </h3>

            {/* Description */}
            <p
              className="text-white/90 mb-8 font-normal text-base"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Connect with our fire safety experts and discover how we can protect your building and keep your people safe.
            </p>

            {/* CTA Button */}
            <button
              className="w-full px-8 py-4 bg-white text-[#E50914] font-medium text-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-lg active:scale-95 shadow-md inline-flex items-center justify-center gap-2 group rounded-lg"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              Request Consultation
              <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            {/* Call Direct */}
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-white/80 text-sm font-normal mb-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
                Or call us directly:
              </p>
              <a
                href="tel:+250789000022"
                className="text-white text-lg font-bold hover:text-yellow-300 transition-colors"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                +250 789 000 022
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { number: '2hr', label: 'Quick Response', desc: 'We respond to inquiries in 2 hours' },
              { number: '100%', label: 'Certified', desc: 'All work meets international standards' },
              { number: '24/7', label: 'Always Ready', desc: 'Emergency support available anytime' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-black text-[#FFC107] mb-2" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  {stat.number}
                </p>
                <h4 className="text-white font-bold mb-1" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  {stat.label}
                </h4>
                <p className="text-gray-400 text-sm font-normal" style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}>
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
