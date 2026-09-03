import PageHeader from '@/components/sections/PageHeader';
import RichText from '@/components/sections/RichText';
import ImageGallery from '@/components/ui/ImageGallery';
import FormBuilder from '@/components/ui/FormBuilder';
import RelatedContent from '@/components/sections/RelatedContent';

export default function eventdetailsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PageHeader />
      <RichText />
      <ImageGallery />
      <FormBuilder />
      <RelatedContent />
    </main>
  );
}