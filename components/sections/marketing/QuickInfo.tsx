'use client';

import { Phone, Mail, MapPin } from 'tabler-icons-react';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { site } from '@/lib/site';

export default function QuickInfo() {
  const infoItems = [
    {
      iconName: 'phone',
      label: 'Phone',
      value: site.phones[0].display,
      link: `tel:${site.phones[0].tel}`
    },
    {
      iconName: 'mail',
      label: 'Email',
      value: site.email,
      link: `mailto:${site.email}`
    },
    {
      iconName: 'location',
      label: 'Location',
      value: site.address.country,
      link: site.address.mapsUrl
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
        <RevealGroup
          stagger={0.08}
          delayChildren={0.05}
          className="mb-12"
        >
          <RevealItem variant="up-sm">
            <div className="flex items-center gap-3 mb-5">
              <span aria-hidden="true" className="h-px w-8 bg-[#D62828]" />
              <p className="text-label text-gray-500">Contact</p>
            </div>
          </RevealItem>

          <RevealItem>
            <h2 className="text-section-heading text-gray-900">
              Quick Info
            </h2>
          </RevealItem>

          <RevealItem variant="up-sm">
            <p className="text-subheading text-gray-600 mt-4 max-w-2xl">
              Easy access to our contact information.
            </p>
          </RevealItem>
        </RevealGroup>

        <RevealGroup
          stagger={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8"
        >
          {infoItems.map((item, index) => (
            <RevealItem key={index}>
              <a
                href={item.link}
                className="block border-t border-gray-200 pt-6 group"
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
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}