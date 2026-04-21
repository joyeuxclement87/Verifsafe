'use client';

import { Phone, Mail, MapPin, Star } from 'tabler-icons-react';
import { motion } from 'framer-motion';

export default function QuickInfo() {
  const infoItems = [
    {
      iconName: 'phone',
      label: 'Phone',
      value: '+250 790 478 265',
      link: 'tel:+250790478265'
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
      value: 'Kigali, Kinamba Road',
      link: 'https://maps.google.com/?q=Kinamba+Road,+Kigali,+Rwanda'
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
      {/* Main layout wrapper for horizontal centering and responsive padding */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section header sub-container for badges and primary typography */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          {/* Wrapper for the "Contact Us" highlighted label badge */}
          <div className="inline-block mb-4">
            <p
              className="text-[#E53935] text-sm sm:text-base font-bold tracking-widest px-4 py-2 bg-red-50 rounded-full flex items-center gap-2"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <Star size={16} />
              Contact Us
            </p>
          </div>

          {/* Core heading for the quick info section */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 leading-tight"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Quick <span className="text-[#E53935]">Info</span>
          </h2>

          {/* Descriptive subheading explaining the section's intent */}
          <p
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed"
            style={{ fontFamily: 'Noto Sans, sans-serif' }}
          >
            Easy access to our contact information
          </p>
        </motion.div>

        {/* Responsive grid container for the information items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {infoItems.map((item, index) => (
            /* Individual interactive link card for each contact method */
            <motion.a
              key={index}
              href={item.link}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 rounded-3xl border border-gray-200 bg-gray-50/80 p-4 sm:p-5 hover:border-[#E53935] hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              {/* Sub-container for the contact method's illustrative icon */}
              <div className="w-12 h-12 rounded-2xl bg-[#E53935]/10 flex items-center justify-center text-[#E53935] group-hover:bg-[#E53935] group-hover:text-white transition-colors duration-300">
                {renderIcon(item.iconName)}
              </div>
              {/* Flex wrapper for the contact method label and value */}
              <div className="flex-1">
                {/* Specific contact method label (e.g., Phone, Email) */}
                <div
                  className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-[#E53935] transition-colors"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  {item.label}
                </div>
                {/* The actual contact detail or value (e.g., phone number, address) */}
                <div
                  className="text-xs sm:text-sm text-gray-600 transition-colors duration-300"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  {item.value}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
