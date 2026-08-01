import type { TeamProfile } from '~/types/team'

export async function useTeamProfiles() {
  return useAsyncData('team-profiles', () => $fetch<TeamProfile[]>('/api/team'))
}

export async function useTeamProfile(slug: MaybeRefOrGetter<string>) {
  const slugValue = computed(() => toValue(slug))

  return useAsyncData(
    () => `team-profile-${slugValue.value}`,
    async () => {
      try {
        return await $fetch<TeamProfile>(`/api/team/${slugValue.value}`)
      } catch (error: unknown) {
        const statusCode =
          typeof error === 'object' &&
          error &&
          'statusCode' in error &&
          typeof error.statusCode === 'number'
            ? error.statusCode
            : null
        if (statusCode === 404) return null
        throw error
      }
    },
    { watch: [slugValue] },
  )
}
