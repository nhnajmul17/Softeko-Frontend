'use client';

import React, { useState, useEffect } from 'react';

function StudentInfoForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check if student is already registered on mount
  useEffect(() => {
    const checkRegistration = async () => {
      // Check localStorage first
      const savedInfo = localStorage.getItem('studentInfo');
      if (savedInfo) {
        try {
          const parsedInfo = JSON.parse(savedInfo);
          // Validate that the data has required fields
          if (parsedInfo && parsedInfo.name && parsedInfo.email && parsedInfo.phone) {
            setFormData(parsedInfo);
            setIsSubmitted(true);
            setLoading(false);
            return;
          } else {
            // Clear invalid localStorage data
            localStorage.removeItem('studentInfo');
          }
        } catch (e) {
          // Clear corrupted localStorage data
          localStorage.removeItem('studentInfo');
        }
      }

      // Check server
      try {
        const response = await fetch('/api/submit-student');
        const result = await response.json();
        
        if (result.success && result.studentData && result.studentData.name && result.studentData.email) {
          setFormData(result.studentData);
          setIsSubmitted(true);
          localStorage.setItem('studentInfo', JSON.stringify(result.studentData));
        }
      } catch (error) {
        console.error('Error checking registration:', error);
      }
      setLoading(false);
    };

    checkRegistration();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone) {
      setStatus('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('/api/submit-student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('Information saved successfully!');
        setIsSubmitted(true);
        // Store in localStorage
        localStorage.setItem('studentInfo', JSON.stringify(result.studentData || formData));
      } else {
        if (result.studentData) {
          // Student already registered
          setFormData(result.studentData);
          setIsSubmitted(true);
          localStorage.setItem('studentInfo', JSON.stringify(result.studentData));
        }
        setStatus(result.message || 'Error saving information');
      }
    } catch (error) {
      setStatus('Error: ' + error.message);
    }
  };

  if (loading) {
    return (
      <div className="p-6 text-center bg-gray-50 rounded-lg">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="p-6 text-center bg-green-50 rounded-lg border-2 border-green-300">
        <div className="text-green-600 text-xl font-semibold mb-2">✓ Registration Complete</div>
        <p className="text-gray-700">Name: {formData.name}</p>
        <p className="text-gray-700">Email: {formData.email}</p>
        <p className="text-gray-700">Phone: {formData.phone}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your full name"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your email"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter your phone number"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
      >
        Submit Information
      </button>

      {status && (
        <p className={`text-center text-sm ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
          {status}
        </p>
      )}
    </form>
  );
}

export default StudentInfoForm;
