import { authenticatedInstance } from '../instance'

interface UpdateAnnouncementDto {
  title: string
  content: string
  tution_class_id: string
}

export async function updateAnnouncement(id: number, data: UpdateAnnouncementDto) {
  try {
    const response = await authenticatedInstance().patch(`/announcements/update/${id}`, data)
    console.log(response.data, response.status)
    if (response.status === 200)
      return true

    return false
  }
  catch (error) {
    console.log(error)
    return false
  }
}
