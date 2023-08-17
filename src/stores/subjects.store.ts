import { defineStore } from 'pinia'
import type { ListOfSubjectDetails } from '~/types'

export interface SubjectsState {
  subjects: ListOfSubjectDetails
  loadingSubjects: boolean
}

export const useSubjectsStore = defineStore('subjects', {
  state: (): SubjectsState => ({
    subjects: [],
    loadingSubjects: true,
  }),

  actions: {
    setSubjects(classes: ListOfSubjectDetails) {
      this.subjects = classes
    },

    setLoadingSubjects(loading: boolean) {
      this.loadingSubjects = loading
    },
  },
})
