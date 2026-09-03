import React from 'react';
import Link from 'next/link';

export default function ReviewBadges() {
  return (

    <section className="bg-white py-10 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-gray-500 tracking-wide uppercase mb-6">ReviewBadges</p>
        <div className="flex justify-center space-x-6 md:space-x-12 opacity-75">
          {[1,2,3].map(i => (
            <div key={i} className="flex items-center space-x-2">
              <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <div className="text-left"><p className="text-xs text-gray-500 leading-tight">Rated 4.9/5</p><p className="text-sm font-bold text-gray-900">TrustPlatform {i}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}