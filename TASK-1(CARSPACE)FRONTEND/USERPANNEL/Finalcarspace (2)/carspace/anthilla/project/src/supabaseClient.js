import { createClient } from '@supabase/supabase-js';

// ✅ This should be the project URL from Supabase (starts with https://)
const supabaseUrl = 'https://geoaqtpgpapwfxxhsgjt.supabase.co';

// ✅ This should be your anon public API key
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdlb2FxdHBncGFwd2Z4eGhzZ2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NTY4MDUsImV4cCI6MjA2NjMzMjgwNX0.wwzO6k4ecSOkh3iKJIb6bF-onmjSQXXrXyAlKM5pHcM';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;