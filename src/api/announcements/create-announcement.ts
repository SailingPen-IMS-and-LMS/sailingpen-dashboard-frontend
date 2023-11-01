import { authenticatedInstance } from '../instance'

interface CreateAnnouncementDto {
  title: string
  content: string
  tution_class_id: string
}

export async function createAnnouncement(data: CreateAnnouncementDto) {
  try {
    const response = await authenticatedInstance().post('/announcements/create', data)
    if (response.status === 201)
      return true

    return false
  }
  catch (error) {
    console.log(error)
    return false
  }
}
