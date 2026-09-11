import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import Button from '../ui/Button';
import ImageGallery from '../ui/ImageGallery';

export default function AboutIntro() {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image Placeholder */}
          
          <div className="w-full h-80 rounded-2xl overflow-hidden">
            <ImageGallery />
          </div>


          {/* Content */}
          <div>

            <p className="text-gray-600 font-semibold mb-3">
              WHO WE ARE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Turning Ideas Into Reality
            </h2>

            <p className="text-gray-600 leading-7 mb-5">
              We are a passionate team of developers, designers,
              and technology experts focused on creating modern
              and reliable digital solutions.
            </p>

            <p className="text-gray-600 leading-7 mb-6">
              Our goal is to understand our clients' needs and
              transform their ideas into simple, scalable, and
              user-friendly products.
            </p>

            {/* Button */}
            <Link href="/contact">
              <Button
                variant="primary"
                size="md"
              >
                Learn More
              </Button>
            </Link>

          </div>

        </div>

      </div>

=======

export default function AboutIntro() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between  gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              AboutIntro
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              This is a split layout section, perfect for introductions, feature highlights, or team profiles. You can add an image alongside text.
            </p>
            <div className="mt-6">
              <Link href="#" className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800">
                Learn More
              </Link>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <img src="https://placehold.co/600x400/eeeeee/999999?text=Media" alt="Media" className="w-full h-80 object-cover rounded-xl shadow-md" />
          </div>
        </div>
      </div>
>>>>>>> 1deaf430c248b41456774811e32802fcf6ed3a89
    </section>
  );
}