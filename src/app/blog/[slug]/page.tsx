import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { StaticImage } from '@/components/ui/StaticImage';
import { JsonLd } from '@/components/seo/JsonLd';
import { createBreadcrumbSchema } from '@/components/seo/schemas';
import { getBlogPostBySlug, getBlogPostSlugs } from '@/sanity/client';
import { urlForImage } from '@/sanity/image';
import { Calendar, Clock, ArrowLeft, Tag, Share2, MessageCircle, ArrowRight } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = await getBlogPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | SPANO Industry',
    };
  }

  const title = post.seoTitle || `${post.title} | SPANO Industry`;
  const description = post.seoDescription || post.excerpt;
  const imageUrl =
    post.mainImage?.imageUrl ||
    (post.mainImage?.asset?.url ? post.mainImage.asset.url : urlForImage(post.mainImage)?.url()) ||
    'https://spanoindustry.com/icon.png';

  return {
    title,
    description,
    keywords: post.keywords ? post.keywords.split(',').map((k) => k.trim()) : undefined,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.publishedAt,
      url: `https://spanoindustry.com/blog/${post.slug}`,
      images: [
        {
          url: imageUrl,
          alt: post.mainImage?.alt || post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const imageUrl =
    post.mainImage?.imageUrl ||
    (post.mainImage?.asset?.url ? post.mainImage.asset.url : urlForImage(post.mainImage)?.url()) ||
    '';

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '';

  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` },
  ]);

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    image: imageUrl ? [imageUrl] : undefined,
    author: {
      '@type': 'Person',
      name: post.author?.name || 'SPANO Technical Team',
      jobTitle: post.author?.role || 'Storage Systems Consultant',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SPANO Industry',
      logo: {
        '@type': 'ImageObject',
        url: 'https://spanoindustry.com/icon.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://spanoindustry.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={blogPostingSchema} />
      <Navbar />

      <main className="bg-white pt-24 sm:pt-28 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-heading font-bold text-gray-500 hover:text-[var(--color-spano-dark)] transition-colors"
            >
              <ArrowLeft size={14} />
              Back to Storage Insights
            </Link>
          </div>

          {/* Article Header */}
          <header className="space-y-5 pb-8 border-b border-gray-100">
            {/* Category Badges */}
            {post.categories && post.categories.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                {post.categories.map((cat) => (
                  <span
                    key={cat.slug}
                    className="px-3 py-1 rounded-full bg-[var(--color-spano-light)]/80 text-[var(--color-spano-dark)] border border-gray-200 text-xs font-heading font-bold"
                  >
                    {cat.title}
                  </span>
                ))}
              </div>
            )}

            {/* Main Title */}
            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[var(--color-spano-dark)] leading-tight tracking-tight">
              {post.title}
            </h1>

            {/* Excerpt Lead */}
            <p className="text-base sm:text-lg text-[var(--color-spano-text)] font-body leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author & Date Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 text-xs font-heading text-gray-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-spano-bright)]/15 text-[var(--color-spano-dark)] font-bold flex items-center justify-center">
                  {post.author?.name ? post.author.name.charAt(0) : 'S'}
                </div>
                <div>
                  <p className="font-bold text-gray-800">{post.author?.name || 'SPANO Engineering Team'}</p>
                  <p className="text-gray-400">{post.author?.role || 'Storage Solutions Specialist'}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {formattedDate && (
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-[var(--color-spano-bright)]" />
                    {formattedDate}
                  </span>
                )}
                {post.readTime && (
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-[var(--color-spano-bright)]" />
                    {post.readTime}
                  </span>
                )}
              </div>
            </div>
          </header>

          {/* Featured Cover Image */}
          {imageUrl && (
            <div className="my-8 rounded-3xl overflow-hidden shadow-xl border border-gray-200 aspect-[16/9] relative bg-gray-100">
              <StaticImage
                src={imageUrl}
                alt={post.mainImage?.alt || post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Article Body Content */}
          <div className="prose prose-lg max-w-none text-[var(--color-spano-text)] font-body leading-relaxed space-y-6 pt-4 [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:text-[var(--color-spano-dark)] [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-heading [&_h3]:font-bold [&_h3]:text-xl [&_h3]:text-[var(--color-spano-dark)] [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:leading-relaxed [&_strong]:text-[var(--color-spano-dark)]">
            {post.body ? (
              <PortableText value={post.body} />
            ) : post.bodyHtml ? (
              <div dangerouslySetInnerHTML={{ __html: post.bodyHtml }} />
            ) : (
              <p>Content for this article is being updated.</p>
            )}
          </div>

          {/* In-Article Call to Action Box */}
          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-br from-[var(--color-spano-dark)] to-[var(--color-spano-mid)] text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="px-3 py-1 rounded-full bg-[var(--color-spano-bright)] text-white text-[10px] font-heading font-black uppercase tracking-wider">
                Industrial Layout Consultation
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                Planning a Warehouse or Store Setup?
              </h3>
              <p className="text-white/80 text-sm max-w-lg font-body">
                Get custom rack load calculations and direct manufacturer pricing from SPANO Industry.
              </p>
            </div>

            <a
              href="https://wa.me/919173564015?text=Hello%20SPANO%20Industry!%20I%20read%20your%20article%20and%20would%20like%20a%20racking%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[var(--color-spano-bright)] hover:bg-white hover:text-[var(--color-spano-dark)] text-white font-heading font-bold text-xs rounded-xl shadow-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
            >
              <MessageCircle size={16} />
              WhatsApp Our Engineers
            </a>
          </div>

          {/* Related Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-heading font-bold text-[var(--color-spano-mid)] hover:underline"
            >
              <ArrowLeft size={14} />
              View All Articles
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-heading font-bold text-[var(--color-spano-mid)] hover:underline"
            >
              Explore Products
              <ArrowRight size={14} />
            </Link>
          </div>
        </article>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
