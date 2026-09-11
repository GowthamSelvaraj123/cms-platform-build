<<<<<<< HEAD
"use client";

import React, { useState } from 'react';
import Button from '@/components/ui/Button';

export default function CTABanner() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* CTA Banner */}
      <section className="bg-gray-900 py-16 sm:py-20 mb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gray-800 px-6 py-12 shadow-xl sm:px-10 sm:py-14 lg:px-16">

            {/* Decorative Background */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gray-700/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gray-700/20 blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-10 lg:flex-row">

              {/* Content */}
              <div className="max-w-3xl text-center lg:text-left">

                <span className="inline-flex rounded-full border border-gray-600 bg-gray-700/50 px-4 py-1.5 text-sm font-medium text-gray-300">
                  Let&apos;s Work Together
                </span>

                <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Turn Your Ideas Into
                  <span className="block text-gray-400">
                    Powerful Digital Solutions
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg">
                  Have a project idea or business requirement? Our team is
                  ready to understand your goals and help you build reliable,
                  scalable, and modern digital solutions.
                </p>

              </div>

              {/* CTA Button */}
              <div className="shrink-0">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => setIsOpen(true)}
                >
                  Get Start Now
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Popup */}
      {isOpen && (
        <div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 px-4 py-6"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 transition hover:bg-gray-200 hover:text-gray-900"
              aria-label="Close"
            >
              ×
            </button>

            {/* Popup Header */}
            <div className="border-b border-gray-200 px-6 py-8 sm:px-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Get In Touch
              </p>

              <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
                Tell Us About Your Project
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
                Share your requirements with us and our team will get in touch
                with you to discuss your project.
              </p>
            </div>

            {/* Form */}
            <form
              className="px-6 py-8 sm:px-8"
              onSubmit={(event) => {
                event.preventDefault();

                alert(
                  'Thank you! Your enquiry has been submitted successfully.'
                );

                setIsOpen(false);
              }}
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                {/* Name */}
                <div>
                  <label
                    htmlFor="cta-name"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Full Name
                  </label>

                  <input
                    id="cta-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="cta-email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="cta-email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="cta-phone"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="cta-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="cta-company"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Company
                  </label>

                  <input
                    id="cta-company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>

              </div>

              {/* Project Details */}
              <div className="mt-5">
                <label
                  htmlFor="cta-message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Project Details
                </label>

                <textarea
                  id="cta-message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your project or requirements..."
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Actions */}
              <div className="mt-7 flex justify-end gap-3">

                <Button
                  type="button"
                  variant="outline"
                  size="md"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                >
                  Send Enquiry
                  <span className="ml-2" aria-hidden="true">
                    →
                  </span>
                </Button>

              </div>
            </form>

          </div>
        </div>
      )}
    </>
=======
import React from 'react';
import Link from 'next/link';

export default function CTABanner() {
  return (

    <section className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-gray-400">Start your free trial today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
              Get started
            </Link>
          </div>
        </div>
      </div>
    </section>
>>>>>>> 1deaf430c248b41456774811e32802fcf6ed3a89
  );
}