import HeroSection from '@/components/sections/HeroSection';
import Newsletter from '@/components/ui/Newsletter';
import SocialLinks from '@/components/ui/SocialLinks';

export default function comingsoonPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <Newsletter />
      <SocialLinks />
    </main>
  );
}