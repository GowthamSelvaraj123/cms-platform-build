<<<<<<< HEAD
import React from "react";

interface Industry {
  number: string;
  title: string;
  description: string;
}

const industries: Industry[] = [
  {
    number: "01",
    title: "Healthcare",
    description:
      "Digital solutions that help healthcare organizations improve operations, manage information, and deliver better experiences for patients and professionals.",
  },
  {
    number: "02",
    title: "Finance & Banking",
    description:
      "Secure and scalable digital solutions designed to streamline financial processes, enhance customer experiences, and support business growth.",
  },
  {
    number: "03",
    title: "Education",
    description:
      "Modern technology solutions that enable educational institutions to improve learning experiences, administration, and digital engagement.",
  },
  {
    number: "04",
    title: "Retail & E-Commerce",
    description:
      "Customer-focused digital platforms that help retailers strengthen their online presence, simplify operations, and create seamless shopping experiences.",
  },
  {
    number: "05",
    title: "Real Estate & Construction",
    description:
      "Technology-driven solutions that help businesses manage projects, showcase properties, improve communication, and operate more efficiently.",
  },
  {
    number: "06",
    title: "Manufacturing",
    description:
      "Digital solutions that support operational efficiency, process management, data visibility, and smarter decision-making across manufacturing businesses.",
  },
];

export default function Industries() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Industries 
            <span className="block text-gray-500">
              We Serve
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Our technology expertise enables us to create tailored digital
            solutions for businesses across a wide range of industries.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.number}
              className="group rounded-lg border border-gray-200 bg-white p-6 transition duration-300 hover:border-gray-300 hover:shadow-sm sm:p-8"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold tracking-widest text-gray-400">
                  {industry.number}
                </span>

                <span className="h-px w-8 bg-gray-200 transition-all duration-300 group-hover:w-12 group-hover:bg-gray-400" />
              </div>

              {/* Industry Title */}
              <h3 className="mt-8 text-xl font-semibold text-gray-900">
                {industry.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                {industry.description}
              </p>

              {/* Bottom Indicator */}
              <div className="mt-7 h-px w-6 bg-gray-300 transition-all duration-300 group-hover:w-10 group-hover:bg-gray-700" />
            </article>
          ))}
        </div>

=======
import React from 'react';
import Link from 'next/link';

export default function Industries() {
  return (

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Industries</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Discover everything you need to know.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden">
              
            <div className="pt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Item Title</h3>
              <p className="text-gray-500">A brief description of this grid item goes here. It provides enough detail to be useful.</p>
            </div>
            </div>
          ))}
        </div>
>>>>>>> 1deaf430c248b41456774811e32802fcf6ed3a89
      </div>
    </section>
  );
}