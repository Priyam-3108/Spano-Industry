'use client';
import { useState } from 'react';
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
import { Send, CheckCircle2 } from 'lucide-react';

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('all');

  const handleEnquire = (productName: string) => {
    setSelectedProduct(productName);
    setIsModalOpen(true);
  };

  const filteredCategories =
    activeTab === 'all'
      ? productCategories
      : productCategories.filter((cat) => cat.id === activeTab);

  return (
    <>
      <Navbar />
      <main>
        {/* Header Banner */}
        <section className="relative pt-28 pb-20 bg-[var(--color-spano-dark)] text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <span className="text-[var(--color-spano-bright)] text-xs font-bold tracking-widest uppercase block mb-3 font-heading">
                Complete Product Catalog
              </span>
              <h1 className="font-heading font-black text-white leading-tight text-3xl sm:text-5xl max-w-3xl">
                Retail Racks, Display Fixtures &amp; Heavy Duty Storage
              </h1>
              <p className="mt-4 text-white/70 text-base max-w-2xl font-body">
                Explore our engineering range covering supermarket racks, boutique displays, custom wood-metal fixtures, slotted angles, warehouse racks, and checkout accessories.
              </p>
            </AnimatedSection>

            {/* Category Tab Selector */}
            <div className="mt-10 flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold font-heading transition-all ${
                  activeTab === 'all'
                    ? 'bg-[var(--color-spano-bright)] text-white shadow-lg'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                All Products
              </button>
              {productCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold font-heading transition-all ${
                    activeTab === cat.id
                      ? 'bg-[var(--color-spano-bright)] text-white shadow-lg'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Categories & Products */}
        <div className="py-20 lg:py-24 space-y-24 bg-white">
          {filteredCategories.map((catGroup) => (
            <section
              key={catGroup.id}
              id={catGroup.id}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28"
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
                        <span className="absolute top-3 left-3 px-3 py-1 bg-[var(--color-spano-dark)]/90 text-[var(--color-spano-bright)] text-[10px] font-bold rounded-full uppercase tracking-wider backdrop-blur-sm font-heading">
                          {item.category}
                        </span>
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
