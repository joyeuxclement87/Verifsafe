import type { Metadata } from 'next';
import { AboutContent } from './guide';

export const metadata: Metadata = {
  title: {
    absolute: 'About VerifSafe | Fire Safety & Protection Rwanda',
  },
  description:
    'Learn about VerifSafe, a Rwanda-based provider of fire safety equipment, protection solutions, installation, maintenance and safety support.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About VerifSafe | Fire Safety & Protection Rwanda',
    description:
      'Learn about VerifSafe, a Rwanda-based provider of fire safety equipment, protection solutions, installation, maintenance and safety support.',
    url: '/about',
    type: 'website',
    siteName: 'VerifSafe',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}