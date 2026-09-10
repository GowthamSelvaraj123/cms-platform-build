import HeroSection from '@/components/sections/HeroSection';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import Industries from '@/components/sections/Industries';
import CTABanner from '@/components/sections/CTABanner';

export default function portfolioPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <PortfolioGrid />
      <Industries />
      <CTABanner />
    </main>
  );
}