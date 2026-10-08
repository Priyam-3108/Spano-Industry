import type { Metadata } from 'next';
import { IndustriesClientView } from './IndustriesClientView';
import { JsonLd } from '@/components/seo/JsonLd';
import { createBreadcrumbSchema } from '@/components/seo/schemas';
import { seoIndustries } from '@/components/data/content';

export const metadata: Metadata = {
  title: 'Industries We Serve | Warehouse, Retail & Institutional Storage',
  description:
    'Customized racking and storage solutions for Supermarkets, Warehouses, Logistics Hubs, Textile Industries, Departmental Stores, and Institutions across India.',
  keywords: [
    'warehouse storage solutions',
    'supermarket racking systems',
    'textile roll storage racks',
    'grocery store shelving',
    'departmental display racks',
    'educational institution cupboards',
  ],
  alternates: {
    canonical: '/industries',
  },
  openGraph: {
    title: 'Industries We Serve | SPANO Industry Storage Solutions',
    description:
      'Engineered storage and display solutions tailored for Warehousing, Supermarket Chains, Garment Stores, and Industrial facilities across India.',
    url: 'https://spanoindustry.com/industries',
  },
};

export default function IndustriesPage() {
  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Industries We Serve', url: '/industries' },
  ]);

  const industryServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Industrial & Retail Racking Solutions by SPANO Industry',
    provider: {
      '@type': 'Organization',
      name: 'SPANO Industry',
      url: 'https://spanoindustry.com',
    },
    serviceType: 'Industrial Storage & Retail Fixtures Manufacturing',
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Industry Sectors Served',
      itemListElement: seoIndustries.map((ind, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: ind.name,
          description: ind.description,
        },
      })),
    },
  };

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={industryServiceSchema} />
      <IndustriesClientView />
    </>
  );
}
