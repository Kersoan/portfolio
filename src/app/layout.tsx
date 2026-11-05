import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import ThemeProvider from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteConfig } from '@/config/content';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(
    'https://portfolio-ebon-seven-31x4e9pf6q.vercel.app'
  ),

  title: siteConfig.name,
  description: siteConfig.description,

  openGraph: {
    type: 'website',
    url: '/',
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,

    images: [
      {
        url: '/assets/images/kersoan-cutout.png',
        alt: 'Kersoan - AI & GenAI Portfolio',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />

            <div className="relative z-10 flex flex-1 flex-col">
              {children}
            </div>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}