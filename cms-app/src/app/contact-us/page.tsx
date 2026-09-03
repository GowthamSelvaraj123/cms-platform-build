import HeroSection from '@/components/sections/HeroSection';
import ContactInformation from '@/components/sections/ContactInformation';
import Map from '@/components/ui/Map';
import ContactForm from '@/components/ui/ContactForm';
import SocialLinks from '@/components/ui/SocialLinks';
import FAQAccordion from '@/components/sections/FAQAccordion';

export default function contactusPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ContactInformation />
      <Map />
      <ContactForm />
      <SocialLinks />
      <FAQAccordion />
    </main>
  );
}