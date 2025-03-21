"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/lib/supabase/client';

interface AuthFormProps {
  view?: 'sign_in' | 'sign_up' | 'forgotten_password';
}

const AuthForm = ({ view = 'sign_in' }: AuthFormProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check for error parameter in URL
  useEffect(() => {
    const errorParam = searchParams.get('error');
    if (errorParam) {
      setError(decodeURIComponent(errorParam));
    }
  }, [searchParams]);

  // Set up auth state change listener
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        console.log('User signed in:', session.user.email);
        router.push('/dashboard');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [router]);

  return (
    <div className="w-full max-w-md">
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-200 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <Auth
          supabaseClient={supabase}
          view={view}
          showLinks={true}
          appearance={{
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#4f46e5',
                  brandAccent: '#4338ca',
                },
              },
            },
            style: {
              button: {
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                padding: '0.625rem 1rem',
              },
              input: {
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                padding: '0.625rem 0.75rem',
              },
              anchor: {
                color: '#4f46e5',
              },
              message: {
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
              },
            },
          }}
          providers={[]}
          redirectTo={`${typeof window !== 'undefined' ? window.location.origin : ''}/auth/callback`}
        />
      </div>
    </div>
  );
};

export default AuthForm;
