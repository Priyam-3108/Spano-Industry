'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Industries', href: '#industries' },
  { label: 'Supermarket Racks', href: '#supermarket-racks' },
  { label: 'Display Racks', href: '#display-racks' },
  { label: 'Custom Solutions', href: '#custom-solutions' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-spano-dark)]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group" aria-label="SPANO Industry Home">
            <div className="flex items-baseline gap-0.5">
              <span className="font-heading font-black text-2xl text-white tracking-tight">SPANO</span>
              <span className="font-heading font-light text-xs text-[var(--color-spano-bright)] tracking-widest ml-1 uppercase">Industry</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white text-xs font-medium px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 font-body"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-3 px-4 py-2 bg-[var(--color-spano-bright)] text-white text-xs font-bold rounded-lg hover:bg-[var(--color-spano-lime)] transition-colors font-heading"
            >
              Get Quote
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav
          className="bg-[var(--color-spano-dark)]/98 backdrop-blur-md px-4 pb-6 pt-2 border-t border-white/10 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-white/80 hover:text-white text-sm font-medium px-3 py-3 rounded-lg hover:bg-white/10 transition-all duration-200 border-b border-white/5 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="mt-3 px-4 py-3 bg-[var(--color-spano-bright)] text-white text-sm font-bold rounded-lg text-center hover:bg-[var(--color-spano-lime)] transition-colors"
          >
            Get a Free Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
