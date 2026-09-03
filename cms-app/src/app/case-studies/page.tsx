import HeroSection from '@/components/HeroSection';
import CaseStudyGrid from '@/components/CaseStudyGrid';
import Industries from '@/components/Industries';
import CTABanner from '@/components/CTABanner';

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