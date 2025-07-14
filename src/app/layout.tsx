import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
// import { ParticleField } from '@/components/ParticleField';
import { Footer } from '@/components/Footer';
import { SplashWrapper } from '@/components/SplashWrapper';
import { SquarePattern } from '@/components/SquarePattern';

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

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
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