import PageHeader from '@/components/sections/PageHeader';
import TeamProfile from '@/components/sections/TeamProfile';
import SocialLinks from '@/components/ui/SocialLinks';
import RelatedContent from '@/components/sections/RelatedContent';

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