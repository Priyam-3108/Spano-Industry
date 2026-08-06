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
        {/* Header Banner (Section 1) */}
        <section className="relative pt-28 pb-16 bg-[var(--color-spano-dark)] text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-spano-bright)]/15 border border-[var(--color-spano-bright)]/30 backdrop-blur-md mb-4">
                <span className="w-2 h-2 rounded-full bg-[var(--color-spano-bright)] animate-pulse" />
                <span className="text-[var(--color-spano-bright)] text-xs font-heading font-black tracking-widest uppercase">
                  Complete Product Catalog
                </span>
              </div>
              <h1 className="font-heading font-black text-white leading-tight text-3xl sm:text-5xl max-w-3xl">
                Retail Racks, Display Fixtures &amp; Heavy Duty Storage
              </h1>
              <p className="mt-4 text-white/70 text-base max-w-2xl font-body">
                Explore our engineering range covering supermarket racks, boutique displays, custom wood-metal fixtures, slotted angles, warehouse racks, and checkout accessories.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Sticky Category Navigation Bar (Section 2 Top) */}
        <div className="sticky top-[70px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all duration-300">
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
        <div className="py-16 lg:py-20 space-y-20 bg-white">
          {filteredCategories.map((catGroup) => (
            <section
              key={catGroup.id}
              id={catGroup.id}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-32"
            >
              <AnimatedSection>
                <div className="mb-10">
                  <h2 className="font-heading font-black text-[var(--color-spano-dark)] text-2xl sm:text-3xl">
                    {catGroup.title}
                  </h2>
                  <p className="text-[var(--color-spano-text)] text-sm sm:text-base mt-2 font-body max-w-3xl">
                    {catGroup.description}
                  </p>
                  <div className="mt-3 h-1 w-20 bg-gradient-to-r from-[var(--color-spano-bright)] to-[var(--color-spano-lime)] rounded-full" />
                </div>
              </AnimatedSection>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {catGroup.items.map((item: ProductItem, i: number) => (
                  <AnimatedSection key={item.id} delay={i * 0.08}>
                    <div className="group rounded-3xl bg-white border border-gray-200 hover:border-[var(--color-spano-bright)]/40 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full overflow-hidden">
                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-spano-light)]/40">
                        <StaticImage
                          src={item.imageSrc}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 z-10">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-spano-dark)]/85 text-white border border-white/20 text-[10px] font-heading font-black uppercase tracking-wider shadow-lg backdrop-blur-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-spano-bright)]" />
                            <span>{item.category}</span>
                          </div>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-heading font-bold text-lg text-[var(--color-spano-dark)] group-hover:text-[var(--color-spano-mid)] transition-colors mb-2">
                          {item.name}
                        </h3>
                        <p className="text-[var(--color-spano-text)] text-xs leading-relaxed font-body mb-5 flex-grow">
                          {item.description}
                        </p>

                        {/* Features */}
                        <div className="mb-6 pt-4 border-t border-gray-100">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-spano-dark)] mb-2 font-heading">
                            Key Specifications
                          </p>
                          <FeatureList items={item.features} />
                        </div>

                        {/* Enquire Now CTA */}
                        <button
                          onClick={() => handleEnquire(item.name)}
                          className="w-full py-3 px-4 bg-[var(--color-spano-dark)] hover:bg-[var(--color-spano-bright)] text-white font-bold rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 text-xs font-heading shadow-md"
                        >
                          <Send size={14} />
                          Enquire Now for {item.name.split(' ')[0]}
                        </button>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
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
