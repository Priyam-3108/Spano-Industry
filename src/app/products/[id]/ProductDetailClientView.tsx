'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StaticImage } from '@/components/ui/StaticImage';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { EnquireModal } from '@/components/ui/EnquireModal';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { ProductDetail } from '@/components/data/productsData';
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Send,
  MessageCircle,
  Phone,
  ChevronDown,
  ArrowRight,
  Factory,
  Sparkles,
  HelpCircle,
  Layers,
  Building2,
  SlidersHorizontal,
} from 'lucide-react';

interface ProductDetailClientViewProps {
  product: ProductDetail;
  relatedProducts: ProductDetail[];
}

export function ProductDetailClientView({
  product,
  relatedProducts,
}: ProductDetailClientViewProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello SPANO Industry, I am interested in your ${product.name}. Please share technical specifications, pricing, and availability.`
  );
  const whatsappUrl = `https://wa.me/919173564015?text=${whatsappMessage}`;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50/60 pt-[var(--navbar-h)]">
        {/* Breadcrumb & Navigation Bar */}
        <div className="bg-white border-b border-gray-200/80 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-heading">
              <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 text-gray-500">
                <Link
                  href="/"
                  className="hover:text-[var(--color-spano-dark)] transition-colors"
                >
                  Home
                </Link>
                <span>/</span>
                <Link
                  href="/products"
                  className="hover:text-[var(--color-spano-dark)] transition-colors"
                >
                  Products
                </Link>
                <span>/</span>
                <Link
                  href={`/products#${product.categoryId}`}
                  className="hover:text-[var(--color-spano-dark)] transition-colors text-gray-600 font-medium"
                >
                  {product.category}
                </Link>
                <span>/</span>
                <span className="text-[var(--color-spano-dark)] font-bold truncate max-w-[200px] sm:max-w-xs">
                  {product.name}
                </span>
              </nav>

              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-spano-mid)] hover:text-[var(--color-spano-dark)] transition-colors"
              >
                <ArrowLeft size={14} />
                <span>Back to Catalog</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Product Hero Showcase */}
        <section className="py-10 sm:py-14 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Image Showcase */}
              <div className="lg:col-span-6">
                <AnimatedSection direction="up">
                  <div className="relative rounded-3xl bg-white border border-gray-200/80 shadow-xl overflow-hidden p-6 sm:p-10 group">
                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-2 mb-4 z-10 relative">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-spano-dark)] text-white text-[11px] font-heading font-black uppercase tracking-wider shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-spano-bright)]" />
                        <span>{product.category}</span>
                      </div>

                      <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-spano-light)]/80 text-[var(--color-spano-dark)] text-[11px] font-heading font-bold border border-gray-200 shadow-xs">
                        <Factory size={12} className="text-[var(--color-spano-mid)]" />
                        <span>Direct Manufacturer</span>
                      </div>
                    </div>

                    {/* Product Image Stage */}
                    <div className="relative aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-gray-50 to-gray-100/60 p-4">
                      <StaticImage
                        src={product.imageSrc}
                        alt={product.name}
                        className={`w-full h-full group-hover:scale-105 transition-transform duration-700 ${
                          product.imageFit === 'contain' ? 'object-contain' : 'object-cover'
                        }`}
                      />
                    </div>

                    {/* Image Footer Trust Highlights */}
                    <div className="mt-6 pt-5 border-t border-gray-100 grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 rounded-xl bg-[var(--color-spano-light)]/40">
                        <p className="text-[10px] uppercase font-bold text-gray-500 font-heading">Quality</p>
                        <p className="text-xs font-black text-[var(--color-spano-dark)] font-heading">IS Certified</p>
                      </div>
                      <div className="p-2 rounded-xl bg-[var(--color-spano-light)]/40">
                        <p className="text-[10px] uppercase font-bold text-gray-500 font-heading">Treatment</p>
                        <p className="text-xs font-black text-[var(--color-spano-dark)] font-heading">7-Tank Treated</p>
                      </div>
                      <div className="p-2 rounded-xl bg-[var(--color-spano-light)]/40">
                        <p className="text-[10px] uppercase font-bold text-gray-500 font-heading">Custom sizes</p>
                        <p className="text-xs font-black text-[var(--color-spano-dark)] font-heading">100% Tailored</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right Column: Key Details & CTAs */}
              <div className="lg:col-span-6 flex flex-col">
                <AnimatedSection direction="up" delay={0.1}>
                  {/* Category Pill */}
                  <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[var(--color-spano-bright)]">
                    SPANO Industrial Engineering
                  </span>

                  {/* Product Title */}
                  <h1 className="mt-2 font-heading font-black text-[var(--color-spano-dark)] text-3xl sm:text-4xl lg:text-[42px] leading-[1.08] tracking-tight">
                    {product.name}
                  </h1>

                  {/* Subtitle / Tagline */}
                  <p className="mt-3 text-sm sm:text-base font-heading font-semibold text-[var(--color-spano-mid)] leading-snug">
                    {product.tagline}
                  </p>

                  {/* Short Description */}
                  <p className="mt-4 text-sm sm:text-base text-[var(--color-spano-text)] font-body leading-relaxed">
                    {product.shortDescription}
                  </p>

                  {/* SEO Spotlight Block (Added after product description) */}
                  {product.seoDescription && (
                    <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-emerald-50/70 to-[var(--color-spano-light)]/40 border border-emerald-200/60 shadow-2xs">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-[var(--color-spano-bright)] flex-shrink-0" />
                        <h2 className="font-heading font-black text-sm sm:text-base text-[var(--color-spano-dark)] leading-snug">
                          {product.seoDescription.heading}
                        </h2>
                      </div>
                      <p className="text-xs sm:text-sm text-[var(--color-spano-text)] font-body leading-relaxed">
                        {product.seoDescription.text}
                      </p>
                    </div>
                  )}

                  {/* Key Highlights Pill Grid */}
                  <div className="mt-6 grid grid-cols-2 gap-2.5">
                    {product.specifications.slice(0, 4).map((spec, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-2xl bg-white border border-gray-200/90 shadow-xs flex flex-col justify-center"
                      >
                        <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-gray-500">
                          {spec.label}
                        </span>
                        <span className="text-xs sm:text-sm font-heading font-black text-[var(--color-spano-dark)] mt-0.5 truncate">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action CTAs */}
                  <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="flex-1 py-3.5 px-6 rounded-2xl bg-[var(--color-spano-dark)] hover:bg-[var(--color-spano-bright)] text-white font-heading font-bold text-sm tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      <Send size={16} />
                      <span>Request Free Quote / Drawing</span>
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3.5 px-5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-heading font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={18} />
                      <span>WhatsApp Inquiry</span>
                    </a>
                  </div>

                  {/* Phone & Factory Callout */}
                  <div className="mt-4 flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-gray-100/70 border border-gray-200/70 text-xs text-gray-600 font-heading">
                    <div className="flex items-center gap-2">
                      <Phone size={14} className="text-[var(--color-spano-mid)]" />
                      <span>Direct Factory Inquiry:</span>
                    </div>
                    <a
                      href="tel:+919173564015"
                      className="font-bold text-[var(--color-spano-dark)] hover:text-[var(--color-spano-bright)] transition-colors"
                    >
                      +91 91735 64015
                    </a>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Deep Dive & Specifications */}
        <section className="py-14 sm:py-18 bg-white border-t border-gray-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Left Column: Detailed Overview & Features */}
              <div className="lg:col-span-7 space-y-10">
                {/* Engineering Overview */}
                <AnimatedSection>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="p-2 rounded-xl bg-[var(--color-spano-light)] text-[var(--color-spano-mid)]">
                      <Layers size={20} />
                    </span>
                    <h2 className="font-heading font-black text-2xl sm:text-3xl text-[var(--color-spano-dark)] tracking-tight">
                      Engineering Overview
                    </h2>
                  </div>

                  <div className="space-y-4 text-sm sm:text-base text-[var(--color-spano-text)] font-body leading-relaxed">
                    {product.detailedDescription.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </AnimatedSection>

                {/* Key Features & Advantages */}
                <AnimatedSection delay={0.1}>
                  <h3 className="font-heading font-bold text-xl text-[var(--color-spano-dark)] mb-4 flex items-center gap-2">
                    <ShieldCheck size={20} className="text-[var(--color-spano-bright)]" />
                    <span>Structural Features &amp; Performance</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {product.keyFeatures.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-slate-50 border border-gray-200/70 flex items-start gap-3"
                      >
                        <CheckCircle2
                          size={18}
                          className="text-[var(--color-spano-bright)] flex-shrink-0 mt-0.5"
                        />
                        <span className="text-xs sm:text-sm font-heading font-semibold text-[var(--color-spano-dark)] leading-snug">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>

                {/* Advantages */}
                {product.advantages && product.advantages.length > 0 && (
                  <AnimatedSection delay={0.15}>
                    <h3 className="font-heading font-bold text-xl text-[var(--color-spano-dark)] mb-4 flex items-center gap-2">
                      <Sparkles size={20} className="text-[var(--color-spano-mid)]" />
                      <span>Why Choose SPANO For This System</span>
                    </h3>

                    <div className="space-y-2.5">
                      {product.advantages.map((adv, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-[var(--color-spano-light)]/40 border border-emerald-100 flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-spano-mid)] mt-2 flex-shrink-0" />
                          <p className="text-xs sm:text-sm text-[var(--color-spano-dark)] font-heading font-medium leading-relaxed">
                            {adv}
                          </p>
                        </div>
                      ))}
                    </div>
                  </AnimatedSection>
                )}

                {/* Recommended Applications */}
                <AnimatedSection delay={0.2}>
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 size={20} className="text-[var(--color-spano-mid)]" />
                    <h3 className="font-heading font-bold text-xl text-[var(--color-spano-dark)]">
                      Recommended Industries &amp; Applications
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-2 rounded-xl bg-gray-100 text-gray-800 text-xs font-heading font-semibold border border-gray-200/80 shadow-2xs"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </AnimatedSection>
              </div>

              {/* Right Column: Technical Specifications Table & Instant Quote */}
              <div className="lg:col-span-5 space-y-8">
                {/* Specs Table */}
                <AnimatedSection direction="up">
                  <div className="rounded-3xl bg-white border border-gray-200 shadow-md overflow-hidden">
                    <div className="p-5 bg-[var(--color-spano-dark)] text-white flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <SlidersHorizontal size={18} className="text-[var(--color-spano-bright)]" />
                        <h3 className="font-heading font-black text-lg">Technical Specifications</h3>
                      </div>
                      <span className="text-[10px] font-heading font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/10 text-white/90">
                        Standard Specs
                      </span>
                    </div>

                    <div className="divide-y divide-gray-100 text-xs sm:text-sm">
                      {product.specifications.map((spec, idx) => (
                        <div
                          key={idx}
                          className={`p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 ${
                            idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                          }`}
                        >
                          <span className="font-heading font-bold text-gray-600 sm:w-2/5">
                            {spec.label}
                          </span>
                          <span className="font-heading font-bold text-[var(--color-spano-dark)] sm:w-3/5 sm:text-right">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                {/* Instant Quote Box */}
                <AnimatedSection direction="up" delay={0.1}>
                  <div className="rounded-3xl bg-gradient-to-br from-[var(--color-spano-dark)] to-[#0c3329] text-white p-6 sm:p-8 shadow-xl relative overflow-hidden">
                    <div className="absolute -top-12 -right-12 w-36 h-36 bg-[var(--color-spano-bright)]/15 rounded-full blur-2xl" />

                    <h4 className="font-heading font-black text-xl sm:text-2xl text-white">
                      Need a Custom Quote or CAD Drawing?
                    </h4>
                    <p className="mt-2 text-white/80 text-xs sm:text-sm font-body leading-relaxed">
                      Our engineering team provides custom manufacturing per your factory floor layout, load weights, and architectural heights.
                    </p>

                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="mt-6 w-full py-3.5 px-6 rounded-2xl bg-[var(--color-spano-bright)] hover:bg-[var(--color-spano-lime)] text-[var(--color-spano-dark)] font-heading font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send size={15} />
                      <span>Enquire for {product.name.split(' ')[0]}</span>
                    </button>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions (FAQ Section for SEO & SERP Rich Snippets) */}
        {product.faqs && product.faqs.length > 0 && (
          <section className="py-14 sm:py-20 bg-slate-50 border-t border-gray-200/80">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection direction="up">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-spano-light)] text-[var(--color-spano-mid)] text-xs font-heading font-bold mb-3">
                    <HelpCircle size={14} />
                    <span>Frequently Asked Questions</span>
                  </div>
                  <h2 className="font-heading font-black text-2xl sm:text-3xl text-[var(--color-spano-dark)] tracking-tight">
                    Frequently Asked Questions About {product.name}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 font-body">
                    Everything you need to know regarding load capacity, custom dimensions, finishes, and delivery.
                  </p>
                </div>
              </AnimatedSection>

              <div className="space-y-3">
                {product.faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <AnimatedSection key={index} delay={index * 0.05}>
                      <div className="rounded-2xl bg-white border border-gray-200/80 shadow-2xs overflow-hidden transition-all duration-200">
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-[var(--color-spano-dark)] hover:text-[var(--color-spano-mid)] transition-colors cursor-pointer"
                          aria-expanded={isOpen}
                        >
                          <span>{faq.question}</span>
                          <ChevronDown
                            size={18}
                            className={`transform transition-transform duration-200 flex-shrink-0 text-[var(--color-spano-bright)] ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {isOpen && (
                          <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-[var(--color-spano-text)] font-body leading-relaxed border-t border-gray-100 pt-3">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Related Products Section */}
        {relatedProducts && relatedProducts.length > 0 && (
          <section className="py-16 sm:py-20 bg-white border-t border-gray-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                  <div>
                    <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[var(--color-spano-bright)]">
                      Explore More Solutions
                    </span>
                    <h2 className="font-heading font-black text-2xl sm:text-3xl text-[var(--color-spano-dark)] tracking-tight mt-1">
                      Related Storage &amp; Display Solutions
                    </h2>
                  </div>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[var(--color-spano-dark)] hover:text-[var(--color-spano-bright)] transition-colors"
                  >
                    <span>View Complete Product Catalog</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {relatedProducts.map((rel, idx) => (
                  <AnimatedSection key={rel.id} delay={idx * 0.08}>
                    <Link
                      href={`/products/${rel.id}`}
                      className="group rounded-3xl bg-white border border-gray-200 hover:border-[var(--color-spano-bright)]/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden hover:-translate-y-1"
                    >
                      {/* Image */}
                      <div className="relative aspect-[4/3] bg-[var(--color-spano-light)]/40 p-6 overflow-hidden">
                        <StaticImage
                          src={rel.imageSrc}
                          alt={rel.name}
                          className={`w-full h-full group-hover:scale-106 transition-transform duration-500 ${
                            rel.imageFit === 'cover' ? 'object-cover' : 'object-contain'
                          }`}
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-0.5 rounded-full bg-[var(--color-spano-dark)]/85 text-white text-[10px] font-heading font-black uppercase tracking-wider backdrop-blur-xs">
                            {rel.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5 sm:p-6 flex flex-col flex-grow">
                        <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--color-spano-dark)] group-hover:text-[var(--color-spano-mid)] transition-colors line-clamp-1">
                          {rel.name}
                        </h3>
                        <p className="mt-2 text-xs text-[var(--color-spano-text)] font-body line-clamp-2 leading-relaxed flex-grow">
                          {rel.shortDescription}
                        </p>

                        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-heading font-bold text-[var(--color-spano-bright)]">
                          <span>View Product Specs</span>
                          <ArrowRight
                            size={14}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Global CTA Banner */}
        <CtaBanner
          badge={`${product.name} Inquiries`}
          title={product.cta?.heading || "Let’s Build Your Ideal Storage Space"}
          subtitle={product.cta?.description || "From planning to manufacturing and installation, we deliver across India."}
          defaultProduct={product.name}
        />
      </main>

      <Footer />
      <WhatsAppButton />

      {/* Inquiry Modal */}
      <EnquireModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultProduct={product.name}
      />
    </>
  );
}
