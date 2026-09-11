<<<<<<< HEAD
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Components", href: "/components" },
    { name: "Products", href: "/products" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex h-20 items-center justify-between">

          {/* ================= LOGO ================= */}

          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <Logo />

            <div className="leading-tight">
              <h1 className="text-lg font-bold tracking-tight text-gray-900">
                CMS Platform
              </h1>
            </div>
          </Link>


          {/* ================= DESKTOP NAVIGATION ================= */}

          <nav
            className="hidden items-center gap-1 rounded-full
                       border border-gray-200 bg-gray-50 p-1.5
                       lg:flex"
          >

            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-5 py-2.5
                    text-sm transition-all
                    ${
                      isActive
                        ? "bg-white font-semibold text-gray-900"
                        : "font-medium text-gray-600 hover:bg-white hover:text-gray-900"
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}

          </nav>


          {/* ================= RIGHT SIDE ================= */}

          <div className="hidden items-center gap-4 lg:flex">

            <Link
              href="/pricing"
              className={`px-2 py-2 text-sm transition-colors
                ${
                  pathname === "/pricing"
                    ? "font-semibold text-gray-900"
                    : "font-medium text-gray-600 hover:text-gray-900"
                }`}
            >
              Pricing
            </Link>

            <Link
              href="/login"
              className={`px-2 py-2 text-sm transition-colors
                ${
                  pathname === "/login"
                    ? "font-semibold text-gray-900"
                    : "font-semibold text-gray-800 hover:text-gray-500"
                }`}
            >
              Login
            </Link>

            <Link href="/contact-us">
              <Button
                variant="primary"
                size="md"
              >
                Get Started
              </Button>
            </Link>

          </div>


          {/* ================= MOBILE MENU ================= */}

          <button
            type="button"
            className="p-2.5 text-gray-700
                       transition-colors
                       hover:text-gray-900
                       lg:hidden"
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

        </div>

      </div>
    </header>
  );
}
=======
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
>>>>>>> 1deaf430c248b41456774811e32802fcf6ed3a89
