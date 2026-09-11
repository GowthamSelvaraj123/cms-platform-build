import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import Card from '../ui/Card';
import { Code2, Palette, Cloud } from 'lucide-react';
import ImageGallery from '../ui/ImageGallery';

const services = [
  {
    title: 'Web Development',
    description:
      'Build modern, responsive, and scalable websites tailored to your business needs.',
    icon: Code2,
  },
  {
    title: 'UI/UX Design',
    description:
      'Create intuitive and engaging user experiences with clean and modern designs.',
    icon: Palette,
  },
  {
    title: 'Cloud Solutions',
    description:
      'Deploy and manage reliable, secure, and scalable applications in the cloud.',
    icon: Cloud,
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover the digital solutions we provide for your business.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
              >

                {/* Image Placeholder */}
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <ImageGallery />
                </div>

                {/* Card Content */}
                <div className="p-6">

                  {/* Icon */}
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-gray-600" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 mb-5">
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <Link
                    href="/services"
                    className="text-gray-600 font-semibold hover:text-gray-800"
                  >
                    Learn More →
                  </Link>

                </div>

              </Card>
            );
          })}

=======

export default function ServicesGrid() {
  return (

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">ServicesGrid</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Discover everything you need to know.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden">
              
            <div className="pt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Item Title</h3>
              <p className="text-gray-500">A brief description of this grid item goes here. It provides enough detail to be useful.</p>
            </div>
            </div>
          ))}
>>>>>>> 1deaf430c248b41456774811e32802fcf6ed3a89
        </div>
      </div>
    </section>
  );
}