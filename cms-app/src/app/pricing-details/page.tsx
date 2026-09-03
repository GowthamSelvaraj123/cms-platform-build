import PageHeader from '@/components/PageHeader';
import PricingTable from '@/components/PricingTable';
import ComparisonTable from '@/components/ComparisonTable';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';

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