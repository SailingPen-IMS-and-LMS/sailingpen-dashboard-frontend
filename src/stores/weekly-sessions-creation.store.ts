import { acceptHMRUpdate, defineStore } from 'pinia'
import type { ResourceType } from '~/types'

export interface WeeklySessionsCreationState {
  inCreationProgressWeeklySessions: Record<string, {
    description: string
    video_id: number
    video_details: {
      id: number
      name: string
      url: string
      thumbnail_url: string | null
      type: ResourceType
      folder_id: number
      weeklySessionId: string | null
    } | null
    attachment_ids: number[]
    attachments_details: {
      [id: number]: {
        id: number
        name: string
        url: string
        thumbnail_url: string | null
        type: ResourceType
        folder_id: number
        weeklySessionId: string | null
      }
    }
    inAddMode: boolean
  }>
}

export const useWeeklySessionsCreationStore = defineStore('weekly-sessions-creation', {
  state: (): WeeklySessionsCreationState => ({
    inCreationProgressWeeklySessions: {},
  }),

  actions: {

    setupAWeeklyResource(date: string) {
      this.inCreationProgressWeeklySessions[date] = {
        inAddMode: false,
        attachment_ids: [],
        description: '',
        video_id: 0,
        video_details: null,
        attachments_details: {},
      }
    },

    setAddMode(date: string, mode: boolean) {
      this.inCreationProgressWeeklySessions[date].inAddMode = mode
    },

    resetAddMode(date: string) {
      this.inCreationProgressWeeklySessions[date].inAddMode = false
      this.inCreationProgressWeeklySessions[date].video_id = 0
      this.inCreationProgressWeeklySessions[date].description = ''
      this.inCreationProgressWeeklySessions[date].attachment_ids = []
      this.inCreationProgressWeeklySessions[date].video_details = null
    },

    setVideoId(date: string, id: number) {
      if (this.inCreationProgressWeeklySessions[date])
        this.inCreationProgressWeeklySessions[date].video_id = id
    },

    setVideoDetails(date: string, details: WeeklySessionsCreationState['inCreationProgressWeeklySessions'][string]['video_details']) {
      this.inCreationProgressWeeklySessions[date].video_details = details
    },

    getVideoId(date: string) {
      if (this.inCreationProgressWeeklySessions[date])
        return this.inCreationProgressWeeklySessions[date].video_id
      return 0
    },
    addResourceId(date: string, attachment_id: number) {
      if (this.inCreationProgressWeeklySessions[date])
        this.inCreationProgressWeeklySessions[date].attachment_ids.push(attachment_id)
      console.log(this.inCreationProgressWeeklySessions[date].attachment_ids)
    },

    removeResourceId(date: string, attachment_id: number) {
      if (this.inCreationProgressWeeklySessions[date])
        this.inCreationProgressWeeklySessions[date].attachment_ids = this.inCreationProgressWeeklySessions[date].attachment_ids.filter(id => id !== attachment_id)
      console.log(this.inCreationProgressWeeklySessions[date].attachment_ids)
    },

    isResourceSelectedAsAnAttachment(date: string, attachment_id: number) {
      if (this.inCreationProgressWeeklySessions[date])
        return this.inCreationProgressWeeklySessions[date].attachment_ids.includes(attachment_id)
      return false
    },

    getAllResourceIds(date: string) {
      if (this.inCreationProgressWeeklySessions[date])
        return this.inCreationProgressWeeklySessions[date].attachment_ids
      return []
    },

    setAttachmentDetails(date: string, attachmentDetailsList: {
      id: number
      name: string
      url: string
      thumbnail_url: string | null
      type: ResourceType
      folder_id: number
      weeklySessionId: string | null
    }[]) {
      if (this.inCreationProgressWeeklySessions[date]) {
        this.inCreationProgressWeeklySessions[date].attachments_details = {}
        attachmentDetailsList.forEach((attachmentDetails) => {
          this.inCreationProgressWeeklySessions[date].attachments_details[attachmentDetails.id] = attachmentDetails
        })
      }
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useWeeklySessionsCreationStore, import.meta.hot))
