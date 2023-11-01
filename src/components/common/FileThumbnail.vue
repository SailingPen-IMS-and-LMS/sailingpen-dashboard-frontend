<script setup lang="ts">
import { toRefs } from 'vue'
import { NButton, NModal } from '@nethren-ui/vue'
import { useRoute, useRouter } from 'vue-router'
import type { ResourceResult } from '~/types'
import { useLessonPackCreationStore, useWeeklySessionsCreationStore } from '~/stores'
import { api } from '~/api'

const props = defineProps<{
  file: ResourceResult
}>()

const { file } = toRefs(props)

const route = useRoute()
const router = useRouter()

const hasJustMounted = ref(true)

const weeklySessionsCreationStore = useWeeklySessionsCreationStore()
// const { inCreationProgressWeeklySessions } = storeToRefs(weeklySessionsCreationStore)
const lessonPackCreationStore = useLessonPackCreationStore()

const isInVideoSelectionMode = computed(() => {
  return !!(route.query && route.query.mode && route.query.mode === 'add_video')
})

const isInAttachmentsSelectionMode = computed(() => {
  return !!(route.query && route.query.mode && route.query.mode === 'add_attachments')
})

const isInLessonPackResourcesSelectionMode = computed(() => {
  return !!(route.query && route.query.mode && route.query.mode === 'add_lesson_pack_resources')
})

const selectedForVideo = ref(false)
const selectedForAttachments = ref(false)
const selectedForLessonPackResources = ref(false)

const videoSelectConfirmModal = ref<InstanceType<typeof NModal>>()
const attachmentSelectConfirmModal = ref<InstanceType<typeof NModal>>()
const lessonPackResourceSelectConfirmModal = ref<InstanceType<typeof NModal>>()

const isVideoDetailsLoading = ref(false)
const isAttachmentsDetailsLoadingForMore = ref(false)
const isAttachmentsDetailsLoadingForEnd = ref(false)
const isLessonPackResourcesDetailsLoadingForMore = ref(false)
const isLessonPackResourcesDetailsLoadingForEnd = ref(false)

watch(selectedForVideo, (newVal) => {
  if (newVal)
    weeklySessionsCreationStore.setVideoId(route.query.date as string, file.value.id)
  else if (weeklySessionsCreationStore.getVideoId(route.query.date as string) === file.value.id)
    weeklySessionsCreationStore.setVideoId(route.query.date as string, 0)
})

watch(selectedForAttachments, async (newVal) => {
  if (!hasJustMounted.value) {
    if (newVal) {
      weeklySessionsCreationStore.addResourceId(route.query.date as string, file.value.id)
      attachmentSelectConfirmModal.value?.openModal()
    }
    else {
      console.log('Got here')
      weeklySessionsCreationStore.removeResourceId(route.query.date as string, file.value.id)
      const result = await api.tutionClasses.weeklySessions.resources.attachments.getAttachmentDetailsByResourceIds(weeklySessionsCreationStore.getAllResourceIds(route.query.date as string))
      if (!result) {
        alert('Attachments are not valid')
        return
      }
      console.log(result)
      weeklySessionsCreationStore.setAttachmentDetails(route.query.date as string, result)
    }
  }
})

watch(selectedForLessonPackResources, async (newVal) => {
  if (!hasJustMounted.value) {
    if (newVal) {
      lessonPackCreationStore.addResourceId(file.value.id)
      lessonPackResourceSelectConfirmModal.value?.openModal()
    }
    else {
      const resourceIds = lessonPackCreationStore.removeResourceId(file.value.id)
      console.log(resourceIds)
      const result = await api.tutionClasses.weeklySessions.resources.attachments.getAttachmentDetailsByResourceIds(resourceIds)
      if (!result) {
        alert('Resources are not valid')
        return
      }
      lessonPackCreationStore.setResourceDetails(result)
    }
  }
})

const selectedVideoId = computed(() => {
  if (route.query.date && typeof route.query.date === 'string')
    return weeklySessionsCreationStore.inCreationProgressWeeklySessions[route.query.date].video_id
  else
    return 0
})

watch(selectedVideoId, async (newId) => {
  if (newId !== file.value.id)
    selectedForVideo.value = false
  else if (newId && newId === file.value.id)
    videoSelectConfirmModal.value?.openModal()
})

async function onVideoSelectionConfirmation() {
  try {
    isVideoDetailsLoading.value = true
    const result = await api.tutionClasses.weeklySessions.resources.getVideoDetails(file.value.id)
    if (!result)
      alert('Video not found')
    console.log(result)
    weeklySessionsCreationStore.setVideoDetails(route.query.date as string, result || null)
    await router.push(`/tutor-dashboard/my-classes/${route.query.class_id as string}/home#wsc-${route.query.date as string}`)
  }
  catch (e) {
    console.log(e)
  }
  finally {
    isVideoDetailsLoading.value = false
  }
}

