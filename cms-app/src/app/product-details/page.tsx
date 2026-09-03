import HeroSection from '@/components/sections/HeroSection';
import RichText from '@/components/sections/RichText';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import ImageGallery from '@/components/ui/ImageGallery';
import Benefits from '@/components/sections/Benefits';
import Process from '@/components/sections/Process';
import PricingTable from '@/components/ui/PricingTable';
import FAQAccordion from '@/components/sections/FAQAccordion';
import CTABanner from '@/components/sections/CTABanner';

export default function productdetailsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <RichText />
      <FeaturesGrid />
      <ImageGallery />
      <Benefits />
      <Process />
      <PricingTable />
      <FAQAccordion />
      <CTABanner />
    </main>
  );
}