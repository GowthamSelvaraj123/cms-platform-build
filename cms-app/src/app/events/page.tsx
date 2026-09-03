import HeroSection from '@/components/HeroSection';
import EventsGrid from '@/components/EventsGrid';
import CTABanner from '@/components/CTABanner';

export default function eventsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <EventsGrid />
      <CTABanner />
    </main>
  );
}