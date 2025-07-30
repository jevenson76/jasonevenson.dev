import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { WebVitals, PerformanceMonitor, ResourceMonitor } from "@/components/monitoring/web-vitals";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://jasoneverson.dev'),
  title: {
    default: "Jason Everson - AI/ML & Automation Expert",
    template: "%s | Jason Everson",
  },
  description: "Professional portfolio showcasing AI, ML, and automation expertise. Specialized in enterprise solutions, machine learning implementations, and intelligent automation systems.",
  keywords: [
    "AI", "Machine Learning", "Automation", "Enterprise AI", 
    "MLOps", "Data Science", "Cloud Architecture", "DevOps",
    "Python", "TensorFlow", "PyTorch", "AWS", "Azure", "GCP"
  ],
  authors: [{ name: "Jason Everson", url: "https://jasoneverson.dev" }],
  creator: "Jason Everson",
  publisher: "Jason Everson",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Jason Everson - AI/ML Expert',
    title: 'Jason Everson - AI/ML & Automation Expert',
    description: 'Professional portfolio showcasing AI, ML, and automation expertise',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jason Everson - AI/ML & Automation Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jason Everson - AI/ML & Automation Expert',
    description: 'Professional portfolio showcasing AI, ML, and automation expertise',
    images: ['/og-image.jpg'],
    creator: '@jasoneverson',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#3b82f6' },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || '',
  },
  category: 'technology',
};

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {GA_TRACKING_ID && (
          <link rel="preconnect" href="https://www.googletagmanager.com" />
        )}
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Security headers via meta tags */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* Performance hints */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Analytics */}
        {GA_TRACKING_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `}
            </Script>
          </>
        )}
        
        {/* Sentry initialization */}
        <Script id="sentry-init" strategy="beforeInteractive">
          {`
            if (typeof window !== 'undefined' && '${process.env.NEXT_PUBLIC_SENTRY_DSN}') {
              import('/src/lib/sentry.js').then(module => module.initSentry());
            }
          `}
        </Script>
        
        {children}
        
        {/* Performance monitoring */}
        <WebVitals />
        <PerformanceMonitor />
        <ResourceMonitor />
        
        {/* Service Worker registration */}
        <Script id="sw-registration" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.register('/sw.js')
                .then(registration => console.log('SW registered:', registration))
                .catch(error => console.log('SW registration failed:', error));
            }
          `}
        </Script>
      </body>
    </html>
  );
}