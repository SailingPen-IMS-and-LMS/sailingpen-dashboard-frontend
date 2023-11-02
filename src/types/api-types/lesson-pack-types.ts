import type { ResourceType } from './library-types'

export interface LessonPackBrief {
  id: string
  name: string
  description: string
  price: string
  created_at: string
  updated_at: string
  tutor_id: string
  cover_image_url: string | null
}

export type LessonPackBriefList = LessonPackBrief[]

export interface LessonPackDetailed {
  id: string
  name: string
  description: string
  price: string
  created_at: string
  updated_at: string
  tutor_id: string
  cover_image_url: string | null
  tutor: {
    user: {
      f_name: string
      l_name: string
    }
  }
  resources: {
    name: string
    id: number
    thumbnail_url?: string
    type: ResourceType
    url: string
  }[]
}
