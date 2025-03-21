import Image from 'next/image';
import Link from 'next/link';
import ResetPasswordForm from '@/components/auth/ResetPasswordForm';

export default function ForgottenPassword() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side with brand and illustration */}
      <div className="relative hidden lg:flex flex-col items-center justify-center p-8 bg-primary-600 text-white">
        <div className="max-w-md mx-auto text-center space-y-8">
          <div className="mb-6">
            <Image
              src="/logo-white.svg"
              alt="RevelateOps Logo"
              width={200}
              height={60}
              priority
              className="mx-auto"
            />
          </div>
          
          <Image
            src="/auth-illustration.svg" 
            alt="Data visualization illustration"
            width={400}
            height={300}
            className="mx-auto"
          />
          
          <h2 className="text-3xl font-medium">Reset Your Password</h2>
          <p className="text-white/80 max-w-sm mx-auto">
            We'll send you instructions to reset your password and get you back to accessing your client portal.
          </p>
        </div>
      </div>

      {/* Right side with reset form */}
      <div className="flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile logo for small screens */}
          <div className="text-center lg:hidden mb-8">
            <Link href="/">
              <div className="inline-block">
                <Image
                  src="/logo.svg"
                  alt="RevelateOps Logo"
                  width={180}
                  height={48}
                  priority
                />
              </div>
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Forgot Your Password?
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Enter your email and we'll send you password reset instructions
            </p>
          </div>

          <div className="mt-8 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <ResetPasswordForm />
          </div>

          <div className="text-center text-sm">
            <p className="text-gray-600 dark:text-gray-400">
              Remember your password?{' '}
              <Link 
                href="/auth/signin" 
                className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
        
        <footer className="w-full max-w-md text-center mt-12 text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} RevelateOps. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
