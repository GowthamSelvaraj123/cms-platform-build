import CTABanner from '@/components/sections/CTABanner';
import RelatedContent from '@/components/sections/RelatedContent';

export default function thankyouPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <CTABanner />
      <RelatedContent />
    </main>
  );
}