import { acceptHMRUpdate, defineStore } from 'pinia'
import type { LibraryFolderStructure } from '~/types'

export interface LibraryState {
  folders: LibraryFolderStructure
  loadingFolders: boolean
}

export const useLibraryStore = defineStore('library', {
  state: (): LibraryState => ({
    folders: [],
    loadingFolders: true,
  }),

  actions: {
    setFolders(folders: LibraryFolderStructure) {
      this.folders = folders
    },

    setLoadingFolders(loading: boolean) {
      this.loadingFolders = loading
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useLibraryStore, import.meta.hot))
