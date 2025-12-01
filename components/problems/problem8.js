// Task: Write a function that finds the largest number in an array
// Expected: findLargest([3, 7, 2, 9, 1]) should return 9
// Currently: The function is incomplete or has bugs. Complete the implementation!

'use client';

import React, { useState } from 'react';

function FindLargest() {
  const [numbers, setNumbers] = useState('3, 7, 2, 9, 1');
  const [result, setResult] = useState(null);

  // TODO: Complete this function
  const findLargest = (arr) => {
    // Your code here
    return 0;
  };

  const handleFind = () => {
    try {
      const numArray = numbers.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
      if (numArray.length === 0) {
        setResult('Error: Please enter valid numbers');
        return;
      }
      const largest = findLargest(numArray);
      setResult(largest);
    } catch (error) {
      setResult('Error: Invalid input');
    }
  };

  return (
    <div className="p-6 space-y-4">
      <div>
        <h3 className="mb-2 text-lg font-semibold text-gray-800">Find Largest Number</h3>
        <p className="mb-4 text-sm text-gray-600">
          Enter comma-separated numbers to find the largest one
        </p>
        
        <input
          type="text"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="3, 7, 2, 9, 1"
        />
        
        <button
          onClick={handleFind}
          className="px-6 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Find Largest
        </button>
      </div>

      {result !== null && (
        <div className="p-4 rounded-lg bg-gray-50">
          <p className="text-lg font-semibold text-gray-800">
            Largest Number: <span className="text-blue-600">{result}</span>
          </p>
        </div>
      )}

   
    </div>
  );
}

export default FindLargest;
