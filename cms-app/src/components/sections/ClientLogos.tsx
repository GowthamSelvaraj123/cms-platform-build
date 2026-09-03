import React from 'react';
import Link from 'next/link';

export default function ClientLogos() {
  return (

    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide mb-6">
          ClientLogos
        </p>
        <div className="flex justify-center flex-wrap gap-8 md:gap-16">
          {[1,2,3,4,5].map(i => (
             <div key={i} className="text-xl font-black text-gray-400 uppercase tracking-widest">LOGO {i}</div>
          ))}
        </div>
      </div>
    </section>
  );
}