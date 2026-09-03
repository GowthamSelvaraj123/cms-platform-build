import HeroSection from '@/components/HeroSection';
import AboutIntro from '@/components/AboutIntro';
import ServicesGrid from '@/components/ServicesGrid';
import ProductsGrid from '@/components/ProductsGrid';
import FeaturesGrid from '@/components/FeaturesGrid';
import StatisticsCounters from '@/components/StatisticsCounters';
import PortfolioGrid from '@/components/PortfolioGrid';
import Testimonials from '@/components/Testimonials';
import ClientLogos from '@/components/ClientLogos';
import BlogGrid from '@/components/BlogGrid';
import CTABanner from '@/components/CTABanner';
import ContactInformation from '@/components/ContactInformation';

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