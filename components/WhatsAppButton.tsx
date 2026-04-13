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
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 active:scale-95"
      title="Chat with us on WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} className="w-7 h-7 text-white" />
    </a>
  );
}
