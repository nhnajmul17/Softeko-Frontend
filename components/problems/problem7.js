// Task: Write a function that reverses a string without using the built-in reverse() method
// Expected: reverseString('hello') should return 'olleh'
// Currently: The function is incomplete or has bugs. Complete the implementation!

'use client';

import React, { useState } from 'react';

function StringReverse() {
  const [inputString, setInputString] = useState('hello');
  const [result, setResult] = useState(null);

  // TODO: Complete this function without using .reverse()
  const reverseString = (str) => {
    // Your code here
    return '';
  };

  const handleReverse = () => {
    const reversed = reverseString(inputString);
    setResult(reversed);
  };

  return (
    <div className="p-6 space-y-4">
      <div>
        <h3 className="mb-2 text-lg font-semibold text-gray-800">String Reverser</h3>
        <p className="mb-4 text-sm text-gray-600">
          Enter a string to reverse it (without using the built-in reverse method)
        </p>
        
        <input
          type="text"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter text to reverse"
        />
        
        <button
          onClick={handleReverse}
          className="px-6 py-2 text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Reverse String
        </button>
      </div>

      {result !== null && (
        <div className="p-4 rounded-lg bg-gray-50">
          <p className="mb-2 text-sm font-semibold text-gray-600">Original:</p>
          <p className="mb-4 text-lg text-gray-800">{inputString}</p>
          <p className="mb-2 text-sm font-semibold text-gray-600">Reversed:</p>
          <p className="text-lg font-semibold text-blue-600">{result}</p>
        </div>
      )}
    </div>
  );
}

export default StringReverse;
