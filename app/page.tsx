import HeroSection from '@/components/sections/marketing/HeroSection';
import EmergencyPreparedness from '@/components/sections/marketing/EmergencyPreparedness';
import IndustrialFireSolutions from '@/components/sections/marketing/IndustrialFireSolutions';
import WhyChooseUs from '@/components/sections/marketing/WhyChooseUs';
import AboutCompany from '@/components/sections/content/AboutCompany';
import OurEquipment from '@/components/sections/content/OurEquipment';
import OurServices from '@/components/sections/content/OurServices';
import FAQSection from '@/components/sections/content/FAQSection';
import ProtectionCTA from '@/components/sections/marketing/ProtectionCTA';

export default function Home() {
  return (
    <main className="w-full">
      {/* Top landing hero with parallax effect */}
      <HeroSection />
      
      {/* Awareness and emergency response section */}
      <EmergencyPreparedness />
      
      {/* Core information about the company */}
      <AboutCompany />
      
      {/* Specialized solutions for industrial sectors */}
      <IndustrialFireSolutions />
     
      {/* Grid display of main fire safety equipment */}
      <OurEquipment />
      
      {/* Detailed breakdown of services offered */}
      <OurServices />
      
      {/* Key value propositions and competitive advantages */}
      <WhyChooseUs />
      
      {/* Frequently asked questions about fire safety */}
      <FAQSection />
      
      {/* Final call to action for security and protection */}
      <ProtectionCTA />
    </main>
  );
}
