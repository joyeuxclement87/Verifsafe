'use client';

import { CircleCheck, Shield, Clock, Award, Star } from 'tabler-icons-react';

export default function WhyChooseUs() {
  const features = [
    {
      number: '01',
      iconName: 'award',
      label: 'Certified equipment',
      description: 'We supply only the highest-rated fire safety equipment that rigorously meets international safety and compliance standards.'
    },
    {
      number: '02',
      iconName: 'shield',
      label: 'Expert installation',
      description: 'Our licensed technicians ensure precise, compliant installation for maximum reliability and structural safety when it matters most.'
    },
    {
      number: '03',
      iconName: 'clock',
      label: '24/7 support',
      description: 'Fire emergencies do not wait for business hours. Our dedicated rapid-response support team is available around the clock.'
    },
    {
      number: '04',
      iconName: 'check',
      label: 'Quality assured',
      description: 'Every system and product undergoes rigorous testing and continuous maintenance to guarantee flawless performance and durability.'
    }
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'award': return <Award size={44} className="text-[#E53935]" strokeWidth={1} />;
      case 'shield': return <Shield size={44} className="text-[#E53935]" strokeWidth={1} />;
      case 'clock': return <Clock size={44} className="text-[#E53935]" strokeWidth={1} />;
      case 'check': return <CircleCheck size={44} className="text-[#E53935]" strokeWidth={1} />;
      default: return null;
    }
  };

  return (
    <section className="relative w-full bg-white py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <p
              className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest px-4 py-2 bg-red-50 rounded-full flex items-center gap-2 uppercase"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <Star size={16} />
              Our Advantages
            </p>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Why Choose{' '}
            <span className="text-[#E53935]">Verifisafe</span>
          </h2>

          {/* Decorative Divider */}
          <div className="w-20 h-1 bg-[#E53935] mx-auto mt-6 mb-6 rounded-full" />

          <p
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            Trusted protection backed by uncompromising quality, expert service, and strict international compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-[#E53935]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left overflow-hidden cursor-pointer"
              style={{ borderWidth: '1px' }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Header section: Number and Icon */}
              <div className="w-full flex justify-between items-start mb-6">
                <span
                  className="text-6xl font-black text-gray-200 group-hover:text-[#E53935]/40 transition-colors duration-300 leading-none"
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {feature.number}
                </span>
                <div className="transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                  {renderIcon(feature.iconName)}
                </div>
              </div>

              {/* Title */}
              <h3
                className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#E53935] transition-colors duration-300"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {feature.label}
              </h3>

              {/* Description */}
              <p
                className="text-base text-gray-600 font-normal leading-relaxed"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#E53935] to-transparent rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
