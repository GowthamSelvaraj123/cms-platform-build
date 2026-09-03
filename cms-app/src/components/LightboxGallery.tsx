import React from 'react';
import Link from 'next/link';

export default function LightboxGallery() {
  return (

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">LightboxGallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4,5,6,7,8].map(i => (
            <div key={i} className="relative group overflow-hidden rounded-lg cursor-pointer aspect-square bg-gray-200">
              <img src={`https://placehold.co/400x400/eeeeee/999999?text=Img+${i}`} className="w-full h-full object-cover transition group-hover:scale-110" alt="Gallery" />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-0 group-hover:bg-opacity-50 transition flex items-center justify-center">
                <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}