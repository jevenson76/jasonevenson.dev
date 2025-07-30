import * as Sentry from '@sentry/nextjs';
import React from 'react';

const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN || '';

export const initSentry = () => {
  if (!SENTRY_DSN) return;

  Sentry.init({
    dsn: SENTRY_DSN,
    environment: process.env.NODE_ENV,
    tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
    debug: process.env.NODE_ENV === 'development',
    
    beforeSend(event, hint) {
      // Filter out non-critical errors in production
      if (process.env.NODE_ENV === 'production') {
        const error = hint.originalException;
        if (error && error instanceof Error) {
          // Skip network errors and common browser issues
          if (
            error.message.includes('Network Error') ||
            error.message.includes('Failed to fetch') ||
            error.message.includes('Load failed') ||
            error.message.includes('AbortError')
          ) {
            return null;
          }
        }
      }
      return event;
    },

    integrations: [
      new Sentry.BrowserTracing({
        tracePropagationTargets: ['localhost', 'jasoneverson.dev'],
      }),
    ],
  });
};

// Custom error boundary for React components
export const withSentryErrorBoundary = (Component: React.ComponentType<any>) => {
  return Sentry.withErrorBoundary(Component, {
    fallback: ({ error, resetError }: { error: Error; resetError: () => void }) => (
      <div className="flex flex-col items-center justify-center min-h-[200px] p-8">
        <h2 className="text-xl font-semibold text-red-600 mb-4">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-600 mb-4 text-center">
          We've been notified about this error and are working to fix it.
        </p>
        <button
          onClick={resetError}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    ),
    showDialog: false,
  });
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => Promise<any> | any) => {
  return Sentry.startSpan({ name }, fn);
};

// Custom context for better debugging
export const setUserContext = (user: { id?: string; email?: string; role?: string }) => {
  Sentry.setUser(user);
};

export const setPageContext = (page: string, section?: string) => {
  Sentry.setContext('page', {
    name: page,
    section: section || 'main',
    timestamp: new Date().toISOString(),
  });
};

// Capture custom events
export const captureMessage = (message: string, level: 'info' | 'warning' | 'error' = 'info') => {
  Sentry.captureMessage(message, level);
};

export const captureException = (error: Error, context?: Record<string, any>) => {
  if (context) {
    Sentry.withScope((scope) => {
      scope.setContext('additional_context', context);
      Sentry.captureException(error);
    });
  } else {
    Sentry.captureException(error);
  }
};