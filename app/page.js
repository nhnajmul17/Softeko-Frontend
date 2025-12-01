'use client';

import './globals.css';
import ItemList from '@/components/problems/problem1';
import Counter from '@/components/problems/problem2';
import ResponsiveLayout from '@/components/problems/problem3';
import CardHoverEffect from '@/components/problems/problem4';
import NavigationBar from '@/components/problems/problem5';
import StudentInfoForm from '@/submissions/others/ExamineeInfoForm';
import ExamQuestions from '@/submissions/others/ExamQuestions';
import ExamInstructions from '@/submissions/others/ExamInstructions';
import ErrorBoundary from '@/submissions/others/ErrorBoundary';

export default function Home() {
  // Test data for the ItemList component
  const testItems = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' }
  ];

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl px-4 mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center text-gray-800">Frontend Technical Exam</h1>

        {/* Exam Instructions */}
        <ExamInstructions />
        
        {/* Student Information Form */}
        <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Examinee Information</h2>
          <p className="mb-4 text-gray-600">
            Please fill in your information before starting the exam. 
          </p>
          <StudentInfoForm />
        </div>

        {/* Theoretical Questions */}
        <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Section A: Theoretical Questions</h2>
          <p className="mb-6 text-gray-600">
            Answer the following questions.
          </p>
          <ExamQuestions />
        </div>

        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Section B: Practical Problems</h2>
          <p className="mt-2 text-gray-600">Debug and fix the following code issues</p>
        </div>
        
        <div className="p-6 mb-8 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Problem 1: List Rendering</h2>
          <p className="mb-4 text-gray-600">
            The ItemList component below should display a list of fruits, 
            but something is wrong. Debug and fix the issue!
          </p>
          
          <div className="p-4 mb-4 rounded-lg bg-gray-50">
            <h3 className="mb-3 text-xl font-semibold text-gray-700">Fruit List:</h3>
            <ErrorBoundary problemName="Problem 1" filePath="components/problems/problem1.js">
              <ItemList items={testItems} />
            </ErrorBoundary>
          </div>


        </div>

        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Problem 2: Console Log Bug</h2>
          <p className="mb-4 text-gray-600">
            The Counter component increments correctly, but the console.log shows 
            the wrong count value. Open the browser console and debug the issue!
          </p>
          
          <div className="p-4 mb-4 rounded-lg bg-gray-50">
            <div className="flex justify-center">
              <ErrorBoundary problemName="Problem 2" filePath="components/problems/problem2.js">
                <Counter />
              </ErrorBoundary>
            </div>
          </div>

          <div className="p-4 border-l-4 border-yellow-400 bg-yellow-50">
            <strong className="text-yellow-800">Hint:</strong>
            <span className="ml-2 text-yellow-700">Check the browser console and understand React state updates</span>
          </div>
        </div>

        <div className="p-6 mt-8 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Problem 3: JavaScript Error & Responsive Layout</h2>
          <p className="mb-4 text-gray-600">
            This component has TWO issues to fix: First, there's a JavaScript error that crashes the component. 
            Second, the layout needs to be responsive. Fix both issues!
          </p>

          {/* Requirements */}
          <div className="p-4 mb-4 border-l-4 border-blue-500 rounded bg-blue-50">
            <div className="flex items-start">
              <span className="mr-2 font-semibold text-blue-600">📋 Requirements:</span>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Fix the JavaScript error (check console for: "item is not defined")</li>
                <li>• <strong>Desktop:</strong> Sidebar (25%) + Main content (75%) with 3 columns of cards</li>
                <li>• <strong>Tablet:</strong> Sidebar (35%) + Main content (65%) with 2 columns of cards</li>
                <li>• <strong>Mobile:</strong> Hide sidebar, Main content (100%) with 1 column of cards</li>
              </ul>
            </div>
          </div>
          
          <div className="p-4 mb-4 overflow-hidden border-2 border-gray-300 rounded-lg">
            <ErrorBoundary problemName="Problem 3" filePath="components/problems/problem3.js">
              <ResponsiveLayout />
            </ErrorBoundary>
          </div>
        </div>

        <div className="p-6 mt-8 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Problem 4: Card Hover Effects</h2>
          <p className="mb-4 text-gray-600">
            The product cards below should have smooth hover effects (lift up, shadow increase, image zoom).
            Currently the hover effects are missing. Fix the Tailwind classes!
          </p>

          {/* Requirements */}
          <div className="p-4 mb-4 border-l-4 border-blue-500 rounded bg-blue-50">
            <div className="flex items-start">
              <span className="mr-2 font-semibold text-blue-600">📋 Requirements:</span>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Card should lift up (transform translateY) on hover</li>
                <li>• Shadow should increase on hover</li>
                <li>• Image should zoom slightly on hover</li>
                <li>• Button should change color on hover</li>
                <li>• All transitions should be smooth</li>
              </ul>
            </div>
          </div>
          
          <div className="p-4 mb-4 border-2 border-gray-300 rounded-lg bg-gray-50">
            <ErrorBoundary problemName="Problem 4" filePath="components/problems/problem4.js">
              <CardHoverEffect />
            </ErrorBoundary>
          </div>
        </div>

        <div className="p-6 mt-8 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Problem 5: CSS Positioning & Sticky Navigation Challenge</h2>
          <p className="mb-4 text-gray-600">
            This page combines multiple CSS positioning challenges: sticky navigation with glassmorphism, 
            positioning for badges and tooltips, and positioning for floating elements. 
            Fix all positioning and styling issues!
          </p>

          {/* Requirements */}
          <div className="p-4 mb-4 border-l-4 border-blue-500 rounded bg-blue-50">
            <div className="flex items-start">
              <span className="mr-2 font-semibold text-blue-600">📋 Requirements:</span>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Navigation bar should stick to top when scrolling with glassmorphism effect (blur + transparency)</li>
                <li>• Nav links (desktop + mobile) should have hover effects (background + text color change)</li>
                <li>• First nav item ("Home") should be marked as active/current on both desktop and mobile</li>
                <li>• Notification badge should be positioned at top-right corner of bell icon</li>
                <li>• Discount badges should be at top-right corner of each product card</li>
                <li>• Tooltip should appear centered above "Book Now" button on hover with a down-pointing arrow</li>
                <li>• Floating Action Button (FAB/+ icon) should be fixed at bottom-right corner and remain visible during scroll</li>
                <li>• All transitions should be smooth</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-4 overflow-hidden border-2 border-gray-300 rounded-lg" style={{ height: '700px' }}>
            <div className="h-full overflow-y-auto">
              <ErrorBoundary problemName="Problem 5" filePath="components/problems/problem5.js">
                <NavigationBar />
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
