'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

export function CtaBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-spano-mid)] via-[var(--color-spano-dark)] to-[#0a2e24]" />

      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--color-spano-bright)]/10" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[var(--color-spano-lime)]/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />

      <div
        ref={ref}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[var(--color-spano-bright)] text-sm font-bold tracking-widest uppercase mb-4 font-body"
        >
          Ready to Transform Your Store?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-black text-white leading-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
        >
          LET&apos;S BUILD YOUR
          <br />
          <span className="text-[var(--color-spano-bright)]">MODERN RETAIL SPACE</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 text-white/65 text-base leading-relaxed max-w-xl mx-auto font-body"
        >
          From consultation to installation, our team is ready to design the perfect racking solution for your business. Get a free quote today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:Sales@spanoindustry.com"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-spano-bright)] text-white font-bold rounded-xl hover:bg-[var(--color-spano-lime)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-spano-bright)]/40 hover:-translate-y-0.5 font-heading"
          >
            Get Free Quote
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="tel:+919173564015"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/25 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm font-heading"
          >
            <Phone size={16} />
            Call Us Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
