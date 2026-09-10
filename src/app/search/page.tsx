import PageHeader from '@/components/sections/PageHeader';
import BlogGrid from '@/components/sections/BlogGrid';

export default function searchPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PageHeader />
      <BlogGrid />
    </main>
  );
}