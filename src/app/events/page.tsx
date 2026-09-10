import HeroSection from '@/components/sections/HeroSection';
import EventsGrid from '@/components/sections/EventsGrid';
import CTABanner from '@/components/sections/CTABanner';

export default function eventsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <EventsGrid />
      <CTABanner />
    </main>
  );
}