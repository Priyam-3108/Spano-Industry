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
          src={IMAGES.hero.industrialCover}
          alt="SPANO Industry Industrial Racking & Storage Solutions"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          loading="eager"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-spano-dark)]/90 via-[var(--color-spano-dark)]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-spano-dark)]/60 via-transparent to-black/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-36 sm:pt-40 md:pt-44 pb-20">
        <div className="max-w-3xl">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-4"
          >
            <h1
              className="font-heading uppercase text-white/95 tracking-tight leading-[0.98] sm:leading-[0.96] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3"
            >
              <span className="font-extrabold">HEAVY DUTY INDUSTRIAL</span>{' '}
              <span className="font-light opacity-90">RACKING</span>
              <br className="hidden sm:inline" />{' '}
              <span className="text-[var(--color-spano-bright)] font-extrabold">&amp; STORAGE</span>{' '}
              <span className="text-[var(--color-spano-bright)] font-light">SOLUTIONS</span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-heading font-bold text-white/90 text-base sm:text-lg leading-none mb-1 sm:mb-1.5"
          >
            INNOVATIVE RACKING FOR SMARTER STORAGE.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-2 text-white/75 text-base sm:text-lg leading-snug max-w-2xl font-body"
          >
            Manufacturer &amp; supplier of engineered heavy duty warehouse storage racks, industrial slotted angle shelving, and locker, library &amp; storewell cupboards for factories and institutions, plus supermarket racks and retail display fixtures for modern stores.
          </motion.p>
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
        defaultProduct="Industrial Racking & Storage Solutions"
      />
    </section>
  );
}
