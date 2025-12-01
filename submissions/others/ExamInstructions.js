'use client';

import React from 'react';

function ExamInstructions() {
  return (
    <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex items-center mb-6">
        <svg className="w-8 h-8 mr-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-2xl font-bold text-gray-800">📋 Exam Instructions</h2>
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Overview */}
        <div className="p-4 border-l-4 border-blue-500 rounded bg-blue-50">
          <h3 className="mb-2 text-lg font-bold text-blue-800">📚 Exam Overview</h3>
          <p className="text-sm text-gray-700">
            This exam has <strong>two sections</strong>: Section A (7 Theoretical Questions) and Section B (5 Practical Problems). 
            Your answers are <strong>auto-saved</strong> as you type.
          </p>
        </div>

        {/* Student Information */}
        <div className="p-4 border-l-4 border-blue-500 rounded bg-blue-50">
          <h3 className="mb-2 text-lg font-bold text-blue-800">1️⃣ Examinee Information</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Fill in your name, email, and phone number at the top of the page</li>
            <li>• This information will be saved locally and cannot be changed after submission</li>
            <li>• Make sure all details are correct before submitting</li>
          </ul>
        </div>

        {/* Section A */}
        <div className="p-4 border-l-4 border-green-500 rounded bg-green-50">
          <h3 className="mb-2 text-lg font-bold text-green-800">2️⃣ Section A: Theoretical Questions</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Answer all 7 questions in the provided text areas</li>
            <li>• Your answers are <strong>auto-saved</strong> after 1 second of no typing</li>
            <li>• You can see the save status (✓ Saved) after each save</li>
            <li>• Write clear and concise answers demonstrating your understanding</li>
          </ul>
        </div>

        {/* Section B */}
        <div className="p-4 border-l-4 border-purple-500 rounded bg-purple-50">
          <h3 className="mb-2 text-lg font-bold text-purple-800">3️⃣ Section B: Practical Problems</h3>
          <p className="mb-2 text-sm font-semibold text-gray-800">
            ⚠️ Important: You need to edit files in your code editor to solve these problems!
          </p>
            
          
          <div className="mb-3">
            <p className="mb-1 text-sm font-bold text-gray-800">📂 File Locations:</p>
            <div className="p-3 font-mono text-xs border border-indigo-200 rounded bg-gradient-to-r from-indigo-50 to-purple-50">
              <div className="space-y-1">
                <p className="text-gray-700">Problem 1: <span className="font-semibold text-blue-600">components/problems/problem1.js</span></p>
                <p className="text-gray-700">Problem 2: <span className="font-semibold text-blue-600">components/problems/problem2.js</span></p>
                <p className="text-gray-700">Problem 3: <span className="font-semibold text-blue-600">components/problems/problem3.js</span></p>
                <p className="text-gray-700">Problem 4: <span className="font-semibold text-blue-600">components/problems/problem4.js</span></p>
                <p className="text-gray-700">Problem 5: <span className="font-semibold text-blue-600">components/problems/problem5.js</span></p>
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-700">
            <p className="mb-1 font-semibold">🔧 How to Solve:</p>
            <ol className="ml-4 space-y-1 list-decimal">
              <li>Read the problem description below</li>
              <li>Open the file in your code editor</li>
              <li>Fix the bugs in the code</li>
              <li>Save and verify the output on this page</li>
            </ol>
          </div>
        </div>

        {/* Tips */}
        <div className="p-3 bg-yellow-100 border border-yellow-300 rounded">
          <p className="text-sm font-semibold text-yellow-800">💡 Pro Tips:</p>
          <ul className="mt-1 ml-4 space-y-1 text-sm text-yellow-900 list-disc list-inside">
            <li>Read ALL comments in the problem files</li>
            <li>Use browser DevTools (F12) to debug JavaScript issues</li>
            <li>Test responsive layouts by resizing your browser window</li>
            <li>For Problem 2, open the browser console to see the bug</li>
            <li>For Problem 5, scroll within the preview box to test sticky and fixed positioning</li>
          </ul>
        </div>

        {/* Submission */}
        <div className="p-4 border-l-4 border-red-500 rounded bg-red-50">
          <h3 className="mb-2 text-lg font-bold text-red-800">4️⃣ Submission</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Your theoretical answers will be automatically saved</li>
            <li>• Your code solutions are in the <code className="px-1 py-0.5 bg-gray-200 rounded text-xs">components/problems/</code> file</li>
            <li>• Make sure to save all files before submitting your exam files</li>
          </ul>
        </div>

        {/* Time Management */}
        <div className="p-4 bg-gray-100 rounded">
          <h3 className="mb-2 text-lg font-bold text-gray-800">⏰ Time Management Tips</h3>
          <ul className="ml-4 space-y-1 text-sm text-gray-700 list-disc list-inside">
            <li>Start with Section A (quicker to complete)</li>
            <li>Allocate time wisely between theoretical and practical sections</li>
            <li>If stuck on a problem, move to the next and come back later</li>
            <li>Test your solutions before moving to the next problem</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExamInstructions;
