<<<<<<< HEAD
import React from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover & Understand",
    description:
      "We begin by understanding your business objectives, challenges, target audience, and technical requirements. This helps us define a clear direction and identify the right solution for your needs.",
  },
  {
    number: "02",
    title: "Plan & Strategize",
    description:
      "Our team develops a structured project strategy covering technology, user experience, functionality, timelines, and priorities. Every stage is planned to ensure efficiency, scalability, and measurable results.",
  },
  {
    number: "03",
    title: "Design & Develop",
    description:
      "We transform the strategy into a practical digital solution through thoughtful design and modern development practices. Our focus is on performance, usability, security, and a seamless user experience.",
  },
  {
    number: "04",
    title: "Test & Deliver",
    description:
      "Before delivery, we thoroughly test the solution for functionality, responsiveness, performance, and reliability. Once everything meets our quality standards, we launch the final product with confidence.",
  },
];

export default function Process() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gray-400"></span>

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Our Process
            </span>

            <span className="h-px w-10 bg-gray-400"></span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            A Clear Process.
            <span className="block text-gray-500">
              Better Results.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            From the first conversation to final delivery, we follow a
            structured and transparent approach to turn ideas into reliable,
            scalable, and impactful digital solutions.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mt-14">

          {/* Connecting Line - Desktop */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gray-300 lg:block"></div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.number} className="relative">

                {/* Number */}
                <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-gray-300 bg-gray-50">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-900 text-lg font-bold text-white">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="mt-7 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="mx-auto mt-14 max-w-4xl border-t border-gray-200 pt-8 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
            Strategy • Innovation • Execution • Growth
          </p>
        </div>

      </div>
    </section>
  );          
}           
=======
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
>>>>>>> 1deaf430c248b41456774811e32802fcf6ed3a89
