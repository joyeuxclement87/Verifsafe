'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function WhatsAppButton() {
  const phoneNumber = '+250788123456'; // Replace with your WhatsApp number
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=Hello%20Verifisafe%2C%20I%20would%20like%20to%20inquire%20about%20your%20fire%20protection%20services.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#25D366] to-[#20BA58] rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 active:scale-95"
      title="Chat with us on WhatsApp"
    >
      <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full group-hover:scale-110 transition-transform duration-300">
        <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 text-[#25D366]" />
      </div>
      <span className="text-white font-medium text-sm whitespace-nowrap group-hover:tracking-wide transition-all duration-300">
        Chat with us
      </span>
    </a>
  );
}
