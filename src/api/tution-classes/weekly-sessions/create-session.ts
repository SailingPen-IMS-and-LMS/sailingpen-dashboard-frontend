import { authenticatedInstance } from '../../instance'

interface CreateWeeklySessionDto {
  video_resource_id: number
  attachment_ids: number[]
  description: string
  date: string
}

export async function createSession(data: CreateWeeklySessionDto, tutionClassId: string) {
  try {
    console.log(`tution_class_id=${tutionClassId}`)
    const result = await authenticatedInstance().post(`/tution-classes/weekly-sessions?tution_class_id=${tutionClassId}`, data)
    if (result.status === 201)
      return result.data
    return undefined
  }
  catch (error) {
    console.log(error)
    return undefined
  }
}
