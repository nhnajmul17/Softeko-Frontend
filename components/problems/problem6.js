// Task: Write a function that takes a 2D array (matrix) and returns the sum of all elements
// Expected: sumMatrix([[1,2,3], [4,5,6], [7,8,9]]) should return 45
// Currently: The function is incomplete or has bugs. Complete the implementation!

'use client';

import React, { useState } from 'react';

function MatrixSum() {
  const [matrix, setMatrix] = useState('[[1,2,3], [4,5,6], [7,8,9]]');
  const [result, setResult] = useState(null);

  // TODO: Complete this function
  const sumMatrix = (matrix) => {
    // Your code here
    return 0;
  };

  const handleCalculate = () => {
    try {
      const parsedMatrix = JSON.parse(matrix);
      const sum = sumMatrix(parsedMatrix);
      setResult(sum);
    } catch (error) {
      setResult('Error: Invalid matrix format');
    }
  };

  return (
    <div className="p-6 space-y-4">
      <div>
        <h3 className="mb-2 text-lg font-semibold text-gray-800">2D Array Sum Calculator</h3>
        <p className="mb-4 text-sm text-gray-600">
          Enter a 2D array in JSON format (e.g., [[1,2,3], [4,5,6], [7,8,9]])
        </p>
        
        <input
          type="text"
          value={matrix}
          onChange={(e) => setMatrix(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="[[1,2,3], [4,5,6]]"
        />
        
        <button
          onClick={handleCalculate}
          className="px-6 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Calculate Sum
        </button>
      </div>

      {result !== null && (
        <div className="p-4 rounded-lg bg-gray-50">
          <p className="text-lg font-semibold text-gray-800">
            Result: <span className="text-blue-600">{result}</span>
          </p>
        </div>
      )}

 
    </div>
  );
}

export default MatrixSum;
