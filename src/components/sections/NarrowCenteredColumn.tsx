import React from 'react';
import Link from 'next/link';

export default function NarrowCenteredColumn() {
  return (

    <section className="py-24 bg-white">
      <div className="mx-auto max-w-2xl text-center px-4">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">NarrowCenteredColumn</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          This is a narrow, single-column layout commonly used for legal pages, focused blog reading, or simple textual announcements where a full width is too wide to read comfortably.
        </p>
      </div>
    </section>
  );
}