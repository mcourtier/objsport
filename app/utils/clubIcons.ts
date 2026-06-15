import type { ClubApproachIcon, ClubObjectifPillarIcon } from '~/types/club'

export const clubApproachIcons: Record<ClubApproachIcon, string> = {
  context: 'material-symbols:search',
  need: 'material-symbols:groups-outline',
  mission: 'material-symbols:track-changes',
}

export const clubObjectifPillarIcons: Record<ClubObjectifPillarIcon, string> =
  {
    availability: 'material-symbols:calendar-month-outline',
    discretion: 'material-symbols:lock-outline',
    rigor: 'material-symbols:check-circle-outline',
  }

export function clubApproachIcon(name: ClubApproachIcon): string {
  return clubApproachIcons[name]
}

export function clubObjectifPillarIcon(name: ClubObjectifPillarIcon): string {
  return clubObjectifPillarIcons[name]
}
