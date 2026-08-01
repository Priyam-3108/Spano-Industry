import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { StaticImage } from '@/components/ui/StaticImage';
import { IMAGES } from '@/components/data/images';

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text column */}
          <div>
            <AnimatedSection direction="left">
              <SectionHeader title="About" subtitle="Us" />
            </AnimatedSection>

            <AnimatedSection delay={0.1} direction="left">
              <div className="space-y-4 text-[var(--color-spano-text)] text-base leading-relaxed font-body">
                <p>
                  With <strong className="text-[var(--color-spano-dark)] font-semibold">30 years of expertise</strong> in retail display and storage solutions, SPANO has established itself as a trusted name in the industry. We specialize in manufacturing innovative, durable, and functional racking systems that enhance the appearance, organization, and efficiency of retail and commercial spaces.
                </p>
                <p>
                  From supermarkets and departmental stores to specialty retail outlets and warehouses, our products are designed to meet modern business requirements while maximizing display capacity and customer convenience.
                </p>
                <p>
                  We combine advanced manufacturing techniques, premium-quality raw materials, and practical retail understanding to create racking systems that are aesthetically appealing, structurally strong, and highly customizable.
                </p>
                <p>
                  Our commitment to quality, timely delivery, and customer satisfaction has helped us build long-term relationships with retailers, wholesalers, distributors, and commercial businesses across the region.
                </p>
              </div>
            </AnimatedSection>

            {/* Mission & Vision */}
            <AnimatedSection delay={0.2} direction="left">
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[var(--color-spano-light)] border border-[var(--color-spano-bright)]/20">
                  <h3 className="font-heading font-bold text-[var(--color-spano-bright)] text-lg mb-2">Mission</h3>
                  <p className="text-[var(--color-spano-text)] text-sm leading-relaxed font-body">
                    To provide innovative and reliable retail display solutions that help businesses create better shopping experiences.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-[var(--color-spano-light)] border border-[var(--color-spano-bright)]/20">
                  <h3 className="font-heading font-bold text-[var(--color-spano-bright)] text-lg mb-2">Vision</h3>
                  <p className="text-[var(--color-spano-text)] text-sm leading-relaxed font-body">
                    To become a leading name in retail infrastructure by delivering high-performance racking systems with modern aesthetics and long-lasting quality.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Image column */}
          <AnimatedSection direction="right" className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <StaticImage
                src={IMAGES.about.main}
                alt="SPANO retail store racking installation"
                className="w-full h-full object-cover aspect-[4/5]"
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--color-spano-bright)]/15 flex items-center justify-center">
                    <span className="font-heading font-black text-[var(--color-spano-dark)] text-xl">30</span>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-[var(--color-spano-dark)] text-sm">Years of Excellence</p>
                    <p className="text-[var(--color-spano-text)] text-xs font-body">In retail display & storage solutions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-[var(--color-spano-bright)]/10 -z-10" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-[var(--color-spano-lime)]/8 -z-10" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
