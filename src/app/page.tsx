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
import { StatHighlight } from '@/components/sections/StatHighlight';
import { IndustriesCollage } from '@/components/sections/IndustriesCollage';
import { OurClients } from '@/components/sections/OurClients';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { homeProductsSummary, allRackOptions, processSteps, seoIndustries } from '@/components/data/content';
import { IMAGES } from '@/components/data/images';
import { ArrowRight, CheckCircle2, Store, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SPANO Industry | Industrial Racking & Storage Solutions',
  description:
    'Manufacturer & supplier of heavy duty warehouse storage racks, industrial slotted angle shelving, locker, library & storewell cupboards, plus supermarket racks and retail display fixtures across India.',
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
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
              <div>
                <AnimatedSection direction="up">
                  <span className="text-[var(--color-spano-bright)] text-xs font-bold tracking-widest uppercase block mb-2 font-heading text-center leading-none">
                    Welcome to SPANO Industry
                  </span>
                  <SectionHeader title="About" subtitle="Our Expertise" align="center" />
                </AnimatedSection>

                <AnimatedSection delay={0.1} direction="up" className="flex flex-col items-center">
                  <div className="space-y-4 text-[var(--color-spano-text)] text-base leading-relaxed font-body">
                    <p>
                      With <strong className="text-[var(--color-spano-dark)]">30 years of manufacturing experience</strong>, SPANO Industry is a market leader in engineering heavy duty industrial racking and storage systems.
                    </p>
                    <p>
                      We help warehouses, factories, logistics centers, and educational institutions build organized, space-efficient storage, and support supermarkets, departmental stores, and boutique fashion outlets with modern retail display fixtures.
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-6 max-w-3xl mx-auto">
                    {['In-house Manufacturing', 'Nationwide Delivery', 'Custom Store Fixtures', 'Load-Tested Steel'].map((point) => (
                      <div key={point} className="flex items-center gap-2 text-xs sm:text-sm font-body text-[var(--color-spano-dark)] font-medium">
                        <CheckCircle2 size={16} className="text-[var(--color-spano-bright)] flex-shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
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
            </div>
          </div>
        </section>

        {/* 3. Our Products Section */}
        <section className="py-20 lg:py-28 bg-[var(--color-spano-light)]/40 overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <SectionHeader
                title={
                  <span>
                    <span className="font-light normal-case">Our Core </span>
                    <span className="font-extrabold uppercase">Product Range</span>
                  </span>
                }
                subtitle="Engineered for Industry & Retail"
                align="center"
              />
              <p className="text-center text-[var(--color-spano-text)] text-sm font-body max-w-xl mx-auto -mt-4 mb-12">
                Discover our comprehensive categories of heavy duty industrial racking, storage cupboards, and supermarket & retail fixtures.
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

        {/* 4. Signature Stat Highlight */}
        <StatHighlight />

        {/* 5. Our Process */}
        <OurProcess />

        {/* 6. Industries We Serve (6-Image Brochure Collage) */}
        <IndustriesCollage />

        {/* 7. Rack Options Carousel Section */}
        <section className="py-20 lg:py-28 bg-[var(--color-spano-light)]/40 border-y border-gray-100 overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <SectionHeader
                title="Rack Options"
                subtitle="Complete Industrial &amp; Retail Racking Systems"
                align="center"
              />
              <p className="text-center text-[var(--color-spano-text)] text-sm font-body max-w-xl mx-auto -mt-4 mb-12">
                Browse all our manufactured rack models from heavy duty warehouse shelving and storage cupboards to supermarket wall units and checkout counters.
              </p>
            </AnimatedSection>

            <ProductTiltCarousel items={allRackOptions} />
          </div>
        </section>

        {/* 8. Client Logos */}
        <OurClients />

        {/* 9. Contact CTA Banner */}
        <CtaBanner />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
