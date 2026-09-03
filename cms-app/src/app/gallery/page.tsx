import HeroSection from '@/components/HeroSection';
import ImageGallery from '@/components/ImageGallery';
import VideoSection from '@/components/VideoSection';
import CTABanner from '@/components/CTABanner';

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