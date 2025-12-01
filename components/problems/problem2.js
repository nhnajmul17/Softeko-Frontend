// BUG: This counter component increments correctly, but the console.log
// shows the wrong count value. Fix the bug so console shows the updated count.

'use client';

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log("Count after increment:", count);
  };

  return (
    <div className="flex flex-col items-center justify-center py-4">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <p className="mb-4 text-2xl font-bold text-gray-800">Count: {count}</p>
        <button 
          onClick={increment}
          className="px-6 py-2 font-semibold text-white transition duration-200 bg-blue-500 rounded hover:bg-blue-600"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;
