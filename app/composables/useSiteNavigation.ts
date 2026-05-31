import type { NavLink, SidebarNavLink } from '~/types/navigation'

export async function useSiteNavigation() {
  const route = useRoute()

  const { data: navigation } = await useAsyncData('site-navigation', () =>
    queryCollection('navigation').first(),
  )

  const sidebarNav = computed(
    () => (navigation.value?.sidebar ?? []) as SidebarNavLink[],
  )

  const footerLegal = computed(
    () => (navigation.value?.footerLegal ?? []) as NavLink[],
  )

  const tagline = computed(() => navigation.value?.tagline ?? '')

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
    tagline,
    sidebarNav,
    footerLegal,
    isNavActive,
    navLinkClass,
  }
}
