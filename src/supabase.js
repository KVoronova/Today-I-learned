
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://kgwssgkshlersikwhrsq.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtnd3NzZ2tzaGxlcnNpa3docnNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExMjA4MjEsImV4cCI6MjAyNjY5NjgyMX0.MTY_EISEN2Xna_Nws-TqJrEplJP1S0CaEXjqOVfmcWc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;