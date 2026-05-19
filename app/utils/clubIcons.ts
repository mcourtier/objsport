import type { ClubApproachIcon, ClubPricingIcon } from '~/types/club'

export const clubApproachIcons: Record<ClubApproachIcon, string> = {
  context: 'mdi:magnify',
  need: 'mdi:account-group',
  mission: 'mdi:bullseye-arrow',
}

export const clubPricingIcons: Record<ClubPricingIcon, string> = {
  'half-day': 'mdi:white-balance-sunny',
  day: 'mdi:calendar',
  week: 'mdi:calendar-week',
}

export function clubApproachIcon(name: ClubApproachIcon): string {
  return clubApproachIcons[name]
}

export function clubPricingIcon(name: ClubPricingIcon): string {
  return clubPricingIcons[name]
}
