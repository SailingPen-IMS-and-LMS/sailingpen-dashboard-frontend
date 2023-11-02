import { authenticatedInstance } from '../instance'
import type { LessonPackDetailed } from '../../types'

export async function getMoreDetails(lessonPackId: string) {
  try {
    const result = await authenticatedInstance().get<LessonPackDetailed>(`/lesson-packs/${lessonPackId}/more-details`)
    if (result.status === 200)
      return result.data

    return undefined
  }
  catch (error) {
    console.log(error)
    return undefined
  }
}
