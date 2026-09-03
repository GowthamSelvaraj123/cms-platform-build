import React from 'react';
import Link from 'next/link';

export default function TeamGrid() {
  return (

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">TeamGrid</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Discover everything you need to know.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden">
              
            <img src="https://placehold.co/400x300/eeeeee/999999?text=Thumbnail" alt="Thumbnail" className="w-full h-48 object-cover rounded-t-xl" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Item Title</h3>
              <p className="text-gray-500 text-sm">A brief description of this item. Click to read more.</p>
              <div className="mt-4 text-gray-900 font-medium text-sm hover:underline">Read more &rarr;</div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}