import type { Metadata } from 'next';
import GalleryShowcase from './gallery';

export const metadata: Metadata = {
  title: 'Fire Safety Projects & Gallery',
  description:
    'Explore VerifSafe\'s fire safety equipment, installations, signage and safety solutions across Rwanda.',
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'Fire Safety Projects & Gallery | VerifSafe Rwanda',
    description:
      'Explore VerifSafe\'s fire safety equipment, installations, signage and safety solutions across Rwanda.',
    url: '/gallery',
    type: 'website',
    siteName: 'VerifSafe',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Fire Safety Projects & Gallery | VerifSafe Rwanda',
  description:
    'Explore VerifSafe\'s fire safety equipment, installations, signage and safety solutions across Rwanda.',
  url: 'https://verifsafe.com/gallery',
  publisher: {
    '@type': 'Organization',
    name: 'VerifSafe',
    url: 'https://verifsafe.com',
  },
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <GalleryShowcase />
    </>
  );
}
