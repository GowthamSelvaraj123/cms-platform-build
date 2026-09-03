import HeroSection from '@/components/HeroSection';
import RichText from '@/components/RichText';
import FeaturesGrid from '@/components/FeaturesGrid';
import Technologies from '@/components/Technologies';
import ImageGallery from '@/components/ImageGallery';
import Testimonials from '@/components/Testimonials';
import RelatedContent from '@/components/RelatedContent';
import CTABanner from '@/components/CTABanner';

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