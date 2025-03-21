import Image from 'next/image';
import Link from 'next/link';
import AuthForm from '@/components/auth/AuthForm';

export default function SignUp() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md mb-8">
        <div className="text-center mb-8">
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
          <h1 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
            Create an Account
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Sign up to access your client portal
          </p>
        </div>
        
        <AuthForm view="sign_up" />
        
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link 
              href="/auth/signin" 
              className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
      
      <footer className="w-full max-w-md text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} RevelateOps. All rights reserved.</p>
      </footer>
    </div>
  );
}
