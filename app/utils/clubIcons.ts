import type { ClubApproachIcon, ClubPricingIcon } from '~/types/club'

export const clubApproachIcons: Record<ClubApproachIcon, string> = {
  context: 'material-symbols:search',
  need: 'material-symbols:groups-outline',
  mission: 'material-symbols:track-changes',
}

export const clubPricingIcons: Record<ClubPricingIcon, string> = {
  'half-day': 'material-symbols:wb-sunny-outline',
  day: 'material-symbols:calendar-today-outline',
  week: 'material-symbols:calendar-view-week-outline',
}

export function clubApproachIcon(name: ClubApproachIcon): string {
  return clubApproachIcons[name]
}

export function clubPricingIcon(name: ClubPricingIcon): string {
  return clubPricingIcons[name]
}
