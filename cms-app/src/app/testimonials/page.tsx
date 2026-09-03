import HeroSection from '@/components/sections/HeroSection';
import Testimonials from '@/components/sections/Testimonials';
import VideoSection from '@/components/sections/VideoSection';
import ClientLogos from '@/components/sections/ClientLogos';
import CTABanner from '@/components/sections/CTABanner';

export default function testimonialsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <Testimonials />
      <VideoSection />
      <ClientLogos />
      <CTABanner />
    </main>
  );
}