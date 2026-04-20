'use client';

import { AlertTriangle, Alarm, Building, ShieldCheck, Shield } from 'tabler-icons-react';

export default function EmergencyPreparedness() {
  const preparednessItems = [
    {
      iconName: 'alert',
      title: 'Fire Risk',
      description: 'Identify hidden structural and electrical vulnerabilities before they ignite.'
    },
    {
      iconName: 'extinguisher',
      title: 'Response Time',
      description: 'Seconds save lives. Our automated systems react instantly to suppress threats.'
    },
    {
      iconName: 'Building',
      title: 'Property Protection',
      description: 'Protect your capital investment with targeted gaseous suppression systems.'
    },
    {
      iconName: 'shield-check',
      title: 'Safety Compliance',
      description: 'Stay current with NFPA, OSHA, and local fire authority regulations.'
    }
  ];

  const renderIcon = (iconName: string) => {
    switch(iconName) {
      case 'alert': return <AlertTriangle size={44} className="text-[#E53935]" strokeWidth={1} />;
      case 'extinguisher': return <Alarm size={44} className="text-[#E53935]" strokeWidth={1} />;
      case 'Building': return <Building size={44} className="text-[#E53935]" strokeWidth={1} />;
      case 'shield-check': return <ShieldCheck size={44} className="text-[#E53935]" strokeWidth={1} />;
      default: return null;
    }
  };

  return (
    <section id="emergency-preparedness" className="w-full bg-slate-50 py-18 sm:py-21 lg:py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-gray-400/5 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-18">
          {/* Section Label */}
          <div className="inline-block mb-4">
            <p
              className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest  px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <Shield size={16} />
              Emergency Preparedness
            </p>
          </div>

          {/* Main Heading */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Are You Prepared for a{' '}
            <span className="text-[#E53935]">Fire Emergency</span>?
          </h2>

          {/* Decorative Divider */}
          <div className="w-20 h-1 bg-[#E53935] mx-auto mt-6 mb-6 rounded-full" />

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            Statistics show that <span className="font-bold text-[#E53935]">40% of businesses never reopen</span>  after a major fire. Don&apos;t let yours be one of them.
          </p>
        </div>

        {/* Preparedness Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">
          {preparednessItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-[#E53935]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left overflow-hidden"
              style={{ borderWidth: '1px' }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon Container */}
              <div className="mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                {renderIcon(item.iconName)}
              </div>

              {/* Title */}
              <h3
                className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E53935] transition-colors duration-300"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="text-base text-gray-600 leading-relaxed font-normal"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                {item.description}
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
