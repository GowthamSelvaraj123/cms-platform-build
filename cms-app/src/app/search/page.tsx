import PageHeader from '@/components/PageHeader';
import BlogGrid from '@/components/BlogGrid';

export default function searchPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PageHeader />
      <BlogGrid />
    </main>
  );
}