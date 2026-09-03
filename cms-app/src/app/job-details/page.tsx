import PageHeader from '@/components/sections/PageHeader';
import RichText from '@/components/sections/RichText';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import Benefits from '@/components/sections/Benefits';
import FormBuilder from '@/components/ui/FormBuilder';
import RelatedContent from '@/components/sections/RelatedContent';

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