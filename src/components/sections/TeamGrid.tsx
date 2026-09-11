import React from 'react';
<<<<<<< HEAD
import ImageGallery from '../ui/ImageGallery';

interface TeamMember {
  name: string;
  role: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Growtham',
    role: 'CEO',
  },
  {
    name: 'Ezhil',
    role: 'VP, Growth & Development',
  },
  {
    name: 'Sumathi',
    role: 'VP, Finance & Operations',
  },
  {
    name: 'Srileka',
    role: 'VP, Strategy',
  },
  {
    name: 'Jieun Segal',
    role: 'VP, Sales & Marketing',
  },
  {
    name: 'Darren Maher',
    role: 'Creative Director',
  },
  {
    name: 'Ben Van Exan',
    role: 'Sr. Account Executive',
  },
  {
    name: 'John Blown',
    role: 'Founding Partner',
  },
  {
    name: 'Chris Breikss',
    role: 'Founding Partner',
  },
];

export default function TeamGrid() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Meet the Team
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Meet the people behind our work and the expertise that helps
            us deliver meaningful solutions.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-5 lg:gap-x-8">

          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col items-center text-center"
            >

              {/* Profile Image */}
              <div
                className="h-24 w-24 overflow-hidden rounded-full
                           bg-gray-200 ring-1 ring-gray-200
                           transition-all duration-300
                           group-hover:ring-2 group-hover:ring-gray-400
                           sm:h-28 sm:w-28"
              >
                <ImageGallery />
              </div>

              {/* Member Information */}
              <div className="mt-4">
                <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
                  {member.name}
                </h3>

                <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                  {member.role}
                </p>
              </div>

            </div>
          ))}

        </div>

=======
import Link from 'next/link';

export default function TeamGrid() {
  return (

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">TeamGrid</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Discover everything you need to know.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden">
              
            <img src="https://placehold.co/400x300/eeeeee/999999?text=Thumbnail" alt="Thumbnail" className="w-full h-48 object-cover rounded-t-xl" />
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Item Title</h3>
              <p className="text-gray-500 text-sm">A brief description of this item. Click to read more.</p>
              <div className="mt-4 text-gray-900 font-medium text-sm hover:underline">Read more &rarr;</div>
            </div>
            </div>
          ))}
        </div>
>>>>>>> 1deaf430c248b41456774811e32802fcf6ed3a89
      </div>
    </section>
  );
}