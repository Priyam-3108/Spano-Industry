import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Industries We Serve', href: '/industries' },
  { label: 'Contact', href: '/contact' },
];

const productLinks = [
  { label: 'Supermarket Racks', href: '/products#five-rack-options' },
  { label: 'Display & Retail Fixtures', href: '/products#display-fixtures' },
  { label: 'Customized Retail Solutions', href: '/products#customized-solutions' },
  { label: 'Heavy Duty Storage Racks', href: '/products#heavy-duty-racks' },
  { label: 'Slotted Angle Racks', href: '/products#slotted-angle-racks' },
  { label: 'Accessories & Cash Counters', href: '/products#retail-accessories' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[var(--color-spano-dark)] text-white relative">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <div className="flex items-baseline gap-1">
                <span className="font-heading font-black text-3xl tracking-tight text-white group-hover:text-[var(--color-spano-bright)] transition-colors">
                  SPANO
                </span>
                <span className="font-heading font-light text-sm text-[var(--color-spano-bright)] tracking-widest uppercase ml-1">
                  Industry
                </span>
              </div>
              <p className="text-xs text-white/60 font-body uppercase tracking-wider mt-0.5">
                Modern Retail Racking Solutions
              </p>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed font-body">
              Over 30 years of manufacturing excellence delivering durable, high-capacity, and beautifully styled racking systems across India.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/919173564015"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-colors font-heading shadow-md"
              >
                <MessageCircle size={14} />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-heading font-bold text-[var(--color-spano-bright)] text-sm uppercase tracking-widest mb-5">
              Navigation
            </h3>
            <ul className="space-y-2.5 font-body text-sm">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/75 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight size={14} className="text-[var(--color-spano-bright)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="font-heading font-bold text-[var(--color-spano-bright)] text-sm uppercase tracking-widest mb-5">
              Product Range
            </h3>
            <ul className="space-y-2.5 font-body text-sm">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/75 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-spano-bright)]/40 group-hover:bg-[var(--color-spano-bright)] transition-colors" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-heading font-bold text-[var(--color-spano-bright)] text-sm uppercase tracking-widest mb-5">
              Factory &amp; Sales
            </h3>
            <ul className="space-y-4 font-body text-sm">
              <li>
                <div className="flex items-start gap-3 text-white/80">
                  <span className="mt-1 flex-shrink-0 w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[var(--color-spano-bright)]">
                    <MapPin size={14} />
                  </span>
                  <address className="not-italic leading-relaxed text-xs text-white/75">
                    Plot 143 to 145, VR Eco Park,<br />
                    Kosmadi, Kamrej NH-8,<br />
                    Surat – 394326, Gujarat, India
                  </address>
                </div>
              </li>
              <li>
                <a
                  href="tel:+919173564015"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/10 group-hover:bg-[var(--color-spano-bright)]/20 flex items-center justify-center text-[var(--color-spano-bright)] transition-colors">
                    <Phone size={14} />
                  </span>
                  <div className="text-xs">
                    <p className="text-white/90 font-semibold">+91 91735 64015</p>
                    <p className="text-white/60">+91 91049 25353</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Sales@spanoindustry.com"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/10 group-hover:bg-[var(--color-spano-bright)]/20 flex items-center justify-center text-[var(--color-spano-bright)] transition-colors">
                    <Mail size={14} />
                  </span>
                  <span className="text-xs text-white/90 font-semibold">Sales@spanoindustry.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 font-body">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {currentYear} SPANO Industry™. All rights reserved.
          </p>
          <p className="text-white/40 text-xs text-center sm:text-right">
            Modern Retail Racking Solutions | Engineered for Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
