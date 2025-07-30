'use client';

import { useEffect } from 'react';
import { trackWebVitals } from '@/lib/analytics';

export function WebVitals() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Dynamic import to avoid SSR issues
      import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
        onCLS(trackWebVitals);
        onFID(trackWebVitals);
        onFCP(trackWebVitals);
        onLCP(trackWebVitals);
        onTTFB(trackWebVitals);
      });
    }
  }, []);

  return null;
}

// Performance observer component
export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            console.warn('Long task detected:', entry);
            trackWebVitals({
              name: 'LONG_TASK',
              value: entry.duration,
              id: `${entry.startTime}-${entry.duration}`,
            });
          }
        }
      });

      observer.observe({ entryTypes: ['longtask'] });

      // Monitor navigation timing
      const navObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const navEntry = entry as PerformanceNavigationTiming;
          
          // Track Time to Interactive (TTI) approximation
          const tti = navEntry.domContentLoadedEventEnd - navEntry.navigationStart;
          if (tti > 0) {
            trackWebVitals({
              name: 'TTI',
              value: tti,
              id: `tti-${Date.now()}`,
            });
          }
        }
      });

      navObserver.observe({ entryTypes: ['navigation'] });

      return () => {
        observer.disconnect();
        navObserver.disconnect();
      };
    }
  }, []);

  return null;
}

// Resource loading monitor
export function ResourceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const resourceEntry = entry as PerformanceResourceTiming;
        
        // Track slow resources
        if (resourceEntry.duration > 1000) {
          console.warn('Slow resource:', resourceEntry.name, resourceEntry.duration);
          trackWebVitals({
            name: 'SLOW_RESOURCE',
            value: resourceEntry.duration,
            id: `resource-${Date.now()}`,
          });
        }

        // Track failed resources
        if (resourceEntry.transferSize === 0 && resourceEntry.decodedBodySize === 0) {
          console.error('Failed resource:', resourceEntry.name);
          trackWebVitals({
            name: 'FAILED_RESOURCE',
            value: 1,
            id: `failed-${Date.now()}`,
          });
        }
      }
    });

    observer.observe({ entryTypes: ['resource'] });

    return () => observer.disconnect();
  }, []);

  return null;
}