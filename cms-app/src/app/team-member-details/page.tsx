import PageHeader from '@/components/PageHeader';
import TeamProfile from '@/components/TeamProfile';
import SocialLinks from '@/components/SocialLinks';
import RelatedContent from '@/components/RelatedContent';

export default function teammemberdetailsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PageHeader />
      <TeamProfile />
      <SocialLinks />
      <RelatedContent />
    </main>
  );
}