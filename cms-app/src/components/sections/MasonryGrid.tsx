import React from 'react';
import Link from 'next/link';

export default function MasonryGrid() {
  return (

    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {[300, 450, 250, 500, 350, 400].map((h, i) => (
            <div key={i} className="break-inside-avoid relative rounded-xl overflow-hidden shadow-sm group">
              <img src={`https://placehold.co/400x${h}/eeeeee/999999?text=Pin+${i+1}`} alt="Masonry Pin" className="w-full object-cover transition transform group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}