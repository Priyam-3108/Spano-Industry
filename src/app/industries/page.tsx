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
import { IMAGES } from '@/components/data/images';
import { Check, Send, Store, Search, ArrowRight } from 'lucide-react';

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
        <section className="relative min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] flex items-center overflow-hidden bg-[var(--color-spano-dark)] text-white">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGES.industries.fullBleed}
              alt="Industries & Retail Sectors We Serve"
              className="w-full h-full object-cover object-center opacity-25"
            />
            {/* Green Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-spano-dark)]/95 via-[var(--color-spano-dark)]/80 to-[var(--color-spano-dark)]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-spano-dark)]/80 via-transparent to-black/30" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-16 lg:pb-20">
            <div className="max-w-3xl">
              <AnimatedSection direction="left">
                <h1 className="font-heading uppercase text-white leading-[0.98] sm:leading-[0.96] text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4">
                  <span className="font-extrabold">INDUSTRIES</span>{' '}
                  <span className="font-light whitespace-nowrap">&amp; RETAIL SECTORS</span><br />
                  <span className="text-[var(--color-spano-bright)] font-extrabold">WE SERVE</span>
                </h1>
                <p className="mt-3 text-white/80 text-base sm:text-lg max-w-2xl font-body leading-normal">
                  From heavy duty warehouse racking and institutional storage cupboards to high-density supermarket aisles and boutique apparel hangs, we design customized solutions for every industry and retail niche.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Industries Collage */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-12 gap-4 sm:gap-6">
              {seoIndustries.map((ind: SeoIndustry, i: number) => {
                const collageClasses = [
                  'col-span-12 lg:col-span-3 lg:row-span-2 min-h-[320px] lg:min-h-[620px]',  // 1. Supermarkets (Tall left)
                  'col-span-12 md:col-span-6 lg:col-span-6 h-[295px] sm:h-[315px]',          // 2. Grocery Stores (Wide middle - zoomed out)
                  'col-span-12 md:col-span-6 lg:col-span-3 lg:row-span-2 min-h-[320px] lg:min-h-[620px]',  // 3. Departmental Stores (Tall right)
                  'col-span-12 md:col-span-6 lg:col-span-3 h-[270px] sm:h-[285px]',          // 4. Gift Shops (Middle left)
                  'col-span-12 md:col-span-6 lg:col-span-3 h-[270px] sm:h-[285px]',          // 5. Footwear Stores (Middle right)
                  'col-span-12 md:col-span-6 lg:col-span-4 h-[240px]',                        // 6. Electronics Stores
                  'col-span-12 md:col-span-6 lg:col-span-4 h-[240px]',                        // 7. Cosmetic Stores
                  'col-span-12 md:col-span-6 lg:col-span-4 h-[240px]',                        // 8. Stationery Shops
                  'col-span-12 lg:col-span-12 h-[280px] md:h-[370px] lg:h-[385px]',          // 9. Warehouses (Full width - increased height & zoomed out)
                  'col-span-12 md:col-span-6 lg:col-span-4 h-[240px]',                        // 10. Textile Rack
                  'col-span-12 md:col-span-6 lg:col-span-4 h-[240px]',                        // 11. Garment Stores
                  'col-span-12 md:col-span-6 lg:col-span-4 h-[240px]',                        // 12. Slotted Rack
                  'col-span-12 lg:col-span-12 h-[280px] md:h-[370px] lg:h-[385px]',          // 13. Educational & Institutional Storage (Full width)
                ];

                const imagePositions = [
                  'object-cover object-top sm:object-[center_top]',    // 1. Supermarkets (zoom out to show lights at top)
                  'object-cover object-[center_50%] sm:object-[center_52%]', // 2. Grocery Stores (zoomed out showing lower shelves & bottom perspective)
                  'object-cover object-center sm:object-[center_top]', // 3. Departmental Stores (shows full spice racks)
                  'object-cover object-center',                        // 4. Gift Shops
                  'object-cover object-center',                        // 5. Footwear Stores
                  'object-cover object-center',                        // 6. Electronics Stores
                  'object-cover object-center',                        // 7. Cosmetic Stores
                  'object-cover object-center',                        // 8. Stationery Shops
                  'object-cover object-[center_35%]',                  // 9. Warehouses (zoomed out showing upper roof & pallet levels)
                  'object-cover object-center',                        // 10. Textile Rack
                  'object-cover object-center',                        // 11. Garment Stores
                  'object-cover object-center',                        // 12. Slotted Rack
                  'object-cover object-center',                        // 13. Educational & Institutional Storage
                ];

                const spanClass = collageClasses[i % collageClasses.length];
                const imgPosClass = imagePositions[i % imagePositions.length];

                return (
                  <AnimatedSection key={ind.id} delay={i * 0.05} className={`${spanClass} h-full`}>
                    <button
                      onClick={() => handleEnquire(ind.name)}
                      className="group relative block w-full h-full text-left rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200/80 min-h-[200px] focus:outline-none cursor-pointer"
                    >
                      {/* Background Image */}
                      <StaticImage
                        src={ind.imageSrc}
                        alt={ind.name}
                        className={`w-full h-full ${imgPosClass} transition-transform duration-700 ease-out group-hover:scale-105`}
                      />

                      {/* Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-0" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Static Badge (Top-Left) */}
                      <div className="absolute top-0 left-0 bg-[#82bc00] text-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-br-2xl shadow-md z-10 min-w-[120px] max-w-[85%] border-r border-b border-white/20">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-heading font-black text-xs text-white/95 tracking-wide">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <div className="h-[1.5px] w-12 bg-white/80" />
                        </div>
                        <h3 className="font-heading font-black text-sm sm:text-base text-white tracking-tight leading-tight">
                          {ind.name}
                        </h3>
                      </div>

                      {/* Hover Details (Slide Up) */}
                      <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
                        <p className="text-[var(--color-spano-bright)] text-[10px] font-bold uppercase tracking-wider mb-1 font-heading">
                          {ind.subtitle}
                        </p>
                        <p className="text-white/85 text-xs font-body leading-relaxed mb-2.5 line-clamp-2">
                          {ind.description}
                        </p>

                        {/* Recommended Racks Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-2.5">
                          {ind.recommendedRacks.slice(0, 3).map((rack) => (
                            <span
                              key={rack}
                              className="px-2 py-0.5 rounded-md bg-white/15 border border-white/15 text-[9px] font-medium font-heading text-white"
                            >
                              {rack}
                            </span>
                          ))}
                        </div>

                        <div className="inline-flex items-center gap-1.5 text-xs font-bold font-heading text-[var(--color-spano-bright)]">
                          Get Racking Quote
                          <ArrowRight size={12} />
                        </div>
                      </div>
                    </button>
                  </AnimatedSection>
                );
              })}
            </div>
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
