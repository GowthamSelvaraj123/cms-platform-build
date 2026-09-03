import HeroSection from '@/components/HeroSection';
import FormBuilder from '@/components/FormBuilder';
import ContactInformation from '@/components/ContactInformation';
import FAQAccordion from '@/components/FAQAccordion';

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