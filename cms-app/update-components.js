const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

const componentTypes = {
  HeroSection: 'hero',
  PageHeader: 'hero-small',
  RichText: 'text',
  AboutIntro: 'split',
  ServicesGrid: 'grid',
  ServiceFeature: 'split-reverse',
  ProductsGrid: 'grid',
  PortfolioGrid: 'grid-image',
  CaseStudyGrid: 'grid-image',
  BlogGrid: 'grid-blog',
  NewsGrid: 'grid-blog',
  EventsGrid: 'grid',
  TeamGrid: 'grid-team',
  TeamProfile: 'split',
  Testimonials: 'grid-testimonial',
  ClientLogos: 'logos',
  PartnersLogos: 'logos',
  StatisticsCounters: 'stats',
  FeaturesGrid: 'grid-icon',
  Benefits: 'grid-icon',
  Process: 'list-numbered',
  Timeline: 'list-numbered',
  Industries: 'grid',
  Technologies: 'logos',
  PricingTable: 'pricing',
  ComparisonTable: 'pricing',
  FAQAccordion: 'faq',
  ImageGallery: 'gallery',
  VideoSection: 'video',
  CTABanner: 'banner',
  Newsletter: 'banner-form',
  ContactInformation: 'grid-contact',
  ContactForm: 'form',
  Map: 'video', 
  DownloadList: 'list',
  RelatedContent: 'grid-blog',
  SocialLinks: 'logos',
  CustomHTML: 'text',
  FormBuilder: 'form',
  FooterCTA: 'banner'
};

