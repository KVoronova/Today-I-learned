
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://gkrhfmhgdtdrjxrbzgqm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrcmhmbWhnZHRkcmp4cmJ6Z3FtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwMjkzNjMsImV4cCI6MjA0OTYwNTM2M30.D-rQ8Gs0KE7pRzUYFQRElnH3kYUm66yQ1Br-5_Ue3UM';
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
