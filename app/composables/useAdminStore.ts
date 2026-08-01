import { stationsPageContent } from '~/data/stationsPage'
import { adminSeedMembers } from '~/data/adminSeed'
import type {
  AdminState,
  StationInput,
  TeamMember,
  TeamMemberInput,
} from '~/types/admin'
import type { Station } from '~/types/station'

const STORAGE_KEY = 'objsport-admin-v3'

function createId(prefix: string) {
  return `${prefix}-${crypto.randomUUID().slice(0, 8)}`
}

function slugify(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function defaultState(): AdminState {
  return {
    stations: structuredClone(stationsPageContent.stations),
    members: structuredClone(adminSeedMembers),
  }
}

function persist(state: AdminState) {
  if (!import.meta.client) return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

export function useAdminStore() {
  const state = useState<AdminState>('admin-store', defaultState)
  const hydrated = useState('admin-store-hydrated', () => false)

  function hydrate() {
    if (!import.meta.client || hydrated.value) return
    hydrated.value = true

    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const parsed = JSON.parse(raw) as AdminState
      if (Array.isArray(parsed.stations) && Array.isArray(parsed.members)) {
        state.value = {
          stations: parsed.stations,
          members: parsed.members.map((member) => ({
            ...member,
            biography: member.biography ?? '',
            photo: member.photo ?? '',
          })),
        }
      }
    } catch {
      // Ignore invalid storage and keep seed data.
    }
  }

  function stationById(id: string) {
    return state.value.stations.find((station) => station.id === id)
  }

  function stationName(id: string) {
    return stationById(id)?.name ?? '—'
  }

  function addMember(input: TeamMemberInput) {
    const member: TeamMember = { id: createId('member'), ...input }
    state.value.members = [...state.value.members, member]
    persist(state.value)
    return member
  }

  function updateMember(id: string, input: TeamMemberInput) {
    state.value.members = state.value.members.map((member) =>
      member.id === id ? { ...member, ...input } : member,
    )
    persist(state.value)
  }

  function removeMember(id: string) {
    state.value.members = state.value.members.filter(
      (member) => member.id !== id,
    )
    persist(state.value)
  }

  function addStation(input: StationInput) {
    const baseId = slugify(input.name) || createId('station')
    const id = state.value.stations.some((station) => station.id === baseId)
      ? createId(baseId)
      : baseId
    const station: Station = { id, ...input }
    state.value.stations = [...state.value.stations, station]
    persist(state.value)
    return station
  }

  function updateStation(id: string, input: StationInput) {
    state.value.stations = state.value.stations.map((station) =>
      station.id === id ? { ...station, ...input } : station,
    )
    persist(state.value)
  }

  function removeStation(id: string) {
    const linked = state.value.members.filter(
      (member) => member.stationId === id,
    ).length
    if (linked > 0) {
      throw new Error(
        `Impossible de supprimer : ${linked} membre(s) sont associés à cette station.`,
      )
    }
    state.value.stations = state.value.stations.filter(
      (station) => station.id !== id,
    )
    persist(state.value)
  }

  function reset() {
    state.value = defaultState()
    persist(state.value)
  }

  return {
    state,
    stations: computed(() => state.value.stations),
    members: computed(() => state.value.members),
    hydrate,
    stationById,
    stationName,
    addMember,
    updateMember,
    removeMember,
    addStation,
    updateStation,
    removeStation,
    reset,
  }
}
