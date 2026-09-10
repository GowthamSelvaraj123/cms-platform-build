import React from 'react';
import Link from 'next/link';

export default function TestimonialCarousel() {
  return (

    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">TestimonialCarousel</h2>
        <div className="flex space-x-2">
           <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100"><svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
           <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100"><svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
        </div>
      </div>
      <div className="flex space-x-6 overflow-x-auto pb-8 pl-4 sm:pl-6 lg:pl-8 max-w-7xl mx-auto snap-x">
        {[1,2,3,4,5].map(i => (
          <div key={i} className="min-w-[300px] md:min-w-[400px] bg-white p-8 rounded-2xl shadow-sm border border-gray-200 snap-center">
            <div className="h-40 bg-gray-100 rounded-lg mb-6 flex items-center justify-center text-gray-400">Card {i}</div>
            <h3 className="font-bold text-lg text-gray-900">Carousel Item</h3>
            <p className="text-gray-500 mt-2">Horizontal scrolling cards.</p>
          </div>
        ))}
      </div>
    </section>
  );
}