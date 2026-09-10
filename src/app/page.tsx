import HeroSection from '@/components/sections/HeroSection';
import AboutIntro from '@/components/sections/AboutIntro';
import ServicesGrid from '@/components/sections/ServicesGrid';
import ProductsGrid from '@/components/sections/ProductsGrid';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import StatisticsCounters from '@/components/ui/StatisticsCounters';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import Testimonials from '@/components/sections/Testimonials';
import ClientLogos from '@/components/sections/ClientLogos';
import BlogGrid from '@/components/sections/BlogGrid';
import CTABanner from '@/components/sections/CTABanner';
import ContactInformation from '@/components/sections/ContactInformation';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <AboutIntro />
      <ServicesGrid />
      <ProductsGrid />
      <FeaturesGrid />
      <StatisticsCounters />
      <PortfolioGrid />
      <Testimonials />
      <ClientLogos />
      <BlogGrid />
      <CTABanner />
      <ContactInformation />
    </main>
  );
}