function generateCode(name, type) {
  const genericImports = `import React from 'react';\nimport Link from 'next/link';\n`;
  let body = '';

  if (type === 'hero') {
    body = `
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-20 px-4 sm:px-6 lg:px-8">
          <main className="mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Premium solutions to</span>{' '}
                <span className="block text-gray-600 xl:inline">enrich your business</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                This is the ${name} component. Replace this text with a compelling value proposition that encourages users to take action.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 md:py-4 md:text-lg transition">
                    Get started
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="#" className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg transition">
                    Live demo
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-100">
        <img src="https://placehold.co/800x600/eeeeee/999999?text=Hero+Image" alt="Hero Placeholder" className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" />
      </div>
    </section>`;
  } else if (type === 'hero-small') {
    body = `
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
          ${name.replace(/([A-Z])/g, ' $1').trim()}
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
          Explore our ${name} and find out more information.
        </p>
      </div>
    </section>`;
  } else if (type === 'text') {
    body = `
    <section className="py-16 bg-white overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg text-gray-500 mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-8">${name}</h2>
          <p>
            Welcome to the ${name} section. This area is designed for long-form reading, such as rich text, legal documents, or detailed introductions. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mt-4">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </section>`;
  } else if (type === 'split' || type === 'split-reverse') {
    const reverseClass = type === 'split-reverse' ? 'lg:flex-row-reverse' : '';
    body = `
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between ${reverseClass} gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              ${name}
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              This is a split layout section, perfect for introductions, feature highlights, or team profiles. You can add an image alongside text.
            </p>
            <div className="mt-6">
              <Link href="#" className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800">
                Learn More
              </Link>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <img src="https://placehold.co/600x400/eeeeee/999999?text=Media" alt="Media" className="w-full h-80 object-cover rounded-xl shadow-md" />
          </div>
        </div>
      </div>
    </section>`;
  } else if (type.startsWith('grid')) {
    let cardContent = `
            <div className="pt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Item Title</h3>
              <p className="text-gray-500">A brief description of this grid item goes here. It provides enough detail to be useful.</p>
            </div>`;
    
    if (type === 'grid-image' || type === 'grid-blog' || type === 'grid-team') {
      cardContent = `
            <img src="https://placehold.co/400x300/eeeeee/999999?text=Thumbnail" alt="Thumbnail" className="w-full h-48 object-cover rounded-t-xl" />
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Item Title</h3>
              <p className="text-gray-500 text-sm">A brief description of this item. Click to read more.</p>
              <div className="mt-4 text-gray-900 font-medium text-sm hover:underline">Read more &rarr;</div>
            </div>`;
    } else if (type === 'grid-icon') {
      cardContent = `
            <div className="p-8 flex flex-col items-center text-center">
              <div className="h-12 w-12 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Feature Name</h3>
              <p className="text-gray-500 text-sm">Short description of the feature or benefit that makes it great.</p>
            </div>`;
    } else if (type === 'grid-testimonial') {
      cardContent = `
            <div className="p-8">
              <p className="text-gray-600 italic">"This is an amazing service! We have seen a 200% increase in productivity since we started using this platform."</p>
              <div className="mt-6 flex items-center">
                <img src="https://placehold.co/100x100/eeeeee/999999?text=Avatar" alt="Avatar" className="h-10 w-10 rounded-full" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Jane Doe</p>
                  <p className="text-sm text-gray-500">CEO, Company</p>
                </div>
              </div>
            </div>`;
    }

    body = `
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">${name}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Discover everything you need to know.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden">
              ${cardContent}
            </div>
          ))}
        </div>
      </div>
    </section>`;
  } else if (type === 'logos') {
    body = `
    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide mb-6">
          ${name}
        </p>
        <div className="flex justify-center flex-wrap gap-8 md:gap-16">
          {[1,2,3,4,5].map(i => (
             <div key={i} className="text-xl font-black text-gray-400 uppercase tracking-widest">LOGO {i}</div>
          ))}
        </div>
      </div>
    </section>`;
  } else if (type === 'stats') {
    body = `
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
      </div>
    </section>`;
  } else if (type === 'pricing') {
    body = `
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">${name}</h2>
          <p className="mt-4 text-xl text-gray-500">Simple, transparent pricing.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {['Basic', 'Pro', 'Enterprise'].map((tier, i) => (
            <div key={i} className={\`rounded-2xl border \${i === 1 ? 'border-gray-900 shadow-xl relative' : 'border-gray-200 shadow-sm'} p-8 bg-white flex flex-col\`}>
              {i === 1 && <span className="absolute top-0 right-0 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase">Popular</span>}
              <h3 className="text-2xl font-semibold text-gray-900">{tier}</h3>
              <p className="mt-4 text-5xl font-extrabold text-gray-900">$\{(i+1)*29}<span className="text-xl font-medium text-gray-500">/mo</span></p>
              <ul className="mt-8 space-y-4 flex-1">
                {[1,2,3,4].map(feat => (
                  <li key={feat} className="flex items-center text-gray-600">
                    <svg className="h-5 w-5 text-gray-900 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Feature {feat}
                  </li>
                ))}
              </ul>
              <button className={\`mt-8 w-full py-3 px-4 rounded-md font-medium transition \${i === 1 ? 'bg-gray-900 text-white hover:bg-gray-800' : 'bg-gray-50 text-gray-900 hover:bg-gray-100 border border-gray-200'}\`}>
                Choose {tier}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>`;
  } else if (type === 'faq' || type === 'list' || type === 'list-numbered') {
    body = `
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">${name}</h2>
        </div>
        <div className="space-y-6">
          {[1,2,3,4].map(item => (
            <div key={item} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                ${type === 'list-numbered' ? '<span className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-200 text-gray-900 flex items-center justify-center font-bold mr-3">{item}</span>' : ''}
                Item / Question {item}
              </h3>
              <p className={\`text-gray-500 \${type === 'list-numbered' ? 'ml-11 mt-2' : 'mt-2'}\`}>
                This is the expanded content for this list item. It contains necessary details and explanations.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>`;
  } else if (type === 'banner') {
    body = `
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
    </section>`;
  } else if (type === 'banner-form' || type === 'form') {
    body = `
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">${name}</h2>
            <p className="mt-2 text-sm text-gray-500">Fill out the form below and we will get back to you.</p>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <div className="mt-1">
                <input type="text" id="name" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" placeholder="Jane Doe" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <div className="mt-1">
                <input type="email" id="email" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>`;
  } else if (type === 'video' || type === 'gallery') {
    body = `
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">${name}</h2>
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl overflow-hidden shadow-lg flex items-center justify-center relative min-h-[400px]">
          <img src="https://placehold.co/1200x600/eeeeee/999999?text=Media+Placeholder" alt="Media Placeholder" className="w-full h-full object-cover absolute inset-0" />
          ${type === 'video' ? '<div className="absolute inset-0 flex items-center justify-center"><div className="w-16 h-16 bg-white bg-opacity-75 rounded-full flex items-center justify-center shadow-sm hover:scale-105 transition cursor-pointer"><svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg></div></div>' : ''}
        </div>
      </div>
    </section>`;
  }

  return genericImports + '\nexport default function ' + name + '() {\n  return (\n' + body + '\n  );\n}';
}

Object.entries(componentTypes).forEach(([comp, type]) => {
  const fileContent = generateCode(comp, type);
  fs.writeFileSync(path.join(componentsDir, comp + '.tsx'), fileContent, 'utf-8');
});

console.log('All 40 components updated with grayscale layout and placeholder images!');
