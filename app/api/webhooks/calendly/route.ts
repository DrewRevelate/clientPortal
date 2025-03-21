import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Database } from '@/types/supabase';

// Type definition for Calendly webhook payload
interface CalendlyWebhookPayload {
  event: 'invitee.created' | 'invitee.canceled';
  payload: {
    event_type: {
      uuid: string;
      kind: string;
      slug: string;
      name: string;
      duration: number;
      owner: {
        type: string;
        uuid: string;
      };
    };
    event: {
      uuid: string;
      start_time: string;
      end_time: string;
      created_at: string;
      location: {
        type: string;
        join_url?: string;
      };
      canceled?: boolean;
      canceler_name?: string;
      cancel_reason?: string;
    };
    invitee: {
      uuid: string;
      first_name: string;
      last_name: string;
      email: string;
      text_reminder_number: string | null;
      timezone: string;
      created_at: string;
      is_reschedule: boolean;
      payments: any[];
      cancel_url: string;
      reschedule_url: string;
    };
    questions_and_answers: Array<{
      question: string;
      answer: string;
    }>;
    questions_and_responses: {
      [key: string]: string;
    };
    tracking: {
      utm_campaign: string | null;
      utm_source: string | null;
      utm_medium: string | null;
      utm_content: string | null;
      utm_term: string | null;
      salesforce_uuid: string | null;
    };
    old_invitee?: {
      uuid: string;
      first_name: string;
      last_name: string;
      email: string;
    };
    new_invitee?: {
      uuid: string;
      first_name: string;
      last_name: string;
      email: string;
    };
  };
}

export async function POST(request: Request) {
  try {
    const supabase = createRouteHandlerClient<Database>({ cookies });
    const webhookData: CalendlyWebhookPayload = await request.json();
    
    // Log the webhook payload for debugging
    console.log('Received Calendly webhook:', webhookData.event);
    
    // Process based on event type
    if (webhookData.event === 'invitee.created') {
      await handleEventCreated(supabase, webhookData.payload);
    } else if (webhookData.event === 'invitee.canceled') {
      await handleEventCanceled(supabase, webhookData.payload);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing Calendly webhook:', error);
    return NextResponse.json(
      { error: 'Failed to process webhook' }, 
      { status: 500 }
    );
  }
}

async function handleEventCreated(supabase: any, payload: CalendlyWebhookPayload['payload']) {
  // Find contact by email in our database
  const { data: contactData, error: contactError } = await supabase
    .from('contacts')
    .select('id, company_id')
    .eq('email', payload.invitee.email)
    .limit(1);

  if (contactError) {
    console.error('Error finding contact:', contactError);
  }

  const contactId = contactData?.[0]?.id;
  const companyId = contactData?.[0]?.company_id;

  // Extract company name from custom questions if provided
  let companyName = '';
  const companyQuestion = payload.questions_and_answers.find(
    qa => qa.question.toLowerCase().includes('company') || 
          qa.question.toLowerCase().includes('organization')
  );
  
  if (companyQuestion) {
    companyName = companyQuestion.answer;
  }

  // Get meeting title from event type name
  const meetingTitle = payload.event_type.name;

  // Create the meeting record
  const { error: meetingError } = await supabase.from('meetings').insert({
    title: meetingTitle,
    description: `Scheduled via Calendly with ${payload.invitee.first_name} ${payload.invitee.last_name}`,
    meeting_date: payload.event.start_time,
    meeting_link: payload.event.location.join_url || '',
    contact_id: contactId || null,
    company_id: companyId || null,
    status: 'scheduled',
    calendly_event_uuid: payload.event.uuid,
    calendly_invitee_uuid: payload.invitee.uuid,
    reschedule_url: payload.invitee.reschedule_url,
    cancel_url: payload.invitee.cancel_url,
  });

  if (meetingError) {
    console.error('Error creating meeting:', meetingError);
    return;
  }

  // If no matching contact, create a new one
  if (!contactId && payload.invitee.email) {
    // Create new contact
    const { data: newContact, error: newContactError } = await supabase
      .from('contacts')
      .insert({
        first_name: payload.invitee.first_name,
        last_name: payload.invitee.last_name,
        email: payload.invitee.email,
        company_name: companyName,
      })
      .select();

    if (newContactError) {
      console.error('Error creating new contact:', newContactError);
    } else {
      // Update the meeting with the new contact ID
      const { error: updateError } = await supabase
        .from('meetings')
        .update({ contact_id: newContact[0].id })
        .eq('calendly_invitee_uuid', payload.invitee.uuid);

      if (updateError) {
        console.error('Error updating meeting with new contact:', updateError);
      }
    }
  }
}

async function handleEventCanceled(supabase: any, payload: CalendlyWebhookPayload['payload']) {
  // Update meeting status to canceled
  const { error } = await supabase
    .from('meetings')
    .update({ 
      status: 'canceled',
      canceled_at: new Date().toISOString(),
      cancel_reason: payload.event.cancel_reason || 'Canceled by invitee'
    })
    .eq('calendly_invitee_uuid', payload.invitee.uuid);

  if (error) {
    console.error('Error updating meeting to canceled:', error);
  }
}
