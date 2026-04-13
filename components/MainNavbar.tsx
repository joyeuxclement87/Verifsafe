'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-10 left-0 right-0 h-[70px] bg-white z-40 shadow-sm" style={{ boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)' }}>
      <div className="w-full max-w-5xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#D62828] rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="hidden sm:inline font-bold text-gray-900 text-lg">Verifsafe</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-[#D62828] transition-colors duration-300 font-medium text-base"
              style={{ fontFamily: 'Urbanist, sans-serif' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Section: CTA Button and Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* CTA Button - Desktop */}
          <button
            className="hidden sm:inline-block px-6 py-3 bg-[#D62828] text-white rounded-lg font-medium transition-all duration-300 hover:bg-[#A61B1B]"
            style={{ fontFamily: 'Urbanist, sans-serif' }}
          >
            Request Quote
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-[#D62828] rounded-lg transition-colors duration-300 font-medium"
                style={{ fontFamily: 'Urbanist, sans-serif' }}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              className="w-full mt-4 px-4 py-3 bg-[#D62828] text-white rounded-lg font-medium transition-all duration-300 hover:bg-[#A61B1B]"
              style={{ fontFamily: 'Urbanist, sans-serif' }}
            >
              Request Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
