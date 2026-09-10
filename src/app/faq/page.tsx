import HeroSection from '@/components/sections/HeroSection';
import FAQAccordion from '@/components/sections/FAQAccordion';
import CTABanner from '@/components/sections/CTABanner';

export default function faqPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <FAQAccordion />
      <CTABanner />
    </main>
  );
}