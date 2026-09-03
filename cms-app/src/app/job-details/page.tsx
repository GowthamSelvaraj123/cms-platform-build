import PageHeader from '@/components/PageHeader';
import RichText from '@/components/RichText';
import FeaturesGrid from '@/components/FeaturesGrid';
import Benefits from '@/components/Benefits';
import FormBuilder from '@/components/FormBuilder';
import RelatedContent from '@/components/RelatedContent';

export default function jobdetailsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PageHeader />
      <RichText />
      <FeaturesGrid />
      <Benefits />
      <FormBuilder />
      <RelatedContent />
    </main>
  );
}