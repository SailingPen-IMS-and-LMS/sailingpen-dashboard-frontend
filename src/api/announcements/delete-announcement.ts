import { authenticatedInstance } from '../instance'

export async function deleteAnnouncement(announcementId: number) {
  try {
    const response = await authenticatedInstance().delete(`/announcements/${announcementId}`)
    if (response.status === 200)
      return true

    return false
  }
  catch (error) {
    console.log(error)
    return false
  }
}
