import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-[var(--color-spano-dark)] text-white"
    >
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="font-heading font-black text-3xl tracking-tight">SPANO</span>
              <span className="font-heading font-light text-sm text-[var(--color-spano-bright)] tracking-widest ml-1 uppercase">Industry</span>
            </div>
            <p className="text-white/65 text-sm leading-relaxed font-body max-w-xs">
              30 years of expertise in retail display and storage solutions. Trusted by leading retailers across India.
            </p>
            <div className="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-[var(--color-spano-bright)] to-[var(--color-spano-lime)]" />
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-semibold text-[var(--color-spano-bright)] text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919173564015"
                  className="flex items-start gap-3 text-white/75 hover:text-white transition-colors group"
                  aria-label="Call +91 91735 64015"
                >
                  <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-white/10 group-hover:bg-[var(--color-spano-bright)]/20 flex items-center justify-center transition-colors">
                    <Phone size={14} />
                  </span>
                  <div>
                    <p className="text-xs text-white/40 font-body">Phone</p>
                    <p className="text-sm font-medium">+91 91735 64015</p>
                    <p className="text-sm font-medium">+91 91049 25353</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:Sales@spanoindustry.com"
                  className="flex items-start gap-3 text-white/75 hover:text-white transition-colors group"
                  aria-label="Email Sales@spanoindustry.com"
                >
                  <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-white/10 group-hover:bg-[var(--color-spano-bright)]/20 flex items-center justify-center transition-colors">
                    <Mail size={14} />
                  </span>
                  <div>
                    <p className="text-xs text-white/40 font-body">Email</p>
                    <p className="text-sm font-medium">Sales@spanoindustry.com</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-heading font-semibold text-[var(--color-spano-bright)] text-sm uppercase tracking-widest mb-5">
              Address
            </h3>
            <div className="flex items-start gap-3 text-white/75">
              <span className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <MapPin size={14} />
              </span>
              <div>
                <p className="text-xs text-white/40 font-body mb-1">Factory</p>
                <address className="text-sm font-medium not-italic leading-relaxed">
                  Plot 143 to 145, VR Eco Park,<br />
                  Kosmadi, Kamrej NH-8,<br />
                  Surat – 394326, Gujarat, India
                </address>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-8">
              <h3 className="font-heading font-semibold text-[var(--color-spano-bright)] text-sm uppercase tracking-widest mb-3">
                Quick Links
              </h3>
              <div className="flex flex-wrap gap-2">
                {['About', 'Products', 'Industries', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-xs text-white/60 hover:text-white px-2 py-1 rounded border border-white/15 hover:border-white/40 transition-all"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs font-body text-center sm:text-left">
            © {currentYear} SPANO Industry™. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-body">
            Trusted retail display & storage solutions since 1994
          </p>
        </div>
      </div>
    </footer>
  );
}
