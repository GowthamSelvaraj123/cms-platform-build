import CTABanner from '@/components/CTABanner';
import RelatedContent from '@/components/RelatedContent';

export default function thankyouPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <CTABanner />
      <RelatedContent />
    </main>
  );
}