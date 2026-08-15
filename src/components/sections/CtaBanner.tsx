'use client';
import { useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { EnquireModal } from '@/components/ui/EnquireModal';

export function CtaBanner() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <section className="py-10 lg:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating Rounded Card with Dark Green Background */}
        <div className="relative rounded-3xl bg-[var(--color-spano-dark)] text-white p-8 sm:p-10 lg:p-12 shadow-xl border border-white/10 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-8 text-center md:text-left">
            {/* Text Content */}
            <div className="max-w-2xl">
              <span className="text-[var(--color-spano-bright)] text-xs font-heading font-bold uppercase tracking-widest block mb-1">
                SPANO Industry Store Racking Solutions
              </span>
              <h2 className="font-heading text-white text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-[0.98] sm:leading-[0.96]">
                <span className="font-extrabold uppercase block">LET&apos;S BUILD YOUR</span>
                <span className="font-light normal-case block text-[var(--color-spano-bright)] text-[0.85em]">Modern Retail Space</span>
              </h2>
              <p className="text-white/75 text-xs sm:text-sm font-body mt-2">
                From store floor measurements to manufacturing &amp; final installation across India.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 flex-shrink-0">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="btn-shine px-6 py-3 bg-[var(--color-spano-bright)] hover:bg-[var(--color-spano-lime)] text-[var(--color-spano-dark)] font-heading font-bold text-xs rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                Get Free Quote
                <ArrowRight size={15} />
              </button>

              <a
                href="tel:+919173564015"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-xs rounded-xl border border-white/20 transition-all flex items-center gap-2"
              >
                <Phone size={15} />
                +91 91735 64015
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      <EnquireModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultProduct="Modern Retail Space Project"
      />
    </section>
  );
}
