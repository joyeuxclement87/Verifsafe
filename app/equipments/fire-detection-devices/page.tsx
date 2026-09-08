import type { Metadata } from 'next';
import { FireDetectionDevicesGuide } from './guide';

export const metadata: Metadata = {
  title: 'Fire Detection Devices in Rwanda',
  description:
    'A practical guide to optical smoke, heat and multi-sensor fire detection devices, the role they play in a fire protection system, and how to choose the right fire safety equipment for your building in Rwanda.',
  alternates: {
    canonical: '/equipments/fire-detection-devices',
  },
  openGraph: {
    title: 'Fire Detection Devices in Rwanda | VerifSafe',
    description:
      'A practical guide to optical smoke, heat and multi-sensor fire detection devices and how to choose the right fire safety equipment for your building in Rwanda.',
    url: '/equipments/fire-detection-devices',
    type: 'website',
    siteName: 'VerifSafe',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Fire Detection Devices in Rwanda | VerifSafe',
  description:
    'A practical guide to optical smoke, heat and multi-sensor fire detection devices, the role they play in a fire protection system, and how to choose the right fire safety equipment for your building in Rwanda.',
  url: 'https://verifsafe.com/equipments/fire-detection-devices',
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
      { '@type': 'ListItem', position: 3, name: 'Fire Detection Devices' },
    ],
  },
};

export default function FireDetectionDevicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <FireDetectionDevicesGuide />
    </>
  );
}