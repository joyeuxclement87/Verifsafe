import type { Metadata } from 'next';
import { FireHoseReelsGuide } from './guide';

export const metadata: Metadata = {
  title: 'Fire Hose Reels in Rwanda',
  description:
    'Explore fire hose reels supplied by VerifSafe for commercial and industrial fire protection needs in Rwanda.',
  alternates: {
    canonical: '/equipments/fire-hose-reels',
  },
  openGraph: {
    title: 'Fire Hose Reels in Rwanda | VerifSafe',
    description:
      'Explore fire hose reels supplied by VerifSafe for commercial and industrial fire protection needs in Rwanda.',
    url: '/equipments/fire-hose-reels',
    type: 'website',
    siteName: 'VerifSafe',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Fire Hose Reels in Rwanda',
  description:
    'Explore fire hose reel solutions that draw on the building water supply for accessible fire protection in suitable environments across Rwanda.',
  url: 'https://verifsafe.com/equipments/fire-hose-reels',
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
      { '@type': 'ListItem', position: 3, name: 'Fire Hose Reels' },
    ],
  },
};

export default function FireHoseReelsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <FireHoseReelsGuide />
    </>
  );
}