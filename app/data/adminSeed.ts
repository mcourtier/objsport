import type { TeamMember } from '~/types/admin'
import { stationsPageContent } from '~/data/stationsPage'

const defaultStationId = stationsPageContent.stations[0]?.id ?? ''

export const adminSeedMembers: TeamMember[] = [
  {
    id: 'member-pierre-vespignani',
    name: 'Pierre Vespignani',
    role: 'Kinésithérapeute du sport — Fondateur',
    region: "Provence-Alpes-Côte d'Azur",
    stationId: defaultStationId,
  },
  {
    id: 'member-mathias-giustiniani',
    name: 'Mathias Giustiniani',
    role: 'Médecin du sport',
    region: "Provence-Alpes-Côte d'Azur",
    stationId: defaultStationId,
  },
]
