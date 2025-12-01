'use client';

import React, { useState, useEffect } from 'react';

const questions = [
  {
    id: 1,
    question: "Explain the difference between let, const, and var in JavaScript."
  },
  {
    id: 2,
    question: "Difference between \"type\" and \"interface\" in TypeScript?"
  },
  {
    id: 3,
    question: "What are higher-order functions?"
  },
  {
    id: 4,
    question: "What are Promises in JavaScript?"
  },
  {
    id: 5,
    question: "Generics in TypeScript: What are they and why use them?"
  },
   {
    id: 6,
    question: "What is the virtual DOM in React, and why is it beneficial?"
  },
  {
    id: 7,
    question: "How does client-side rendering differ from server-side rendering in Next.js?"
  },
  {
    id: 8,
    question: "What is the difference between 'git pull' and 'git fetch'?"
  },
  {
    id: 9,
    question: "What is the purpose of creating branches in Git? How do you create and switch to a new branch?"
  },
  {
    id: 10,
    question: "What is a closure in JavaScript? Provide an example of how closures are useful."
  },

];

function ExamQuestions() {
  const [answers, setAnswers] = useState({
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answer5: '',
    answer6: '',
    answer7: '',
    answer8: '',
    answer9: '',
    answer10: ''
  });
  const [saveStatus, setSaveStatus] = useState('');
  const [loading, setLoading] = useState(true);
  const [autoSaveTimer, setAutoSaveTimer] = useState(null);

  // Load saved answers on mount
  useEffect(() => {
    const loadAnswers = async () => {
      // Check localStorage first
      const savedAnswers = localStorage.getItem('examAnswers');
      if (savedAnswers) {
        try {
          const parsedAnswers = JSON.parse(savedAnswers);
          setAnswers(parsedAnswers);
        } catch (e) {
          console.error('Error parsing saved answers:', e);
        }
      }

      // Check server
      try {
        const response = await fetch('/api/submit-answers');
        const result = await response.json();
        
        if (result.success && result.data) {
          const serverAnswers = {
            answer1: result.data.answer1 || '',
            answer2: result.data.answer2 || '',
            answer3: result.data.answer3 || '',
            answer4: result.data.answer4 || '',
            answer5: result.data.answer5 || '',
            answer6: result.data.answer6 || '',
            answer7: result.data.answer7 || '',
            answer8: result.data.answer8 || '',
            answer9: result.data.answer9 || '',
            answer10: result.data.answer10 || ''
          };
          setAnswers(serverAnswers);
          localStorage.setItem('examAnswers', JSON.stringify(serverAnswers));
        }
      } catch (error) {
        console.error('Error loading answers:', error);
      }
      
      setLoading(false);
    };

    loadAnswers();
  }, []);

  // Auto-save function
  const saveAnswers = async (answersToSave) => {
    try {
      // Save to localStorage immediately
      localStorage.setItem('examAnswers', JSON.stringify(answersToSave));

      // Save to server
      const response = await fetch('/api/submit-answers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(answersToSave),
      });

      const result = await response.json();

      if (result.success) {
        setSaveStatus('✓ Saved');
        setTimeout(() => setSaveStatus(''), 2000);
      } else {
        setSaveStatus('Error saving');
      }
    } catch (error) {
      setSaveStatus('Error saving');
      console.error('Error:', error);
    }
  };

  // Handle answer change with auto-save
  const handleAnswerChange = (answerId, value) => {
    const newAnswers = {
      ...answers,
      [answerId]: value
    };
    
    setAnswers(newAnswers);
    setSaveStatus('Saving...');

    // Clear existing timer
    if (autoSaveTimer) {
      clearTimeout(autoSaveTimer);
    }

    // Set new timer for auto-save (save after 1 second of no typing)
    const timer = setTimeout(() => {
      saveAnswers(newAnswers);
    }, 1000);

    setAutoSaveTimer(timer);
  };

  // Manual save function
  const handleManualSave = () => {
    if (autoSaveTimer) {
      clearTimeout(autoSaveTimer);
    }
    saveAnswers(answers);
  };

  if (loading) {
    return (
      <div className="p-6 text-center rounded-lg bg-gray-50">
        <p className="text-gray-600">Loading questions...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Save Status */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-gray-600">
          Your answers are automatically saved as you type
        </p>
        {saveStatus && (
          <span className={`text-sm font-medium ${
            saveStatus.includes('✓') ? 'text-green-600' : 
            saveStatus.includes('Error') ? 'text-red-600' : 
            'text-blue-600'
          }`}>
            {saveStatus}
          </span>
        )}
      </div>

      {/* Questions */}
      {questions.map((q, index) => (
        <div key={q.id} className="p-6 border border-gray-200 rounded-lg bg-gray-50">
          <div className="mb-3">
            <span className="inline-block px-3 py-1 mb-2 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
              Question {q.id}
            </span>
            <h3 className="text-lg font-semibold text-gray-800">
              {q.question}
            </h3>
          </div>
          
          <textarea
            value={answers[`answer${q.id}`]}
            onChange={(e) => handleAnswerChange(`answer${q.id}`, e.target.value)}
            placeholder="Type your answer here..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows="6"
          />
          
        
        </div>
      ))}
    </div>
  );
}

export default ExamQuestions;
