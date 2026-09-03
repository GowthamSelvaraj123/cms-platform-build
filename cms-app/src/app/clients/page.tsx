import HeroSection from '@/components/HeroSection';
import ClientLogos from '@/components/ClientLogos';
import Industries from '@/components/Industries';
import Testimonials from '@/components/Testimonials';
import CaseStudyGrid from '@/components/CaseStudyGrid';
import CTABanner from '@/components/CTABanner';

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