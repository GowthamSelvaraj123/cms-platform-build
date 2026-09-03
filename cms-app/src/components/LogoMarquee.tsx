import React from 'react';
import Link from 'next/link';

export default function LogoMarquee() {
  return (

    <div className="w-full overflow-hidden bg-white py-10 border-y border-gray-100 whitespace-nowrap flex items-center">
      <div className="animate-marquee flex space-x-16 items-center">
        {[1,2,3,4,5,6,7,8].map(i => (
          <span key={i} className="text-2xl font-black text-gray-300 uppercase tracking-widest inline-block">BRAND LOGO {i}</span>
        ))}
      </div>
    </div>
  );
}