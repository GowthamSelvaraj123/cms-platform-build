import React from 'react';
<<<<<<< HEAD
import Card from '../ui/Card';

export default function ContactInformation() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Information
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Get in touch with us. We would be happy to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left Side - Company Details */}
          <div className="pt-4">

            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h3>

            <p className="text-gray-600 leading-7 mb-8">
              Have questions or need more information? Feel free to contact
              our team. We are always available to assist you with your
              requirements.
            </p>

            <div className="space-y-6">

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  Company Address
                </h4>

                <p className="text-gray-600 leading-6">
                  25, Anna Nagar Main Road,<br />
                  Anna Nagar, Madurai,<br />
                  Tamil Nadu - 625020, India.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  Email
                </h4>

                <p className="text-gray-600">
                  info@examplecompany.com
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">
                  Phone
                </h4>

                <p className="text-gray-600">
                  +91 98765 43210
                </p>
              </div>

            </div>
          </div>

          {/* Right Side - Contact Form */}
          <Card className="rounded-xl border border-gray-200 shadow-sm">
            <div className="p-6 sm:p-8">

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h3>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>

                <textarea
                  rows={4}
                  placeholder="Enter your message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition"
              >
                Send Message
              </button>

            </div>
          </Card>

=======
import Link from 'next/link';

export default function ContactInformation() {
  return (

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">ContactInformation</h2>
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
>>>>>>> 1deaf430c248b41456774811e32802fcf6ed3a89
        </div>
      </div>
    </section>
  );
}