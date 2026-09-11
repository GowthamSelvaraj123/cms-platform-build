import React from 'react';
<<<<<<< HEAD
import { Calendar, CheckCircle2 } from 'lucide-react';
import Card from '../ui/Card';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timelineItems: TimelineItem[] = [
  {
    year: '2026',
    title: 'Company Founded',
    description:
      'We began our journey with a clear goal of creating reliable and meaningful technology solutions for businesses.',
  },
  {
    year: '2026',
    title: 'First Projects',
    description:
      'We started working with our first customers and transformed their ideas and requirements into practical digital solutions.',
  },
  {
    year: '2027',
    title: 'Team Growth',
    description:
      'As our projects and customer base grew, we expanded our team with talented professionals across different areas of technology.',
  },
  {
    year: '2028',
    title: 'Expanding Our Services',
    description:
      'We expanded our capabilities and introduced new services to support businesses with a wider range of technology needs.',
  },
];

export default function Timeline() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
            Our Journey
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Growing With Purpose
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Every milestone represents another step in our journey,
            shaped by our team, customers, and commitment to quality.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">

          {/* Center Line */}
          <div
            className="absolute left-5 top-0 h-full w-px bg-gray-200
                       md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={`${item.year}-${item.title}`}
                  className="relative grid grid-cols-1 md:grid-cols-2"
                >

                  {/* Timeline Card */}
                  <div
                    className={`pl-14 md:pr-12 md:pl-0 ${
                      isLeft
                        ? 'md:col-start-1 md:text-right'
                        : 'md:col-start-2 md:row-start-1 md:pl-12 md:text-left'
                    }`}
                  >
                    <Card
                      className="group rounded-2xl border border-gray-200
                                 bg-white p-6 shadow-sm
                                 transition-all duration-300
                                 hover:-translate-y-1
                                 hover:border-gray-400
                                 hover:shadow-lg"
                    >
                      {/* Year */}
                      <div
                        className={`mb-3 flex items-center gap-2 text-sm
                                   font-bold uppercase tracking-widest
                                   text-gray-500
                                   ${
                                     isLeft
                                       ? 'md:justify-end'
                                       : 'md:justify-start'
                                   }`}
                      >
                        <Calendar className="h-4 w-4" />
                        {item.year}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                        {item.description}
                      </p>

                      {/* Bottom Indicator */}
                      <div
                        className={`mt-5 h-1 w-8 rounded-full bg-gray-300
                                   transition-all duration-300
                                   group-hover:w-16 group-hover:bg-gray-700
                                   ${
                                     isLeft
                                       ? 'md:ml-auto'
                                       : 'md:mr-auto'
                                   }`}
                      />
                    </Card>
                  </div>

                  {/* Timeline Point */}
                  <div
                    className="absolute left-5 top-7 flex h-3 w-3
                               -translate-x-1/2 items-center justify-center
                               rounded-full bg-gray-900 ring-8 ring-white
                               md:left-1/2"
                  >
                    <CheckCircle2 className="absolute h-5 w-5 text-gray-900" />
                  </div>

                </div>
              );
            })}
          </div>

        </div>

=======
import Link from 'next/link';

export default function Timeline() {
  return (

    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">Timeline</h2>
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
>>>>>>> 1deaf430c248b41456774811e32802fcf6ed3a89
      </div>
    </section>
  );
}