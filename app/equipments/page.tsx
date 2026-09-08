import type { Metadata } from 'next';
import EquipmentsContent from './content';
import { equipmentCategories } from '@/lib/equipment';

export const metadata: Metadata = {
  title: 'Fire Safety Equipment in Rwanda',
  description:
    'Fire safety equipment in Rwanda from VerifSafe — extinguishers, fire alarm systems, hose reels, detection devices, emergency lighting and safety accessories.',
  alternates: {
    canonical: '/equipments',
  },
  openGraph: {
    title: 'Fire Safety Equipment in Rwanda | VerifSafe',
    description:
      'Fire safety equipment in Rwanda from VerifSafe — extinguishers, alarm systems, hose reels, detection devices, emergency lighting and accessories.',
    url: '/equipments',
    type: 'website',
    siteName: 'VerifSafe',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Fire Protection Equipment',
  description:
    'Fire safety equipment supplied by VerifSafe for residential, commercial, industrial and other building environments across Rwanda.',
  itemListElement: equipmentCategories.map((category, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: category.title,
    url: `https://verifsafe.com${category.href}`,
  })),
};

export default function EquipmentsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <EquipmentsContent />
    </>
  );
}