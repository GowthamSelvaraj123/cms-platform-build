import HeroSection from '@/components/HeroSection';
import DownloadList from '@/components/DownloadList';
import CTABanner from '@/components/CTABanner';

export default function downloadsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <DownloadList />
      <CTABanner />
    </main>
  );
}