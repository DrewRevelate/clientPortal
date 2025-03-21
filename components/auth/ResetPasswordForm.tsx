"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { supabase } from '@/lib/supabase/client';
import { BsEnvelope } from 'react-icons/bs';

const ResetPasswordForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${typeof window !== 'undefined' ? window.location.origin : ''}/auth/reset-password`,
      });

      if (error) throw error;
      
      setSuccess(true);
    } catch (err: any) {
      console.error('Password reset error:', err);
      setError(err.message || 'Error sending password reset email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {error && (
        <div className="mb-6 p-4 bg-danger-50 border border-danger-200 text-danger-700 rounded-md">
          {error}
        </div>
      )}
      
      {success ? (
        <div className="mb-6 p-4 bg-success-50 border border-success-200 text-success-700 rounded-md">
          <h3 className="font-medium mb-2">Password reset email sent!</h3>
          <p>Check your email for instructions to reset your password.</p>
          <Button 
            type="button" 
            className="mt-4 w-full bg-primary-600 hover:bg-primary-700 text-white"
            onClick={() => router.push('/auth/signin')}
          >
            Return to Sign In
          </Button>
        </div>
      ) : (
        <form onSubmit={handleResetPassword} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400" htmlFor="email">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                <BsEnvelope className="w-4 h-4" />
              </div>
              <Input 
                id="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 w-full"
                placeholder="you@example.com"
                required 
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium" 
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Reset Instructions'}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ResetPasswordForm;
