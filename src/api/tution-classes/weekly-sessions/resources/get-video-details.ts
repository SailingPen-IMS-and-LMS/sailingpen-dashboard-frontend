import { authenticatedInstance } from '../../../instance'
import type { ResourceType } from '~/types'

export async function getVideoDetails(resourceId: number) {
  try {
    const result = await authenticatedInstance().get<{
      id: number
      name: string
      url: string
      thumbnail_url: string | null
      type: ResourceType
      folder_id: number
      weeklySessionId: string | null
    } >(`/tution-classes/weekly-sessions/resources/${resourceId}`)
    if (result.status === 200)
      return result.data
    return undefined
  }
  catch (error) {
    console.log(error)
    return undefined
  }
}
