import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import ws from 'ws'

export const TEAM_PHOTOS_BUCKET = 'team-photos'

function requireSupabaseUrl(): string {
  const url = useRuntimeConfig().public.supabaseUrl
  if (!url) {
    throw createError({
      statusCode: 500,
      statusMessage:
        'Supabase n’est pas configuré (NUXT_PUBLIC_SUPABASE_URL).',
    })
  }
  return url
}

function createSupabaseClient(key: string): SupabaseClient {
  return createClient(requireSupabaseUrl(), key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
    // Node < 22 has no native WebSocket; required by supabase-js realtime init.
    realtime: { transport: ws as unknown as typeof WebSocket },
  })
}

export function useSupabaseAnon(): SupabaseClient {
  const anonKey = useRuntimeConfig().public.supabaseAnonKey

  if (!anonKey) {
    throw createError({
      statusCode: 500,
      statusMessage:
        'Supabase n’est pas configuré (NUXT_PUBLIC_SUPABASE_ANON_KEY).',
    })
  }

  return createSupabaseClient(anonKey)
}

export function useSupabaseService(): SupabaseClient {
  const serviceRoleKey = useRuntimeConfig().supabaseServiceRoleKey

  if (!serviceRoleKey) {
    throw createError({
      statusCode: 500,
      statusMessage:
        'Supabase n’est pas configuré (NUXT_SUPABASE_SERVICE_ROLE_KEY).',
    })
  }

  return createSupabaseClient(serviceRoleKey)
}
