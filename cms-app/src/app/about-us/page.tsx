import HeroSection from '@/components/HeroSection';
import AboutIntro from '@/components/AboutIntro';
import RichText from '@/components/RichText';
import Timeline from '@/components/Timeline';
import StatisticsCounters from '@/components/StatisticsCounters';
import TeamGrid from '@/components/TeamGrid';
import FeaturesGrid from '@/components/FeaturesGrid';
import CTABanner from '@/components/CTABanner';

export default function aboutusPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <AboutIntro />
      <RichText />
      <Timeline />
      <StatisticsCounters />
      <TeamGrid />
      <FeaturesGrid />
      <CTABanner />
    </main>
  );
}