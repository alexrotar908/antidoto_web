import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jxnunougqlpvvfhcgmeo.supabase.co';       // lo coges de tu proyecto Supabase > Settings > API
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4bnVub3VncWxwdnZmaGNnbWVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2ODgyNzcsImV4cCI6MjA2NjI2NDI3N30.teX1iNx5DpTMSVlxUmejPnYhtOeFoCiNd_IA80q3M6M';  // igual aquí, la anon public key

export const supabase = createClient(supabaseUrl, supabaseKey);