async function onAttachmentSelectionConfirmation() {
  try {
    isAttachmentsDetailsLoadingForMore.value = true
    const result = await api.tutionClasses.weeklySessions.resources.attachments.getAttachmentDetailsByResourceIds(weeklySessionsCreationStore.getAllResourceIds(route.query.date as string))
    if (!result || result?.length === 0) {
      alert('Attachments are not valid')
      return
    }
    console.log(result)
    weeklySessionsCreationStore.setAttachmentDetails(route.query.date as string, result)
    attachmentSelectConfirmModal.value?.closeModal()
  }
  catch (e) {
    console.log(e)
  }
  finally {
    isAttachmentsDetailsLoadingForMore.value = false
  }
}

async function onAttachmentSelectionEndConfirm() {
  try {
    isAttachmentsDetailsLoadingForEnd.value = true
    const result = await api.tutionClasses.weeklySessions.resources.attachments.getAttachmentDetailsByResourceIds(weeklySessionsCreationStore.getAllResourceIds(route.query.date as string))
    if (!result || result?.length === 0) {
      alert('Attachments are not valid')
      return
    }
    console.log(result)
    weeklySessionsCreationStore.setAttachmentDetails(route.query.date as string, result)
    attachmentSelectConfirmModal.value?.closeModal()
    await router.push(`/tutor-dashboard/my-classes/${route.query.class_id as string}/home#wsc-${route.query.date as string}`)
  }
  catch (e) {
    console.log(e)
  }
  finally {
    isAttachmentsDetailsLoadingForEnd.value = false
  }
}

async function onLessonPackResourceSelectionConfirmation() {
  try {
    isLessonPackResourcesDetailsLoadingForMore.value = true
    const result = await api.tutionClasses.weeklySessions.resources.attachments.getAttachmentDetailsByResourceIds(lessonPackCreationStore.getAllResourceIds())
    if (!result || result?.length === 0) {
      alert('Resources are not valid')
      return
    }
    lessonPackCreationStore.setResourceDetails(result)
    lessonPackResourceSelectConfirmModal.value?.closeModal()
  }
  catch (e) {
    console.log(e)
  }
  finally {
    isLessonPackResourcesDetailsLoadingForMore.value = false
  }
}

async function onLessonPackResourceSelectionEndConfirm() {
  try {
    isLessonPackResourcesDetailsLoadingForEnd.value = true

    const result = await api.tutionClasses.weeklySessions.resources.attachments.getAttachmentDetailsByResourceIds(lessonPackCreationStore.getAllResourceIds())
    if (!result || result?.length === 0) {
      alert('Resources are not valid')
      return
    }
    console.log(result)
    lessonPackCreationStore.setResourceDetails(result)
    lessonPackResourceSelectConfirmModal.value?.closeModal()
    await router.push('/tutor-dashboard/lesson-packs')
  }
  catch (e) {
    console.log(e)
  }
  finally {
    isLessonPackResourcesDetailsLoadingForEnd.value = false
  }
}

onMounted(() => {
  if (isInVideoSelectionMode.value && weeklySessionsCreationStore.getVideoId(route.query.date as string) === file.value.id)
    selectedForVideo.value = true
  if (isInAttachmentsSelectionMode.value && weeklySessionsCreationStore.isResourceSelectedAsAnAttachment(route.query.date as string, file.value.id))
    selectedForAttachments.value = true
  if (isInLessonPackResourcesSelectionMode.value && lessonPackCreationStore.isResourceSelectedAsAResource(file.value.id))
    selectedForLessonPackResources.value = true
  setTimeout(() => {
    hasJustMounted.value = false
  }, 1000)
})
</script>

