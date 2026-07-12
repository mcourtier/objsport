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

export function sectionIconSurfaceClass(accent: SectionAccent) {
  const map: Record<SectionAccent, string> = {
    consulting: 'bg-consulting/15 ring-2 ring-consulting',
    coaching: 'bg-coaching/15 ring-2 ring-coaching',
    care: 'bg-care/15 ring-2 ring-care',
  }
  return map[accent]
}

export function sectionBorderClass(accent: SectionAccent) {
  const map: Record<SectionAccent, string> = {
    consulting: 'border-consulting',
    coaching: 'border-coaching',
    care: 'border-care',
  }
  return map[accent]
}

export function sectionIconCircleClass(accent: SectionAccent) {
  const map: Record<SectionAccent, string> = {
    consulting: 'bg-consulting text-neutral-100',
    coaching: 'bg-coaching text-neutral-100',
    care: 'bg-care text-neutral-100',
  }
  return map[accent]
}

export function sectionDividerClass(accent: SectionAccent) {
  const map: Record<SectionAccent, string> = {
    consulting: 'bg-consulting',
    coaching: 'bg-coaching',
    care: 'bg-care',
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
    gym: 'text-gym',
    lab: 'text-lab',
    studio: 'text-studio',
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

export function pillarIconSurfaceClass(accent: PillarAccent) {
  const map: Record<PillarAccent, string> = {
    gym: 'bg-gym/15 ring-2 ring-gym',
    lab: 'bg-lab/15 ring-2 ring-lab',
    studio: 'bg-studio/15 ring-2 ring-studio',
  }
  return map[accent]
}

export function pillarIconColorClass(accent: PillarAccent) {
  return pillarTextClass(accent)
}
