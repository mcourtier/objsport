import type { PillarAccent } from '~/types/homepage'
import type { SportifBenefit, SportifServiceIcon } from '~/types/sportif'

/** Material Design Icons (Iconify `mdi` prefix) for the sportif page. */
export const sportifPillarHeaderIcons: Record<PillarAccent, string> = {
  gym: 'mdi:kettlebell',
  lab: 'mdi:flask-outline',
  studio: 'mdi:account-group',
}

export const sportifServiceIcons: Record<SportifServiceIcon, string> = {
  run: 'mdi:run',
  stopwatch: 'mdi:timer-outline',
  recovery: 'mdi:heart-pulse',
  rehab: 'mdi:medical-bag',
  sprint: 'mdi:run-fast',
  hiit: 'mdi:fire',
  massage: 'mdi:spa-outline',
  stretch: 'mdi:human-handsup',
  therapy: 'mdi:stethoscope',
  aesthetic: 'mdi:sparkles',
  weights: 'mdi:dumbbell',
  posture: 'mdi:human-male-height',
  brain: 'mdi:brain',
  body: 'mdi:human',
  pilates: 'mdi:yoga',
  yoga: 'mdi:meditation',
  movement: 'mdi:walk',
  target: 'mdi:target',
  burst: 'mdi:lightning-bolt',
  warmup: 'mdi:weather-sunny',
  reach: 'mdi:arm-flex',
  shield: 'mdi:shield-check',
  rest: 'mdi:sleep',
  concussion: 'mdi:head-alert-outline',
}

export const sportifBenefitIcons: Record<SportifBenefit['icon'], string> = {
  expertise: 'mdi:shield-check',
  coaching: 'mdi:account-supervisor',
  performance: 'mdi:chart-line',
  availability: 'mdi:clock-outline',
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
