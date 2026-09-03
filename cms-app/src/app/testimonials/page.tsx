import HeroSection from '@/components/HeroSection';
import Testimonials from '@/components/Testimonials';
import VideoSection from '@/components/VideoSection';
import ClientLogos from '@/components/ClientLogos';
import CTABanner from '@/components/CTABanner';

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