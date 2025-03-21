"use client";

import { Inter, Lexend } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/lib/contexts/AuthContext';
import { useState, useEffect } from 'react';

// Font configuration
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

// Note: Metadata cannot be exported from a client component
// See the separate metadata.ts file for metadata configuration

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);
  
  // Detect client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
      <head>
        <title>RevelateOps Client Portal</title>
        <meta name="description" content="Secure client portal for RevelateOps clients to track projects, tasks, meetings, and documents." />
      </head>
      <body className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        {isClient ? (
          <AuthProvider>{children}</AuthProvider>
        ) : (
          // Server-side rendering fallback
          <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="animate-pulse h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
            <div className="animate-pulse h-4 w-48 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        )}
      </body>
    </html>
  );
}
