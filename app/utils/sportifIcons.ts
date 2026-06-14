import type { PillarAccent } from '~/types/homepage'
import type { SportifBenefit, SportifServiceIcon } from '~/types/sportif'

/** Material Symbols Outlined (Iconify `material-symbols` prefix) for the sportif page. */
export const sportifPillarHeaderIcons: Record<PillarAccent, string> = {
  gym: 'material-symbols:fitness-center',
  lab: 'material-symbols:science',
  studio: 'material-symbols:groups',
}

export const sportifServiceIcons: Record<SportifServiceIcon, string> = {
  run: 'material-symbols:directions-run',
  stopwatch: 'material-symbols:timer-outline',
  recovery: 'material-symbols:monitor-heart-outline',
  rehab: 'material-symbols:medical-services-outline',
  sprint: 'material-symbols:sprint',
  hiit: 'material-symbols:local-fire-department-outline',
  massage: 'material-symbols:spa-outline',
  stretch: 'material-symbols:accessibility-new',
  therapy: 'material-symbols:stethoscope-outline',
  aesthetic: 'material-symbols:auto-awesome-outline',
  weights: 'material-symbols:fitness-center',
  posture: 'material-symbols:straighten-outline',
  brain: 'material-symbols:psychology-outline',
  body: 'material-symbols:person-outline',
  pilates: 'material-symbols:self-improvement',
  yoga: 'material-symbols:self-improvement',
  movement: 'material-symbols:directions-walk',
  target: 'material-symbols:track-changes',
  burst: 'material-symbols:bolt-outline',
  warmup: 'material-symbols:wb-sunny-outline',
  reach: 'material-symbols:sports-martial-arts',
  shield: 'material-symbols:verified-outline',
  rest: 'material-symbols:bedtime-outline',
  concussion: 'material-symbols:personal-injury-outline',
}

export const sportifBenefitIcons: Record<SportifBenefit['icon'], string> = {
  expertise: 'material-symbols:verified-outline',
  coaching: 'material-symbols:supervisor-account-outline',
  performance: 'material-symbols:insert-chart-outline',
  availability: 'material-symbols:schedule-outline',
}

export function sportifPillarHeaderIcon(accent: PillarAccent) {
  return sportifPillarHeaderIcons[accent]
}

export function sportifServiceIcon(name: SportifServiceIcon) {
  return sportifServiceIcons[name]
}

export function sportifBenefitIcon(icon: SportifBenefit['icon']) {
  return sportifBenefitIcons[icon]
}
