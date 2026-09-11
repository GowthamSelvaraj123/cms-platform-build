import React from 'react';
<<<<<<< HEAD

const clientLogos = [
  'NEXORA',
  'BUILDIX',
  'TECHNOVA',
  'PRIMECORE',
  'URBANTECH',
  'STRUCTURA',
  'WEBNEST',
  'INFRALINK',
  'CODEVERSE',
  'SKYBUILD',
];

export default function ClientLogos() {
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide mb-8">
          Our Trusted Clients
        </p>

        {/* Moving Logos */}
        <div className="overflow-hidden w-full">
          <div className="logo-track flex items-center gap-16 w-max">

            {/* First set */}
            {clientLogos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center gap-3 flex-shrink-0"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                  <span className="text-white font-bold">
                    {logo.charAt(0)}
                  </span>
                </div>

                <span className="text-xl md:text-2xl font-extrabold text-gray-500 tracking-wide whitespace-nowrap">
                  {logo}
                </span>
              </div>
            ))}

            {/* Duplicate set */}
            {clientLogos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center gap-3 flex-shrink-0"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                  <span className="text-white font-bold">
                    {logo.charAt(0)}
                  </span>
                </div>

                <span className="text-xl md:text-2xl font-extrabold text-gray-500 tracking-wide whitespace-nowrap">
                  {logo}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* Normal CSS - NOT styled-jsx */}
      <style>
        {`
          @keyframes logoFlow {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          .logo-track {
            animation: logoFlow 25s linear infinite;
          }

          .logo-track:hover {
            animation-play-state: paused;
          }
        `}
      </style>

=======
import Link from 'next/link';

export default function ClientLogos() {
  return (

    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide mb-6">
          ClientLogos
        </p>
        <div className="flex justify-center flex-wrap gap-8 md:gap-16">
          {[1,2,3,4,5].map(i => (
             <div key={i} className="text-xl font-black text-gray-400 uppercase tracking-widest">LOGO {i}</div>
          ))}
        </div>
      </div>
>>>>>>> 1deaf430c248b41456774811e32802fcf6ed3a89
    </section>
  );
}