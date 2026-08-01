import { fetchTeamMembers } from '../../utils/teamMembers'

export default defineEventHandler(async () => {
  return fetchTeamMembers()
})
