import HeroSection from '@/components/sections/HeroSection';
import FormBuilder from '@/components/ui/FormBuilder';
import ContactInformation from '@/components/sections/ContactInformation';
import FAQAccordion from '@/components/sections/FAQAccordion';

export default function enquiryPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <FormBuilder />
      <ContactInformation />
      <FAQAccordion />
    </main>
  );
}