import type { PillarAccent } from '~/types/homepage'
import type { HeroAccent } from '~/types/pageHero'

export function heroAccentTextClass(accent: HeroAccent = 'primary') {
  const map: Record<HeroAccent, string> = {
    primary: 'text-primary',
    gym: 'text-gym-light',
    lab: 'text-lab',
    studio: 'text-studio-light',
  }
  return map[accent]
}

/** Base accent hue for decorative `currentColor` fills (hero brush line). */
export function heroAccentFillClass(accent: HeroAccent = 'primary') {
  const map: Record<HeroAccent, string> = {
    primary: 'text-primary',
    gym: 'text-gym',
    lab: 'text-lab',
    studio: 'text-studio',
  }
  return map[accent]
}

export function pillarBorderClass(accent: PillarAccent) {
  const map: Record<PillarAccent, string> = {
    gym: 'border-gym',
    lab: 'border-lab',
    studio: 'border-studio',
  }
  return map[accent]
}

export function pillarTextClass(accent: PillarAccent) {
  const map: Record<PillarAccent, string> = {
    gym: 'text-gym-light',
    lab: 'text-lab',
    studio: 'text-studio-light',
  }
  return map[accent]
}

export function pillarTextHoverClass(accent: PillarAccent) {
  const map: Record<PillarAccent, string> = {
    gym: 'hover:text-gym-light',
    lab: 'hover:text-lab',
    studio: 'hover:text-studio-light',
  }
  return map[accent]
}

export function pillarIconCircleClass(accent: PillarAccent) {
  const map: Record<PillarAccent, string> = {
    gym: 'bg-gym text-neutral-100',
    lab: 'bg-lab text-neutral-100',
    studio: 'bg-studio text-neutral-100',
  }
  return map[accent]
}

export function pillarDividerClass(accent: PillarAccent) {
  const map: Record<PillarAccent, string> = {
    gym: 'bg-gym',
    lab: 'bg-lab',
    studio: 'bg-studio',
  }
  return map[accent]
}
