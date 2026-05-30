import type {
  EntrepriseBenefitIcon,
  EntrepriseReasonIcon,
  EntrepriseServiceIcon,
} from '~/types/entreprise'

export const entrepriseServiceIcons: Record<EntrepriseServiceIcon, string> = {
  audit: 'material-symbols:person-outline',
  programs: 'material-symbols:groups-outline',
  conception: 'material-symbols:desktop-windows-outline',
}

export const entrepriseBenefitIcons: Record<EntrepriseBenefitIcon, string> = {
  health: 'material-symbols:health-and-safety-outline',
  performance: 'material-symbols:trending-up',
  tms: 'material-symbols:personal-injury-outline',
  productivity: 'material-symbols:settings-outline',
  teams: 'material-symbols:groups-outline',
}

export const entrepriseReasonIcons: Record<EntrepriseReasonIcon, string> = {
  expertise: 'material-symbols:star-outline',
  methodology: 'material-symbols:settings-outline',
  flexibility: 'material-symbols:schedule-outline',
  results: 'material-symbols:insert-chart-outline',
}

export function entrepriseServiceIcon(icon: EntrepriseServiceIcon) {
  return entrepriseServiceIcons[icon]
}

export function entrepriseBenefitIcon(icon: EntrepriseBenefitIcon) {
  return entrepriseBenefitIcons[icon]
}

export function entrepriseReasonIcon(icon: EntrepriseReasonIcon) {
  return entrepriseReasonIcons[icon]
}
