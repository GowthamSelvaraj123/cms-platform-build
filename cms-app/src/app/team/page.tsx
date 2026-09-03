import HeroSection from '@/components/HeroSection';
import TeamGrid from '@/components/TeamGrid';
import CTABanner from '@/components/CTABanner';

export default function teamPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <TeamGrid />
      <CTABanner />
    </main>
  );
}