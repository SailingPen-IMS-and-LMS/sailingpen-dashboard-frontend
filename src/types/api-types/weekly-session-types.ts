import type { ResourceType } from './library-types'

export interface Attachment {
  id: number
  name: string
  url: string
  thumbnail_url: string | null
  type: ResourceType
}

export interface WeeklySession {
  attachments: Attachment[]
  description: string
  id: string
  video_url: string
  video_thumbnail_url: string
  date: string
}

export type WeeklySessions = WeeklySession[]
