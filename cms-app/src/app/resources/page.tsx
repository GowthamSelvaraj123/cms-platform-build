import HeroSection from '@/components/sections/HeroSection';
import BlogGrid from '@/components/sections/BlogGrid';
import Newsletter from '@/components/ui/Newsletter';
import CTABanner from '@/components/sections/CTABanner';

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