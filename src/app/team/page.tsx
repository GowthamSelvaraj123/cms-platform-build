import HeroSection from '@/components/sections/HeroSection';
import TeamGrid from '@/components/sections/TeamGrid';
import CTABanner from '@/components/sections/CTABanner';

export default function teamPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <TeamGrid />
      <CTABanner />
    </main>
  );
}