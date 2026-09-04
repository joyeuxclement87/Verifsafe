'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'tabler-icons-react';
import Button from '@/components/ui/Button';

const equipmentItems = [
  {
    title: 'Fire Extinguishers',
    description: 'Certified portable suppression for specific classes of fire.',
    link: '/equipments/fire-extinguishers'
  },
  {
    title: 'Fire Alarm Systems',
    description: 'Networked sensors and control panels for early warning and evacuation.',
    link: '/equipments/fire-alarm-systems'
  },
  {
    title: 'Fire Hose Reels',
    description: 'High-pressure water delivery for commercial and industrial sites.',
    link: '/equipments/fire-hose-reels'
  },
  {
    title: 'Fire Detection Devices',
    description: 'Precision smoke, heat, and flame sensors for the earliest detection.',
    link: '/equipments/fire-detection-devices'
  },
  {
    title: 'Emergency Lights & Exit Signs',
    description: 'Backup illumination and exit signage for safe evacuation.',
    link: '/equipments/emergency-lights'
  },
  {
    title: 'Fire Safety Accessories',
    description: 'Cabinets, blankets, and signage to support safety infrastructure.',
    link: '/equipments/fire-safety-accessories'
  }
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/equipments', label: 'Equipment', hasDropdown: true },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' }
];

const focusClasses =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D62828]';

