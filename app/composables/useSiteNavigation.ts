import type { NavLink, SidebarNavLink } from '~/types/navigation'

export const useSiteNavigation = () => {
  const mainNav: NavLink[] = [
    { label: 'Entreprise', to: '/entreprise' },
    { label: 'Club', to: '/club' },
    { label: 'Sportif', to: '/sportif' },
    { label: 'Équipe', to: '/equipe' },
    { label: 'Contact', to: '/contact' },
  ]

  const sidebarNav: SidebarNavLink[] = [
    { label: 'Entreprise', to: '/entreprise', icon: 'mdi:office-building-outline' },
    { label: 'Club', to: '/club', icon: 'mdi:soccer' },
    { label: 'Sportif', to: '/sportif', icon: 'mdi:dumbbell' },
    { label: 'Équipe', to: '/equipe', icon: 'mdi:account-group-outline' },
    { label: 'Contact', to: '/contact', icon: 'mdi:email-outline' },
  ]

  const footerLegal: NavLink[] = [
    { label: 'Mentions légales', to: '/mentions-legales' },
    { label: 'CGU', to: '/cgu' },
    { label: 'Confidentialité', to: '/politique-de-confidentialite' },
    { label: 'Cookies', to: '/cookies' },
  ]

  return {
    mainNav,
    sidebarNav,
    footerLegal,
  }
}
