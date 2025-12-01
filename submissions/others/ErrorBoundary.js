'use client';

import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 border-2 border-red-300 rounded-lg bg-red-50">
          <div className="flex items-start mb-4">
            <svg className="w-6 h-6 mr-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-lg font-bold text-red-800">
                ⚠️ Component Error: {this.props.problemName}
              </h3>
              <p className="mt-2 text-sm text-red-700">
                There's an error in this component. Check the details below and fix the code.
              </p>
            </div>
          </div>
          
          <div className="p-4 mt-4 font-mono text-sm bg-white border border-red-200 rounded">
            <p className="font-bold text-red-800">Error Message:</p>
            <p className="mt-1 text-red-700">{this.state.error && this.state.error.toString()}</p>
            
            {this.state.errorInfo && (
              <details className="mt-3">
                <summary className="font-bold text-red-800 cursor-pointer hover:text-red-900">
                  Stack Trace (click to expand)
                </summary>
                <pre className="mt-2 overflow-x-auto text-xs text-gray-700 whitespace-pre-wrap">
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>

          <div className="p-4 mt-4 border-l-4 border-yellow-500 bg-yellow-50">
            <p className="text-sm font-semibold text-yellow-800">💡 Troubleshooting Tips:</p>
            <ul className="mt-2 ml-4 space-y-1 text-sm text-yellow-900 list-disc">
              <li>Check the error message above for clues</li>
              <li>Open the browser console (F12) for more details</li>
              <li>Review the code in <code className="px-1 py-0.5 text-xs bg-yellow-200 rounded">{this.props.filePath}</code></li>
              <li>Look for syntax errors, missing closing tags, or undefined variables</li>
            </ul>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
