import PageHeader from '@/components/PageHeader';
import RichText from '@/components/RichText';
import Process from '@/components/Process';
import FeaturesGrid from '@/components/FeaturesGrid';
import Testimonials from '@/components/Testimonials';
import ImageGallery from '@/components/ImageGallery';
import CTABanner from '@/components/CTABanner';

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