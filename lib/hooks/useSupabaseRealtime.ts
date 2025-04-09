"use client";

import { useEffect, useState } from 'react';
import { RealtimeChannel } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase/client';

interface UseSupabaseRealtimeOptions {
  /**
   * The database table to subscribe to
   */
  table: string;
  
  /**
   * Schema name (defaults to 'public')
   */
  schema?: string;
  
  /**
   * Optional filter for specific records
   */
  filter?: string;
  
  /**
   * Optional event types to listen for (defaults to all)
   */
  event?: 'INSERT' | 'UPDATE' | 'DELETE' | '*';
  
  /**
   * Callback function when changes occur
   */
  onChange: (payload: any) => void;
}

/**
 * Custom hook for real-time Supabase subscriptions
 * Makes it easy to subscribe to table changes
 */
export function useSupabaseRealtime({
  table,
  schema = 'public',
  filter,
  event = '*',
  onChange,
}: UseSupabaseRealtimeOptions) {
  const [channel, setChannel] = useState<RealtimeChannel | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Create channel name with optional filter
    const channelName = filter 
      ? `${schema}:${table}:${filter}` 
      : `${schema}:${table}`;
    
    try {
      // Subscribe to the channel
      const newChannel = supabase
        .channel(channelName)
        .on(
          'postgres_changes',
          {
            event,
            schema,
            table,
          },
          (payload) => {
            onChange(payload);
          }
        )
        .subscribe((status) => {
          if (status === 'CHANNEL_ERROR') {
            setError(new Error(`Error subscribing to ${channelName}`));
          }
        });
      
      setChannel(newChannel);
      
      // Cleanup: unsubscribe when component unmounts
      return () => {
        if (newChannel) {
          supabase.removeChannel(newChannel);
        }
      };
    } catch (err: any) {
      console.error('Error setting up realtime subscription:', err);
      setError(err);
      return () => {};
    }
  }, [table, schema, filter, event, onChange]);

  return { channel, error };
}

export default useSupabaseRealtime;
