import type { Metadata } from 'next';
import { ContactClientView } from './ContactClientView';
import { JsonLd } from '@/components/seo/JsonLd';
import { createBreadcrumbSchema } from '@/components/seo/schemas';

export const metadata: Metadata = {
  title: 'Contact Us | Factory & Sales Office Surat | SPANO Industry',
  description:
    'Contact SPANO Industry for industrial racking inquiries, store layout plans, price quotes, and custom warehouse storage orders. Factory located at VR Eco Park, Kamrej, Surat, Gujarat.',
  keywords: [
    'contact racking manufacturer',
    'industrial rack price quote',
    'warehouse storage supplier Surat',
    'supermarket rack inquiry',
    'SPANO Industry contact',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact SPANO Industry | Industrial Racking & Storage Inquiries',
    description:
      'Get in touch with our sales engineers for warehouse racking and supermarket store fixture quotes in Surat, Gujarat & Pan-India.',
    url: 'https://spanoindustry.com/contact',
  },
};

export default function ContactPage() {
  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact Us', url: '/contact' },
  ]);

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'SPANO Industry Contact & Factory Location',
    description: 'Direct sales, factory inquiries, and customer service for SPANO Industry.',
    url: 'https://spanoindustry.com/contact',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'SPANO Industry',
      telephone: '+919173564015',
      email: 'info@spanoindustry.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Plot 143 to 145, VR Eco Park, Kosmadi, Kamrej NH-8',
        addressLocality: 'Surat',
        addressRegion: 'Gujarat',
        postalCode: '394326',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={contactPageSchema} />
      <ContactClientView />
    </>
  );
}
