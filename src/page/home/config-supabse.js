import { createClient } from '@supabase/supabase-js';

const supabaseURL = "https://qrvhnopqgbonyznapkyj.supabase.co";
const supabaseAPIKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFydmhub3BxZ2Jvbnl6bmFwa3lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI3OTY5MjcsImV4cCI6MjAwODM3MjkyN30.q2kWWidGw9pC0B1Uh_-mha2uaUxWxUowD68jZ4sxNA0"

export const supabase = createClient(supabaseURL, supabaseAPIKey)