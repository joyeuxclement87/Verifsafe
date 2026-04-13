'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-[#E50914] h-12 z-50">
      <div className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left Side - Location */}
        <div className="text-white text-xs sm:text-sm font-medium flex items-center gap-2" style={{ fontFamily: 'Noto Sans, sans-serif' }}>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4" />
          Kigali, Kinamba Road
        </div>

        {/* Center - Phone */}
        <a
          href="tel:+250789000022"
          className="text-white text-xs sm:text-sm font-medium hover:opacity-80 transition-opacity duration-200 flex items-center gap-2"
          style={{ fontFamily: 'Noto Sans, sans-serif' }}
        >
          <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
          +250 789 000 022
        </a>

        {/* Right Side - Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition-opacity duration-200"
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition-opacity duration-200"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition-opacity duration-200"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition-opacity duration-200"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
