import type { NavLink, SidebarNavLink } from '~/types/navigation'

export const useSiteNavigation = () => {
  const sidebarNav: SidebarNavLink[] = [
    {
      label: 'Accueil',
      to: '/',
      icon: 'material-symbols:home-outline',
    },
    {
      label: 'Entreprise',
      to: '/entreprise',
      icon: 'material-symbols:corporate-fare',
    },
    { label: 'Club', to: '/club', icon: 'material-symbols:sports-soccer' },
    {
      label: 'Sportif',
      to: '/sportif',
      icon: 'material-symbols:fitness-center',
    },
    {
      label: 'Équipe',
      to: '/equipe',
      icon: 'material-symbols:groups-outline',
    },
    { label: 'Contact', to: '/contact', icon: 'material-symbols:mail-outline' },
  ]

  const footerLegal: NavLink[] = [
    { label: 'Mentions légales', to: '/mentions-legales' },
    { label: 'CGU', to: '/cgu' },
    { label: 'Confidentialité', to: '/politique-de-confidentialite' },
    { label: 'Cookies', to: '/cookies' },
  ]

  return {
    sidebarNav,
    footerLegal,
  }
}
