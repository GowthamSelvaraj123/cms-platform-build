import React from 'react';
import Link from 'next/link';

export default function StatisticsCounters() {
  return (

    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          {[
            { label: 'Founded', value: '2026' },
            { label: 'Employees', value: '100+' },
            { label: 'Customers', value: '10k+' },
            { label: 'Revenue', value: '$5M' }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-extrabold text-white">{stat.value}</div>
              <div className="mt-2 text-sm font-medium text-gray-400 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}