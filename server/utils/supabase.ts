import { createClient, type SupabaseClient } from '@supabase/supabase-js'

export const TEAM_PHOTOS_BUCKET = 'team-photos'

export function useSupabaseService(): SupabaseClient {
  const config = useRuntimeConfig()
  const url = config.public.supabaseUrl
  const serviceRoleKey = config.supabaseServiceRoleKey

  if (!url || !serviceRoleKey) {
    throw createError({
      statusCode: 500,
      statusMessage:
        'Supabase n’est pas configuré (NUXT_PUBLIC_SUPABASE_URL, NUXT_SUPABASE_SERVICE_ROLE_KEY).',
    })
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}
