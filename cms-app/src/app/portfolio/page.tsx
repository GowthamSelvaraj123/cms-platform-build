import HeroSection from '@/components/HeroSection';
import PortfolioGrid from '@/components/PortfolioGrid';
import Industries from '@/components/Industries';
import CTABanner from '@/components/CTABanner';

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