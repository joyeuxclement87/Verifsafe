import HeroSection from '@/components/sections/marketing/HeroSection';
import FireSafetyApproach from '@/components/sections/marketing/FireSafetyApproach';
import WhyChooseUs from '@/components/sections/marketing/WhyChooseUs';
import WhoWeServe from '@/components/sections/marketing/WhoWeServe';
import OurEquipment from '@/components/sections/content/OurEquipment';
import OurServices from '@/components/sections/content/OurServices';
import FAQSection from '@/components/sections/content/FAQSection';
import ProtectionCTA from '@/components/sections/marketing/ProtectionCTA';

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero: value proposition, primary CTA, quiet proof points */}
      <HeroSection />

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