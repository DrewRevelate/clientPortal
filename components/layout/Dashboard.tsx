"use client";

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  FiHome, 
  FiFolder, 
  FiCheckSquare, 
  FiCalendar, 
  FiFileText,
  FiClock,
  FiSettings,
  FiMenu,
  FiX,
  FiLogOut,
  FiBell,
  FiUser
} from 'react-icons/fi';
import { useAuth } from '@/lib/contexts/AuthContext';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { signOut, user } = useAuth();
  
  const navigationItems = [
    { name: 'Dashboard', href: '/dashboard', icon: FiHome },
    { name: 'Projects', href: '/projects', icon: FiFolder },
    { name: 'Tasks', href: '/tasks', icon: FiCheckSquare },
    { name: 'Meetings', href: '/meetings', icon: FiCalendar },
    { name: 'Documents', href: '/documents', icon: FiFileText },
    { name: 'Time Tracking', href: '/time-tracking', icon: FiClock },
    { name: 'Settings', href: '/settings', icon: FiSettings },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex md:flex-col md:w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-center h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <Link href="/dashboard">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-primary-600 dark:text-primary-400">
                RevelateOps
              </span>
            </div>
          </Link>
        </div>
        
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors
                ${pathname === item.href || pathname?.startsWith(item.href + '/') 
                  ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400' 
                  : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}
              `}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={handleSignOut}
            className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <FiLogOut className="mr-3 h-5 w-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden fixed top-0 right-0 z-20 m-4">
        <button
          onClick={toggleMobileMenu}
          className="flex items-center justify-center h-10 w-10 rounded-full bg-white dark:bg-gray-800 shadow-md"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-10 bg-gray-900 bg-opacity-50">
          <div className="relative w-64 h-full bg-white dark:bg-gray-800 shadow-xl">
            <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
              <Link href="/dashboard">
                <div className="flex items-center">
                  <span className="text-xl font-semibold text-primary-600 dark:text-primary-400">
                    RevelateOps
                  </span>
                </div>
              </Link>
              <button onClick={toggleMobileMenu}>
                <FiX className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
            
            <nav className="px-2 py-4 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={toggleMobileMenu}
                  className={`
                    flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors
                    ${pathname === item.href || pathname?.startsWith(item.href + '/') 
                      ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400' 
                      : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}
                  `}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="absolute bottom-0 w-full p-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={handleSignOut}
                className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                <FiLogOut className="mr-3 h-5 w-5" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-lg font-medium md:hidden">
              RevelateOps Portal
            </h1>
            
            <div className="flex items-center space-x-4">
              <button className="p-1 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
                <FiBell className="h-6 w-6" />
              </button>
              
              <div className="relative">
                <button className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <div className="flex items-center justify-center h-8 w-8 bg-primary-100 dark:bg-primary-900 rounded-full text-primary-600 dark:text-primary-400">
                    <FiUser className="h-5 w-5" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
    </ProtectedRoute>
  );
};

export default DashboardLayout;
