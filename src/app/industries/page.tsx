import type { Metadata } from 'next';
import { IndustriesClientView } from './IndustriesClientView';
import { JsonLd } from '@/components/seo/JsonLd';
import { createBreadcrumbSchema } from '@/components/seo/schemas';
import { seoIndustries } from '@/components/data/content';

export const metadata: Metadata = {
  title: {
    absolute: 'Industrial & Retail Storage Solutions | SPANO',
  },
  description:
    'SPANO Industry supplies industrial storage racks, heavy duty racking and supermarket display solutions in Surat for diverse business needs.',
  keywords: [
    'warehouse storage solutions Surat',
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
    title: 'Industrial & Retail Storage Solutions | SPANO',
    description:
      'SPANO Industry supplies industrial storage racks, heavy duty racking and supermarket display solutions in Surat for diverse business needs.',
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
