// ErrorBoundary.js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // This method is called when an error occurs in a child component
  static getDerivedStateFromError(error) {
    // Update state to indicate that an error has occurred
    return { hasError: true };
  }

  // This method is called after rendering with an error
  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when an error occurs
      return (
        <div>
          <h2>Something went wrong.</h2>
          <p>Please try again later.</p>
        </div>
      );
    }

    // Render children normally if no error has occurred
    return this.props.children;
  }
}

export default ErrorBoundary;
