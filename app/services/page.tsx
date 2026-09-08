import type { Metadata } from 'next';
import ServicesContent from './content';
import { services } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Fire Safety Services in Rwanda',
  description:
    'Fire safety services in Rwanda from VerifSafe — equipment supply, installation, inspection, testing, maintenance and fire safety training for buildings.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Fire Safety Services in Rwanda | VerifSafe',
    description:
      'Fire safety services in Rwanda from VerifSafe — equipment supply, installation, inspection, testing, maintenance and training.',
    url: '/services',
    type: 'website',
    siteName: 'VerifSafe',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': services.map((service) => ({
    '@type': 'Service',
    name: service.title,
    description: service.description,
    serviceType: 'Fire Safety Services',
    provider: { '@type': 'Organization', name: 'VerifSafe', url: 'https://verifsafe.com' },
    areaServed: { '@type': 'Country', name: 'Rwanda' },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ServicesContent />
    </>
  );
}