import React from 'react';
import Link from 'next/link';

export default function ImageGallery() {
  return (

    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">ImageGallery</h2>
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl overflow-hidden shadow-lg flex items-center justify-center relative min-h-[400px]">
          <img src="https://placehold.co/1200x600/eeeeee/999999?text=Media+Placeholder" alt="Media Placeholder" className="w-full h-full object-cover absolute inset-0" />
          
        </div>
      </div>
    </section>
  );
}