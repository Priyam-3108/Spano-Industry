'use client';
import { motion } from 'framer-motion';
import { IMAGES } from '@/components/data/images';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMAGES.hero.background}
          alt="SPANO Industry — Retail racking solutions"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          loading="eager"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-spano-dark)]/85 via-[var(--color-spano-dark)]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-spano-dark)]/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-[var(--color-spano-bright)]/20 border border-[var(--color-spano-bright)]/40 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-spano-bright)] animate-pulse" />
            <span className="text-[var(--color-spano-bright)] text-xs font-semibold tracking-widest uppercase font-body">
              30 Years of Excellence
            </span>
          </motion.div>

          {/* Brand name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-2"
          >
            <span className="font-heading font-black text-white leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
              SPANO
            </span>
            <span className="font-heading font-light text-[var(--color-spano-bright)] text-xl tracking-[0.4em] uppercase ml-3 align-super">
              Industry
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="font-heading font-semibold text-white/90 leading-snug"
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)' }}>
              <span className="text-[var(--color-spano-bright)]">STRONG STRUCTURES.</span>
              <br />
              SEAMLESS SHOPPING.
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 text-white/70 text-base leading-relaxed max-w-lg font-body"
          >
            Manufacturer &amp; Supplier of innovative racking systems for supermarkets, departmental stores, and warehouses across India.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#products"
              className="px-6 py-3 bg-[var(--color-spano-bright)] text-white font-bold rounded-xl hover:bg-[var(--color-spano-lime)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-spano-bright)]/30 hover:-translate-y-0.5 font-heading text-sm"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/25 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm font-heading text-sm"
            >
              Get a Free Quote
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex flex-wrap gap-8"
          >
            {[
              { value: '30+', label: 'Years Experience' },
              { value: '500+', label: 'Projects Delivered' },
              { value: '8+', label: 'Product Categories' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading font-black text-[var(--color-spano-bright)] text-3xl leading-none">{stat.value}</p>
                <p className="text-white/55 text-xs mt-1 font-body">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-white/40 text-xs font-body tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
        >
          <ChevronDown className="text-white/40" size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
