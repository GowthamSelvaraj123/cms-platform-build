import HeroSection from '@/components/HeroSection';
import Benefits from '@/components/Benefits';
import PartnersLogos from '@/components/PartnersLogos';
import Process from '@/components/Process';
import CTABanner from '@/components/CTABanner';

export default function partnersPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <Benefits />
      <PartnersLogos />
      <Process />
      <CTABanner />
    </main>
  );
}