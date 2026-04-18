'use client';

import { CircleCheck, Shield, Clock, Award, Star } from 'tabler-icons-react';

export default function WhyChooseUs() {
  const features = [
    {
      iconName: 'award',
      label: 'Certified equipment'
    },
    {
      iconName: 'shield',
      label: 'Expert installation'
    },
    {
      iconName: 'clock',
      label: '24/7 support'
    },
    {
      iconName: 'check',
      label: 'Quality assured'
    }
  ];

  const renderIcon = (iconName: string) => {
    switch(iconName) {
      case 'award': return <Award size={28} className="text-[#E53935]" />;
      case 'shield': return <Shield size={28} className="text-[#E53935]" />;
      case 'clock': return <Clock size={28} className="text-[#E53935]" />;
      case 'check': return <CircleCheck size={28} className="text-[#E53935]" />;
      default: return null;
    }
  };

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <p
              className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <Star size={16} />
              Our Advantages
            </p>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Why Choose{' '}
            <span className="text-[#E53935]">Verifisafe</span>
          </h2>

          <p
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            Trusted protection backed by quality, service, and compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-3xl border border-gray-200 bg-gray-50/80 p-4 sm:p-5 hover:border-[#E53935] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#E53935]/10 flex items-center justify-center text-[#E53935]">
                {renderIcon(feature.iconName)}
              </div>
              <span
                className="text-sm sm:text-base font-semibold text-gray-900"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
