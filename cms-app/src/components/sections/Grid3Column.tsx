import React from 'react';
import Link from 'next/link';

export default function Grid3Column() {
  return (

    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0"><h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Grid3Column Grid</h2></div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex flex-col items-start bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <div className="h-10 w-10 bg-gray-900 rounded-lg mb-4"></div>
              <h3 className="text-lg font-semibold leading-8 text-gray-900">Item {i}</h3>
              <p className="mt-2 text-base leading-7 text-gray-600">Non quo aperiam repellendus quas est est. Eos aut dolore aut atque magnam tempora.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}