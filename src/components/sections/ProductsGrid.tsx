import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import Card from '../ui/Card';
import ImageGallery from '../ui/ImageGallery';

export default function ProductsGrid() {
  const products = [
    {
      id: 1,
      title: 'Product One',
      description:
        'A brief description of this product goes here. It provides enough detail to be useful.',
    },
    {
      id: 2,
      title: 'Product Two',
      description:
        'A brief description of this product goes here. It provides enough detail to be useful.',
    },
    {
      id: 3,
      title: 'Product Three',
      description:
        'A brief description of this product goes here. It provides enough detail to be useful.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Products
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover our products and find the right solution for your needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">

              {/* Product Image */}
              <div className="h-56">
                <ImageGallery />
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>

                <p className="text-gray-500 mb-6">
                  {product.description}
                </p>

                <Link
                  href={`/product-details`}
                  className="inline-block text-sm font-semibold text-gray-600 hover:text-gray-800 transition"
                >
                  View Product →
                </Link>
              </div>

            </Card>
          ))}
        </div>

=======

export default function ProductsGrid() {
  return (

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">ProductsGrid</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Discover everything you need to know.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden">
              
            <div className="pt-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Item Title</h3>
              <p className="text-gray-500">A brief description of this grid item goes here. It provides enough detail to be useful.</p>
            </div>
            </div>
          ))}
        </div>
>>>>>>> 1deaf430c248b41456774811e32802fcf6ed3a89
      </div>
    </section>
  );
}