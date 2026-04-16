import HeroSection from '@/components/HeroSection';
import EmergencyPreparedness from '@/components/EmergencyPreparedness';
import IndustrialFireSolutions from '@/components/IndustrialFireSolutions';
import WhyChooseUs from '@/components/WhyChooseUs';
import AboutCompany from '@/components/AboutCompany';
import OurEquipment from '@/components/OurEquipment';
import OurServices from '@/components/OurServices';
import FireSafetyTraining from '@/components/FireSafetyTraining';
import DeploymentWorkflow from '@/components/DeploymentWorkflow';
import WhoWeServe from '@/components/WhoWeServe';
import CallToAction from '@/components/CallToAction';
import FAQSection from '@/components/FAQSection';
import ProtectionCTA from '@/components/ProtectionCTA';
import Contact from '@/components/Contact';
import WhatsAppButton from '@/components/WhatsAppButton';

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
      <CallToAction />
      <FAQSection />
      <ProtectionCTA />
      <Contact />
      <WhatsAppButton />
    </main>
  );
}
