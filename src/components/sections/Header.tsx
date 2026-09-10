import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
              CMS<span className="text-gray-500">Platform</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Home</Link>
            <Link href="/about-us" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">About Us</Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Services</Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Portfolio</Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Blog</Link>
            <Link href="/contact-us" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Contact</Link>
            <Link href="/components" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Components</Link>
          </nav>

          {/* Call to Action */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Pricing</Link>
            <Link href="/contact-us" className="bg-gray-900 text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-sm">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button type="button" className="text-gray-600 hover:text-gray-900 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
        </div>
      </div>
    </header>
  );
}
