import type { PillarAccent } from '~/types/homepage'

export function pillarBorderClass(accent: PillarAccent) {
  const map: Record<PillarAccent, string> = {
    gym: 'border-pillar-gym',
    lab: 'border-pillar-lab',
    studio: 'border-pillar-studio',
  }
  return map[accent]
}

export function pillarTextClass(accent: PillarAccent) {
  const map: Record<PillarAccent, string> = {
    gym: 'text-pillar-gym',
    lab: 'text-pillar-lab',
    studio: 'text-pillar-studio',
  }
  return map[accent]
}

export function pillarIconCircleClass(accent: PillarAccent) {
  const map: Record<PillarAccent, string> = {
    gym: 'bg-pillar-gym text-brand-white',
    lab: 'bg-pillar-lab text-brand-charcoal',
    studio: 'bg-pillar-studio text-brand-white',
  }
  return map[accent]
}
