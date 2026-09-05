'use client';

import { Phone, Mail, MapPin } from 'tabler-icons-react';
import { motion } from 'framer-motion';

export default function QuickInfo() {
  const infoItems = [
    {
      iconName: 'phone',
      label: 'Phone',
      value: '+250 788 632 620',
      link: 'tel:+250788632620'
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
      value: 'Kigali, Kinamba',
      link: 'https://maps.google.com/?q=Kinamba+Road,+Kigali,+Rwanda'
    }
  ];

  const renderIcon = (iconName: string) => {
    switch(iconName) {
      case 'phone': return <Phone size={22} className="text-[#D62828]" />;
      case 'mail': return <Mail size={22} className="text-[#D62828]" />;
      case 'location': return <MapPin size={22} className="text-[#D62828]" />;
      default: return null;
    }
  };

  return (
    <section className="relative w-full bg-white py-16 sm:py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
            <p className="text-label text-gray-500">Contact</p>
          </div>

          <h2 className="text-section-heading text-gray-900">
            Quick Info
          </h2>

          <p className="text-subheading text-gray-600 mt-4 max-w-2xl">
            Easy access to our contact information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
          {infoItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-t border-gray-200 pt-6 group"
            >
              <div className="flex items-start gap-4">
                <span className="shrink-0 pt-0.5">
                  {renderIcon(item.iconName)}
                </span>
                <div>
                  <div className="text-list-title text-gray-900 mb-1">
                    {item.label}
                  </div>
                  <div className="text-body-sm text-gray-600">
                    {item.value}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}