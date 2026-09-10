import HeroSection from '@/components/sections/HeroSection';
import Benefits from '@/components/sections/Benefits';
import PartnersLogos from '@/components/sections/PartnersLogos';
import Process from '@/components/sections/Process';
import CTABanner from '@/components/sections/CTABanner';

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