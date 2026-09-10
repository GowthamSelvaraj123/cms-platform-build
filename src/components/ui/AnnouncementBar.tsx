"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gray-900 flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
      <p className="text-sm font-medium text-white text-center w-full">
        Huge updates! We just released a massive new feature set. <Link href="#" className="underline">Learn more</Link>
      </p>
      <button 
        type="button" 
        onClick={() => setIsVisible(false)}
        className="-mr-1 flex rounded-md p-2 hover:bg-gray-800 focus:outline-none sm:-mr-2"
      >
        <span className="sr-only">Dismiss</span>
        <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </button>
    </div>
  );
}