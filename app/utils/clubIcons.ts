import type { ClubApproachIcon } from '~/types/club'

export const clubApproachIcons: Record<ClubApproachIcon, string> = {
  context: 'material-symbols:search',
  need: 'material-symbols:groups-outline',
  mission: 'material-symbols:track-changes',
}

export function clubApproachIcon(name: ClubApproachIcon): string {
  return clubApproachIcons[name]
}
