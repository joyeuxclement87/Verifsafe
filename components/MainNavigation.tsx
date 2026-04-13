'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/products', label: 'PRODUCTS' },
    { href: '/services', label: 'SERVICES' },
    { href: '/about', label: 'ABOUT' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className="fixed top-12 left-0 right-0 bg-gradient-to-r from-white to-red-50 z-40 shadow-md border-b-2 border-[#E50914]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-28 flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <div className="relative w-24 h-24">
              <Image
                src="/logo.png"
                alt="Verifsafe Logo"
                fill
                sizes="96px"
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-800 hover:text-[#E50914] transition-colors duration-300 font-bold text-sm tracking-wide"
                style={{ fontFamily: 'Oswald, sans-serif' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section: CTA Button and Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* CTA Button - Desktop */}
            <button
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
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-[#E50914] transition-colors duration-300 font-bold text-sm"
                  style={{ fontFamily: 'Noto Sans, sans-serif' }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
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
