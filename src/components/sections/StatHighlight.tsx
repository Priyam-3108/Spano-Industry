'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

const stats = [
  { target: 30, suffix: '+', label: 'Years of Manufacturing Excellence' },
  { target: 12, suffix: '+', label: 'Major Retail Clients Nationwide' },
  { target: 6, suffix: '+', label: 'Product Categories Engineered In-House' },
];

export function StatHighlight() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <p className="font-heading font-black leading-none tracking-tight text-fluid-stat text-[var(--color-spano-dark)]">
            STRONG <span className="text-[var(--color-spano-bright)]">STRUCTURES.</span>
            <br />
            SEAMLESS <span className="text-[var(--color-spano-bright)]">SHOPPING.</span>
          </p>
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-3xl mx-auto">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <p className="font-heading font-black text-4xl sm:text-5xl text-[var(--color-spano-bright)] leading-none">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} duration={2000} />
              </p>
              <p className="mt-2 text-[var(--color-spano-text)] text-sm font-body leading-snug">
                {stat.label}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
