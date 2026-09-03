import HeroSection from '@/components/sections/HeroSection';
import ContactInformation from '@/components/sections/ContactInformation';
import SocialLinks from '@/components/ui/SocialLinks';

export default function maintenancePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <ContactInformation />
      <SocialLinks />
    </main>
  );
}