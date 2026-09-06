import type { Metadata } from 'next';
import { FireExtinguishersGuide } from './guide';

export const metadata: Metadata = {
  title: 'Fire Extinguishers — Equipment Guide',
  description:
    'Explore fire extinguisher types supplied by VerifSafe for different fire risks, building environments and protection needs in Rwanda.',
  alternates: {
    canonical: '/equipments/fire-extinguishers',
  },
  openGraph: {
    title: 'Fire Extinguishers — Equipment Guide',
    description:
      'Explore fire extinguisher types supplied by VerifSafe for different fire risks, building environments and protection needs in Rwanda.',
    url: '/equipments/fire-extinguishers',
    type: 'website',
    siteName: 'VerifSafe',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Fire Extinguishers — Equipment Guide',
  description:
    'Explore fire extinguisher types supplied by VerifSafe for different fire risks, building environments and protection needs in Rwanda.',
  url: 'https://verifsafe.com/equipments/fire-extinguishers',
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
      { '@type': 'ListItem', position: 3, name: 'Fire Extinguishers' },
    ],
  },
};

export default function FireExtinguishersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <FireExtinguishersGuide />
    </>
  );
}