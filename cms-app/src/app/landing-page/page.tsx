import HeroSection from '@/components/HeroSection';
import RichText from '@/components/RichText';
import FeaturesGrid from '@/components/FeaturesGrid';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import PricingTable from '@/components/PricingTable';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';

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