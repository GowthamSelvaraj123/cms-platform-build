import React from 'react';
import Link from 'next/link';

export default function RichText() {
  return (

    <section className="py-16 bg-white overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg text-gray-500 mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8">RichText</h2>
          <p>
            Welcome to the RichText section. This area is designed for long-form reading, such as rich text, legal documents, or detailed introductions. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mt-4">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </section>
  );
}