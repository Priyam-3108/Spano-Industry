import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductDetailClientView } from './ProductDetailClientView';
import { JsonLd } from '@/components/seo/JsonLd';
import { createBreadcrumbSchema } from '@/components/seo/schemas';
import {
  getAllProductSlugs,
  getProductById,
  getRelatedProducts,
} from '@/components/data/productsData';

export const dynamic = 'force-static';

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((id) => ({ id }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: 'Product Not Found | SPANO Industry',
      description: 'The requested industrial storage product or retail display rack could not be found.',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://spanoindustry.com';
  const canonicalUrl = `${siteUrl}/products/${product.id}`;
  const fullImageUrl = product.imageSrc.startsWith('http')
    ? product.imageSrc
    : `${siteUrl}${product.imageSrc}`;

  return {
    title: {
      absolute: product.seo.title,
    },
    description: product.seo.metaDescription,
    keywords: product.seo.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: product.seo.title,
      description: product.seo.metaDescription,
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: fullImageUrl,
          alt: product.name,
          width: 1200,
          height: 900,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.seo.title,
      description: product.seo.metaDescription,
      images: [fullImageUrl],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://spanoindustry.com';
  const fullImageUrl = product.imageSrc.startsWith('http')
    ? product.imageSrc
    : `${siteUrl}${product.imageSrc}`;

  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: product.category, url: `/products#${product.categoryId}` },
    { name: product.name, url: `/products/${product.id}` },
  ]);

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    image: fullImageUrl,
    sku: `SPANO-${product.id.toUpperCase()}`,
    mpn: `SPANO-${product.id}`,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: 'SPANO Industry',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'SPANO Industry',
      url: siteUrl,
      logo: `${siteUrl}/icon.png`,
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'SPANO Industry',
      },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: product.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  const relatedProducts = getRelatedProducts(product.id, 3);

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={productSchema} />
      {product.faqs && product.faqs.length > 0 && <JsonLd data={faqSchema} />}
      <ProductDetailClientView product={product} relatedProducts={relatedProducts} />
    </>
  );
}
