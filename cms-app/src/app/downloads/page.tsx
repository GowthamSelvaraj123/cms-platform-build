import HeroSection from '@/components/sections/HeroSection';
import DownloadList from '@/components/ui/DownloadList';
import CTABanner from '@/components/sections/CTABanner';

export default function downloadsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <DownloadList />
      <CTABanner />
    </main>
  );
}