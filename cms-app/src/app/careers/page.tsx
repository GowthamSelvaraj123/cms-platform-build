import HeroSection from '@/components/HeroSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import Benefits from '@/components/Benefits';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';

export default function careersPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <FeaturesGrid />
      <Benefits />
      <FAQAccordion />
      <CTABanner />
    </main>
  );
}