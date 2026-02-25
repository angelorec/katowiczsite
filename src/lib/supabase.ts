import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Use a type that allows for null
let supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
} else {
  // Log an error to the developer console for debugging in the preview environment
  if (process.env.NODE_ENV === 'development') {
    console.error("Supabase environment variables (URL or Key) are missing. Check your .env.local file or IDE's secret manager. Login will not work.");
  }
}

export { supabase };
