import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { type Database } from '@/types/supabase';

// Create a single instance of the Supabase client for client components
export const supabase = createClientComponentClient<Database>();

// Helper function to get error message
export const getErrorMessage = (error: any): string => {
  if (typeof error === 'string') return error;
  if (error?.message) return error.message;
  return 'An unknown error occurred';
};
