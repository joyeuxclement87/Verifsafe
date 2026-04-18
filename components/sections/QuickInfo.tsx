'use client';

import { Phone, Mail, MapPin, Star } from 'tabler-icons-react';

export default function QuickInfo() {
  const infoItems = [
    {
      iconName: 'phone',
      label: 'Phone',
      value: '+250 789 000 022',
      link: 'tel:+250789000022'
    },
    {
      iconName: 'mail',
      label: 'Email',
      value: 'info@verifsafe.com',
      link: 'mailto:info@verifsafe.com'
    },
    {
      iconName: 'location',
      label: 'Location',
      value: 'Kigali, Rwanda',
      link: '#'
    }
  ];

  const renderIcon = (iconName: string) => {
    switch(iconName) {
      case 'phone': return <Phone size={28} className="text-[#E53935]" />;
      case 'mail': return <Mail size={28} className="text-[#E53935]" />;
      case 'location': return <MapPin size={28} className="text-[#E53935]" />;
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
              Contact Us
            </p>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Quick <span className="text-[#E53935]">Info</span>
          </h2>

          <p
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            Easy access to our contact information
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {infoItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex items-center gap-4 rounded-3xl border border-gray-200 bg-gray-50/80 p-4 sm:p-5 hover:border-[#E53935] hover:bg-gray-50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#E53935]/10 flex items-center justify-center text-[#E53935]">
                {renderIcon(item.iconName)}
              </div>
              <div className="flex-1">
                <div
                  className="text-sm sm:text-base font-semibold text-gray-900"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  {item.label}
                </div>
                <div
                  className="text-xs sm:text-sm text-gray-600 group-hover:text-[#E53935] transition-colors duration-300"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  {item.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
