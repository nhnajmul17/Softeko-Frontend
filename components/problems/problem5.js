// Task: This page has multiple CSS positioning challenges including sticky navigation, absolute/relative positioning, and fixed elements
// Expected:
// - Navigation bar should stick to top when scrolling with glassmorphism effect (backdrop-blur + transparency)
// - Nav links (desktop + mobile) should have hover effects (background + text color change)
// - Notification badge should be positioned at top-right corner of bell icon (absolute positioning)
// - Discount badges should be at top-right corner of each product card
// - Tooltip should appear centered above "Book Now" button on hover with a down-pointing arrow
// - Floating Action Button (FAB) should be fixed at bottom-right corner of viewport and remain visible during scroll
// - All transitions should be smooth
// Currently: Multiple positioning and styling issues exist. Fix them all using position: sticky, absolute, relative, and fixed.

'use client';

import React, { useState } from 'react';

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [notifications] = useState(5);
  const [showTooltip, setShowTooltip] = useState({});

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const products = [
    { 
      id: 1, 
      name: 'Mountain View', 
      description: 'Beautiful landscape',
      price: '$299',
      image: '🏔️',
      discount: '20% OFF'
    },
    { 
      id: 2, 
      name: 'Beach Paradise', 
      description: 'Tropical getaway',
      price: '$449',
      image: '🏖️',
      discount: '15% OFF'
    },
    { 
      id: 3, 
      name: 'City Lights', 
      description: 'Urban adventure',
      price: '$199',
      image: '🌃',
      discount: '30% OFF'
    },
  ];

  return (
    <>
      {/* Navigation Bar */}
      <nav className="top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-blue-600">TravelHub</h1>
              
              {/* Notification Bell - Badge should be at top-right corner */}
              <div className="p-3 text-gray-600 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {/* Notification Badge - BROKEN: Should be positioned at top-right of bell icon */}
                <span className="px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
                  {notifications}
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden space-x-8 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-white border-t md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Product Cards Section */}
      <div className="min-h-screen p-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Featured Destinations</h2>
          
          <div className="grid grid-cols-1 gap-6 mb-20 md:grid-cols-3">
            {products.map(product => (
              <div 
                key={product.id} 
                className="overflow-hidden bg-white rounded-lg shadow-md"
              >
                {/* Discount Badge - BROKEN: Should be at top-right corner of card */}
                <span className="px-3 py-1 text-xs font-bold text-white bg-green-500 rounded-bl-lg">
                  {product.discount}
                </span>

                {/* Image Container */}
                <div className="flex items-center justify-center h-48 overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
                  <div className="text-6xl">{product.image}</div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-800">{product.name}</h3>
                  <p className="mb-4 text-gray-600">{product.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    
                    {/* Button with Tooltip */}
                    <div
                      onMouseEnter={() => setShowTooltip(prev => ({ ...prev, [product.id]: true }))}
                      onMouseLeave={() => setShowTooltip(prev => ({ ...prev, [product.id]: false }))}
                    >
                      <button className="px-4 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
                        Book Now
                      </button>
                      
                      {/* Tooltip - BROKEN: Should appear above button on hover */}
                      {showTooltip[product.id] && (
                        <div className="px-3 py-2 text-xs text-white bg-gray-800 rounded-lg shadow-lg">
                          Click to book this destination
                          {/* Arrow - BROKEN: Should point down to button */}
                          <div className="w-2 h-2 transform rotate-45 bg-gray-800"></div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Action Button (FAB) - BROKEN: Should be fixed at bottom-right of viewport */}
      <button className="flex items-center justify-center text-white bg-purple-600 rounded-full shadow-lg w-14 h-14 hover:bg-purple-700">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>

      {/* More Content for Scrolling */}
      <div className="h-screen p-8 bg-gradient-to-br from-pink-100 to-yellow-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">Keep Scrolling</h2>
          <p className="text-lg text-gray-600">
            The floating action button (+ icon) should remain fixed at the bottom-right corner even when you scroll.
          </p>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;

