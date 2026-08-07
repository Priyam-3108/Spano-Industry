'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, PhoneCall } from 'lucide-react';
import { EnquireModal } from '@/components/ui/EnquireModal';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Keep --navbar-h in sync with the header's real height (it shrinks on scroll),
  // so sticky bars elsewhere on the site never gap or overlap beneath it.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const setHeight = () => {
      document.documentElement.style.setProperty('--navbar-h', `${header.offsetHeight}px`);
    };
    setHeight();
    const observer = new ResizeObserver(setHeight);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 bg-[var(--color-spano-dark)] backdrop-blur-md border-b border-white/10 transition-all duration-300 ${
          scrolled ? 'py-2 shadow-2xl' : 'py-3.5 shadow-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="SPANO Industry Modern Retail Racking Solutions"
            >
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span
                    className={`font-heading font-black text-white tracking-tight group-hover:text-[var(--color-spano-bright)] transition-all duration-300 ${
                      scrolled ? 'text-xl lg:text-2xl' : 'text-2xl lg:text-3xl'
                    }`}
                  >
                    SPANO
                  </span>
                  <span className="font-heading font-light text-xs text-[var(--color-spano-bright)] tracking-widest uppercase ml-1">
                    Industry
                  </span>
                </div>
                <span className="text-[10px] text-white/70 font-body tracking-wider uppercase -mt-1 hidden sm:inline-block">
                  Modern Retail Racking Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs font-semibold px-3 py-2 rounded-lg transition-all duration-200 font-heading ${
                      isActive
                        ? 'text-[var(--color-spano-bright)] bg-white/10 shadow-inner'
                        : 'text-white/85 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+919173564015"
                className="hidden lg:flex items-center gap-1.5 text-xs text-white/80 hover:text-white transition-colors font-body"
              >
                <PhoneCall size={14} className="text-[var(--color-spano-bright)]" />
                <span>+91 91735 64015</span>
              </a>

              <button
                onClick={() => setIsEnquireOpen(true)}
                className="btn-shine px-4 py-2 bg-[var(--color-spano-bright)] hover:bg-[var(--color-spano-lime)] text-white font-bold text-xs rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-spano-bright)]/30 font-heading"
              >
                Enquire Now
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            open ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}
        >
          <nav
            className="bg-[var(--color-spano-dark)]/98 backdrop-blur-lg px-4 pb-6 pt-2 border-t border-white/10 flex flex-col gap-1 rounded-b-2xl shadow-2xl"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`text-sm font-semibold px-4 py-3 rounded-xl transition-all duration-200 border-b border-white/5 font-heading ${
                    isActive
                      ? 'text-[var(--color-spano-bright)] bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              onClick={() => {
                setOpen(false);
                setIsEnquireOpen(true);
              }}
              className="btn-shine mt-3 w-full py-3 px-4 bg-[var(--color-spano-bright)] text-white text-sm font-bold rounded-xl text-center hover:bg-[var(--color-spano-lime)] transition-colors font-heading"
            >
              Enquire Now
            </button>
          </nav>
        </div>
      </header>

      {/* Global Enquire Modal */}
      <EnquireModal
        isOpen={isEnquireOpen}
        onClose={() => setIsEnquireOpen(false)}
        defaultProduct="General Racking Solution Inquiry"
      />
    </>
  );
}
