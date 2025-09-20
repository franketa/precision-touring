import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

// Client-side Supabase client
export const createClient = () => {
  return createClientComponentClient()
}

// Server-side Supabase client
export const createServerClient = () => {
  return createServerComponentClient({ cookies })
}

// Database types (will be expanded as we develop)
export type Database = {
  public: {
    Tables: {
      tours: {
        Row: {
          id: string
          name: string
          created_at: string
          updated_at: string
          user_id: string
          status: 'planning' | 'active' | 'completed'
          total_cost?: number
          currency: string
        }
        Insert: {
          id?: string
          name: string
          user_id: string
          status?: 'planning' | 'active' | 'completed'
          total_cost?: number
          currency?: string
        }
        Update: {
          id?: string
          name?: string
          status?: 'planning' | 'active' | 'completed'
          total_cost?: number
          currency?: string
        }
      }
      stops: {
        Row: {
          id: string
          tour_id: string
          city: string
          state: string
          venue?: string
          arrival_date: string
          departure_date?: string
          created_at: string
        }
        Insert: {
          id?: string
          tour_id: string
          city: string
          state: string
          venue?: string
          arrival_date: string
          departure_date?: string
        }
        Update: {
          id?: string
          city?: string
          state?: string
          venue?: string
          arrival_date?: string
          departure_date?: string
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
