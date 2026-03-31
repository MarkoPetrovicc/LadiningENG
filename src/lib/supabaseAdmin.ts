import { createClient } from "@supabase/supabase-js";

function getEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing environment variable: ${name}`);
  return v;
}

let _client: ReturnType<typeof createClient<any>> | null = null;

export function getSupabaseAdmin() {
  if (_client) return _client;
  _client = createClient<any>(getEnv("SUPABASE_URL"), getEnv("SUPABASE_SERVICE_ROLE_KEY"), {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return _client;
}

