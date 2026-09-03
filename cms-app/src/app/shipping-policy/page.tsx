import PageHeader from '@/components/sections/PageHeader';
import RichText from '@/components/sections/RichText';
import ContactInformation from '@/components/sections/ContactInformation';

export default function shippingpolicyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PageHeader />
      <RichText />
      <ContactInformation />
    </main>
  );
}