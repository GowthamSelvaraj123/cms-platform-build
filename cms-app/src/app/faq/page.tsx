import HeroSection from '@/components/HeroSection';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';

export default function faqPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <FAQAccordion />
      <CTABanner />
    </main>
  );
}