import HeroSection from '@/components/sections/HeroSection';
import CaseStudyGrid from '@/components/sections/CaseStudyGrid';
import Industries from '@/components/sections/Industries';
import CTABanner from '@/components/sections/CTABanner';

export default function casestudiesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <CaseStudyGrid />
      <Industries />
      <CTABanner />
    </main>
  );
}