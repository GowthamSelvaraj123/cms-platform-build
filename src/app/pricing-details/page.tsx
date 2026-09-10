import PageHeader from '@/components/sections/PageHeader';
import PricingTable from '@/components/ui/PricingTable';
import ComparisonTable from '@/components/ui/ComparisonTable';
import FAQAccordion from '@/components/sections/FAQAccordion';
import CTABanner from '@/components/sections/CTABanner';

export default function pricingdetailsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PageHeader />
      <PricingTable />
      <ComparisonTable />
      <FAQAccordion />
      <CTABanner />
    </main>
  );
}