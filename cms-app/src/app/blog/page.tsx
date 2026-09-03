import HeroSection from '@/components/HeroSection';
import BlogGrid from '@/components/BlogGrid';
import Newsletter from '@/components/Newsletter';

export default function blogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <BlogGrid />
      <Newsletter />
    </main>
  );
}