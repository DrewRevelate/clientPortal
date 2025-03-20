import { Inter, Lexend } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import { AuthProvider } from '@/lib/contexts/AuthContext';

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

// Metadata
export const metadata: Metadata = {
  title: 'RevelateOps Client Portal',
  description: 'Secure client portal for RevelateOps clients to track projects, tasks, meetings, and documents.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
      <body className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
