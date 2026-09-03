import HeroSection from '@/components/sections/HeroSection';
import RichText from '@/components/sections/RichText';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import Technologies from '@/components/sections/Technologies';
import ImageGallery from '@/components/ui/ImageGallery';
import Testimonials from '@/components/sections/Testimonials';
import RelatedContent from '@/components/sections/RelatedContent';
import CTABanner from '@/components/sections/CTABanner';

export default function portfoliodetailsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <RichText />
      <FeaturesGrid />
      <Technologies />
      <ImageGallery />
      <Testimonials />
      <RelatedContent />
      <CTABanner />
    </main>
  );
}