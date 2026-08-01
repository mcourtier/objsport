import type { TeamProfile } from '../../app/types/team'
import { useSupabaseAnon } from './supabase'

export interface TeamMemberRow {
  id: string
  name: string
  slug: string
  role: string
  photo: string
  email: string | null
  phone: string | null
  region: string
  station_id: string
  sort_order: number
  excerpt: string
  title: string
  description: string
  biography: string
}

const TEAM_MEMBER_COLUMNS =
  'id, name, slug, role, photo, email, phone, region, station_id, sort_order, excerpt, title, description, biography'

export function mapTeamMember(row: TeamMemberRow): TeamProfile {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    role: row.role,
    photo: row.photo,
    email: row.email ?? undefined,
    phone: row.phone ?? undefined,
    order: row.sort_order,
    excerpt: row.excerpt || undefined,
    title: row.title || undefined,
    description: row.description || undefined,
    biography: row.biography || undefined,
    path: `/equipe/${row.slug}`,
  }
}

export async function fetchTeamMembers(): Promise<TeamProfile[]> {
  const supabase = useSupabaseAnon()
  const { data, error } = await supabase
    .from('team_members')
    .select(TEAM_MEMBER_COLUMNS)
    .order('sort_order', { ascending: true })

  if (error) {
    throw createError({
      statusCode: 502,
      statusMessage: `Impossible de charger l’équipe : ${error.message}`,
    })
  }

  return ((data ?? []) as TeamMemberRow[]).map(mapTeamMember)
}

export async function fetchTeamMemberBySlug(
  slug: string,
): Promise<TeamProfile | null> {
  const supabase = useSupabaseAnon()
  const { data, error } = await supabase
    .from('team_members')
    .select(TEAM_MEMBER_COLUMNS)
    .eq('slug', slug)
    .maybeSingle()

  if (error) {
    throw createError({
      statusCode: 502,
      statusMessage: `Impossible de charger le profil : ${error.message}`,
    })
  }

  return data ? mapTeamMember(data as TeamMemberRow) : null
}
