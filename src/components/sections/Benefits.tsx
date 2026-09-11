<<<<<<< HEAD
import React from "react";

interface Benefit {
  number: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    number: "01",
    title: "Business-Focused Solutions",
    description:
      "We understand your business goals and create practical digital solutions that address real challenges and deliver measurable value.",
  },
  {
    number: "02",
    title: "Modern Technology",
    description:
      "We use modern technologies and reliable development practices to build solutions that are efficient, secure, and future-ready.",
  },
  {
    number: "03",
    title: "Scalable & Flexible",
    description:
      "Our solutions are designed to grow with your business, making it easier to adapt to changing requirements and future opportunities.",
  },
  {
    number: "04",
    title: "Quality & Reliability",
    description:
      "We follow structured development and testing processes to ensure consistent quality, performance, security, and reliability.",
  },
  {
    number: "05",
    title: "Transparent Collaboration",
    description:
      "Clear communication and regular updates keep you informed throughout the project and ensure that every stage stays aligned with your expectations.",
  },
  {
    number: "06",
    title: "Long-Term Support",
    description:
      "Our commitment continues beyond delivery with ongoing support, improvements, and assistance to help your digital solution perform over time.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Benefits 
            <span className="block text-gray-500">
              That Drive Business Growth
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            We combine technology, expertise, and a customer-focused approach
            to deliver digital solutions that create lasting business value.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.number}
              className="group rounded-lg border border-gray-200 bg-white p-6 transition duration-300 hover:border-gray-300 hover:shadow-sm sm:p-8"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-widest text-gray-400">
                  {benefit.number}
                </span>

                <span className="h-px w-8 bg-gray-200 transition-all duration-300 group-hover:w-12 group-hover:bg-gray-400" />
              </div>

              {/* Icon */}
              <div className="mt-7 flex h-11 w-11 items-center justify-center rounded-md border border-gray-200 bg-gray-50">
                <svg
                  className="h-5 w-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 12c0 5.591 3.824 10.29 9 11.622C17.176 22.29 21 17.591 21 12c0-1.412-.243-2.767-.682-4.016z"
                  />
                </svg>
              </div>

              {/* Content */}
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {benefit.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                {benefit.description}
              </p>

              {/* Bottom Indicator */}
              <div className="mt-6 h-px w-6 bg-gray-300 transition-all duration-300 group-hover:w-10 group-hover:bg-gray-700" />
            </article>
          ))}
        </div>

=======
import React from 'react';
import Link from 'next/link';

export default function Benefits() {
  return (

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Benefits</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Discover everything you need to know.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden">
              
            <div className="p-8 flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Feature Name</h3>
              <p className="text-gray-500 text-sm">Short description of the feature or benefit that makes it great.</p>
            </div>
            </div>
          ))}
        </div>
>>>>>>> 1deaf430c248b41456774811e32802fcf6ed3a89
      </div>
    </section>
  );
}