"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 flex flex-col justify-between gap-x-8 gap-y-4 bg-white p-6 ring-1 ring-gray-900/10 md:flex-row md:items-center lg:px-8 z-50">
      <p className="max-w-4xl text-sm leading-6 text-gray-900">
        This website uses cookies to supplement a balanced diet and provide a much better user experience. By accepting, you agree to the storing of cookies on your device.
      </p>
      <div className="flex flex-none items-center gap-x-5">
        <button 
          type="button" 
          onClick={() => setIsVisible(false)}
          className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Accept all
        </button>
        <button 
          type="button" 
          onClick={() => setIsVisible(false)}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Reject all
        </button>
      </div>
    </div>
  );
}