import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vxblqspcqgsmumchizcz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4Ymxxc3BjcWdzbXVtY2hpemN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNzEzNzIsImV4cCI6MjA1OTk0NzM3Mn0.jqznSY8m21yQUq8jx6hFSGK9bVy-IcnIwbt2CrVpsLg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Tipos para o banco de dados
export interface Database {
  public: {
    Tables: {
      user_profiles: {
        Row: {
          id: string;
          email: string;
          name: string;
          role: 'usuario_comum' | 'admin' | 'anunciante';
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id: string;
          email: string;
          name: string;
          role?: 'usuario_comum' | 'admin' | 'anunciante';
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string;
          role?: 'usuario_comum' | 'admin' | 'anunciante';
          created_at?: string | null;
          updated_at?: string | null;
        };
      };
    };
  };
}

export type SupabaseUserRole = 'usuario_comum' | 'admin' | 'anunciante';

// Mapeamento entre tipos do frontend e backend
export const roleMapping = {
  participant: 'usuario_comum' as SupabaseUserRole,
  advertiser: 'anunciante' as SupabaseUserRole,
  admin: 'admin' as SupabaseUserRole
} as const;

export const reverseRoleMapping = {
  usuario_comum: 'participant',
  anunciante: 'advertiser', 
  admin: 'admin'
} as const; 