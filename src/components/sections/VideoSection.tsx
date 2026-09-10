import React from 'react';
import Link from 'next/link';

export default function VideoSection() {
  return (

    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">VideoSection</h2>
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl overflow-hidden shadow-lg flex items-center justify-center relative min-h-[400px]">
          <img src="https://placehold.co/1200x600/eeeeee/999999?text=Media+Placeholder" alt="Media Placeholder" className="w-full h-full object-cover absolute inset-0" />
          <div className="absolute inset-0 flex items-center justify-center"><div className="w-16 h-16 bg-white bg-opacity-75 rounded-full flex items-center justify-center shadow-sm hover:scale-105 transition cursor-pointer"><svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg></div></div>
        </div>
      </div>
    </section>
  );
}