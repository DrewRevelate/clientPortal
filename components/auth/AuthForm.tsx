"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/lib/supabase/client';
import { useAuth } from '@/lib/contexts/AuthContext';

interface AuthFormProps {
  view?: 'sign_in' | 'sign_up' | 'forgotten_password';
}

const AuthForm = ({ view = 'sign_in' }: AuthFormProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Redirect after successful authentication
  supabase.auth.onAuthStateChange((event) => {
    if (event === 'SIGNED_IN') {
      router.push('/dashboard');
    }
  });

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
          redirectTo={`${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`}
        />
      </div>
    </div>
  );
};

export default AuthForm;
