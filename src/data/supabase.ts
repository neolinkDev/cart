import { createClient } from '@supabase/supabase-js';
import { Database } from './types';

const supabase = createClient<Database>(
  'https://gxdwlbaeveoyhzgkuucs.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4ZHdsYmFldmVveWh6Z2t1dWNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwNTYwNjgsImV4cCI6MjAyNjYzMjA2OH0.Pmi3phZilX1dd2yZn-WYdzAD0_eTPLF0S9y1poFsROo'
);

export default supabase;
