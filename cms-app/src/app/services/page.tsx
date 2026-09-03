import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import Process from '@/components/Process';
import Benefits from '@/components/Benefits';
import Industries from '@/components/Industries';
import Technologies from '@/components/Technologies';
import Testimonials from '@/components/Testimonials';
import FAQAccordion from '@/components/FAQAccordion';
import CTABanner from '@/components/CTABanner';

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