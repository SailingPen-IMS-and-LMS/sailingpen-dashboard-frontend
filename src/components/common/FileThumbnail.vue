<script setup lang="ts">
import { toRefs } from 'vue'
import { NButton, NModal } from '@nethren-ui/vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import type { ResourceResult } from '~/types'
import { useWeeklySessionsCreationStore } from '~/stores'

const props = defineProps<{
  file: ResourceResult
}>()

const { file } = toRefs(props)

const route = useRoute()
const router = useRouter()

const weeklySessionsCreationStore = useWeeklySessionsCreationStore()
const { inCreationProgressWeeklySessions } = storeToRefs(weeklySessionsCreationStore)

const isInVideoSelectionMode = computed(() => {
  return !!(route.query && route.query.mode && route.query.mode === 'add_video')
})

const selectedForVideo = ref(false)
watch(selectedForVideo, (newVal) => {
  if (newVal)
    weeklySessionsCreationStore.setVideoId(route.query.date as string, file.value.id)
  else if (weeklySessionsCreationStore.getVideoId(route.query.date as string) === file.value.id)
    weeklySessionsCreationStore.setVideoId(route.query.date as string, 0)
})

const selectedVideoId = computed(() => {
  if (route.query.date && typeof route.query.date === 'string')
    return weeklySessionsCreationStore.inCreationProgressWeeklySessions[route.query.date].video_id
  else
    return 0
})

const videoSelectConfirmModal = ref<InstanceType<typeof NModal>>()

watch(selectedVideoId, async (newId) => {
  if (newId !== file.value.id)
    selectedForVideo.value = false
  else if (newId && newId === file.value.id)
    videoSelectConfirmModal.value?.openModal()
})

async function onVideoSelectionConfirmation() {
  await router.push(`/tutor-dashboard/my-classes/${route.query.class_id as string}/home`)
}

onMounted(() => {
  if (isInVideoSelectionMode.value && weeklySessionsCreationStore.getVideoId(route.query.date as string) === file.value.id)
    selectedForVideo.value = true
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
        <NButton @click="onVideoSelectionConfirmation">
          Yes
        </NButton>
      </div>
    </template>
  </NModal>
</template>