<template>
  <div
    class="relative flex flex-col cursor-pointer items-center gap-4 rounded-[0.375rem] p-4 transition lg:max-h-[196px] lg:max-w-[196px] active:bg-[rgba(0,0,200,0.2)] hover:bg-[rgba(0,0,200,0.1)]"
  >
    <fluent-document-pdf-24-regular
      v-if="file.type === 'document'"
      class="h-[100px] w-[100px] text-[rgba(0,0,200,0.1)]"
    />
    <img
      v-else-if="file.type === 'image'" class="h-[100px] w-[100px] text-[rgba(0,0,200,0.1)]" :src="file.url"
      :alt="file.name"
    >
    <div v-else-if="file.type === 'video'" class="relative">
      <ic-outline-play-circle class="absolute left-[50%] top-[50%] text-3xl -translate-[50%]" />
      <img class="h-[100px] w-[100px] text-[rgba(0,0,200,0.1)]" :src="file.thumbnail_url" :alt="file.name">
    </div>
    <p
      class="text-md select-none text-center lg:w-[164px]"
      style="text-overflow: ellipsis; white-space: nowrap;overflow: hidden;"
    >
      {{ file.name }}
    </p>
    <input
      v-if="isInVideoSelectionMode && file.type === 'video'" v-model="selectedForVideo" type="checkbox"
      class="absolute left-4 top-4 h-[24px] w-[24px]"
    >
    <input
      v-if="isInAttachmentsSelectionMode && (file.type === 'document' || file.type === 'image')"
      v-model="selectedForAttachments" type="checkbox" class="absolute left-4 top-4 h-[24px] w-[24px]"
    >
    <input
      v-if="isInLessonPackResourcesSelectionMode" v-model="selectedForLessonPackResources" type="checkbox"
      class="absolute left-4 top-4 h-[24px] w-[24px]"
    >
  </div>
  <NModal v-if="isInVideoSelectionMode" ref="videoSelectConfirmModal" :close-on-outside-click="false">
    <template #modal-header>
      Do you want to select this file?
    </template>
    <template #modal-body>
      <div class="flex flex-col items-center justify-center gap-4">
        <img :src="file.thumbnail_url" :alt="file.name" class="h-[90px] w-[160px] rounded-sm">
        <p>
          {{
            file.name
          }}
        </p>
      </div>
      <div class="mt-4 flex items-center justify-center gap-4">
        <NButton mode="text" color="danger" @click="videoSelectConfirmModal?.closeModal()">
          No
        </NButton>
        <NButton
          :is-loading="isVideoDetailsLoading" loading-text="Getting video info"
          @click="onVideoSelectionConfirmation"
        >
          Yes
        </NButton>
      </div>
    </template>
  </NModal>
  <NModal v-if="isInAttachmentsSelectionMode" ref="attachmentSelectConfirmModal" :close-on-outside-click="false">
    <template #modal-header>
      Do you want to select other attachment?
    </template>
    <template #modal-body>
      <div class="flex flex-col items-center justify-center gap-4">
        <img v-if="file.type === 'image'" :src="file.url" :alt="file.name" class="h-[90px] w-[160px] rounded-sm">
        <img
          v-if="file.type === 'document'" src="../../assets/images/pdf-icon.png" :alt="file.name"
          class="h-[90px] w-[90px] rounded-sm"
        >
        <p>
          {{
            file.name
          }}
        </p>
      </div>
      <div class="mt-4 flex items-center justify-center gap-4">
        <NButton
          :is-loading="isAttachmentsDetailsLoadingForEnd" loading-text="Getting attachments info" mode="text"
          color="danger" @click="onAttachmentSelectionEndConfirm"
        >
          No, Let's publish this
        </NButton>
        <NButton
          :is-loading="isAttachmentsDetailsLoadingForMore" loading-text="Getting attachments info"
          @click="onAttachmentSelectionConfirmation"
        >
          Yes, let me select more
        </NButton>
      </div>
    </template>
  </NModal>
  <NModal
    v-if="isInLessonPackResourcesSelectionMode" ref="lessonPackResourceSelectConfirmModal"
    :close-on-outside-click="false"
  >
    <template #modal-header>
      Do you want to select other resouces?
    </template>
    <template #modal-body>
      <div class="flex flex-col items-center justify-center gap-4">
        <img v-if="file.type === 'image'" :src="file.url" :alt="file.name" class="h-[90px] w-[160px] rounded-sm">
        <img
          v-if="file.type === 'document'" src="../../assets/images/pdf-icon.png" :alt="file.name"
          class="h-[90px] w-[90px] rounded-sm"
        >
        <p>
          {{
            file.name
          }}
        </p>
      </div>
      <div class="mt-4 flex items-center justify-center gap-4">
        <NButton
          :is-loading="isLessonPackResourcesDetailsLoadingForEnd" loading-text="Getting resources info" mode="text"
          color="danger" @click="onLessonPackResourceSelectionEndConfirm"
        >
          No, I've selected enough
        </NButton>
        <NButton
          :is-loading="isLessonPackResourcesDetailsLoadingForMore" loading-text="Getting resources info"
          @click="onLessonPackResourceSelectionConfirmation"
        >
          Yes, let me select more
        </NButton>
      </div>
    </template>
  </NModal>
</template>
