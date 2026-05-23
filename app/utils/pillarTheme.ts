import type { PillarAccent } from '~/types/homepage'

export function pillarBorderClass(accent: PillarAccent) {
  const map: Record<PillarAccent, string> = {
    gym: 'border-green-500',
    lab: 'border-amber-400',
    studio: 'border-blue-500',
  }
  return map[accent]
}

export function pillarTextClass(accent: PillarAccent) {
  const map: Record<PillarAccent, string> = {
    gym: 'text-green-500',
    lab: 'text-amber-400',
    studio: 'text-blue-500',
  }
  return map[accent]
}

export function pillarIconCircleClass(accent: PillarAccent) {
  const map: Record<PillarAccent, string> = {
    gym: 'bg-green-500 text-neutral-100',
    lab: 'bg-amber-400 text-neutral-900',
    studio: 'bg-blue-500 text-neutral-100',
  }
  return map[accent]
}
