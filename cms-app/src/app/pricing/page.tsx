import HeroSection from '@/components/HeroSection';
import PricingTable from '@/components/PricingTable';
import ComparisonTable from '@/components/ComparisonTable';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';

export default function pricingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <PricingTable />
      <ComparisonTable />
      <FAQAccordion />
      <CTABanner />
    </main>
  );
}