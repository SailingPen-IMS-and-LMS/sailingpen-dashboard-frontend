import { defineStore } from 'pinia'
import type { ListOfTutionClassDetails } from '~/types'

export interface TutionClassesState {
  tutionClasses: ListOfTutionClassDetails
  loadingTutionClasses: boolean
}

export const useTutionClassesStore = defineStore('tution-classes', {
  state: (): TutionClassesState => ({
    tutionClasses: [],
    loadingTutionClasses: true,
  }),

  actions: {
    setTutionClasses(classes: ListOfTutionClassDetails) {
      this.tutionClasses = classes
    },

    setLoadingTutionClasses(loading: boolean) {
      this.loadingTutionClasses = loading
    },
  },
})
