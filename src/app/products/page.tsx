'use client';
import { useState, useRef } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { StaticImage } from '@/components/ui/StaticImage';
import { FeatureList } from '@/components/ui/FeatureList';
import { EnquireModal } from '@/components/ui/EnquireModal';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { productCategories, ProductItem } from '@/components/data/content';
import { IMAGES } from '@/components/data/images';
import { Send, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('all');
  const tabsNavRef = useRef<HTMLDivElement>(null);

  const handleEnquire = (productName: string) => {
    setSelectedProduct(productName);
    setIsModalOpen(true);
  };

  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsNavRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      tabsNavRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const filteredCategories =
    activeTab === 'all'
      ? productCategories
      : productCategories.filter((cat) => cat.id === activeTab);

  return (
    <>
      <Navbar />
      <main>
        {/* Header Banner (Full Screen Hero) */}
        <section className="relative min-h-screen flex items-end overflow-hidden bg-[var(--color-spano-dark)] text-white">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGES.supermarketRacks.fullBleed}
              alt="SPANO Industry Products & Solutions"
              className="w-full h-full object-cover object-center opacity-25"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-spano-dark)]/90 via-[var(--color-spano-dark)]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-spano-dark)]/60 via-transparent to-black/30" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-40 pb-24 sm:pb-28">
            <div className="max-w-3xl">
              <AnimatedSection direction="left">
                <h1 className="font-heading uppercase text-white leading-[0.98] sm:leading-[0.96] text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4">
                  <span className="font-extrabold">HEAVY DUTY STORAGE,</span>{' '}
                  <span className="font-light whitespace-nowrap">STORAGE CUPBOARDS &amp;</span><br />
                  <span className="text-[var(--color-spano-bright)] font-extrabold">RETAIL RACKING</span>
                </h1>
                <p className="mt-3 text-white/80 text-base sm:text-lg max-w-2xl font-body leading-normal">
                  Explore our engineering range covering heavy duty warehouse racks, industrial slotted angles, locker &amp; library cupboards, supermarket racks, boutique displays, and checkout accessories.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Sticky Category Navigation Bar (Section 2 Top) */}
        <div className="sticky top-[var(--navbar-h)] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
            {/* 1. Mobile Dropdown Selector (sm:hidden) */}
            <div className="w-full sm:hidden">
              <select
                value={activeTab}
                onChange={(e) => {
                  const val = e.target.value;
                  setActiveTab(val);
                  if (val === 'all') {
                    window.scrollTo({ top: 320, behavior: 'smooth' });
                  } else {
                    const el = document.getElementById(val);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.scrollTo({ top: 320, behavior: 'smooth' });
                    }
                  }
                }}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-white text-[var(--color-spano-dark)] text-xs font-bold font-heading shadow-sm focus:border-[var(--color-spano-bright)] focus:ring-2 focus:ring-[var(--color-spano-bright)]/20 outline-none cursor-pointer"
              >
                <option value="all">
                  All Products ({productCategories.reduce((acc, cat) => acc + cat.items.length, 0)})
                </option>
                {productCategories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.title} ({cat.items.length})
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Desktop Single-Row Navigation Bar with Scroll Controls (hidden sm:flex) */}
            <div className="hidden sm:flex items-center relative">
              {/* Left Scroll Arrow */}
              <button
                onClick={() => scrollTabs('left')}
                className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-gray-200 shadow-md text-[var(--color-spano-dark)] hover:bg-[var(--color-spano-dark)] hover:text-white transition-all flex items-center justify-center mr-2 z-10"
                aria-label="Scroll Left Categories"
                title="Previous Categories"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Scrollable Container */}
              <div
                ref={tabsNavRef}
                className="flex items-center gap-2 overflow-x-auto py-1 scroll-smooth w-full pb-2"
                style={{ scrollbarWidth: 'thin', scrollbarColor: '#66be47 #f1f1f1' }}
              >
                <button
                  onClick={() => {
                    setActiveTab('all');
                    window.scrollTo({ top: 320, behavior: 'smooth' });
                  }}
                  className={`flex-shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-bold font-heading transition-all duration-200 flex items-center gap-1.5 ${
                    activeTab === 'all'
                      ? 'bg-[var(--color-spano-dark)] text-white shadow-md border border-[var(--color-spano-dark)]'
                      : 'bg-[var(--color-spano-light)]/70 text-[var(--color-spano-dark)] hover:bg-[var(--color-spano-bright)]/15 border border-gray-200/80'
                  }`}
                >
                  <span>All Products</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                      activeTab === 'all'
                        ? 'bg-[var(--color-spano-bright)] text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {productCategories.reduce((acc, cat) => acc + cat.items.length, 0)}
                  </span>
                </button>

                {productCategories.map((cat) => {
                  const isActive = activeTab === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveTab(cat.id);
                        const el = document.getElementById(cat.id);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          window.scrollTo({ top: 320, behavior: 'smooth' });
                        }
                      }}
                      className={`flex-shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-bold font-heading transition-all duration-200 flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-[var(--color-spano-dark)] text-white shadow-md border border-[var(--color-spano-dark)]'
                          : 'bg-[var(--color-spano-light)]/70 text-[var(--color-spano-dark)] hover:bg-[var(--color-spano-bright)]/15 border border-gray-200/80'
                      }`}
                    >
                      <span>{cat.title}</span>
                      <span
                        className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                          isActive
                            ? 'bg-[var(--color-spano-bright)] text-white'
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {cat.items.length}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Right Scroll Arrow */}
              <button
                onClick={() => scrollTabs('right')}
                className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-gray-200 shadow-md text-[var(--color-spano-dark)] hover:bg-[var(--color-spano-dark)] hover:text-white transition-all flex items-center justify-center ml-2 z-10"
                aria-label="Scroll Right Categories"
                title="Next Categories"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Categories & Products */}
        <div className="py-16 lg:py-20 space-y-24 bg-white">
          {filteredCategories.map((catGroup, catIndex) => (
            <section
              key={catGroup.id}
              id={catGroup.id}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-32"
            >
              <AnimatedSection>
                <div className="mb-10 flex items-start gap-5">
                  <span className="font-heading font-black text-transparent text-6xl sm:text-7xl leading-none flex-shrink-0 [-webkit-text-stroke:1.5px_var(--color-spano-bright)] opacity-40 select-none hidden sm:block">
                    {String(catIndex + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h2 className="font-heading font-black text-[var(--color-spano-dark)] text-2xl sm:text-3xl leading-[0.98] sm:leading-[0.96] tracking-tight">{catGroup.title}</h2>
                    <p className="text-[var(--color-spano-text)] text-sm sm:text-base mt-2 font-body max-w-3xl">{catGroup.description}</p>
                    <div className="mt-3 h-1 w-20 bg-gradient-to-r from-[var(--color-spano-bright)] to-[var(--color-spano-lime)] rounded-full" />
                  </div>
                </div>
              </AnimatedSection>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {catGroup.items.map((item: ProductItem, i: number) => {
                  // Featured treatment only when >=3 regular cards remain, so it never leaves an orphaned partial row
                  const isFeatured = i === 0 && catGroup.items.length >= 4;
                  return (
                    <AnimatedSection
                      key={item.id}
                      delay={i * 0.08}
                      className={isFeatured ? 'lg:col-span-3' : ''}
                    >
                      <div
                        className={`group rounded-3xl bg-white border border-gray-200 hover:border-[var(--color-spano-bright)]/40 shadow-md hover:shadow-2xl transition-all duration-300 flex h-full overflow-hidden ${
                          isFeatured ? 'flex-col lg:flex-row' : 'flex-col'
                        }`}
                      >
                        {/* Image */}
                        <div
                          className={`relative overflow-hidden bg-[var(--color-spano-light)]/40 flex-shrink-0 p-6 ${
                            isFeatured ? 'aspect-[4/3] lg:aspect-auto lg:w-2/5 lg:p-10' : 'aspect-[3/4]'
                          }`}
                        >
                          <StaticImage
                            src={item.imageSrc}
                            alt={item.name}
                            className={`w-full h-full group-hover:scale-105 transition-transform duration-500 ${
                              item.imageFit === 'cover' ? 'object-cover' : 'object-contain'
                            }`}
                          />
                          <div className="absolute top-3 left-3 z-10">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-spano-dark)]/85 text-white border border-white/20 text-[10px] font-heading font-black uppercase tracking-wider shadow-lg backdrop-blur-md">
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-spano-bright)]" />
                              <span>{item.category}</span>
                            </div>
                          </div>
                          {isFeatured && (
                            <div className="absolute bottom-3 right-3 z-10">
                              <span className="px-2.5 py-1 rounded-full bg-[var(--color-spano-bright)] text-white text-[10px] font-heading font-black uppercase tracking-wider shadow-lg">
                                Most Popular
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Details */}
                        <div className={`p-6 flex flex-col flex-grow ${isFeatured ? 'lg:w-3/5 lg:p-8 lg:justify-center' : ''}`}>
                          <h3 className={`font-heading font-bold text-[var(--color-spano-dark)] group-hover:text-[var(--color-spano-mid)] transition-colors mb-2 ${isFeatured ? 'text-xl lg:text-2xl' : 'text-lg'}`}>
                            {item.name}
                          </h3>
                          <p className={`text-[var(--color-spano-text)] leading-relaxed font-body mb-5 flex-grow ${isFeatured ? 'text-sm' : 'text-xs'}`}>
                            {item.description}
                          </p>

                          {/* Features */}
                          <div className="mb-6 pt-4 border-t border-gray-100">
                            <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-spano-dark)] mb-2 font-heading">
                              Key Specifications
                            </p>
                            <FeatureList items={item.features} columns={isFeatured ? 2 : 1} />
                          </div>

                          {/* Enquire Now CTA */}
                          <button
                            onClick={() => handleEnquire(item.name)}
                            className={`py-3 px-4 bg-[var(--color-spano-dark)] hover:bg-[var(--color-spano-bright)] text-white font-bold rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 text-xs font-heading shadow-md ${isFeatured ? 'w-full lg:w-auto lg:px-8' : 'w-full'}`}
                          >
                            <Send size={14} />
                            Enquire Now for {item.name.split(' ')[0]}
                          </button>
                        </div>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Global CTA */}
        <CtaBanner />
      </main>

      <Footer />
      <WhatsAppButton />

      {/* Product Specific Inquiry Modal */}
      <EnquireModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultProduct={selectedProduct}
      />
    </>
  );
}
