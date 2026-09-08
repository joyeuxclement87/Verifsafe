import type { Metadata } from 'next';
import HeroSection from '@/components/sections/marketing/HeroSection';
import AssuranceStrip from '@/components/sections/marketing/AssuranceStrip';
import FireSafetyApproach from '@/components/sections/marketing/FireSafetyApproach';
import WhyChooseUs from '@/components/sections/marketing/WhyChooseUs';
import WhoWeServe from '@/components/sections/marketing/WhoWeServe';
import OurEquipment from '@/components/sections/content/OurEquipment';
import OurServices from '@/components/sections/content/OurServices';
import FAQSection from '@/components/sections/content/FAQSection';
import { faqs } from '@/components/sections/content/faqData';
import ProtectionCTA from '@/components/sections/marketing/ProtectionCTA';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Fire Safety Equipment & Services in Rwanda | VerifSafe',
  description:
    'VerifSafe provides fire safety equipment, fire alarm systems, installation, inspection, maintenance and fire protection services across Rwanda.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Fire Safety Equipment & Services in Rwanda | VerifSafe',
    description:
      'VerifSafe provides fire safety equipment, fire alarm systems, installation, inspection, maintenance and fire protection services across Rwanda.',
    url: '/',
    type: 'website',
    locale: 'en_US',
    siteName: 'VerifSafe',
  },
};

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: site.name,
        url: site.url,
        logo: `${site.url}/logo.png`,
        email: site.email,
        telephone: site.phones.map((phone) => phone.tel),
        address: {
          '@type': 'PostalAddress',
          streetAddress: site.address.street,
          addressLocality: site.address.locality,
          addressCountry: 'RW',
        },
        description:
          'Fire safety equipment, installation, inspection, and maintenance services across Rwanda.',
        areaServed: {
          '@type': 'Country',
          name: site.address.country,
        },
        sameAs: [
          site.social.facebook,
          site.social.x,
          site.social.instagram,
          site.social.tiktok,
        ],
        serviceType: [
          'Fire Protection',
          'Fire Safety Equipment',
          'Fire Alarm Installation',
          'Fire Safety Inspection',
          'Fire Extinguisher Services',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: {
          '@type': 'Organization',
          '@id': `${site.url}/#organization`,
          name: site.name,
          url: site.url,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero: value proposition, primary CTA, quiet proof points */}
      <HeroSection />

      {/* Assurance: certified equipment, installation, inspection, maintenance */}
      <AssuranceStrip />

      {/* How we protect: Assess, Equip, Install, Maintain */}
      <FireSafetyApproach />

      {/* Our solutions: interactive service explorer */}
      <OurServices />

      {/* Equipment & systems */}
      <OurEquipment />

      {/* Industries we protect */}
      <WhoWeServe />

      {/* Why Verifsafe: real differentiators */}
      <WhyChooseUs />

      {/* FAQ */}
      <FAQSection />

      {/* Final CTA */}
      <ProtectionCTA />
    </main>
  );
}