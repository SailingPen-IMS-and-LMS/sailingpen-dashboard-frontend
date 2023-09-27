import { acceptHMRUpdate, defineStore } from 'pinia'
import type { ResourceType } from '~/types'

export interface UploadsState {
  uploads: {
    name: string
    type: ResourceType
    progress: number
  }[]
}

export const useUploadsStore = defineStore('uploads', {
  state: (): UploadsState => ({
    uploads: [],
  }),

  actions: {
    addNewUpload(name: string, type: ResourceType) {
      this.uploads.push({ name, progress: 0, type })
    },
    removeUpload(name: string) {
      const index = this.uploads.findIndex(u => u.name === name)
      if (index >= 0)
        this.uploads.splice(index)
    },

    setProgress(name: string, progress: number) {
      const upload = this.uploads.find(u => u.name === name)
      if (upload)
        upload.progress = progress
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUploadsStore, import.meta.hot))
