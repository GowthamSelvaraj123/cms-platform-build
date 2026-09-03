import HeroSection from '@/components/HeroSection';
import RichText from '@/components/RichText';
import FeaturesGrid from '@/components/FeaturesGrid';
import Benefits from '@/components/Benefits';
import Process from '@/components/Process';
import Technologies from '@/components/Technologies';
import CaseStudyGrid from '@/components/CaseStudyGrid';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';

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