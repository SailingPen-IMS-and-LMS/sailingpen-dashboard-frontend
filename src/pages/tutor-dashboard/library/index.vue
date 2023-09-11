<script setup lang="ts">
import PageHeading from '~/components/common/PageHeading.vue'
import ContextMenu from '~/components/common/ContextMenu.vue'
import CircularProgress from '~/components/common/CircularProgress.vue'

const fileInput = ref<HTMLInputElement>()
const files = ref<Array<{
  file: File
  type: 'video' | 'image' | 'document'
}>>([])

const demoFiles = ref<Array<{
  name: string
  type: 'video' | 'image' | 'document'
}>>([{
  name: 'File 1.mp4',
  type: 'video',
}, {
  name: 'File 2.pdf',
  type: 'document',
}, {
  name: 'File 3.jpg',
  type: 'image',
}, {
  name: 'File 1efjkvb348931bvvvq4278923190235.mp4',
  type: 'video',
}, {
  name: 'File 1wfvhu2b4ervb2u4ervjevu24.pdf',
  type: 'document',
}, {
  name: 'File erhcn3ngirugeiuwgiueiugruiui.png',
  type: 'image',
}])

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
</script>

<template>
  <div class="library-page relative min-h-[calc(100vh-60px)]">
    <PageHeading>
      Library
    </PageHeading>
  </div>
  <ContextMenu container=".library-page">
    <ul
      class="flex flex-col cursor-pointer rounded-[0.375rem] p-[0.125rem] shadow-md transition active:bg-[rgba(0,0,0,0.2)] hover:bg-[rgba(0,0,0,0.1)]"
    >
      <li class="flex items-center gap-4 px-4 py-2" @click="fileInput?.click()">
        <material-symbols-upload-rounded />
        Upload
        <input
          ref="fileInput" multiple type="file" class="hidden"
          accept=".pdf,.mp4,.mkv,.mov,.avi,.flv,.ts,.ps,.mxf,.lxf,.gxf,.3gp,.webm,.mpg,.qt,.png,.jpg"
          @change="(e) => onFilesSelect(e as InputEvent)"
        >
      </li>
    </ul>
  </ContextMenu>
  <div v-if="files.length > 0" class="absolute bottom-8 right-8 rounded-[0.375rem] shadow-lg">
    <p class="bg-[var(--color-primary)] px-4 py-2 text-white" style="border-radius: 0.375rem 0.375rem 0 0;">
      Uploading files
    </p>
    <ul class="max-h-[200px] overflow-y-auto">
      <li v-for="{ file, type } in files" :key="file.name" class="flex items-center gap-4 px-4 py-2">
        <streamline-entertainment-play-list1-screen-television-display-player-movies-movie-tv-media-players-video v-if="type === 'video'" />
        <StreamlineImagePictureLandscape2PhotosPhotoLandscapePicturePhotographyCameraPictures v-else-if="type === 'image'" />
        <fluent-document-pdf-24-regular v-else-if="type === 'document'" />
        <span style="text-overflow: ellipsis; white-space: nowrap;overflow: hidden; width: 250px;">
          {{ file.name }}
        </span>
        <CircularProgress style="max-width: 16px;max-height: 16px;" fill-color="#4647D3" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
