import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    console.error('Error Boundary caught an error:', error, errorInfo);
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          backgroundColor: '#f8f9fa',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            padding: '40px',
            maxWidth: '600px',
            textAlign: 'center',
            boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '20px',
              color: '#dc3545'
            }}>
              ⚠️
            </div>
            <h2 style={{
              color: '#111827',
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '16px'
            }}>
              Something went wrong
            </h2>
            <p style={{
              color: '#6b7280',
              fontSize: '1rem',
              lineHeight: '1.6',
              marginBottom: '24px'
            }}>
              We encountered an unexpected error. Please refresh the page and try again.
              If the problem persists, please contact support.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                backgroundColor: '#1f2937',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                padding: '12px 24px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer',
                marginRight: '12px'
              }}
            >
              Refresh Page
            </button>
            <button
              onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
              style={{
                backgroundColor: 'transparent',
                color: '#1f2937',
                border: '2px solid #1f2937',
                borderRadius: '6px',
                padding: '10px 24px',
                fontSize: '0.9rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Try Again
            </button>
            
            {process.env.NODE_ENV === 'development' && (
              <details style={{ marginTop: '20px', textAlign: 'left' }}>
                <summary style={{ cursor: 'pointer', color: '#6b7280' }}>
                  Error Details (Development Only)
                </summary>
                <pre style={{
                  backgroundColor: '#f3f4f6',
                  padding: '12px',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  overflow: 'auto',
                  marginTop: '8px'
                }}>
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;