<<<<<<< HEAD
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Card from '../ui/Card';

interface Stat {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

const stats: Stat[] = [
  {
    label: 'Founded',
    value: 2026,
    suffix: '',
    description: 'Building our journey with purpose',
  },
  {
    label: 'Employees',
    value: 100,
    suffix: '+',
    description: 'Talented professionals',
  },
  {
    label: 'Customers',
    value: 10,
    suffix: 'K+',
    description: 'Customers worldwide',
  },
  {
    label: 'Revenue',
    value: 5,
    suffix: 'M+',
    description: 'And growing every year',
  },
];

interface CounterProps {
  value: number;
  suffix: string;
  startCounting: boolean;
}

function Counter({
  value,
  suffix,
  startCounting,
}: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const duration = 1800;

    const animate = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth ease-out animation
      const easedProgress =
        1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [startCounting, value]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

export default function StatisticsCounters() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gray-100 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700">
            Our Achievements
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Numbers That Tell Our Story
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Our growth is built on the people we work with,
            the solutions we create, and the results we deliver.
          </p>

        </div>

        {/* Statistics Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="group rounded-2xl border border-gray-200
                         bg-white p-7 text-center shadow-sm
                         transition-all duration-300
                         hover:-translate-y-1
                         hover:border-gray-400
                         hover:shadow-lg
                         sm:p-8"
            >

              {/* Number */}
              <div
                className="text-4xl font-bold tracking-tight
                           text-gray-900 sm:text-5xl"
              >
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  startCounting={isVisible}
                />
              </div>

              {/* Label */}
              <h3
                className="mt-4 text-sm font-bold uppercase
                           tracking-widest text-gray-700"
              >
                {stat.label}
              </h3>

              {/* Description */}
              <p
                className="mt-3 text-sm leading-6 text-gray-500"
              >
                {stat.description}
              </p>

              {/* Bottom Indicator */}
              <div
                className="mx-auto mt-6 h-1 w-8 rounded-full
                           bg-gray-300
                           transition-all duration-300
                           group-hover:w-16
                           group-hover:bg-gray-700"
              />

            </Card>
          ))}

        </div>

=======
import React from 'react';
import Link from 'next/link';

export default function StatisticsCounters() {
  return (

    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          {[
            { label: 'Founded', value: '2026' },
            { label: 'Employees', value: '100+' },
            { label: 'Customers', value: '10k+' },
            { label: 'Revenue', value: '$5M' }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-extrabold text-white">{stat.value}</div>
              <div className="mt-2 text-sm font-medium text-gray-400 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
>>>>>>> 1deaf430c248b41456774811e32802fcf6ed3a89
      </div>
    </section>
  );
}