'use client';
import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { StaticImage } from '@/components/ui/StaticImage';
import { EnquireModal } from '@/components/ui/EnquireModal';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { seoIndustries, SeoIndustry } from '@/components/data/content';
import { Check, Send, Store, Search } from 'lucide-react';

export default function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleEnquire = (industryName: string) => {
    setSelectedIndustry(`Racking Solutions for ${industryName}`);
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Banner */}
        <section className="relative pt-28 pb-20 bg-[var(--color-spano-dark)] text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-spano-bright)]/15 border border-[var(--color-spano-bright)]/30 backdrop-blur-md mb-4">
                <span className="w-2 h-2 rounded-full bg-[var(--color-spano-bright)] animate-pulse" />
                <span className="text-[var(--color-spano-bright)] text-xs font-heading font-black tracking-widest uppercase">
                  Tailored Retail Racking
                </span>
              </div>
              <h1 className="font-heading font-black text-white leading-tight text-3xl sm:text-5xl max-w-3xl">
                Industries &amp; Retail Sectors We Serve
              </h1>
              <p className="mt-4 text-white/70 text-base max-w-2xl font-body">
                From high-density supermarket aisles and sterile pharmacy shelving to boutique apparel hangs and heavy warehouse racking, we design customized solutions for every retail niche.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Industries List */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {seoIndustries.map((ind: SeoIndustry, i: number) => (
              <AnimatedSection key={ind.id} delay={0.05}>
                <div className="group rounded-3xl bg-white border border-gray-200 hover:border-[var(--color-spano-bright)]/40 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image (5 cols) */}
                  <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full overflow-hidden bg-[var(--color-spano-light)]">
                    <StaticImage
                      src={ind.imageSrc}
                      alt={`${ind.name} Display Racks`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-spano-dark)]/85 text-white border border-white/20 text-xs font-heading font-black tracking-wider shadow-lg backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-[var(--color-spano-bright)]" />
                        <span>SECTOR #{String(i + 1).padStart(2, '0')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content (7 cols) */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      {/* SEO Tags */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        {ind.searchTerms.map((term) => (
                          <span
                            key={term}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-heading font-bold text-[var(--color-spano-dark)] bg-[var(--color-spano-light)]/70 hover:bg-[var(--color-spano-bright)]/15 border border-[var(--color-spano-dark)]/10 transition-colors shadow-xs"
                          >
                            <Search size={11} className="text-[var(--color-spano-bright)]" />
                            {term}
                          </span>
                        ))}
                      </div>

                      <h2 className="font-heading font-black text-2xl sm:text-3xl text-[var(--color-spano-dark)] mb-2">
                        {ind.name}
                      </h2>
                      <p className="text-[var(--color-spano-bright)] text-xs font-bold uppercase tracking-wider mb-4 font-heading">
                        {ind.subtitle}
                      </p>

                      <p className="text-[var(--color-spano-text)] text-sm leading-relaxed font-body mb-6">
                        {ind.description}
                      </p>

                      {/* Recommended Racks */}
                      <div className="mb-6 bg-[var(--color-spano-light)]/50 p-4 rounded-2xl border border-gray-100">
                        <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-spano-dark)] mb-3 font-heading flex items-center gap-1.5">
                          <Store size={14} className="text-[var(--color-spano-bright)]" />
                          Recommended Racking Setup
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {ind.recommendedRacks.map((rack) => (
                            <div key={rack} className="flex items-center gap-2 text-xs text-[var(--color-spano-text)] font-body">
                              <span className="w-4 h-4 rounded-full bg-[var(--color-spano-bright)]/20 text-[var(--color-spano-bright)] flex items-center justify-center flex-shrink-0">
                                <Check size={10} strokeWidth={3} />
                              </span>
                              <span>{rack}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div>
                      <button
                        onClick={() => handleEnquire(ind.name)}
                        className="px-6 py-3 bg-[var(--color-spano-dark)] hover:bg-[var(--color-spano-bright)] text-white font-bold rounded-xl transition-colors duration-300 flex items-center gap-2 text-xs font-heading shadow-md"
                      >
                        <Send size={14} />
                        Get Racking Quote for {ind.name}
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Global CTA */}
        <CtaBanner />
      </main>

      <Footer />
      <WhatsAppButton />

      {/* Inquiry Modal */}
      <EnquireModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultProduct={selectedIndustry}
      />
    </>
  );
}
