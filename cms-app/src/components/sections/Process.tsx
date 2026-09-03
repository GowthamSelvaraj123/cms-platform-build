import React from 'react';
import Link from 'next/link';

export default function Process() {
  return (

    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">Process</h2>
        </div>
        <div className="space-y-6">
          {[1,2,3,4].map(item => (
            <div key={item} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                <span className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200 text-gray-900 flex items-center justify-center font-bold mr-3">{item}</span>
                Item / Question {item}
              </h3>
              <p className="text-gray-500 ml-11 mt-2">
                This is the expanded content for this list item. It contains necessary details and explanations.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}