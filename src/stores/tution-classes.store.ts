import { acceptHMRUpdate, defineStore } from 'pinia'
import type { ListOfTutionClassDetails } from '~/types'

export interface TutionClassesState {
  tutionClasses: ListOfTutionClassDetails
  loadingTutionClasses: boolean
  myTutionClasses: ListOfTutionClassDetails
  loadingMyTutionClasses: boolean
}

export const useTutionClassesStore = defineStore('tution-classes', {
  state: (): TutionClassesState => ({
    tutionClasses: [],
    loadingTutionClasses: true,
    myTutionClasses: [],
    loadingMyTutionClasses: true,
  }),

  actions: {
    setTutionClasses(classes: ListOfTutionClassDetails) {
      this.tutionClasses = classes
    },

    setMyTutionClasses(classes: ListOfTutionClassDetails) {
      this.myTutionClasses = classes
    },
    setLoadingTutionClasses(loading: boolean) {
      this.loadingTutionClasses = loading
    },

    setLoadingMyTutionClasses(loading: boolean) {
      this.loadingMyTutionClasses = loading
    },

    getClassName(classId: string) {
      return this.myTutionClasses.find(c => c.class_id === classId)?.class_name
    }
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useTutionClassesStore, import.meta.hot))
