import PageHeader from '@/components/PageHeader';
import RichText from '@/components/RichText';
import SocialLinks from '@/components/SocialLinks';
import RelatedContent from '@/components/RelatedContent';
import CTABanner from '@/components/CTABanner';

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