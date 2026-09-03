import HeroSection from '@/components/HeroSection';
import ProductsGrid from '@/components/ProductsGrid';
import FeaturesGrid from '@/components/FeaturesGrid';
import Benefits from '@/components/Benefits';
import ComparisonTable from '@/components/ComparisonTable';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';

export default function productsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ProductsGrid />
      <FeaturesGrid />
      <Benefits />
      <ComparisonTable />
      <Testimonials />
      <CTABanner />
    </main>
  );
}