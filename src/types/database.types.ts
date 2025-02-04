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
      quiz_responses: {
        Row: {
          id: string
          created_at: string
          mrr: number
          churn_rate: number
          customer_count: number
          monthly_loss: number
        }
        Insert: {
          id?: string
          created_at?: string
          mrr: number
          churn_rate: number
          customer_count: number
          monthly_loss: number
        }
        Update: {
          id?: string
          created_at?: string
          mrr?: number
          churn_rate?: number
          customer_count?: number
          monthly_loss?: number
        }
      }
      user_interactions: {
        Row: {
          id: string
          created_at: string
          session_id: string
          scroll_percentage: number
          time_on_site: number
          mouse_movements: number
          feature_clicks: Json
          feedback_rating?: number
          feedback_text?: string
        }
        Insert: {
          id?: string
          created_at?: string
          session_id: string
          scroll_percentage: number
          time_on_site: number
          mouse_movements: number
          feature_clicks: Json
          feedback_rating?: number
          feedback_text?: string
        }
        Update: {
          id?: string
          created_at?: string
          session_id?: string
          scroll_percentage?: number
          time_on_site?: number
          mouse_movements?: number
          feature_clicks?: Json
          feedback_rating?: number
          feedback_text?: string
        }
      }
    }
  }
}