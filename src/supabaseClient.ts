import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gkucgantfpwmsnyyrrtn.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrdWNnYW50ZnB3bXNueXlycnRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE2MDMwMTQsImV4cCI6MTk3NzE3OTAxNH0.g58QYwcO0dkFRZNMehFcD_hisoVp7koKIYZJzZD0fJg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
