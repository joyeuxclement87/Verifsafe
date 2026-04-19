'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, FileText } from 'tabler-icons-react';

export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const services = [
    { title: 'Fire Equipment Supply', description: 'Certified fire safety equipment for reliable protection.' },
    { title: 'Installation Services', description: 'Professional installation of fire safety systems.' },
    { title: 'Inspection & Testing', description: 'Ensuring fire protection equipment works properly.' },
    { title: 'Fire Extinguisher Refilling', description: 'Refilling and servicing extinguishers.' },
    { title: 'Maintenance Services', description: 'Regular maintenance for reliable systems.' },
    { title: 'Fire Safety Training', description: 'Comprehensive training for emergency preparedness.' }
  ];

  const equipments = [
    { title: 'Fire Extinguishers', description: 'Portable firefighting equipment for small fires.', link: '/equipments/fire-extinguishers' },
    { title: 'Fire Alarm Systems', description: 'Detection systems that alert occupants.', link: '/equipments/fire-alarm-systems' },
    { title: 'Fire Hose Reels', description: 'Water supply equipment for firefighting.', link: '/equipments/fire-hose-reels' },
    { title: 'Fire Detection Devices', description: 'Smoke and heat detectors for early detection.', link: '/equipments/fire-detection-devices' },
    { title: 'Emergency Lights & Exit Signs', description: 'Lighting systems guiding to safety.', link: '/equipments/emergency-lights' },
    { title: 'Fire Safety Accessories', description: 'Additional equipment supporting fire protection.', link: '/equipments/fire-safety-accessories' }
  ];

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'ABOUT' },
    { href: '/services', label: 'SERVICES', hasDropdown: false },
    { href: '/equipments', label: 'EQUIPMENTS', hasDropdown: true },
    { href: '/gallery', label: 'GALLERY' },
    { href: '/contact', label: 'CONTACT' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className="fixed top-12 left-0 right-0 bg-[#0F172A] z-40 shadow-md border-b-2 border-[#E53935]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-28 flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="shrink-0 flex items-center">
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
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`font-bold text-sm tracking-wide transition-all duration-300 pb-2 border-b-2 flex items-center gap-1 ${
                    isActive(link.href)
                      ? 'text-[#E53935] border-[#E53935]'
                      : 'text-gray-300 border-transparent hover:text-[#E53935] hover:border-[#E53935]'
                  }`}
                  style={{ fontFamily: 'Oswald, sans-serif' }}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown size={12} strokeWidth={1} className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.hasDropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 bg-[#0F172A] border border-[#E53935] rounded-lg shadow-lg py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200" style={{ width: '680px', marginTop: '-8px', paddingTop: '16px' }}>
                    <div className="grid grid-cols-3 gap-2">
                      {link.label === 'SERVICES' ? (
                        services.map((service, idx) => (
                          <Link
                            key={idx}
                            href="/services"
                            onClick={() => setActiveDropdown(null)}
                            className="px-4 py-3 text-gray-300 hover:text-[#E53935] hover:bg-gray-700 rounded-lg transition-all duration-200 text-sm font-semibold cursor-pointer block"
                          >
                            {service.title}
                          </Link>
                        ))
                      ) : (
                        equipments.map((equipment, idx) => (
                          <Link
                            key={idx}
                            href={equipment.link}
                            onClick={() => setActiveDropdown(null)}
                            className="px-4 py-3 text-gray-300 hover:text-[#E53935] hover:bg-gray-700 rounded-lg transition-all duration-200 text-sm font-semibold cursor-pointer block"
                          >
                            {equipment.title}
                          </Link>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Section: CTA Button and Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* CTA Button - Desktop */}
            <Link
              href="/services#project-form"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white font-bold text-sm transition-all duration-300 hover:shadow-lg active:scale-95 shadow-md rounded-lg uppercase tracking-wide"
              style={{ fontFamily: 'Noto Sans, sans-serif' }}
            >
              <FileText size={16} strokeWidth={1} />
              Get a Quote
            </Link>

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
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0F172A] border-t border-[#E53935] shadow-md max-h-screen overflow-y-auto">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                        className={`w-full text-left px-4 py-3 font-bold text-sm transition-all duration-300 rounded-md flex items-center justify-between ${
                          activeDropdown === link.label
                            ? 'bg-[#E53935]/20 text-[#E53935]'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-[#E53935]'
                        }`}
                        style={{ fontFamily: 'Noto Sans, sans-serif' }}
                      >
                        {link.label}
                        <ChevronDown 
                          size={12}
                          strokeWidth={1}
                          className={`transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {activeDropdown === link.label && (
                        <div className="bg-[#0F172A] rounded-lg ml-2 mt-2 p-1 border border-gray-700">
                          <div className="grid grid-cols-2 gap-1">
                            {link.label === 'SERVICES' ? (
                              services.map((service, idx) => (
                                <Link
                                  key={idx}
                                  href="/services"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                  className="px-4 py-3 text-gray-300 hover:text-[#E53935] hover:bg-gray-700 rounded-lg transition-all duration-200 text-xs font-semibold cursor-pointer block"
                                >
                                  {service.title}
                                </Link>
                              ))
                            ) : (
                              equipments.map((equipment, idx) => (
                                <Link
                                  key={idx}
                                  href={equipment.link}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setActiveDropdown(null);
                                  }}
                                  className="px-4 py-3 text-gray-300 hover:text-[#E53935] hover:bg-gray-700 rounded-lg transition-all duration-200 text-xs font-semibold cursor-pointer block"
                                >
                                  {equipment.title}
                                </Link>
                              ))
                            )}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 font-bold text-sm transition-all duration-300 rounded-md ${
                        isActive(link.href)
                          ? 'bg-[#E53935]/20 text-[#E53935]'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-[#E53935]'
                      }`}
                      style={{ fontFamily: 'Noto Sans, sans-serif' }}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                href="/services#project-form"
                className="flex items-center justify-center gap-2 w-full mt-4 px-4 py-3 bg-linear-to-r from-[#FF4D4D] to-[#E53935] text-white font-bold text-sm transition-all duration-300 hover:shadow-lg active:scale-95 shadow-md rounded-lg uppercase tracking-wide"
                style={{ fontFamily: 'Noto Sans, sans-serif' }}
                onClick={() => setIsOpen(false)}
              >
                <FileText size={16} strokeWidth={1} />
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
