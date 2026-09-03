import React from 'react';
import Link from 'next/link';

export default function HeroSlider() {
  return (

    <section className="relative w-full h-[600px] bg-gray-900 overflow-hidden flex items-center justify-center">
      <img src="https://placehold.co/1920x600/111111/555555?text=Slider+Background" className="absolute inset-0 w-full h-full object-cover opacity-50" alt="Slider BG" />
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">HeroSlider</h2>
        <div className="flex justify-center space-x-2">
          <button className="w-3 h-3 rounded-full bg-white"></button>
          <button className="w-3 h-3 rounded-full bg-gray-500"></button>
          <button className="w-3 h-3 rounded-full bg-gray-500"></button>
        </div>
      </div>
      <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-40 transition"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-white hover:bg-opacity-40 transition"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
    </section>
  );
}