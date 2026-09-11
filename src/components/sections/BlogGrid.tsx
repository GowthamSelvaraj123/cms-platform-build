import React from 'react';
import Link from 'next/link';

<<<<<<< HEAD
interface BlogPost {
  id: number;
  category: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    category: 'Web Development',
    title: 'Modern Web Development Trends for 2026',
    description:
      'Explore the latest technologies, frameworks, and development practices shaping modern web applications.',
    date: 'September 05, 2026',
    readTime: '5 min read',
    image:
      'https://placehold.co/800x500/1f2937/ffffff?text=Web+Development',
  },
  {
    id: 2,
    category: 'React & Next.js',
    title: 'Building Scalable Applications with React and Next.js',
    description:
      'Learn how component-based architecture, reusable UI, and Next.js features help developers build scalable applications.',
    date: 'August 28, 2026',
    readTime: '7 min read',
    image:
      'https://placehold.co/800x500/374151/ffffff?text=React+%26+Next.js',
  },
  {
    id: 3,
    category: 'Software Development',
    title: 'Best Practices for Clean and Maintainable Code',
    description:
      'Discover practical development techniques for writing cleaner code, organizing projects, and improving long-term maintainability.',
    date: 'August 20, 2026',
    readTime: '6 min read',
    image:
      'https://placehold.co/800x500/4b5563/ffffff?text=Clean+Code',
  },
  {
    id: 4,
    category: 'Backend Development',
    title: 'Understanding APIs and Modern Backend Architecture',
    description:
      'A practical introduction to REST APIs, backend services, databases, and the architecture behind modern applications.',
    date: 'August 12, 2026',
    readTime: '8 min read',
    image:
      'https://placehold.co/800x500/111827/ffffff?text=Backend+Development',
  },
  {
    id: 5,
    category: 'Cloud & DevOps',
    title: 'How DevOps Improves the Software Development Lifecycle',
    description:
      'Understand how CI/CD, automation, cloud platforms, and DevOps practices help teams deliver software faster and more reliably.',
    date: 'August 04, 2026',
    readTime: '6 min read',
    image:
      'https://placehold.co/800x500/1f2937/ffffff?text=Cloud+%26+DevOps',
  },
  {
    id: 6,
    category: 'AI & Technology',
    title: 'The Role of AI in Modern Software Development',
    description:
      'Explore how artificial intelligence is changing coding, testing, application development, and software engineering workflows.',
    date: 'July 27, 2026',
    readTime: '5 min read',
    image:
      'https://placehold.co/800x500/374151/ffffff?text=AI+%26+Technology',
  },
];

export default function BlogGrid() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white">
            Technology & Development
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Latest Insights & Articles
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Stay updated with the latest trends, technologies, and best
            practices in software development and the IT industry.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-gray-800 shadow">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-7">

                <div className="mb-4 flex items-center gap-3 text-sm text-gray-500">
                  <span>{post.date}</span>

                  <span className="h-1 w-1 rounded-full bg-gray-400"></span>

                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold leading-7 text-gray-900 transition-colors duration-200 group-hover:text-gray-600">
                  {post.title}
                </h3>

                <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>

                <Link
                  href={`/blog/${post.id}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gray-900 transition-all duration-200 hover:gap-3 hover:text-gray-600"
                >
                  Read article
                  <span aria-hidden="true">→</span>
                </Link>

              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white transition duration-200 hover:bg-gray-700"
          >
            View All Articles
            <span className="ml-2">→</span>
          </Link>
        </div>

=======
export default function BlogGrid() {
  return (

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">BlogGrid</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Discover everything you need to know.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden">
              
            <img src="https://placehold.co/400x300/eeeeee/999999?text=Thumbnail" alt="Thumbnail" className="w-full h-48 object-cover rounded-t-xl" />
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Item Title</h3>
              <p className="text-gray-500 text-sm">A brief description of this item. Click to read more.</p>
              <div className="mt-4 text-gray-900 font-medium text-sm hover:underline">Read more &rarr;</div>
            </div>
            </div>
          ))}
        </div>
>>>>>>> 1deaf430c248b41456774811e32802fcf6ed3a89
      </div>
    </section>
  );
}