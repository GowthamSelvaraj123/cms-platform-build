import HeroSection from '@/components/HeroSection';
import BlogGrid from '@/components/BlogGrid';
import Newsletter from '@/components/Newsletter';
import CTABanner from '@/components/CTABanner';

export default function resourcesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <BlogGrid />
      <Newsletter />
      <CTABanner />
    </main>
  );
}