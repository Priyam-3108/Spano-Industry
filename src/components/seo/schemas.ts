const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://spanoindustry.com';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#organization`,
  name: 'SPANO Industry',
  legalName: 'SPANO Industry',
  url: BASE_URL,
  logo: `${BASE_URL}/icon.png`,
  image: `${BASE_URL}/icon.png`,
  description:
    'Manufacturer and supplier of heavy duty warehouse storage racks, industrial slotted angle shelving, storewell & locker cupboards, and retail display racks with over 30 years of manufacturing excellence in India.',
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
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 21.2721,
    longitude: 72.9565,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  priceRange: '₹₹₹',
  sameAs: [
    'https://wa.me/919173564015',
  ],
};

export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}
