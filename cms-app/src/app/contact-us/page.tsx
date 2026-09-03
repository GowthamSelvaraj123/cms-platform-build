import HeroSection from '@/components/HeroSection';
import ContactInformation from '@/components/ContactInformation';
import Map from '@/components/Map';
import ContactForm from '@/components/ContactForm';
import SocialLinks from '@/components/SocialLinks';
import FAQAccordion from '@/components/FAQAccordion';

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