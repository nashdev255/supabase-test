import { createClient } from '@supabase/supabase-js';

require('dotenv').config();
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string;

export const showSupabaseUrl = () => {
    console.log(supabaseUrl);
};

export const supabase = createClient(
    'https://mjdgqfxzrtegoshazqlh.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qZGdxZnh6cnRlZ29zaGF6cWxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM2MzkxMDQsImV4cCI6MjAwOTIxNTEwNH0.YlIH0cWCsLL9HFAUjbRvRUIurIgpwuoRUa-YweHVVDk'
    // supabaseUrl,
    // supabaseAnonKey
);
