import { acceptHMRUpdate, defineStore } from 'pinia'

export interface WeeklySessionsCreationState {
  inCreationProgressWeeklySessions: Record<string, {
    description: string
    video_id: number
    attachment_ids: string[]
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
    },

    setVideoId(date: string, id: number) {
      if (this.inCreationProgressWeeklySessions[date])
        this.inCreationProgressWeeklySessions[date].video_id = id
    },

    getVideoId(date: string) {
      if (this.inCreationProgressWeeklySessions[date])
        return this.inCreationProgressWeeklySessions[date].video_id
      return 0
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useWeeklySessionsCreationStore, import.meta.hot))
