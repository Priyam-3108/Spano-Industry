'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { IMAGES } from '@/components/data/images';
import { ChevronDown, ArrowRight, ShieldCheck } from 'lucide-react';
import { EnquireModal } from '@/components/ui/EnquireModal';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

export function HeroSection() {
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax: background moves at ~40% speed of scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background image */}
      <motion.div
        className="absolute inset-0 will-change-transform"
        style={{ y: bgY, scale: 1.15 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMAGES.hero.background}
          alt="SPANO Industry Modern Retail Racking Solutions"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          loading="eager"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-spano-dark)]/90 via-[var(--color-spano-dark)]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-spano-dark)]/60 via-transparent to-black/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-[var(--color-spano-bright)]/20 border border-[var(--color-spano-bright)]/40 backdrop-blur-md"
          >
            <ShieldCheck size={14} className="text-[var(--color-spano-bright)]" />
            <span className="text-[var(--color-spano-bright)] text-xs font-bold tracking-widest uppercase font-heading">
              30 Years of Racking Excellence
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-4"
          >
            <h1
              className="font-heading font-black tracking-tight leading-none mb-3 drop-shadow-sm text-fluid-hero"
            >
              <span className="text-white">SPANO </span>
              <span className="text-[var(--color-spano-bright)]">INDUSTRY</span>
            </h1>

            <h2
              className="font-heading font-extrabold text-white/95 tracking-tight leading-tight text-fluid-hero-sub"
            >
              Modern Retail <span className="text-[var(--color-spano-bright)]">Racking Solutions</span>
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading font-bold text-white/90 text-lg sm:text-xl leading-snug"
          >
            STRONG STRUCTURES. SEAMLESS SHOPPING.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl font-body"
          >
            Manufacturer &amp; supplier of innovative, durable supermarket racks, retail display stands, heavy-duty warehouse storage, and custom store fixtures across India.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/products"
              className="group px-7 py-3.5 bg-[var(--color-spano-bright)] hover:bg-[var(--color-spano-lime)] text-white font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-[var(--color-spano-bright)]/40 hover:-translate-y-0.5 font-heading text-sm flex items-center gap-2"
            >
              Explore Products
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={() => setIsEnquireOpen(true)}
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/25 transition-all duration-300 backdrop-blur-sm font-heading text-sm"
            >
              Get Free Quote
            </button>
          </motion.div>

          {/* Animated Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 pt-8 border-t border-white/15 grid grid-cols-3 gap-6 max-w-lg"
          >
            {[
              { target: 30, suffix: '+', label: 'Years Experience' },
              { target: 12, suffix: '+', label: 'Major Retail Clients' },
              { target: 6,  suffix: '+', label: 'Product Categories' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading font-black text-[var(--color-spano-bright)] text-2xl sm:text-3xl leading-none">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} duration={2200} />
                </p>
                <p className="text-white/60 text-xs mt-1 font-body">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-white/40 text-[10px] font-body tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="text-white/50" size={18} />
        </motion.div>
      </motion.div>

      {/* Modal */}
      <EnquireModal
        isOpen={isEnquireOpen}
        onClose={() => setIsEnquireOpen(false)}
        defaultProduct="Modern Retail Racking Solutions"
      />
    </section>
  );
}
