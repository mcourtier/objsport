import type { TeamProfilePage } from '~/types/team'

function sortByOrder(profiles: TeamProfilePage[]): TeamProfilePage[] {
  return [...profiles].sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
}

export async function useTeamProfiles() {
  const { data, ...rest } = await useAsyncData('team-profiles', async () => {
    const profiles = await queryCollection('team').all()
    return sortByOrder(profiles as TeamProfilePage[])
  })

  return { data, ...rest }
}
