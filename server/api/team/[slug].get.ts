import { fetchTeamMemberBySlug } from '../../utils/teamMembers'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Slug requis',
    })
  }

  const profile = await fetchTeamMemberBySlug(slug)
  if (!profile) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Profil non trouvé',
    })
  }

  return profile
})
