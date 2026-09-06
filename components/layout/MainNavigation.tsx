'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight, Menu, X, ArrowUpRight } from 'tabler-icons-react';
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
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand';

export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openPathname, setOpenPathname] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const dropdownTriggerRef = useRef<HTMLButtonElement>(null);
  const dropdownPanelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const mobileMenuOpen = isOpen && openPathname === pathname;
  const dropdownOpen = activeDropdown !== null && openPathname === pathname ? activeDropdown : null;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileMenuOpen]);

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

  const handleNavBlur = (e: React.FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setActiveDropdown(null);
    }
  };

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      onBlur={handleNavBlur}
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        dropdownOpen
          ? `${isScrolled ? 'top-0' : 'top-10'} bg-surface-dark border-b border-white/5`
          : isScrolled
            ? 'top-0 bg-surface-dark/95 backdrop-blur-md border-b border-white/5'
            : 'top-10 bg-ink border-b border-white/5'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-[72px] flex items-center justify-between gap-4 lg:gap-8">
        {/* Logo */}
        <Link href="/" aria-label="VerifSafe — Home" onClick={closeAll} className="shrink-0 flex items-center">
          <Image
            src="/logo.png"
            alt="VerifSafe"
            width={124}
            height={40}
            priority
            className="h-8 lg:h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              {link.hasDropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => {
                    setOpenPathname(pathname);
                    cancelClose();
                    setActiveDropdown(link.label);
                  }}
                  onMouseLeave={scheduleClose}
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
                    className={`relative inline-flex items-center gap-1 px-3 py-2 text-[13px] font-medium transition-colors duration-200 rounded-md ${
                      isActive(link.href)
                        ? 'text-white bg-white/5'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    } ${focusClasses}`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      strokeWidth={2}
                      className={`transition-transform duration-200 ${dropdownOpen === link.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>
              ) : (
                <Link
                  href={link.href}
                  onClick={closeAll}
                  className={`relative inline-block px-3 py-2 text-[13px] font-medium transition-colors duration-200 rounded-md ${
                    isActive(link.href)
                      ? 'text-white bg-white/5'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  } ${focusClasses}`}
                >
                  {link.label}
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
              variant="primary"
              icon={
                <ArrowUpRight
                  size={15}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
                />
              }
              className="!h-10 !rounded-lg !bg-[#E53935] hover:!bg-[#C62828] !shadow-[0_4px_14px_-6px_rgba(229,57,53,0.55)] hover:!shadow-[0_10px_22px_-8px_rgba(229,57,53,0.65)]"
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
            className={`lg:hidden relative w-10 h-10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors ${focusClasses}`}
          >
            {mobileMenuOpen ? (
              <X size={20} strokeWidth={2} />
            ) : (
              <Menu size={20} strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* Equipment mega dropdown — contiguous sheet under the navbar (desktop only) */}
      {dropdownOpen === 'Equipment' && (
        <div
          id="equipment-dropdown"
          className="nav-dropdown-enter hidden lg:block absolute top-full left-0 right-0 bg-surface-dark shadow-[0_24px_48px_-24px_rgba(0,0,0,0.5)]"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
          onKeyDown={handleDropdownKeyDown}
        >
          <div ref={dropdownPanelRef} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="h-px w-6 bg-[#D62828]" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">Equipment &amp; Systems</p>
              </div>
              <p className="hidden xl:block text-xs text-gray-500">
                Certified to international standards — sourced, installed and maintained by VerifSafe.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-x-8 gap-y-0.5 px-3 pt-2.5 pb-0">
              {equipmentItems.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  onClick={closeAll}
                  className={`group relative rounded-lg px-3.5 py-2.5 flex flex-col transition-colors duration-150 hover:bg-white/5 ${focusClasses}`}
                >
                  <span className="flex items-center gap-1.5 text-sm font-medium text-gray-100 group-hover:text-white transition-colors duration-150">
                    {item.title}
                    <ChevronRight
                      size={13}
                      strokeWidth={2.5}
                      className="text-brand -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-150"
                    />
                  </span>
                  <span className="mt-0.5 text-xs leading-relaxed text-gray-500 group-hover:text-gray-400 transition-colors duration-150">
                    {item.description}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-1.5 flex items-center justify-between border-t border-white/10 px-3 py-3.5">
              <Link
                href="/equipments"
                onClick={closeAll}
                className={`inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-white transition-colors duration-150 ${focusClasses}`}
              >
                View all equipment
                <ChevronRight size={14} strokeWidth={2} />
              </Link>
              <p className="hidden md:block text-xs text-gray-500">
                Every system backed by inspection and maintenance plans.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="nav-dropdown-enter lg:hidden absolute top-full left-0 right-0 bg-surface-dark border-t border-white/10 max-h-[calc(100dvh-5rem)] overflow-y-auto"
        >
          <div className="w-full max-w-7xl mx-auto px-4 py-4">
            <ul className="space-y-0.5">
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
                        className={`w-full flex items-center justify-between px-3 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                          dropdownOpen === link.label
                            ? 'text-white bg-white/5'
                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                        } ${focusClasses}`}
                      >
                        {link.label}
                        <ChevronDown
                          size={16}
                          strokeWidth={2}
                          className={`transition-transform duration-200 ${dropdownOpen === link.label ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {dropdownOpen === link.label && (
                        <ul id="mobile-equipment-menu" className="ml-3 pl-4 border-l border-white/10 space-y-0.5 mt-1">
                          {equipmentItems.map((item) => (
                            <li key={item.link}>
                              <Link
                                href={item.link}
                                onClick={closeAll}
                                className={`block px-3 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200 ${focusClasses}`}
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link
                              href="/equipments"
                              onClick={closeAll}
                              className={`block px-3 py-2.5 text-sm font-semibold text-brand hover:text-white transition-colors duration-200 ${focusClasses}`}
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
                      className={`block px-3 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                        isActive(link.href)
                          ? 'text-white bg-white/5'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      } ${focusClasses}`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Primary CTA — bottom of the menu */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <Button
                href="/contact#contact-form"
                onClick={closeAll}
                icon={
                <ArrowUpRight
                  size={18}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
                />
              }
                className="w-full justify-center !rounded-lg !bg-[#E53935] hover:!bg-[#C62828] !shadow-[0_4px_14px_-6px_rgba(229,57,53,0.55)] hover:!shadow-[0_10px_22px_-8px_rgba(229,57,53,0.65)]"
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
