import React from 'react';
import Link from 'next/link';

export default function SearchFilterBar() {
  return (

    <section className="bg-white py-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1 w-full relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <input type="text" className="focus:ring-gray-900 focus:border-gray-900 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 bg-gray-50 border" placeholder="Search resources..." />
          </div>
          <div className="flex space-x-2">
            <select className="block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm rounded-md bg-gray-50 border">
              <option>Filter by Category</option><option>Category 1</option>
            </select>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">Filter</button>
          </div>
        </div>
      </div>
    </section>
  );
}