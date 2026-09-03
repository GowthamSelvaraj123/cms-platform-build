import HeroSection from '@/components/sections/HeroSection';
import RichText from '@/components/sections/RichText';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import Benefits from '@/components/sections/Benefits';
import Testimonials from '@/components/sections/Testimonials';
import Process from '@/components/sections/Process';
import PricingTable from '@/components/ui/PricingTable';
import FAQAccordion from '@/components/sections/FAQAccordion';
import CTABanner from '@/components/sections/CTABanner';

export default function landingpagePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <RichText />
      <FeaturesGrid />
      <Benefits />
      <Testimonials />
      <Process />
      <PricingTable />
      <FAQAccordion />
      <CTABanner />
    </main>
  );
}