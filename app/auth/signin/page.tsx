import Image from 'next/image';
import Link from 'next/link';
import ModernAuthForm from '@/components/auth/ModernAuthForm';

export default function SignIn() {
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
          
          <h2 className="text-3xl font-medium">Transform Your Data Journey</h2>
          <p className="text-white/80 max-w-sm mx-auto">
            Access your personalized client portal to manage projects, track tasks, and leverage data-driven insights for your business growth.
          </p>
          
          {/* Client testimonial */}
          <div className="mt-10 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <p className="italic text-white/90 mb-4">
              "RevelateOps has transformed how we make decisions. Their data insights directly contributed to our 32% revenue growth this year."
            </p>
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center mr-3">
                <span className="font-bold">JD</span>
              </div>
              <div className="text-left">
                <p className="font-medium">Jane Doe</p>
                <p className="text-sm text-white/70">CEO, Example Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side with login form */}
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
              Welcome Back
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Sign in to access your client portal
            </p>
          </div>

          <div className="mt-8">
            <ModernAuthForm view="sign_in" />
          </div>

          <div className="text-center text-sm">
            <p className="text-gray-600 dark:text-gray-400">
              Don't have an account?{' '}
              <Link 
                href="/auth/signup" 
                className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
              >
                Contact us
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
