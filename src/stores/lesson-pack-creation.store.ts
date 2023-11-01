import { acceptHMRUpdate, defineStore } from 'pinia'
import type { ResourceType } from '~/types'

export interface LessonPackCreationState {
  resourceIds: number[]
  resources: {
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
  newResourcePackTextualData: {
    name: string
    description: string
    price: string
    coverImage: File | null
  }

}

export const useLessonPackCreationStore = defineStore('lesson-packs-creation', {
  state: (): LessonPackCreationState => ({
    inAddMode: false,
    resources: {},
    resourceIds: [],
    newResourcePackTextualData: {
      description: '',
      name: '',
      price: '',
      coverImage: null,
    },
  }),
  actions: {

    setAddMode(mode: boolean) {
      this.inAddMode = mode
    },

    resetAddMode() {
      this.inAddMode = false
      this.resources = {}
    },

    addResourceId(resourceId: number) {
      this.resourceIds.push(resourceId)
    },

    removeResourceId(resourceId: number) {
      console.log('Old resource ids', this.resourceIds)
      this.resourceIds = this.resourceIds.filter(id => id !== resourceId)
      console.log('New resource ids', this.resourceIds)
      return this.resourceIds
    },

    isResourceSelectedAsAResource(resourceId: number) {
      return this.resourceIds.includes(resourceId)
    },

    getAllResourceIds() {
      return this.resourceIds
    },

    setResourceDetails(resourceDetailsList: {
      id: number
      name: string
      url: string
      thumbnail_url: string | null
      type: ResourceType
      folder_id: number
      weeklySessionId: string | null
    }[]) {
      this.resources = {}
      resourceDetailsList.forEach((resource) => {
        this.resources[resource.id] = resource
      })
    },

    setCoverImage(coverImage: File) {
      this.newResourcePackTextualData.coverImage = coverImage
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLessonPackCreationStore, import.meta.hot))
