import { authenticatedInstance } from '../instance'
import type { LessonPackBriefList } from '~/types'

export async function getTutorsLEssonPacks() {
  try {
    const result = await authenticatedInstance().get<LessonPackBriefList>('/lesson-packs')
    if (result.status === 200)
      return result.data

    return undefined
  }
  catch (error) {
    console.log(error)
    return undefined
  }
}
