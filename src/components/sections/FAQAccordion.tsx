<<<<<<< HEAD
"use client";

import React, { useState } from "react";

interface FAQItem {
  number: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    number: "01",
    question: "What services does your company provide?",
    answer:
      "We provide a wide range of digital solutions including web development, UI/UX design, mobile application development, digital marketing, cloud solutions, and customized business solutions based on your requirements.",
  },
  {
    number: "02",
    question: "How do you start a new project?",
    answer:
      "We begin by understanding your business objectives, requirements, target audience, and expected outcomes. After the initial discussion, we define the project scope, technology approach, timeline, and development strategy.",
  },
  {
    number: "03",
    question: "Can you build a solution according to our specific requirements?",
    answer:
      "Yes. We develop customized solutions based on your business requirements. Our approach allows us to adapt the design, features, technology, and functionality to meet your specific operational and business needs.",
  },
  {
    number: "04",
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines depend on the scope, complexity, features, and technology involved. After understanding your requirements, we provide a clear project plan with estimated milestones and delivery timelines.",
  },
  {
    number: "05",
    question: "Do you provide support after project delivery?",
    answer:
      "Yes. We provide ongoing support and maintenance after delivery to help with updates, improvements, technical issues, performance, and future enhancements whenever required.",
  },
  {
    number: "06",
    question: "How can I discuss my project requirements with your team?",
    answer:
      "You can contact our team through the contact section on our website. Share your requirements, business goals, and project details with us, and our team will help you identify the most suitable approach.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">

          {/* Left Heading */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-gray-400"></span>

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                FAQ
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked
              <span className="block text-gray-500">
                Questions
              </span>
            </h2>
          </div>

          {/* Description */}
          <div>
            <p className="max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
              Find answers to common questions about our services, project
              process, development approach, and support.
            </p>
          </div>

        </div>

        {/* FAQ Accordion */}
        <div className="mt-10">
          <div className="divide-y divide-gray-200 border-y border-gray-200 bg-white">

            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.number}>

                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left transition duration-300 hover:bg-gray-50 sm:px-6 sm:py-5"
                  >

                    {/* Number */}
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-gray-200 bg-gray-50 text-xs font-bold tracking-widest text-gray-500">
                      {item.number}
                    </span>

                    {/* Question */}
                    <span className="flex-1 text-sm font-semibold leading-6 text-gray-900 sm:text-base">
                      {item.question}
                    </span>

                    {/* Arrow */}
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center border border-gray-200 text-gray-600 transition duration-300 ${
                        isOpen
                          ? "rotate-180 border-gray-900 bg-gray-900 text-white"
                          : "bg-white"
                      }`}
                    >
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 9l6 6 6-6"
                        />
                      </svg>
                    </span>

                  </button>

                  {/* Answer */}
                  <div
                    id={`faq-answer-${index}`}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-gray-100 px-5 pb-5 pt-4 sm:px-6 sm:pl-18.25">
                        <p className="max-w-3xl text-sm leading-6 text-gray-600">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-sm font-semibold text-gray-900">
              Still have questions?
            </p>

            <p className="mt-1 text-xs text-gray-600 sm:text-sm">
              Let&apos;s discuss your requirements with our team.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex w-fit items-center rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            Contact Our Team

            <span className="ml-2">
              →
            </span>
          </a>

        </div>

=======
import React from 'react';
import Link from 'next/link';

export default function FAQAccordion() {
  return (

    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">FAQAccordion</h2>
        </div>
        <div className="space-y-6">
          {[1,2,3,4].map(item => (
            <div key={item} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                
                Item / Question {item}
              </h3>
              <p className="text-gray-500 mt-2">
                This is the expanded content for this list item. It contains necessary details and explanations.
              </p>
            </div>
          ))}
        </div>
>>>>>>> 1deaf430c248b41456774811e32802fcf6ed3a89
      </div>
    </section>
  );
}