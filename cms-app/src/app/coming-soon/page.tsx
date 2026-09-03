import HeroSection from '@/components/HeroSection';
import Newsletter from '@/components/Newsletter';
import SocialLinks from '@/components/SocialLinks';

export default function comingsoonPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <Newsletter />
      <SocialLinks />
    </main>
  );
}