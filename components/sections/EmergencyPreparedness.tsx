'use client';

import { AlertTriangle, Alarm, ShoppingCart, ClipboardList, Shield } from 'tabler-icons-react';

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
      iconName: 'cart',
      title: 'Property Protection',
      description: 'Protect your capital investment with targeted gaseous suppression systems.'
    },
    {
      iconName: 'clipboard',
      title: 'Safety Compliance',
      description: 'Stay current with NFPA, OSHA, and local fire authority regulations.'
    }
  ];

  const renderIcon = (iconName: string) => {
    switch(iconName) {
      case 'alert': return <AlertTriangle size={32} className="text-[#E53935]" />;
      case 'extinguisher': return <Alarm size={32} className="text-[#E53935]" />;
      case 'cart': return <ShoppingCart size={32} className="text-[#E53935]" />;
      case 'clipboard': return <ClipboardList size={32} className="text-[#E53935]" />;
      default: return null;
    }
  };

  return (
    <section id="emergency-preparedness" className="w-full bg-gradient-to-b from-gray-50 to-white py-20 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-red-100/20 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-yellow-100/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          {/* Section Label */}
          <div className="inline-block mb-4">
            <p
              className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest uppercase px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <Shield size={16} />
              Emergency Preparedness
            </p>
          </div>

          {/* Main Heading */}
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Are You Prepared for a{' '}
            <span className="text-[#E53935]">Fire Emergency</span>?
          </h2>

          {/* Subheading */}
          <p
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed"
            style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
          >
            Statistics show that <span className="font-bold text-[#E53935]">40% of businesses never reopen</span> after a major fire. Don&apos;t let yours be one of them.
          </p>
        </div>

        {/* Preparedness Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {preparednessItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 sm:p-8 hover:border-[#E53935] hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
              style={{ borderWidth: '1px' }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E53935] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Icon Container */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#E53935]/20 to-red-600/20 rounded-lg flex items-center justify-center mb-6 transition-all duration-300">
                {renderIcon(item.iconName)}
              </div>

              {/* Title */}
              <h3
                className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E53935] transition-colors duration-300"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal"
                style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
              >
                {item.description}
              </p>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E53935] to-transparent rounded-b-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
