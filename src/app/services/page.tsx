import HeroSection from '@/components/sections/HeroSection';
import ServicesGrid from '@/components/sections/ServicesGrid';
import Process from '@/components/sections/Process';
import Benefits from '@/components/sections/Benefits';
import Industries from '@/components/sections/Industries';
import Technologies from '@/components/sections/Technologies';
import Testimonials from '@/components/sections/Testimonials';
import FAQAccordion from '@/components/sections/FAQAccordion';
import CTABanner from '@/components/sections/CTABanner';

export default function servicesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ServicesGrid />
      <Process />
      <Benefits />
      <Industries />
      <Technologies />
      <Testimonials />
      <FAQAccordion />
      <CTABanner />
    </main>
  );
}