export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openPathname, setOpenPathname] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const dropdownTriggerRef = useRef<HTMLButtonElement>(null);
  const dropdownPanelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Menus are only visible on the route where they were opened, so a route
  // change (including back/forward navigation) closes them automatically.
  const mobileMenuOpen = isOpen && openPathname === pathname;
  const dropdownOpen = activeDropdown !== null && openPathname === pathname ? activeDropdown : null;

  // Global: Escape closes and restores focus, click outside closes
  useEffect(() => {
    if (!isOpen && !activeDropdown) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (dropdownOpen) {
        setActiveDropdown(null);
        dropdownTriggerRef.current?.focus();
      } else if (mobileMenuOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('click', onClickOutside);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('click', onClickOutside);
    };
  }, [isOpen, activeDropdown, dropdownOpen, mobileMenuOpen]);

  // Lock body scroll while the mobile menu is visible
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileMenuOpen]);

  // Close the mobile menu if the viewport grows to desktop width
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const media = window.matchMedia('(min-width: 1024px)');
    const closeOnDesktop = () => setIsOpen(false);
    media.addEventListener('change', closeOnDesktop);
    return () => media.removeEventListener('change', closeOnDesktop);
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const closeAll = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setOpenPathname(pathname);
      setActiveDropdown('Equipment');
      requestAnimationFrame(() => {
        dropdownPanelRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
      });
    }
  };

  const handleDropdownKeyDown = (e: React.KeyboardEvent) => {
    const links = Array.from(dropdownPanelRef.current?.querySelectorAll<HTMLAnchorElement>('a') ?? []);
    const currentIndex = links.indexOf(document.activeElement as HTMLAnchorElement);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      links[Math.min(currentIndex + 1, links.length - 1)]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      links[Math.max(currentIndex - 1, 0)]?.focus();
    }
  };

  const handleDropdownBlur = (e: React.FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setActiveDropdown(null);
    }
  };

  const ActiveIndicator = () => (
    <span aria-hidden="true" className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-[2px] w-5 bg-[#D62828]" />
  );

  return (
    <nav ref={navRef} aria-label="Main navigation" className="fixed top-12 left-0 right-0 z-40 bg-[#111111] border-b-2 border-[#D62828]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" aria-label="Verifsafe — Home" onClick={closeAll} className="shrink-0 flex items-center">
          <Image
            src="/logo.png"
            alt="Verifsafe"
            width={124}
            height={40}
            priority
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              {link.hasDropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => {
                    setOpenPathname(pathname);
                    setActiveDropdown(link.label);
                  }}
                  onMouseLeave={() => setActiveDropdown(null)}
                  onBlur={handleDropdownBlur}
                >
                  <button
                    ref={dropdownTriggerRef}
                    type="button"
                    onClick={() => {
                      setOpenPathname(pathname);
                      setActiveDropdown(activeDropdown === link.label ? null : link.label);
                    }}
                    onKeyDown={handleTriggerKeyDown}
                    aria-expanded={dropdownOpen === link.label}
                    aria-haspopup="true"
                    aria-controls="equipment-dropdown"
                    className={`relative inline-flex items-center gap-1.5 py-0.5 text-sm font-medium transition-colors duration-200 ${isActive(link.href) ? 'text-white' : 'text-gray-300 hover:text-white'
                      } ${focusClasses}`}
                  >
                    {link.label}
                    <ChevronDown
                      size={13}
                      strokeWidth={2}
                      className={`transition-transform duration-200 ${dropdownOpen === link.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isActive(link.href) && <ActiveIndicator />}

                  {dropdownOpen === link.label && (
                    <div id="equipment-dropdown" className="nav-dropdown-enter absolute left-0 top-full pt-3">
                      <div
                        ref={dropdownPanelRef}
                        onKeyDown={handleDropdownKeyDown}
                        className="w-[34rem] max-w-[calc(100vw-2rem)] rounded-lg border border-white/10 bg-[#111111] p-4 shadow-xl shadow-black/30"
                      >
                        <div className="grid grid-cols-2 gap-x-4">
                          {equipmentItems.map((item) => (
                            <Link
                              key={item.link}
                              href={item.link}
                              onClick={closeAll}
                              className={`group -mx-2 rounded-md px-2 py-2 hover:bg-white/5 transition-colors duration-150 ${focusClasses}`}
                            >
                              <span className="block text-sm font-medium text-gray-100 group-hover:text-white transition-colors duration-150">
                                {item.title}
                              </span>
                              <span className="mt-0.5 block text-xs leading-relaxed text-gray-400">
                                {item.description}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-3 border-t border-white/10 pt-3">
                          <Link
                            href="/equipments"
                            onClick={closeAll}
                            className={`inline-flex items-center text-sm font-semibold text-[#D62828] hover:text-white transition-colors duration-150 ${focusClasses}`}
                          >
                            View All Equipment
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  onClick={closeAll}
                  className={`relative inline-block py-0.5 text-sm font-medium transition-colors duration-200 ${isActive(link.href) ? 'text-white' : 'text-gray-300 hover:text-white'
                    } ${focusClasses}`}
                >
                  {link.label}
                  {isActive(link.href) && <ActiveIndicator />}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Right Section: CTA and Mobile Menu Trigger */}
        <div className="flex items-center gap-3">
          {/* Primary CTA — Desktop only */}
          <div className="hidden lg:block">
            <Button
              href="/contact#contact-form"
              size="sm"
              icon={null}
            >
              Request a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => {
              setOpenPathname(pathname);
              setIsOpen(!isOpen);
            }}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            className={`lg:hidden relative w-10 h-10 flex flex-col justify-center items-center text-[#D62828] hover:bg-white/5 rounded-md transition-colors ${focusClasses}`}
          >
            <span className="sr-only">{mobileMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
            <div className="relative w-6 h-4">
              <span
                className={`absolute left-0 right-0 h-0.5 bg-[#D62828] rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'top-[7px] rotate-45' : 'top-0'
                  }`}
              />
              <span
                className={`absolute left-0 right-0 h-0.5 bg-[#D62828] rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0 scale-x-0' : 'top-[7px] w-4'
                  }`}
              />
              <span
                className={`absolute left-0 right-0 h-0.5 bg-[#D62828] rounded-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'top-[7px] -rotate-45' : 'top-[14px]'
                  }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="nav-dropdown-enter lg:hidden absolute top-full left-0 right-0 bg-[#111111] border-t border-white/10 max-h-[calc(100dvh-8rem)] overflow-y-auto"
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        type="button"
                        onClick={() => {
                          setOpenPathname(pathname);
                          setActiveDropdown(activeDropdown === link.label ? null : link.label);
                        }}
                        aria-expanded={dropdownOpen === link.label}
                        aria-controls="mobile-equipment-menu"
                        className={`w-full flex items-center justify-between px-2 py-3 text-sm font-medium transition-colors duration-200 ${dropdownOpen === link.label ? 'text-white' : 'text-gray-300'
                          } ${focusClasses}`}
                      >
                        {link.label}
                        <ChevronDown
                          size={15}
                          strokeWidth={2}
                          className={`transition-transform duration-200 ${dropdownOpen === link.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {dropdownOpen === link.label && (
                        <ul id="mobile-equipment-menu" className="ml-3 pl-4 border-l border-white/10 space-y-1">
                          {equipmentItems.map((item) => (
                            <li key={item.link}>
                              <Link
                                href={item.link}
                                onClick={closeAll}
                                className={`block px-2 py-3 text-sm text-gray-400 hover:text-white transition-colors duration-200 ${focusClasses}`}
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link
                              href="/equipments"
                              onClick={closeAll}
                              className={`block px-2 py-3 text-sm font-semibold text-[#D62828] hover:text-white transition-colors duration-200 ${focusClasses}`}
                            >
                              View All Equipment
                            </Link>
                          </li>
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={closeAll}
                      className={`block px-2 py-3 text-sm font-medium transition-colors duration-200 ${isActive(link.href) ? 'text-[#D62828]' : 'text-gray-300 hover:text-white'
                        } ${focusClasses}`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Primary CTA — bottom of the menu */}
            <div className="mt-4 border-t border-white/10 pt-4">
              <Button
                href="/contact#contact-form"
                onClick={closeAll}
                icon={null}
                className="flex w-full"
              >
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
