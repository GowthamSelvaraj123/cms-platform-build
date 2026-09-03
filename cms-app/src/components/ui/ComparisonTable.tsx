import React from 'react';
import Link from 'next/link';

export default function ComparisonTable() {
  return (

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">ComparisonTable</h2>
          <p className="mt-4 text-xl text-gray-500">Simple, transparent pricing.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {['Basic', 'Pro', 'Enterprise'].map((tier, i) => (
            <div key={i} className={`rounded-2xl border ${i === 1 ? 'border-gray-900 shadow-xl relative' : 'border-gray-200 shadow-sm'} p-8 bg-white flex flex-col`}>
              {i === 1 && <span className="absolute top-0 right-0 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase">Popular</span>}
              <h3 className="text-2xl font-semibold text-gray-900">{tier}</h3>
              <p className="mt-4 text-5xl font-extrabold text-gray-900">${(i+1)*29}<span className="text-xl font-medium text-gray-500">/mo</span></p>
              <ul className="mt-8 space-y-4 flex-1">
                {[1,2,3,4].map(feat => (
                  <li key={feat} className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-gray-900 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Feature {feat}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full py-3 px-4 rounded-md font-medium transition ${i === 1 ? 'bg-gray-900 text-white hover:bg-gray-800' : 'bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200'}`}>
                Choose {tier}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}