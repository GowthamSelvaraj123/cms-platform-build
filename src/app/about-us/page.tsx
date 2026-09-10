import HeroSection from '@/components/sections/HeroSection';
import AboutIntro from '@/components/sections/AboutIntro';
import RichText from '@/components/sections/RichText';
import Dummy from '@/components/ui/Dummy';
import Timeline from '@/components/sections/Timeline';
import StatisticsCounters from '@/components/ui/StatisticsCounters';
import TeamGrid from '@/components/sections/TeamGrid';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import CTABanner from '@/components/sections/CTABanner';

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
      <Dummy />
    </main>
  );
}