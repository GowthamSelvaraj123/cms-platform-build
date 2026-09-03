import React from 'react';
import Link from 'next/link';

export default function Testimonials() {
  return (

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Testimonials</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Discover everything you need to know.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden">
              
            <div className="p-6">
              <p className="text-gray-600 italic">"This is an amazing service! We have seen a 200% increase in productivity since we started using this platform."</p>
              <div className="mt-6 flex items-center">
                <img src="https://placehold.co/100x100/eeeeee/999999?text=Avatar" alt="Avatar" className="h-10 w-10 rounded-full" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Jane Doe</p>
                  <p className="text-sm text-gray-500">CEO, Company</p>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}