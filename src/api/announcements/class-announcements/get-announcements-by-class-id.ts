import { authenticatedInstance } from '../../instance'
import type { Announcements } from '~/types'

export async function getAnnouncementsByClassId(classId: string) {
  try {
    const response = await authenticatedInstance().get<Announcements>(`/announcements/class-announcements/${classId}`)
    if (response.status === 200) {
      console.log(JSON.stringify(response.data))
      return response.data
    }
    return []
  }
  catch (error) {
    console.log(error)
    return []
  }
}
