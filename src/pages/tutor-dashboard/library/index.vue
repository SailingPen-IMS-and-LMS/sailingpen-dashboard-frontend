<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { NButton, NInput, NModal } from '@nethren-ui/vue'
import PageHeading from '~/components/common/PageHeading.vue'
import ContextMenu from '~/components/common/ContextMenu.vue'
import CircularProgress from '~/components/common/CircularProgress.vue'
import FolderThumbnail from '~/components/common/FolderThumbnail.vue'
import FileThumbnail from '~/components/common/FileThumbnail.vue'
import { api } from '~/api'
import type { LibraryRootFolder, ResourceResults } from '~/types'
import { ResourceType } from '~/types'
import { useUploadsStore } from '~/stores'

const fileInput = ref<HTMLInputElement>()
const files = ref<Array<{
  file: File
  type: ResourceType
}>>([])

function getFileType(mimeType: string): ResourceType {
  if (mimeType.startsWith('image'))
    return ResourceType.IMAGE

  else if (mimeType.startsWith('video'))
    return ResourceType.VIDEO

  else if (mimeType.includes('pdf'))
    return ResourceType.DOCUMENT

  return ResourceType.DOCUMENT
}

const loadingRootFoldersChildrenFolders = ref(false)
const rootFolderChildrenFolders = ref<LibraryRootFolder>({
  root_folder_id: 0,
  folders: [],
})
const resources = ref<ResourceResults>([])

const uploadsStore = useUploadsStore()
const { uploads } = storeToRefs(uploadsStore)
function onFilesSelect(e: InputEvent) {
  const targetEl = e.target as HTMLInputElement
  const selectedFiles = targetEl.files
  if (selectedFiles) {
    const selectedFilesArray = Array.from(selectedFiles)
    files.value = selectedFilesArray.map(f => ({ file: f, type: getFileType(f.type) }))
    files.value.forEach((f) => {
      uploadsStore.addNewUpload(f.file.name, f.type)
    })
    console.log(uploads.value)
    selectedFilesArray.forEach(async (file) => {
      console.log(file)
      if (rootFolderChildrenFolders.value?.root_folder_id) {
        const result = await api.library.resources.imageOrDocumentCreate(rootFolderChildrenFolders.value?.root_folder_id, {
          file,
        })
        uploadsStore.removeUpload(file.name)
        if (result)
          resources.value = result
      }
    })
  }
}

async function loadFolderStructure() {
  try {
    const folderResponse = await api.library.folders.root()
    console.log(folderResponse)
    if (folderResponse) {
      rootFolderChildrenFolders.value = folderResponse
    }
    else {
      rootFolderChildrenFolders.value = {
        root_folder_id: 0,
        folders: [],
      }
    }
  }
  catch (e) {
    console.log(e)
  }
}

async function loadFolderDocumentAndImageResources() {
  try {
    const resourcesResponse = await api.library.resources.imageOrDocumentGet(rootFolderChildrenFolders.value.root_folder_id)
    if (resourcesResponse)
      resources.value = resourcesResponse
  }
  catch (e) {
    console.log(e)
  }
}

onMounted(async () => {
  loadingRootFoldersChildrenFolders.value = true
  try {
    await loadFolderStructure()
    await loadFolderDocumentAndImageResources()
  }
  catch (e) {
    console.log(e)
  }
  finally {
    loadingRootFoldersChildrenFolders.value = false
  }
})
const newFolderName = ref('')
const addFolderModal = ref<InstanceType<typeof NModal>>()
const loadingCreatingFolder = ref(false)

async function createFolder() {
  if (!newFolderName.value || newFolderName.value === '')
    alert('Folder name must not be empty')

  try {
    loadingCreatingFolder.value = true
    const response = await api.library.folders.create({
      name: newFolderName.value,
      parent_folder_id: rootFolderChildrenFolders.value?.root_folder_id as number,
    })
    if (response) {
      if (rootFolderChildrenFolders.value)
        rootFolderChildrenFolders.value.folders = response
      addFolderModal.value?.closeModal()
      newFolderName.value = ''
    }
  }
  catch (error) {
    console.log(error)
  }
  finally {
    loadingCreatingFolder.value = false
  }
  console.log('Folder created', newFolderName.value)
}
</script>

