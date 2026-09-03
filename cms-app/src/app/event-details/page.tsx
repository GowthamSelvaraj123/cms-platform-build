import PageHeader from '@/components/PageHeader';
import RichText from '@/components/RichText';
import ImageGallery from '@/components/ImageGallery';
import FormBuilder from '@/components/FormBuilder';
import RelatedContent from '@/components/RelatedContent';

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