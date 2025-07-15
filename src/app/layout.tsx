import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
// import { ParticleField } from '@/components/ParticleField';
import { Footer } from '@/components/Footer';
import { SplashWrapper } from '@/components/SplashWrapper';
import { SquarePattern } from '@/components/SquarePattern';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Jason Evenson – AI Automation & Revenue Growth',
  description:
    'I automate revenue growth with AI. Transform your business with AI-driven automation, integrations, and sales funnels.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} font-sans`}>
      <body>
        <SplashWrapper />
        <SquarePattern />
        {/* <ParticleField /> */}
        <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}