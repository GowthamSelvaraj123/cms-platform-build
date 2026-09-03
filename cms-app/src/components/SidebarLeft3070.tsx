import React from 'react';
import Link from 'next/link';

export default function SidebarLeft3070() {
  return (

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/3 lg:w-1/4 bg-gray-50 p-6 rounded-lg border border-gray-200 min-h-[400px]">Sidebar (30%)</aside>
        <main className="w-full md:w-2/3 lg:w-3/4 bg-white p-8 rounded-lg border border-gray-200 min-h-[600px] shadow-sm flex items-center justify-center text-gray-400 text-xl">
          Main Content Area (70%)
        </main>
        
      </div>
    </div>
  );
}