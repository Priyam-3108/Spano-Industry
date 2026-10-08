import type { Metadata } from 'next';
import { ProductsClientView } from './ProductsClientView';
import { JsonLd } from '@/components/seo/JsonLd';
import { createBreadcrumbSchema } from '@/components/seo/schemas';
import { productCategories } from '@/components/data/content';

export const metadata: Metadata = {
  title: 'Heavy Duty Storage Racks, Slotted Angle & Cupboards | Products',
  description:
    'Explore SPANO Industry manufacturing catalog: Heavy Duty Warehouse Pallet Racks, Slotted Angle Shelving, Storewell & Locker Cupboards, Supermarket Display Racks & Retail Fixtures.',
  keywords: [
    'heavy duty storage racks',
    'warehouse pallet racking',
    'industrial slotted angle racks',
    'storewell cupboard manufacturer',
    'locker cupboards',
    'supermarket display racks',
    'retail shelving systems',
  ],
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'Industrial Storage Racks & Retail Solutions | SPANO Industry Products',
    description:
      'High capacity industrial warehouse racking, heavy duty slotted angles, storage cupboards, and supermarket fixtures engineered for extreme durability.',
    url: 'https://spanoindustry.com/products',
  },
};

export default function ProductsPage() {
  const breadcrumbs = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
  ]);

  const productListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'SPANO Industry Industrial Racking & Storage Solutions',
    description: 'Comprehensive catalogue of industrial storage, warehouse racks, and supermarket display systems.',
    itemListElement: productCategories.flatMap((cat, catIdx) =>
      cat.items.map((item, itemIdx) => ({
        '@type': 'ListItem',
        position: catIdx * 10 + itemIdx + 1,
        item: {
          '@type': 'Product',
          name: item.name,
          description: item.description,
          category: item.category,
          brand: {
            '@type': 'Brand',
            name: 'SPANO Industry',
          },
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
          },
        },
      }))
    ),
  };

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={productListSchema} />
      <ProductsClientView />
    </>
  );
}
