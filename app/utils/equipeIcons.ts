import type { EquipeValueIcon } from '~/types/team'

export const equipeValueIcons: Record<EquipeValueIcon, string> = {
  professionals: 'material-symbols:person-check-outline',
  adaptability: 'material-symbols:handshake-outline',
  versatility: 'material-symbols:hub-outline',
  teamwork: 'material-symbols:checklist-rounded',
  results: 'material-symbols:trending-up',
}

export function equipeValueIcon(icon: EquipeValueIcon) {
  return equipeValueIcons[icon]
}
