'use client';

import { BrandWhatsapp } from 'tabler-icons-react';
import { site } from '@/lib/site';

export default function WhatsAppButton() {
  const phoneNumber = site.phones[1]; 
  const whatsappUrl = `https://wa.me/${phoneNumber.tel}?text=Hello%20Verifisafe%2C%20I%20would%20like%20to%20inquire%20about%20your%20fire%20protection%20services.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 active:scale-95"
      title="Chat with us on WhatsApp"
    >
      {/* Ripple ping animation */}
      <span className="absolute inline-flex w-full h-full rounded-full bg-[#25D366] opacity-60 animate-ping" />

      {/* Icon */}
      <BrandWhatsapp size={28} className="text-white relative z-10" strokeWidth={1.5} />

      {/* Tooltip on hover */}
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-ink text-white text-xs font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
        Chat with us
      </span>
    </a>
  );
}
