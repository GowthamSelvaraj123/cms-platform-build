import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import Card from '../ui/Card';

export default function FeaturesGrid() {
  const features = [
    {
      id: 1,
      title: 'Easy to Use',
      description:
        'Simple and intuitive features designed to make your experience easier.',
      icon: '⚡',
    },
    {
      id: 2,
      title: 'Fast Performance',
      description:
        'Optimized performance that helps you get things done quickly and efficiently.',
      icon: '🚀',
    },
    {
      id: 3,
      title: 'Secure',
      description:
        'Built with security in mind to help keep your information protected.',
      icon: '🔒',
    },
    {
      id: 4,
      title: 'Responsive Design',
      description:
        'A responsive experience that works smoothly across all screen sizes.',
      icon: '📱',
    },
    {
      id: 5,
      title: 'Customizable',
      description:
        'Flexible options that allow you to customize the experience to your needs.',
      icon: '⚙️',
    },
    {
      id: 6,
      title: 'Reliable Support',
      description:
        'Get helpful support whenever you need assistance with the platform.',
      icon: '💬',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Features
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Everything you need to get more done with a simple and reliable
            experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.id}
              className="p-8 text-center hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="mx-auto mb-5 h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

=======

export default function FeaturesGrid() {
  return (

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">FeaturesGrid</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Discover everything you need to know.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden">
              
            <div className="p-8 flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Feature Name</h3>
              <p className="text-gray-500 text-sm">Short description of the feature or benefit that makes it great.</p>
            </div>
            </div>
          ))}
        </div>
>>>>>>> 1deaf430c248b41456774811e32802fcf6ed3a89
      </div>
    </section>
  );
}