import React from 'react';
import Link from 'next/link';

const services = [
  {
    title: 'Frontend Development',
    description:
      'Modern, responsive, and interactive user interfaces built with clean and maintainable code.',
  },
  {
    title: 'Backend Development',
    description:
      'Secure and scalable APIs, databases, and server-side applications for your business.',
  },
  {
    title: 'Full Stack Development',
    description:
      'Complete web applications combining powerful frontend experiences with reliable backend systems.',
  },
  {
    title: 'E-Commerce Development',
    description:
      'Fast, secure, and user-friendly online stores designed for a seamless shopping experience.',
  },
];

const technologies = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Tailwind CSS',
];

export default function WebDevelopment() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gray-900 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400">
              Web Development
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Build Powerful Websites for Your Business
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              We create modern, responsive, secure, and high-performance
              websites and web applications designed to help your business
              grow.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-200"
              >
                Get Started
              </Link>

              <Link
                href="/Categories"
                className="rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
              >
                Back to Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Web Development Services
            </h2>

            <p className="mt-4 text-lg leading-7 text-gray-600">
              From simple websites to complex web applications, we provide
              complete web development solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gray-400 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900 text-white">
                  <span className="text-lg">✓</span>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-gray-100 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Technologies
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                Modern Technology Stack
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                We use modern technologies and development tools to create
                reliable, scalable, and high-performance web applications.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {technologies.map((technology) => (
                <div
                  key={technology}
                  className="rounded-xl border border-gray-200 bg-white p-5 text-center font-semibold text-gray-800 shadow-sm transition hover:border-gray-500 hover:bg-gray-50"
                >
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Why Choose Us
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              What We Focus On
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-gray-900 p-8 text-white">
              <h3 className="text-xl font-semibold">Responsive Design</h3>

              <p className="mt-3 leading-7 text-gray-400">
                Websites that work smoothly across desktops, tablets, and
                mobile devices.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h3 className="text-xl font-semibold text-gray-900">
                High Performance
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Fast-loading websites optimized for performance and a smooth
                user experience.
              </p>
            </div>

            <div className="rounded-2xl bg-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900">
                Scalable Solutions
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Flexible solutions that can grow with your business and future
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Build Your Website?
          </h2>

          <p className="mt-4 text-lg leading-7 text-gray-400">
            Let&apos;s create a modern, fast, and reliable website for your
            business.
          </p>

          <Link
            href="/Categories"
            className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-semibold text-gray-900 transition hover:bg-gray-200"
          >
            Explore More Services
          </Link>
        </div>
      </section>
    </main>
  );
}
