import { acceptHMRUpdate, defineStore } from 'pinia'
import type { LessonPackBriefList } from '~/types'

export interface LessonPacksState {
  lessonPacks: LessonPackBriefList
  loadingLessonPacks: boolean
}

export const useLessonPacksStore = defineStore('lesson-packs', {
  state: (): LessonPacksState => ({
    lessonPacks: [],
    loadingLessonPacks: true,
  }),

  actions: {
    setLessonPacks(packs: LessonPackBriefList) {
      this.lessonPacks = packs
    },
    setLoadingLessonPacks(loading: boolean) {
      this.loadingLessonPacks = loading
    },

    getLessonPackName(packId: string) {
      return this.lessonPacks.find(lp => lp.id === packId)?.name
    },

  },

})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLessonPacksStore, import.meta.hot))
