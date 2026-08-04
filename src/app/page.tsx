import type { Metadata } from 'next';
import Link from 'next/link';
import { ProductTiltCarousel } from '@/components/ui/ProductTiltCarousel';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { StaticImage } from '@/components/ui/StaticImage';
import { OurProcess } from '@/components/sections/OurProcess';
import { IndustriesCollage } from '@/components/sections/IndustriesCollage';
import { OurClients } from '@/components/sections/OurClients';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { homeProductsSummary, allRackOptions, processSteps, seoIndustries } from '@/components/data/content';
import { IMAGES } from '@/components/data/images';
import { ArrowRight, CheckCircle2, Store, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SPANO Industry | Modern Retail Racking Solutions',
  description:
    'Manufacturer & supplier of modern supermarket racks, retail display stands, heavy-duty storage racks, custom wooden-metal fixtures, and accessories across India.',
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero Banner */}
        <HeroSection />

        {/* 2. About Us Section (Story Preview) */}
        <section className="py-20 lg:py-28 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <AnimatedSection direction="left">
                  <span className="text-[var(--color-spano-bright)] text-xs font-bold tracking-widest uppercase block mb-3 font-heading">
                    Welcome to SPANO Industry
                  </span>
                  <SectionHeader title="About" subtitle="Our Expertise" />
                </AnimatedSection>

                <AnimatedSection delay={0.1} direction="left">
                  <div className="space-y-4 text-[var(--color-spano-text)] text-base leading-relaxed font-body">
                    <p>
                      With <strong className="text-[var(--color-spano-dark)]">30 years of manufacturing experience</strong>, SPANO Industry is a market leader in designing and producing modern retail display fixtures and industrial storage systems.
                    </p>
                    <p>
                      We help supermarkets, departmental stores, boutique fashion outlets, and warehouses build organized, space-efficient, and visually stunning environments.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-spano-dark)] hover:bg-[var(--color-spano-bright)] text-white font-bold text-xs rounded-xl transition-colors font-heading shadow-md"
                    >
                      Read Full Company Story
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </AnimatedSection>
              </div>

              <AnimatedSection direction="right">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <StaticImage
                    src={IMAGES.about.main}
                    alt="SPANO Industry Racking Installation"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-spano-bright)]/15 text-[var(--color-spano-dark)] flex items-center justify-center font-heading font-black text-xl">
                      30
                    </div>
                    <div>
                      <p className="font-heading font-bold text-xs text-[var(--color-spano-dark)]">Years Manufacturing Legacy</p>
                      <p className="text-[11px] text-[var(--color-spano-text)] font-body">Trusted by retailers across India</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* 3. Our Products Section */}
        <section className="py-20 lg:py-28 bg-[var(--color-spano-light)]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <SectionHeader
                title="Our Core Product Range"
                subtitle="Engineered for Every Retail Need"
                align="center"
              />
              <p className="text-center text-[var(--color-spano-text)] text-sm font-body max-w-xl mx-auto -mt-4 mb-12">
                Discover our comprehensive categories of supermarket shelving, custom boutique fixtures, and heavy industrial storage.
              </p>
            </AnimatedSection>

            <ProductTiltCarousel items={homeProductsSummary} />

            <div className="mt-12 text-center">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--color-spano-dark)] hover:bg-[var(--color-spano-bright)] text-white font-bold text-xs rounded-xl transition-colors font-heading shadow-lg"
              >
                View Full Product Catalog
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Our Process */}
        <OurProcess />

        {/* 5. Industries We Serve (6-Image Brochure Collage) */}
        <IndustriesCollage />

        {/* 6. Rack Options Carousel Section */}
        <section className="py-20 lg:py-28 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <SectionHeader
                title="Rack Options"
                subtitle="Complete Store &amp; Industrial Racking Systems"
                align="center"
              />
              <p className="text-center text-[var(--color-spano-text)] text-sm font-body max-w-xl mx-auto -mt-4 mb-12">
                Browse all our manufactured rack models from supermarket wall units and island aisles to heavy warehouse shelving and checkout counters.
              </p>
            </AnimatedSection>

            <ProductTiltCarousel items={allRackOptions} />
          </div>
        </section>

        {/* 7. Client Logos */}
        <OurClients />

        {/* 8. Contact CTA Banner */}
        <CtaBanner />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
