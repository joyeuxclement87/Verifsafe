import HeroSection from '@/components/sections/HeroSection';
import EmergencyPreparedness from '@/components/sections/EmergencyPreparedness';
import IndustrialFireSolutions from '@/components/sections/IndustrialFireSolutions';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import AboutCompany from '@/components/sections/AboutCompany';
import OurEquipment from '@/components/sections/OurEquipment';
import OurServices from '@/components/sections/OurServices';
import FireSafetyTraining from '@/components/sections/FireSafetyTraining';
import DeploymentWorkflow from '@/components/sections/DeploymentWorkflow';
import WhoWeServe from '@/components/sections/WhoWeServe';
import FAQSection from '@/components/sections/FAQSection';
import ProtectionCTA from '@/components/sections/ProtectionCTA';
import Contact from '@/components/sections/Contact';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <EmergencyPreparedness />
      <IndustrialFireSolutions />
      <WhyChooseUs />
      <AboutCompany />
      <OurEquipment />
      <OurServices />
      <FireSafetyTraining />
      <DeploymentWorkflow />
      <WhoWeServe />
      <FAQSection />
      <ProtectionCTA />
      <Contact />
      <WhatsAppButton />
    </main>
  );
}
