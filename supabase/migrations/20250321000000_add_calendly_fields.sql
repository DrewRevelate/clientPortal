-- Add Calendly-related fields to the meetings table
ALTER TABLE meetings
ADD COLUMN IF NOT EXISTS calendly_event_uuid UUID,
ADD COLUMN IF NOT EXISTS calendly_invitee_uuid UUID,
ADD COLUMN IF NOT EXISTS reschedule_url TEXT,
ADD COLUMN IF NOT EXISTS cancel_url TEXT,
ADD COLUMN IF NOT EXISTS canceled_at TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS cancel_reason TEXT,
ADD COLUMN IF NOT EXISTS calendly_event_uri TEXT,
ADD COLUMN IF NOT EXISTS calendly_invitee_uri TEXT;

-- Add Calendly-related fields to the appointments table as well
ALTER TABLE appointments
ADD COLUMN IF NOT EXISTS calendly_event_uuid UUID,
ADD COLUMN IF NOT EXISTS calendly_invitee_uuid UUID,
ADD COLUMN IF NOT EXISTS reschedule_url TEXT,
ADD COLUMN IF NOT EXISTS cancel_url TEXT,
ADD COLUMN IF NOT EXISTS canceled_at TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS cancel_reason TEXT,
ADD COLUMN IF NOT EXISTS calendly_event_uri TEXT,
ADD COLUMN IF NOT EXISTS calendly_invitee_uri TEXT;

-- Add company_name field to contacts table if it doesn't exist
ALTER TABLE contacts
ADD COLUMN IF NOT EXISTS company_name TEXT;

-- Add company_id field to meetings table if it doesn't exist
ALTER TABLE meetings
ADD COLUMN IF NOT EXISTS company_id UUID REFERENCES companies(id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_meetings_calendly_event_uuid ON meetings(calendly_event_uuid);
CREATE INDEX IF NOT EXISTS idx_meetings_calendly_invitee_uuid ON meetings(calendly_invitee_uuid);
CREATE INDEX IF NOT EXISTS idx_meetings_status ON meetings(status);
CREATE INDEX IF NOT EXISTS idx_meetings_meeting_date ON meetings(meeting_date);

-- Create indexes for appointments table as well
CREATE INDEX IF NOT EXISTS idx_appointments_calendly_event_uuid ON appointments(calendly_event_uuid);
CREATE INDEX IF NOT EXISTS idx_appointments_calendly_invitee_uuid ON appointments(calendly_invitee_uuid);
