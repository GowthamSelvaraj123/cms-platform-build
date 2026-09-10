import React from 'react';
import Link from 'next/link';

export default function BentoGrid() {
  return (

    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-16">BentoGrid (Bento)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 min-h-[600px]">
          <div className="md:col-span-2 bg-gray-900 rounded-3xl p-10 flex flex-col justify-end relative overflow-hidden">
             <div className="relative z-10"><h3 className="text-2xl font-bold text-white">Large Feature Block</h3><p className="text-gray-400 mt-2">Spans two columns</p></div>
          </div>
          <div className="bg-gray-100 rounded-3xl p-8 flex items-center justify-center border border-gray-200">
             <span className="text-gray-500 font-medium">Standard Block</span>
          </div>
          <div className="bg-gray-100 rounded-3xl p-8 flex items-center justify-center border border-gray-200">
             <span className="text-gray-500 font-medium">Standard Block</span>
          </div>
          <div className="md:col-span-2 bg-gray-50 border border-gray-200 rounded-3xl p-10 flex flex-col justify-end">
             <h3 className="text-2xl font-bold text-gray-900">Wide Content Area</h3><p className="text-gray-500 mt-2">Another wide span</p>
          </div>
        </div>
      </div>
    </section>
  );
}