
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ivqttpzvyhvxurwubqhd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2cXR0cHp2eWh2eHVyd3VicWhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE0ODg4OTUsImV4cCI6MjAzNzA2NDg5NX0.C8i3aQ_1MMi21n2J70tqK25-2w5y5h3tA82uY4gTcO0'

export const supabase = createClient(supabaseUrl, supabaseKey)
