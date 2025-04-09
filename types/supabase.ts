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
          meeting_date: string | null
          start_time: string | null
          end_time: string | null
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
          meeting_date?: string | null
          start_time?: string | null
          end_time?: string | null
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
          meeting_date?: string | null
          start_time?: string | null
          end_time?: string | null
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
      },
      projects: {
        Row: {
          id: string
          name: string
          description: string | null
          status: string
          start_date: string | null
          target_end_date: string | null
          actual_end_date: string | null
          completion_percentage: number
          account_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          status?: string
          start_date?: string | null
          target_end_date?: string | null
          actual_end_date?: string | null
          completion_percentage?: number
          account_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          status?: string
          start_date?: string | null
          target_end_date?: string | null
          actual_end_date?: string | null
          completion_percentage?: number
          account_id?: string | null
          created_at?: string
          updated_at?: string
        }
      },
      tasks: {
        Row: {
          id: string
          title: string
          description: string | null
          status: string
          priority: string
          created_date: string | null
          formatted_status: string | null
          time_spent: string | null
          completed_date: string | null
          created_at: string
          updated_at: string | null
          due_date: string | null
          project: string | null
          account_id: string | null
          requester_id: string | null
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          status?: string
          priority?: string
          created_date?: string | null
          formatted_status?: string | null
          time_spent?: string | null
          completed_date?: string | null
          created_at?: string
          updated_at?: string | null
          due_date?: string | null
          project?: string | null
          account_id?: string | null
          requester_id?: string | null
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          status?: string
          priority?: string
          created_date?: string | null
          formatted_status?: string | null
          time_spent?: string | null
          completed_date?: string | null
          created_at?: string
          updated_at?: string | null
          due_date?: string | null
          project?: string | null
          account_id?: string | null
          requester_id?: string | null
        }
      },
      documents: {
        Row: {
          id: string
          name: string
          description: string | null
          file_path: string
          file_type: string
          file_size: number | null
          category: string | null
          status: string | null
          requires_signature: boolean | null
          signature_status: string | null
          project_id: string | null
          client_id: string | null
          uploaded_by: string | null
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          file_path: string
          file_type: string
          file_size?: number | null
          category?: string | null
          status?: string | null
          requires_signature?: boolean | null
          signature_status?: string | null
          project_id?: string | null
          client_id?: string | null
          uploaded_by?: string | null
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          file_path?: string
          file_type?: string
          file_size?: number | null
          category?: string | null
          status?: string | null
          requires_signature?: boolean | null
          signature_status?: string | null
          project_id?: string | null
          client_id?: string | null
          uploaded_by?: string | null
          created_at?: string
          updated_at?: string | null
        }
      },
      time_packages: {
        Row: {
          id: string
          name: string | null
          hours: number
          hours_used: number | null
          purchase_date: string | null
          expiration_date: string | null
          status: string
          client_id: string | null
          project_id: string | null
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: string
          name?: string | null
          hours: number
          hours_used?: number | null
          purchase_date?: string | null
          expiration_date?: string | null
          status?: string
          client_id?: string | null
          project_id?: string | null
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string | null
          hours?: number
          hours_used?: number | null
          purchase_date?: string | null
          expiration_date?: string | null
          status?: string
          client_id?: string | null
          project_id?: string | null
          created_at?: string
          updated_at?: string | null
        }
      },
      time_entries: {
        Row: {
          id: string
          description: string
          hours: number
          date: string
          task_id: string | null
          project_id: string | null
          time_package_id: string | null
          client_id: string | null
          created_by: string | null
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: string
          description: string
          hours: number
          date: string
          task_id?: string | null
          project_id?: string | null
          time_package_id?: string | null
          client_id?: string | null
          created_by?: string | null
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          description?: string
          hours?: number
          date?: string
          task_id?: string | null
          project_id?: string | null
          time_package_id?: string | null
          client_id?: string | null
          created_by?: string | null
          created_at?: string
          updated_at?: string | null
        }
      },
      notifications: {
        Row: {
          id: string
          title: string
          content: string
          type: string
          is_read: boolean | null
          related_entity_id: string | null
          related_entity_type: string | null
          user_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          type: string
          is_read?: boolean | null
          related_entity_id?: string | null
          related_entity_type?: string | null
          user_id?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          type?: string
          is_read?: boolean | null
          related_entity_id?: string | null
          related_entity_type?: string | null
          user_id?: string | null
          created_at?: string
        }
      },
      web_vitals: {
        Row: {
          id: string
          name: string
          value: number
          page_path: string
          user_agent: string | null
          unique_id: string | null
          created_at: string
          user_id: string | null
          session_id: string | null
        }
        Insert: {
          id?: string
          name: string
          value: number
          page_path: string
          user_agent?: string | null
          unique_id?: string | null
          created_at?: string
          user_id?: string | null
          session_id?: string | null
        }
        Update: {
          id?: string
          name?: string
          value?: number
          page_path?: string
          user_agent?: string | null
          unique_id?: string | null
          created_at?: string
          user_id?: string | null
          session_id?: string | null
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
