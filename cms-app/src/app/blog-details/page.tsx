import PageHeader from '@/components/sections/PageHeader';
import RichText from '@/components/sections/RichText';
import SocialLinks from '@/components/ui/SocialLinks';
import RelatedContent from '@/components/sections/RelatedContent';
import CTABanner from '@/components/sections/CTABanner';

export default function blogdetailsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PageHeader />
      <RichText />
      <SocialLinks />
      <RelatedContent />
      <CTABanner />
    </main>
  );
}