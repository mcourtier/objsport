import type { SectionAccent } from '~/types/navigation'
import type { PillarAccent } from '~/types/homepage'

export function sectionFillClass(accent: SectionAccent) {
  const map: Record<SectionAccent, string> = {
    consulting: 'fill-consulting',
    coaching: 'fill-coaching',
    care: 'fill-care',
  }
  return map[accent]
}

export function sectionTextClass(accent: SectionAccent) {
  const map: Record<SectionAccent, string> = {
    consulting: 'text-consulting',
    coaching: 'text-coaching',
    care: 'text-care',
  }
  return map[accent]
}

export function sectionIconName(accent: SectionAccent) {
  const map: Record<SectionAccent, string> = {
    consulting: 'material-symbols:monitoring',
    coaching: 'material-symbols:bolt',
    care: 'material-symbols:handyman-outline',
  }
  return map[accent]
}

export function pillarBorderClass(accent: PillarAccent) {
  const map: Record<PillarAccent, string> = {
    gym: 'border-coaching',
    lab: 'border-care',
    studio: 'border-consulting',
  }
  return map[accent]
}

export function pillarTextClass(accent: PillarAccent) {
  const map: Record<PillarAccent, string> = {
    gym: 'text-coaching',
    lab: 'text-care',
    studio: 'text-consulting',
  }
  return map[accent]
}

export function pillarIconCircleClass(accent: PillarAccent) {
  const map: Record<PillarAccent, string> = {
    gym: 'bg-coaching text-neutral-100',
    lab: 'bg-care text-neutral-900',
    studio: 'bg-consulting text-neutral-900',
  }
  return map[accent]
}

export function pillarIconSurfaceClass(accent: PillarAccent) {
  const map: Record<PillarAccent, string> = {
    gym: 'bg-coaching/15 ring-2 ring-coaching',
    lab: 'bg-care/15 ring-2 ring-care',
    studio: 'bg-consulting/15 ring-2 ring-consulting',
  }
  return map[accent]
}

export function pillarIconColorClass(accent: PillarAccent) {
  return pillarTextClass(accent)
}
