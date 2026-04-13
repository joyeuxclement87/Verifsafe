'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { href: '#home', label: 'HOME', id: 'home' },
    { href: '#our-services', label: 'SERVICES', id: 'our-services' },
    { href: '#about-company', label: 'ABOUT', id: 'about-company' },
    { href: '#our-equipment', label: 'EQUIPMENT', id: 'our-equipment' },
    { href: '#contact', label: 'CONTACT', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'why-choose-us',
        'about-company',
        'our-equipment',
        'our-services',
        'who-we-serve',
        'fire-safety',
        'cta',
        'faq',
        'contact'
      ];

      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className="fixed top-12 left-0 right-0 bg-gradient-to-r from-white to-red-50 z-40 shadow-md border-b-2 border-[#E50914]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-28 flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <div className="relative w-44 h-44">
              <Image
                src="/logo.png"
                alt="Verifsafe Logo"
                fill
                sizes="110px"
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-bold text-sm tracking-wide transition-all duration-300 pb-2 border-b-2 ${
                  activeSection === link.id
                    ? 'text-[#E50914] border-[#E50914]'
                    : 'text-gray-800 border-transparent hover:text-[#E50914] hover:border-[#E50914]'
                }`}
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Section: CTA Button and Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* CTA Button - Desktop */}
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hidden sm:inline-block px-6 py-3 bg-[#E50914] text-white font-medium text-sm transition-all duration-300 hover:bg-red-700 hover:shadow-lg active:scale-95 shadow-md rounded-lg"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              Get a Quote
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-md">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-3 font-bold text-sm transition-all duration-300 rounded-md ${
                    activeSection === link.id
                      ? 'bg-[#E50914]/20 text-[#E50914]'
                      : 'text-gray-800 hover:bg-red-50 hover:text-[#E50914]'
                  }`}
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }
                }}
                className="w-full mt-4 px-4 py-3 bg-[#E50914] text-white font-medium text-sm transition-all duration-300 hover:bg-red-700 hover:shadow-lg active:scale-95 shadow-md rounded-lg"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
              >
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
