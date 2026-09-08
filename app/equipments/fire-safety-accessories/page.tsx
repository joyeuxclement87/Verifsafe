import type { Metadata } from 'next';
import FireSafetyAccessoriesGuide from './guide';

export const metadata: Metadata = {
  title: 'Fire Safety Accessories in Rwanda',
  description:
    'Fire safety accessories in Rwanda from VerifSafe — extinguisher cabinets and stands, fire blankets and mandatory safety signage for buildings and workplaces.',
  alternates: {
    canonical: '/equipments/fire-safety-accessories',
  },
  openGraph: {
    title: 'Fire Safety Accessories in Rwanda | VerifSafe',
    description:
      'Fire safety accessories in Rwanda — extinguisher cabinets and stands, fire blankets and mandatory safety signage from VerifSafe.',
    url: '/equipments/fire-safety-accessories',
    type: 'website',
    siteName: 'VerifSafe',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Fire Safety Accessories in Rwanda',
  description:
    'Fire safety accessories supplied by VerifSafe — extinguisher cabinets and stands, fire blankets and mandatory safety signage.',
  url: 'https://verifsafe.com/equipments/fire-safety-accessories',
  publisher: {
    '@type': 'Organization',
    name: 'VerifSafe',
    url: 'https://verifsafe.com',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://verifsafe.com' },
      { '@type': 'ListItem', position: 2, name: 'Equipment', item: 'https://verifsafe.com/equipments' },
      { '@type': 'ListItem', position: 3, name: 'Fire Safety Accessories' },
    ],
  },
};

export default function FireSafetyAccessoriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <FireSafetyAccessoriesGuide />
    </>
  );
}