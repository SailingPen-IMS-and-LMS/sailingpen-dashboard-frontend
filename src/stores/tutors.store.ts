import { acceptHMRUpdate, defineStore } from 'pinia'
import type { ListOfTutorBasicDetails } from '~/types'

export interface TutorsState {
  tutors: ListOfTutorBasicDetails
  loadingTutors: boolean
}

export const useTutorsStore = defineStore('tutors', {
  state: (): TutorsState => ({
    tutors: [],
    loadingTutors: true,
  }),

  actions: {
    setTutors(classes: ListOfTutorBasicDetails) {
      this.tutors = classes
    },

    setLoadingTutors(loading: boolean) {
      this.loadingTutors = loading
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTutorsStore, import.meta.hot))
