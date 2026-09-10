import HeroSection from '@/components/sections/HeroSection';
import RichText from '@/components/sections/RichText';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import Benefits from '@/components/sections/Benefits';
import Process from '@/components/sections/Process';
import Technologies from '@/components/sections/Technologies';
import CaseStudyGrid from '@/components/sections/CaseStudyGrid';
import FAQAccordion from '@/components/sections/FAQAccordion';
import CTABanner from '@/components/sections/CTABanner';

export default function servicedetailsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <RichText />
      <FeaturesGrid />
      <Benefits />
      <Process />
      <Technologies />
      <CaseStudyGrid />
      <FAQAccordion />
      <CTABanner />
    </main>
  );
}