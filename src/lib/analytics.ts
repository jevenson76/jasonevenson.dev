declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window === 'undefined' || !GA_TRACKING_ID) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  
  window.gtag('js', new Date());
  window.gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window === 'undefined' || !GA_TRACKING_ID) return;
  
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Track custom events
export const trackEvent = (
  eventName: string,
  parameters: {
    event_category?: string;
    event_label?: string;
    value?: number;
    [key: string]: any;
  } = {}
) => {
  if (typeof window === 'undefined' || !GA_TRACKING_ID) return;
  
  window.gtag('event', eventName, {
    event_category: parameters.event_category || 'General',
    event_label: parameters.event_label,
    value: parameters.value,
    ...parameters,
  });
};

// Track Core Web Vitals
export const trackWebVitals = (metric: any) => {
  if (typeof window === 'undefined' || !GA_TRACKING_ID) return;
  
  window.gtag('event', metric.name, {
    event_category: 'Web Vitals',
    event_label: metric.id,
    value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
    non_interaction: true,
  });
};

// Privacy-conscious analytics
export const trackInteraction = (element: string, action: string) => {
  trackEvent('interaction', {
    event_category: 'UI',
    event_label: `${element}_${action}`,
  });
};

// Performance tracking
export const trackPerformance = (metricName: string, value: number) => {
  trackEvent('performance_metric', {
    event_category: 'Performance',
    event_label: metricName,
    value: Math.round(value),
  });
};

// Error tracking (complement to Sentry)
export const trackError = (error: string, context?: string) => {
  trackEvent('javascript_error', {
    event_category: 'Error',
    event_label: error,
    custom_parameter_context: context,
  });
};