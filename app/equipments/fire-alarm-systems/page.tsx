import type { Metadata } from 'next';
import { FireAlarmSystemsGuide } from './guide';

export const metadata: Metadata = {
  title: 'Fire Alarm Systems — Equipment Guide',
  description:
    'Explore fire alarm solutions designed to help detect fire risks early and support safer building environments in Rwanda.',
  alternates: {
    canonical: '/equipments/fire-alarm-systems',
  },
  openGraph: {
    title: 'Fire Alarm Systems — Equipment Guide',
    description:
      'Explore fire alarm solutions designed to help detect fire risks early and support safer building environments in Rwanda.',
    url: '/equipments/fire-alarm-systems',
    type: 'website',
    siteName: 'VerifSafe',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Fire Alarm Systems — Equipment Guide',
  description:
    'Explore fire alarm solutions designed to help detect fire risks early and support safer building environments in Rwanda.',
  url: 'https://verifsafe.com/equipments/fire-alarm-systems',
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
      { '@type': 'ListItem', position: 3, name: 'Fire Alarm Systems' },
    ],
  },
};

export default function FireAlarmSystemsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <FireAlarmSystemsGuide />
    </>
  );
}