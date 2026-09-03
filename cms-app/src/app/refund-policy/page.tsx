import PageHeader from '@/components/PageHeader';
import RichText from '@/components/RichText';
import ContactInformation from '@/components/ContactInformation';

export default function refundpolicyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PageHeader />
      <RichText />
      <ContactInformation />
    </main>
  );
}