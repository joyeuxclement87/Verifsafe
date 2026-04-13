'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate, faShieldAlt, faBolt, faUsers } from '@fortawesome/free-solid-svg-icons';

export default function AboutCompany() {
  const values = [
    {
      icon: faCertificate,
      title: 'Certified Excellence',
      description: 'Professional certified technicians with international qualifications'
    },
    {
      icon: faShieldAlt,
      title: 'Safety Standards',
      description: 'All work meets international safety and quality standards'
    },
    {
      icon: faBolt,
      title: 'Fast Response',
      description: 'Quick emergency response and 24/7 support available'
    },
    {
      icon: faUsers,
      title: 'Client Focused',
      description: 'Dedicated to understanding and meeting customer needs'
    }
  ];

  return (
    <section className="w-full bg-white py-20 sm:py-24 lg:py-32">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <p
            className="text-[#E50914] text-sm sm:text-base font-bold tracking-widest uppercase mb-4"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            About Verifsafe
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Who <span className="text-[#E50914]">We Are</span>
          </h2>
          <p
            className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-normal"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            Rwanda's leading fire protection company providing premium equipment, professional installation, and comprehensive maintenance services.
          </p>
        </div>

        {/* Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Image */}
          <div className="relative group">
            <div className="relative w-full h-96 sm:h-96 lg:h-full overflow-hidden rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
              <Image
                src="/about-company.svg"
                alt="Fire Protection Equipment"
                width={600}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay Accent */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E50914]/20 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 right-8 bg-white rounded-lg p-6 shadow-lg">
                <div
                  className="text-3xl font-black text-[#E50914] mb-1"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  10+
                </div>
                <p
                  className="text-sm text-gray-700 font-normal"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            
            {/* Main Description */}
            <p
              className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              VERIFSAFE is dedicated to providing professional fire safety equipment and services across Rwanda. Our mission is to supply, install, and maintain systems that help buildings remain protected when emergencies occur.
            </p>

            {/* Key Features */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                  <svg className="w-6 h-6 text-[#E50914]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span
                  className="text-base text-gray-700 font-normal"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  Professional certified technicians with international standards
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                  <svg className="w-6 h-6 text-[#E50914]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span
                  className="text-base text-gray-700 font-normal"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  Comprehensive maintenance plans and emergency support
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                  <svg className="w-6 h-6 text-[#E50914]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span
                  className="text-base text-gray-700 font-normal"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  Proven track record with 100+ installations across Rwanda
                </span>
              </div>
            </div>

            {/* Call to Action Button */}
            <button
              className="w-fit px-8 py-4 bg-[#E50914] text-white font-medium transition-all duration-300 hover:bg-red-700 hover:shadow-lg active:scale-95 shadow-md rounded-lg inline-flex items-center gap-2 group"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              Get Started Today
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3
              className="text-2xl sm:text-3xl font-black text-gray-900 mb-3"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Our Core <span className="text-[#E50914]">Values</span>
            </h3>
            <p
              className="text-lg text-gray-600 font-normal"
              style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
            >
              Guiding principles that define our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-white border-2 border-gray-100 rounded-lg p-8 sm:p-10 hover:border-[#E50914] hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#E50914] to-red-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon
                      icon={value.icon}
                      className="w-8 h-8 text-white"
                    />
                  </div>
                </div>

                <h4
                  className="text-lg sm:text-xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {value.title}
                </h4>

                <p
                  className="text-gray-700 text-sm sm:text-base font-normal"
                  style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
                >
                  {value.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E50914] to-transparent rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 rounded-lg p-12 sm:p-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Stat 1 */}
            <div className="text-center">
              <div
                className="text-4xl sm:text-5xl font-black text-[#E50914] mb-3"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                100+
              </div>
              <h4
                className="text-lg sm:text-xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                Projects
              </h4>
              <p
                className="text-gray-600 font-normal"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                Installations successfully completed across Rwanda
              </p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div
                className="text-4xl sm:text-5xl font-black text-[#E50914] mb-3"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                1000+
              </div>
              <h4
                className="text-lg sm:text-xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                Clients
              </h4>
              <p
                className="text-gray-600 font-normal"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                Satisfied customers trusting us with their safety
              </p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div
                className="text-4xl sm:text-5xl font-black text-[#E50914] mb-3"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                24/7
              </div>
              <h4
                className="text-lg sm:text-xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                Support
              </h4>
              <p
                className="text-gray-600 font-normal"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                Emergency assistance always available for our clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
