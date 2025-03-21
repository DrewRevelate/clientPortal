'use client';

import { useState, useEffect } from 'react';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';
import { supabase } from '@/lib/supabase/client';

interface CalendlyEmbedProps {
  email?: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  className?: string;
  height?: number | string;
  eventType?: string;
}

export default function CalendlyEmbed({
  email = '',
  firstName = '',
  lastName = '',
  companyName = '',
  className = '',
  height = 700,
  eventType = '', // Leave empty to show all event types
}: CalendlyEmbedProps) {
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Get current user ID to associate meetings with the correct user
  useEffect(() => {
    async function getUserId() {
      try {
        const { data } = await supabase.auth.getUser();
        if (data?.user) {
          setUserId(data.user.id);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    }

    getUserId();
  }, []);

  // Handle Calendly events
  useCalendlyEventListener({
    onEventScheduled: async (e) => {
      // When an event is scheduled, store it in the database
      try {
        if (!userId) return;

        const eventData = e.data.payload;
        
        // Log the event data for debugging
        console.log('Calendly event scheduled:', eventData);
        
        // Store the event in our database
        // This is a backup in case the webhook fails
        const { error } = await supabase.from('meetings').insert({
          title: eventData.event?.name || 'Meeting',
          meeting_date: eventData.event?.start_time,
          contact_id: null, // Will be filled by webhook with more details
          meeting_link: eventData.event?.location?.join_url || '',
          calendly_event_uri: eventData.event?.uri || '',
          calendly_invitee_uri: eventData.invitee?.uri || '',
          status: 'scheduled',
        });

        if (error) {
          console.error('Error storing meeting:', error);
        }
      } catch (error) {
        console.error('Error handling event scheduled:', error);
      }
    }
  });

  // Build the URL with pre-filled data
  const rootUrl = 'https://calendly.com/drew@revelateops.com';
  const url = eventType ? `${rootUrl}/${eventType}` : rootUrl;
  
  const prefill = {
    email,
    firstName,
    lastName,
    name: firstName && lastName ? `${firstName} ${lastName}` : '',
    customAnswers: {
      a1: companyName || '',
    }
  };

  return (
    <div className={`calendly-embed ${className}`}>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
        </div>
      ) : (
        <InlineWidget
          url={url}
          prefill={prefill}
          styles={{
            height: typeof height === 'number' ? `${height}px` : height,
            minWidth: '320px',
          }}
          pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: '3B166A', // Match your brand color
            textColor: '19092f',
          }}
        />
      )}
    </div>
  );
}
