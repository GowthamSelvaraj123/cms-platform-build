import HeroSection from '@/components/HeroSection';
import ContactInformation from '@/components/ContactInformation';
import SocialLinks from '@/components/SocialLinks';

export default function maintenancePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ContactInformation />
      <SocialLinks />
    </main>
  );
}