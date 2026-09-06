import type { Metadata } from 'next';
import { FireHoseReelsGuide } from './guide';

export const metadata: Metadata = {
  title: 'Fire Hose Reels — Equipment Guide',
  description:
    'Explore fire hose reel solutions that draw on the building water supply for accessible fire protection in suitable environments across Rwanda.',
  alternates: {
    canonical: '/equipments/fire-hose-reels',
  },
  openGraph: {
    title: 'Fire Hose Reels — Equipment Guide',
    description:
      'Explore fire hose reel solutions that draw on the building water supply for accessible fire protection in suitable environments across Rwanda.',
    url: '/equipments/fire-hose-reels',
    type: 'website',
    siteName: 'VerifSafe',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Fire Hose Reels — Equipment Guide',
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