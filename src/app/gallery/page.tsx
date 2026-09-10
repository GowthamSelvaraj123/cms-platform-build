import HeroSection from '@/components/sections/HeroSection';
import ImageGallery from '@/components/ui/ImageGallery';
import VideoSection from '@/components/sections/VideoSection';
import CTABanner from '@/components/sections/CTABanner';

export default function galleryPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ImageGallery />
      <VideoSection />
      <CTABanner />
    </main>
  );
}