import { defineStore } from 'pinia'
import type { ListOfSubjectDetails, ListOfSubjectStream } from '~/types'

export interface SubjectsState {
  subjects: ListOfSubjectDetails
  loadingSubjects: boolean
  subjectStreams: ListOfSubjectStream
  loadingSubjectStreams: boolean
}

export const useSubjectsStore = defineStore('subjects', {
  state: (): SubjectsState => ({
    subjects: [],
    loadingSubjects: true,
    subjectStreams: [],
    loadingSubjectStreams: true,
  }),

  actions: {
    setSubjects(classes: ListOfSubjectDetails) {
      this.subjects = classes
    },

    setLoadingSubjects(loading: boolean) {
      this.loadingSubjects = loading
    },

    setSubjectStreams(streams: ListOfSubjectStream) {
      this.subjectStreams = streams
    },

    setLoadingSubjectStreams(loading: boolean) {
      this.loadingSubjectStreams = loading
    },
  },
})
