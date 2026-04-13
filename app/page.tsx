import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import AboutCompany from '@/components/AboutCompany';
import OurEquipment from '@/components/OurEquipment';
import OurServices from '@/components/OurServices';
import WhoWeServe from '@/components/WhoWeServe';
import FireSafetyAwareness from '@/components/FireSafetyAwareness';
import CallToAction from '@/components/CallToAction';
import FAQSection from '@/components/FAQSection';
import Contact from '@/components/Contact';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <WhyChooseUs />
      <AboutCompany />
      <OurEquipment />
      <OurServices />
      <WhoWeServe />
      <FireSafetyAwareness />
      <CallToAction />
      <FAQSection />
      <Contact />
      <WhatsAppButton />
    </main>
  );
}
