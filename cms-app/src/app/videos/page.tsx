import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import CTABanner from '@/components/CTABanner';

export default function videosPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <VideoSection />
      <CTABanner />
    </main>
  );
}