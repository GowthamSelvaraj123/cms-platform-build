import HeroSection from '@/components/sections/HeroSection';
import ClientLogos from '@/components/sections/ClientLogos';
import Industries from '@/components/sections/Industries';
import Testimonials from '@/components/sections/Testimonials';
import CaseStudyGrid from '@/components/sections/CaseStudyGrid';
import CTABanner from '@/components/sections/CTABanner';

export default function clientsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ClientLogos />
      <Industries />
      <Testimonials />
      <CaseStudyGrid />
      <CTABanner />
    </main>
  );
}