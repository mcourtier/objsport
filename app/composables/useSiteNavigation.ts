import type { NavLink } from '~/types/navigation'

export const useSiteNavigation = () => {
  const mainNav: NavLink[] = [
    { label: 'Entreprise', to: '/entreprise' },
    { label: 'Club', to: '/club' },
    { label: 'Sportif', to: '/sportif' },
    { label: 'Équipe', to: '/equipe' },
    { label: 'Contact', to: '/contact' },
  ]

  const footerLegal: NavLink[] = [
    { label: 'Mentions légales', to: '/mentions-legales' },
    { label: 'CGU', to: '/cgu' },
    { label: 'Confidentialité', to: '/politique-de-confidentialite' },
    { label: 'Cookies', to: '/cookies' },
  ]

  return {
    mainNav,
    footerLegal,
  }
}
