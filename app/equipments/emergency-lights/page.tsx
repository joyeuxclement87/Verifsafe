import type { Metadata } from 'next';
import { SafetySignsGuide } from './guide';

export const metadata: Metadata = {
  title: 'Emergency Lights & Exit Signs in Rwanda',
  description:
    'A practical guide to emergency lighting, exit signs and safety signage in Rwanda — illuminated emergency lights, exit signs and photoluminescent signs that help people find equipment, follow escape routes and know what to do.',
  alternates: {
    canonical: '/equipments/emergency-lights',
  },
  openGraph: {
    title: 'Emergency Lights & Exit Signs in Rwanda | VerifSafe',
    description:
      'A practical guide to emergency lighting, exit signs and safety signage in Rwanda — illuminated exit signs and photoluminescent emergency signs that help people follow escape routes and locate fire equipment.',
    url: '/equipments/emergency-lights',
    type: 'website',
    siteName: 'VerifSafe',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Emergency Lights & Exit Signs in Rwanda | VerifSafe',
  description:
    'A practical guide to emergency lighting, exit signs and safety signage in Rwanda — illuminated emergency lights, exit signs and photoluminescent signs for buildings and workplaces.',
  url: 'https://verifsafe.com/equipments/emergency-lights',
  'inLanguage': 'en',
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
      { '@type': 'ListItem', position: 3, name: 'Emergency Lights & Exit Signs' },
    ],
  },
};

export default function EmergencyLightsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SafetySignsGuide />
    </>
  );
}