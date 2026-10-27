import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { JsonLd } from '@/components/seo/JsonLd';
import { createBreadcrumbSchema } from '@/components/seo/schemas';
import { BlogListClient } from './BlogListClient';
import { getBlogPosts } from '@/sanity/client';
import { IMAGES } from '@/components/data/images';

export const metadata: Metadata = {
  title: {
    absolute: 'Racking & Storage Insights | SPANO Industry Blog',
  },
  description:
    'Read expert insights on heavy duty storage racks, warehouse planning, industrial racking and retail display solutions from SPANO Industry.',
  keywords: [
    'industrial racking blog Surat',
    'warehouse storage guide',
    'pallet racking tips',
    'supermarket layout ideas',
    'slotted angle shelving guide',
  ],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Racking & Storage Insights | SPANO Industry Blog',
    description:
      'Read expert insights on heavy duty storage racks, warehouse planning, industrial racking and retail display solutions from SPANO Industry.',
    url: 'https://spanoindustry.com/blog',
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] flex items-center overflow-hidden bg-[var(--color-spano-dark)] text-white">
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGES.hero.industrialCover}
              alt="SPANO Industry Industrial Racking Insights"
              className="w-full h-full object-cover object-center opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-spano-dark)]/95 via-[var(--color-spano-dark)]/85 to-[var(--color-spano-dark)]/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-spano-dark)]/80 via-transparent to-black/30" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16">
            <div className="max-w-3xl">
              <AnimatedSection direction="left">
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-spano-bright)]/20 text-[var(--color-spano-bright)] text-xs font-heading font-black uppercase tracking-wider mb-4 border border-[var(--color-spano-bright)]/30">
                  Engineering Knowledge Hub
                </span>
                <h1 className="font-heading uppercase text-white leading-[0.98] sm:leading-[0.96] text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4">
                  <span className="font-extrabold">INDUSTRIAL RACKING &amp;</span><br />
                  <span className="text-[var(--color-spano-bright)] font-extrabold">STORAGE INSIGHTS</span>
                </h1>
                <p className="mt-3 text-white/80 text-base sm:text-lg max-w-2xl font-body leading-normal">
                  Expert insights on heavy duty storage racks, warehouse optimization, pallet racking systems, slotted angle shelving, and supermarket display racks in Surat.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Blog Listing Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogListClient posts={posts} />
          </div>
        </section>

        {/* Global CTA Banner */}
        <CtaBanner
          title="Let’s Build Smarter Storage Knowledge"
          subtitle="From warehouse optimization to retail displays, explore expert insights from SPANO Industry."
          defaultProduct="Racking & Storage Insights"
        />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
