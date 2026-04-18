import HeroSection from '@/components/sections/HeroSection';
import EmergencyPreparedness from '@/components/sections/EmergencyPreparedness';
import IndustrialFireSolutions from '@/components/sections/IndustrialFireSolutions';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import AboutCompany from '@/components/sections/AboutCompany';
import OurEquipment from '@/components/sections/OurEquipment';
import OurServices from '@/components/sections/OurServices';
import FAQSection from '@/components/sections/FAQSection';
import ProtectionCTA from '@/components/sections/ProtectionCTA';
import QuickInfo from '@/components/sections/QuickInfo';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <EmergencyPreparedness />
      <AboutCompany />
      <IndustrialFireSolutions />
     
      <OurEquipment />
      <OurServices />
      <WhyChooseUs />
      <FAQSection />
      <ProtectionCTA />
      <QuickInfo />
      <WhatsAppButton />
    </main>
  );
}
