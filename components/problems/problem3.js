// Task: This component has TWO issues to fix
// 
// Issue 1: JavaScript Error
// - The component crashes with: ReferenceError: item is not defined
//
// Issue 2: Responsive Layout
// - Desktop: Sidebar (25%) + Main content (75%) with 3 columns of cards
// - Tablet: Sidebar (35%) + Main content (65%) with 2 columns of cards
// - Mobile: Hide sidebar, Main content (100%) with 1 column of cards
// 
// Currently: The component crashes due to a JavaScript error, and the layout is not responsive.
// Fix both issues to make the component work and be responsive.

'use client';

import React from 'react';

function ResponsiveLayout() {
  const items = [
    { id: 1, title: 'Item 1', description: 'Description for item 1' },
    { id: 2, title: 'Item 2', description: 'Description for item 2' },
    { id: 3, title: 'Item 3', description: 'Description for item 3' },
    { id: 4, title: 'Item 4', description: 'Description for item 4' },
    { id: 5, title: 'Item 5', description: 'Description for item 5' },
    { id: 6, title: 'Item 6', description: 'Description for item 6' },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 p-6 text-white bg-gray-800 ">
        <h2 className="mb-4 text-2xl font-bold">Sidebar</h2>
        <ul className="space-y-2">
          <li className="p-2 rounded cursor-pointer hover:bg-gray-700">Dashboard</li>
          <li className="p-2 rounded cursor-pointer hover:bg-gray-700">Profile</li>
          <li className="p-2 rounded cursor-pointer hover:bg-gray-700">Settings</li>
          <li className="p-2 rounded cursor-pointer hover:bg-gray-700">Analytics</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6 bg-gray-100">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Main Content</h1>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-3 gap-4">
          {items.map(itm => (
            <div key={item.id} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-2 text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResponsiveLayout;
