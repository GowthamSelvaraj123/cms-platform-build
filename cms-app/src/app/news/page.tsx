import HeroSection from '@/components/HeroSection';
import NewsGrid from '@/components/NewsGrid';
import CTABanner from '@/components/CTABanner';

export default function newsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <NewsGrid />
      <CTABanner />
    </main>
  );
}