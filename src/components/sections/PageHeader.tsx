import React from 'react';
import Link from 'next/link';

export default function PageHeader() {
  return (

    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
          Page Header
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
          Explore our PageHeader and find out more information.
        </p>
      </div>
    </section>
  );
}