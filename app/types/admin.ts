import type { Station } from './station'

export interface TeamMember {
  id: string
  name: string
  role: string
  region: string
  stationId: string
  biography: string
  /** Public URL (Supabase Storage) or empty string. */
  photo: string
}

export type TeamMemberInput = Omit<TeamMember, 'id'>
export type StationInput = Omit<Station, 'id'>

export interface AdminState {
  stations: Station[]
  members: TeamMember[]
}

export const FRENCH_REGIONS = [
  'Auvergne-Rhône-Alpes',
  'Bourgogne-Franche-Comté',
  'Bretagne',
  'Centre-Val de Loire',
  'Corse',
  'Grand Est',
  'Hauts-de-France',
  'Île-de-France',
  'Normandie',
  'Nouvelle-Aquitaine',
  'Occitanie',
  'Pays de la Loire',
  "Provence-Alpes-Côte d'Azur",
] as const
