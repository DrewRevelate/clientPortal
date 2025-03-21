export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          first_name: string | null
          last_name: string | null
          role: string
          created_at: string
        }
        Insert: {
          id: string
          email: string
          first_name?: string | null
          last_name?: string | null
          role?: string
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          first_name?: string | null
          last_name?: string | null
          role?: string
          created_at?: string
        }
      },
      companies: {
        Row: {
          id: string
          name: string
          website_url: string | null
          industry: string | null
          created_at: string
          updated_at: string | null
          phone: string | null
          email_domain: string | null
          website: string | null
          pas: string | null
          email: string | null
          engagement_platform: string | null
          klaviyo_field: string | null
          other: string | null
          salesforce: string | null
        }
        Insert: {
          id?: string
          name: string
          website_url?: string | null
          industry?: string | null
          created_at?: string
          updated_at?: string | null
          phone?: string | null
          email_domain?: string | null
          website?: string | null
          pas?: string | null
          email?: string | null
          engagement_platform?: string | null
          klaviyo_field?: string | null
          other?: string | null
          salesforce?: string | null
        }
        Update: {
          id?: string
          name?: string
          website_url?: string | null
          industry?: string | null
          created_at?: string
          updated_at?: string | null
          phone?: string | null
          email_domain?: string | null
          website?: string | null
          pas?: string | null
          email?: string | null
          engagement_platform?: string | null
          klaviyo_field?: string | null
          other?: string | null
          salesforce?: string | null
        }
      },
      contacts: {
        Row: {
          id: string
          first_name: string | null
          last_name: string | null
          email: string
          phone: string | null
          job_title: string | null
          company_id: string | null
          company_name: string | null
          is_primary: boolean | null
          created_at: string
          updated_at: string | null
          account: string | null
        }
        Insert: {
          id?: string
          first_name?: string | null
          last_name?: string | null
          email: string
          phone?: string | null
          job_title?: string | null
          company_id?: string | null
          company_name?: string | null
          is_primary?: boolean | null
          created_at?: string
          updated_at?: string | null
          account?: string | null
        }
        Update: {
          id?: string
          first_name?: string | null
          last_name?: string | null
          email?: string
          phone?: string | null
          job_title?: string | null
          company_id?: string | null
          company_name?: string | null
          is_primary?: boolean | null
          created_at?: string
          updated_at?: string | null
          account?: string | null
        }
      },
      meetings: {
        Row: {
          id: string
          title: string
          description: string | null
          meeting_date: string
          contact_id: string | null
          created_at: string
          updated_at: string | null
          project_id: string | null
          company_id: string | null
          meeting_link: string | null
          recording_link: string | null
          transcript_link: string | null
          status: string | null
          calendly_event_uuid: string | null
          calendly_invitee_uuid: string | null
          reschedule_url: string | null
          cancel_url: string | null
          canceled_at: string | null
          cancel_reason: string | null
          calendly_event_uri: string | null
          calendly_invitee_uri: string | null
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          meeting_date: string
          contact_id?: string | null
          created_at?: string
          updated_at?: string | null
          project_id?: string | null
          company_id?: string | null
          meeting_link?: string | null
          recording_link?: string | null
          transcript_link?: string | null
          status?: string | null
          calendly_event_uuid?: string | null
          calendly_invitee_uuid?: string | null
          reschedule_url?: string | null
          cancel_url?: string | null
          canceled_at?: string | null
          cancel_reason?: string | null
          calendly_event_uri?: string | null
          calendly_invitee_uri?: string | null
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          meeting_date?: string
          contact_id?: string | null
          created_at?: string
          updated_at?: string | null
          project_id?: string | null
          company_id?: string | null
          meeting_link?: string | null
          recording_link?: string | null
          transcript_link?: string | null
          status?: string | null
          calendly_event_uuid?: string | null
          calendly_invitee_uuid?: string | null
          reschedule_url?: string | null
          cancel_url?: string | null
          canceled_at?: string | null
          cancel_reason?: string | null
          calendly_event_uri?: string | null
          calendly_invitee_uri?: string | null
        }
      },
      meeting_notes: {
        Row: {
          id: string
          meeting_id: string
          summary: string | null
          action_items: string | null
          decisions: string | null
          created_by: string
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: string
          meeting_id: string
          summary?: string | null
          action_items?: string | null
          decisions?: string | null
          created_by: string
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          meeting_id?: string
          summary?: string | null
          action_items?: string | null
          decisions?: string | null
          created_by?: string
          created_at?: string
          updated_at?: string | null
        }
      },
      conversations: {
        Row: {
          id: string
          title: string
          description: string | null
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          created_at?: string
          updated_at?: string | null
        }
      },
      todos: {
        Row: {
          id: string
          title: string
          completed: boolean | null
          user_id: string
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          completed?: boolean | null
          user_id: string
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          completed?: boolean | null
          user_id?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
