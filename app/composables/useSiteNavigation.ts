import type { NavLink, SidebarNavLink } from '~/types/navigation'

export const useSiteNavigation = () => {
  const route = useRoute()

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

  function isNavActive(to: string) {
    if (to === '/') {
      return route.path === '/'
    }

    return route.path === to || route.path.startsWith(`${to}/`)
  }

  function navLinkClass(to: string) {
    return isNavActive(to)
      ? 'bg-primary text-neutral-100'
      : 'text-neutral-100 hover:text-primary'
  }

  return {
    sidebarNav,
    footerLegal,
    isNavActive,
    navLinkClass,
  }
}
