<<<<<<< HEAD
"use client";

import React from "react";

interface Technology {
  name: string;
  icon: string;
}

const technologies: Technology[] = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
];

export default function Technologies() {
  const scrollingTechnologies = [...technologies, ...technologies];

  return (
    <section className="overflow-hidden border-y border-gray-200 bg-gray-50 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Technologies We Work With
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            We use modern and reliable technologies to build scalable,
            secure, and high-performing digital solutions.
          </p>
        </div>

        {/* Technology Slider */}
        <div className="relative w-full overflow-hidden">

          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent sm:w-24" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent sm:w-24" />

          {/* Moving Track */}
          <div className="technology-slider flex w-max">

            {scrollingTechnologies.map((technology, index) => (
              <div
                key={`${technology.name}-${index}`}
                className="mx-4 flex min-w-[150px] items-center justify-center gap-3 sm:mx-6 sm:min-w-[170px] lg:mx-8"
              >
                {/* Technology Logo */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white">
                  <img
                    src={technology.icon}
                    alt={`${technology.name} logo`}
                    className="h-7 w-7 object-contain grayscale opacity-70 transition duration-300 hover:grayscale-0 hover:opacity-100"
                  />
                </div>

                {/* Technology Name */}
                <span className="whitespace-nowrap text-sm font-semibold text-gray-600 sm:text-base">
                  {technology.name}
                </span>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        .technology-slider {
          animation: technologyMove 30s linear infinite;
          will-change: transform;
        }

        .technology-slider:hover {
          animation-play-state: paused;
        }

        @keyframes technologyMove {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .technology-slider {
            animation: none;
          }
        }
      `}</style>
=======
import React from 'react';
import Link from 'next/link';

export default function Technologies() {
  return (

    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide mb-6">
          Technologies
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