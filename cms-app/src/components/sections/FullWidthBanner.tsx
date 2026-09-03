import React from 'react';
import Link from 'next/link';

export default function FullWidthBanner() {
  return (

    <section className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center sm:px-16 sm:shadow-sm ">
      <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">Boost your productivity today.</h2>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link href="#" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get started</Link>
        <Link href="#" className="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}