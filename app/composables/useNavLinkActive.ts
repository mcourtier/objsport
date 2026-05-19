export const useNavLinkActive = (to: MaybeRefOrGetter<string>) => {
  const route = useRoute()

  return computed(() => {
    const target = toValue(to)

    if (target === '/') {
      return route.path === '/'
    }

    return route.path === target || route.path.startsWith(`${target}/`)
  })
}
