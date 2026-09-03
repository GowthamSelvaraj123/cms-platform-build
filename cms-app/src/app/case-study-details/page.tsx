import PageHeader from '@/components/sections/PageHeader';
import RichText from '@/components/sections/RichText';
import Process from '@/components/sections/Process';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import Testimonials from '@/components/sections/Testimonials';
import ImageGallery from '@/components/ui/ImageGallery';
import CTABanner from '@/components/sections/CTABanner';

export default function casestudydetailsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PageHeader />
      <RichText />
      <Process />
      <FeaturesGrid />
      <Testimonials />
      <ImageGallery />
      <CTABanner />
    </main>
  );
}