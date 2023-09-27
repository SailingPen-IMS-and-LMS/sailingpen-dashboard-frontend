<script setup lang="ts">
import { NButton, NInput, NModal } from '@nethren-ui/vue'
import PageHeading from '~/components/common/PageHeading.vue'
import ContextMenu from '~/components/common/ContextMenu.vue'
import CircularProgress from '~/components/common/CircularProgress.vue'
import FolderThumbnail from '~/components/common/FolderThumbnail.vue'
import { api } from '~/api'
import type { LibraryFolderChildrenFolders } from '~/types'

const route = useRoute()
const params = route.params
console.log(params)
const folderId = ref(params.folderId as string)

const fileInput = ref<HTMLInputElement>()
const files = ref<Array<{
  file: File
  type: 'video' | 'image' | 'document'
}>>([])

function getFileType(mimeType: string) {
  if (mimeType.startsWith('image'))
    return 'image'

  else if (mimeType.startsWith('video'))
    return 'video'

  else if (mimeType.includes('pdf'))
    return 'document'

  return 'document'
}

function onFilesSelect(e: InputEvent) {
  const targetEl = e.target as HTMLInputElement
  const selectedFiles = targetEl.files
  if (selectedFiles) {
    const selectedFilesArray = Array.from(selectedFiles)
    files.value = selectedFilesArray.map(f => ({ file: f, type: getFileType(f.type) }))
    files.value.forEach((f) => {
      console.log(f)
    })
  }
}

const loadingFoldersChildrenFolders = ref(false)
const folderChildren = ref<LibraryFolderChildrenFolders>([])

async function loadFolderStructure() {
  try {
    loadingFoldersChildrenFolders.value = true
    const folderResponse = await api.library.folders.getChildren(Number(folderId.value))
    if (folderResponse)
      folderChildren.value = folderResponse
  }
  catch (e) {
    console.log(e)
  }
  finally {
    loadingFoldersChildrenFolders.value = false
  }
}

onMounted(async () => {
  await loadFolderStructure()
})

watch(route, async (newVal) => {
  if (route.fullPath !== '/tutor-dashboard/library') {
    folderId.value = newVal.params.folderId as string
    await loadFolderStructure()
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
      parent_folder_id: Number(folderId.value),
    })
    if (response) {
      folderChildren.value = response
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
      v-if="loadingFoldersChildrenFolders"
      class="absolute left-1/2 top-1/2 translate-[-50%] text-[48px] text-[rgba(0,0,0,0.3)]"
    />
    <div v-else-if="!loadingFoldersChildrenFolders && folderChildren.length > 0" class="library-grid mt-8">
      <FolderThumbnail v-for="folder in folderChildren" :key="folder.id" :folder="folder" />
    </div>
    <p v-else class="absolute left-1/2 top-1/2 flex translate-[-50%] items-center justify-center text-center text-[48px] text-[rgba(0,0,0,0.3)]">
      No folder or files yet <br> Right click to add
    </p>

    <div v-if="files.length > 0" class="absolute bottom-8 right-8 rounded-[0.375rem] shadow-lg">
      <p class="bg-[var(--color-primary)] px-4 py-2 text-white" style="border-radius: 0.375rem 0.375rem 0 0;">
        Uploading files
      </p>
      <ul class="max-h-[200px] overflow-y-auto">
        <li v-for="{ file, type } in files" :key="file.name" class="flex items-center gap-4 px-4 py-2">
          <streamline-entertainment-play-list1-screen-television-display-player-movies-movie-tv-media-players-video
            v-if="type === 'video'"
          />
          <StreamlineImagePictureLandscape2PhotosPhotoLandscapePicturePhotographyCameraPictures
            v-else-if="type === 'image'"
          />
          <fluent-document-pdf-24-regular v-else-if="type === 'document'" />
          <span style="text-overflow: ellipsis; white-space: nowrap;overflow: hidden; width: 250px;">
            {{ file.name }}
          </span>
          <CircularProgress style="max-width: 16px;max-height: 16px;" fill-color="#4647D3" />
        </li>
      </ul>
    </div>
    <ContextMenu container=".library-page">
      <ul class="flex flex-col cursor-pointer rounded-[0.375rem] p-[0.125rem] shadow-md">
        <li
          class="flex items-center gap-4 rounded-[0.375rem] px-4 py-2 transition active:bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.1)]"
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
