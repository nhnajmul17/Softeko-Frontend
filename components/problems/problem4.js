// Task: This card component should display hover effects with smooth transitions
// Expected:
// - Card should lift up (transform translateY) on hover
// - Shadow should increase (from shadow-md to shadow-xl) on hover
// - Image emoji should zoom slightly (scale) on hover
// - Button should change color on hover
// - All transitions should be smooth
// Currently: The hover effects are missing. Fix the CSS/Tailwind classes.

'use client';

import React from 'react';

function CardHoverEffect() {
  const products = [
    { 
      id: 1, 
      name: 'Wireless Headphones', 
      price: '$99.99', 
      image: '🎧',
      rating: 4.5 
    },
    { 
      id: 2, 
      name: 'Smart Watch', 
      price: '$199.99', 
      image: '⌚',
      rating: 4.8 
    },
    { 
      id: 3, 
      name: 'Laptop Stand', 
      price: '$49.99', 
      image: '💻',
      rating: 4.2 
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-3">
      {products.map(product => (
        <div 
          key={product.id} 
          className="overflow-hidden bg-white rounded-lg shadow-md"
        >
          {/* Image Container */}
          <div className="flex items-center justify-center h-48 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
            <div className="text-6xl">
              {product.image}
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6">
            <h3 className="mb-2 text-xl font-bold text-gray-800">
              {product.name}
            </h3>
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl font-bold text-blue-600">{product.price}</span>
              <div className="flex items-center">
                <span className="text-yellow-500">⭐</span>
                <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
              </div>
            </div>
            <button className="w-full px-4 py-2 text-white bg-blue-600 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardHoverEffect;

