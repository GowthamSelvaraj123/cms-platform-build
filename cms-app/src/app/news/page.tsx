import HeroSection from '@/components/sections/HeroSection';
import NewsGrid from '@/components/sections/NewsGrid';
import CTABanner from '@/components/sections/CTABanner';

export default function newsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <NewsGrid />
      <CTABanner />
    </main>
  );
}