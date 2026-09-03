import React from 'react';
import Link from 'next/link';

export default function TabsSection() {
  return (

    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10"><h2 className="text-3xl font-extrabold text-gray-900">TabsSection</h2></div>
        <div>
          <div className="sm:hidden">
            <select id="tabs" name="tabs" className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm">
              <option>Tab 1</option><option>Tab 2</option><option>Tab 3</option>
            </select>
          </div>
          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <Link href="#" className="border-gray-900 text-gray-900 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">Tab 1</Link>
                <Link href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">Tab 2</Link>
                <Link href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium">Tab 3</Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="py-8 text-gray-500 bg-gray-50 p-6 mt-4 rounded-lg border border-gray-100">
          This is the content panel for the active tab. Replace this with dynamic content based on state.
        </div>
      </div>
    </section>
  );
}