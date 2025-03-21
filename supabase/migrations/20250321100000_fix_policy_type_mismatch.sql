-- Drop the problematic policy (if it exists)
DROP POLICY IF EXISTS "Users can view own meeting notes" ON app.meeting_notes;

-- Re-create the policy with proper type casting
CREATE POLICY "Users can view own meeting notes"
  ON app.meeting_notes FOR SELECT
  USING (
    auth.uid()::uuid IN (
      SELECT client_id FROM app.meetings WHERE id = meeting_id::uuid
    ) OR
    auth.uid()::uuid IN (
      SELECT user_id FROM app.meeting_attendees WHERE meeting_id = meeting_id::uuid
    )
  );

-- Also check and fix other policies with similar potential type issues
DROP POLICY IF EXISTS "Users can view project updates for their projects" ON app.project_updates;
CREATE POLICY "Users can view project updates for their projects"
  ON app.project_updates FOR SELECT
  USING (
    auth.uid()::uuid IN (
      SELECT client_id FROM app.projects WHERE id = project_id::uuid
    )
  );

DROP POLICY IF EXISTS "Users can view task comments for their tasks" ON app.task_comments;
CREATE POLICY "Users can view task comments for their tasks"
  ON app.task_comments FOR SELECT
  USING (
    auth.uid()::uuid IN (
      SELECT client_id FROM app.tasks WHERE id = task_id::uuid
    )
  );

-- Make sure Calendly fields exist in both meetings and appointments tables
ALTER TABLE public.meetings
ADD COLUMN IF NOT EXISTS calendly_event_uuid UUID,
ADD COLUMN IF NOT EXISTS calendly_invitee_uuid UUID,
ADD COLUMN IF NOT EXISTS reschedule_url TEXT,
ADD COLUMN IF NOT EXISTS cancel_url TEXT,
ADD COLUMN IF NOT EXISTS canceled_at TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS cancel_reason TEXT,
ADD COLUMN IF NOT EXISTS calendly_event_uri TEXT,
ADD COLUMN IF NOT EXISTS calendly_invitee_uri TEXT;

ALTER TABLE public.appointments
ADD COLUMN IF NOT EXISTS calendly_event_uuid UUID,
ADD COLUMN IF NOT EXISTS calendly_invitee_uuid UUID,
ADD COLUMN IF NOT EXISTS reschedule_url TEXT,
ADD COLUMN IF NOT EXISTS cancel_url TEXT,
ADD COLUMN IF NOT EXISTS canceled_at TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS cancel_reason TEXT,
ADD COLUMN IF NOT EXISTS calendly_event_uri TEXT,
ADD COLUMN IF NOT EXISTS calendly_invitee_uri TEXT;