<template>
  <div class="library-page relative min-h-[calc(100vh-60px)]">
    <PageHeading>
      Library
    </PageHeading>
    <svg-spinners-180-ring
      v-if="loadingRootFoldersChildrenFolders"
      class="absolute left-1/2 top-1/2 translate-[-50%] text-[48px] text-[rgba(0,0,0,0.3)]"
    />
    <div v-else-if="(rootFolderChildrenFolders.folders.length > 0) || resources.length > 0" class="library-grid mt-8">
      <FolderThumbnail v-for="folder in rootFolderChildrenFolders.folders" :key="folder.id" :folder="folder" />
      <FileThumbnail v-for="resource in resources" :key="resource.id" :file="resource" />
    </div>
    <p v-else class="absolute left-1/2 top-1/2 flex translate-[-50%] items-center justify-center text-center text-[48px] text-[rgba(0,0,0,0.3)]">
      No folder or files yet <br> Right click to add
    </p>
  </div>
  <ContextMenu container=".library-page">
    <ul class="flex flex-col cursor-pointer rounded-[0.375rem] p-[0.125rem] shadow-md transition">
      <li
        class="flex items-center gap-4 px-4 py-2 transition active:bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.1)]"
        @click="fileInput?.click()"
      >
        <material-symbols-upload-rounded />
        Upload
        <input
          ref="fileInput" multiple type="file" class="hidden"
          accept=".pdf,.mp4,.mkv,.mov,.avi,.flv,.ts,.ps,.mxf,.lxf,.gxf,.3gp,.webm,.mpg,.qt,.png,.jpg"
          @change="(e) => onFilesSelect(e as InputEvent)"
        >
      </li>
      <li
        class="flex items-center gap-4 rounded-[0.375rem] px-4 py-2 transition active:bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.1)]"
        @click="addFolderModal?.openModal()"
      >
        <material-symbols-upload-rounded />
        Create new folder
        <NModal ref="addFolderModal" :close-on-outside-click="false">
          <template #modal-header>
            <h1 class="text-xl font-semibold">
              Enter folder name
            </h1>
          </template>
          <template #modal-body>
            <form class="flex flex-col gap-4" @submit.prevent="createFolder">
              <NInput
                id="new_folder_name" v-model="newFolderName" label="Enter folder name" name="new_folder_name"
                :label-attrs="{ style: { display: 'none' } }" required
              />
              <div class="flex items-center justify-end gap-4">
                <NButton mode="text" color="danger" type="button" @click="addFolderModal?.closeModal()">
                  Cancel
                </NButton>
                <NButton :is-loading="loadingCreatingFolder" loading-text="Creating">
                  Confirm
                </NButton>
              </div>
            </form>
          </template>
        </NModal>
      </li>
    </ul>
  </ContextMenu>
  <div v-if="uploads.length > 0" class="absolute bottom-8 right-8 rounded-[0.375rem] shadow-lg">
    <p class="bg-[var(--color-primary)] px-4 py-2 text-white" style="border-radius: 0.375rem 0.375rem 0 0;">
      Uploading files
    </p>
    <ul class="max-h-[200px] overflow-y-auto">
      <li v-for="{ name, progress, type } in uploads" :key="name" class="flex items-center gap-4 px-4 py-2">
        <streamline-entertainment-play-list1-screen-television-display-player-movies-movie-tv-media-players-video
          v-if="type === 'video'"
        />
        <StreamlineImagePictureLandscape2PhotosPhotoLandscapePicturePhotographyCameraPictures
          v-else-if="type === 'image'"
        />
        <fluent-document-pdf-24-regular v-else-if="type === 'document'" />
        <span style="text-overflow: ellipsis; white-space: nowrap;overflow: hidden; width: 250px;">
          {{ name }}
        </span>
        <CircularProgress
          v-if="progress < 100" style="max-width: 16px;max-height: 16px;" fill-color="#4647D3"
          :percent="progress"
        />
        <material-symbols-check-circle-outline-rounded v-else class="text-[var(--n-color-success-400)]" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.library-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @include mq(md) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }

  @include mq(lg) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  @include mq(xl) {
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
  }
}
</style>
