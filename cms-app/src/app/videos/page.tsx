import HeroSection from '@/components/sections/HeroSection';
import VideoSection from '@/components/sections/VideoSection';
import CTABanner from '@/components/sections/CTABanner';

export default function videosPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <VideoSection />
      <CTABanner />
    </main>
  );
}