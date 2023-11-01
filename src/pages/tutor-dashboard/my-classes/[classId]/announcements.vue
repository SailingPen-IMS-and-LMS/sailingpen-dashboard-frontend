<script setup lang="ts">
import { NButton, NInput, NModal, NTextarea } from '@nethren-ui/vue'
import { onMounted, ref } from 'vue'
import { api } from '~/api'
import ISvgSpinners180Ring from '~icons/svg-spinners/180-ring'
import AnnouncementCard from '~/components/AnnouncementCard.vue'
import type { Announcements } from '~/types'

const route = useRoute()
const classId = route.params.classId as string
const filterDate = ref('')

const isAnnouncementsLoading = ref(false)
const announcements = ref<Announcements>([])

const creatingAnnouncement = ref(false)
const newAnnouncementDetails = ref({
  title: '',
  content: '',
})
const newAnnouncementFormModal = ref<InstanceType<typeof NModal>>()
async function createAnnouncement() {
  creatingAnnouncement.value = true
  const result = await api.announcements.createAnnouncement({
    tution_class_id: classId,
    title: newAnnouncementDetails.value.title,
    content: newAnnouncementDetails.value.content,
  })
  if (result) {
    await loadAnnouncements()
    newAnnouncementDetails.value.title = ''
    newAnnouncementDetails.value.content = ''
    newAnnouncementFormModal.value?.closeModal()
  }
  else {
    alert('Failed to create announcement')
    newAnnouncementDetails.value.title = ''
    newAnnouncementDetails.value.content = ''
    newAnnouncementFormModal.value?.closeModal()
  }
  creatingAnnouncement.value = false
}

async function loadAnnouncements() {
  isAnnouncementsLoading.value = true
  announcements.value = await api.announcements.classAnnouncements.getAnnouncementsByClassId(classId)
  isAnnouncementsLoading.value = false
}

onMounted(async () => {
  const today = new Date()
  filterDate.value = today.toISOString().slice(0, 10)
  await loadAnnouncements()
})
</script>

<template>
  <div class="class-announcements-page mt-8">
    <!-- date filter -->
    <div class="date-filter mb-4 flex flex-row items-center justify-between">
      <div>
        <label for="filter-date">Date : </label>
        <input v-model="filterDate" type="date" class="filter-date">
      </div>
      <NButton @click="newAnnouncementFormModal?.openModal">
        Add announcement

        <NModal ref="newAnnouncementFormModal" :close-on-outside-click="false">
          <template #modal-header>
            <h3 class="text-lg font-semibold">
              Enter details of announcement
            </h3>
          </template>
          <template #modal-body>
            <form class="w-[600px] flex flex-col gap-2" @submit.prevent="createAnnouncement">
              <NInput id="title" v-model="newAnnouncementDetails.title" required label="Title" name="title" placeholder="Enter title of the announcement" />
              <NTextarea id="content" v-model="newAnnouncementDetails.content" required class="h-[200px] w-[800px]" label="Content" name="content" placeholder="Enter content of the announcement" />
              <div class="mt-4 flex items-center justify-center gap-4">
                <NButton
                  type="button" role="button"
                  color="danger" mode="text" @click="() => {
                    newAnnouncementDetails.content = ''
                    newAnnouncementDetails.title = ''
                    newAnnouncementFormModal?.closeModal()
                  }"
                >
                  Cancel
                </NButton>
                <NButton type="submit" :is-loading="creatingAnnouncement" loading-text="Creating">
                  Confirm
                </NButton>
              </div>
            </form>
          </template>
        </NModal>
      </NButton>
    </div>

    <div v-if="!isAnnouncementsLoading" class="flex flex-col gap-4">
      <AnnouncementCard
        v-for="announcement in announcements"
        :key="announcement.id"
        :announcement="announcement"
        :tution-class-id="classId"
        @on-delete-announcement="loadAnnouncements"
        @on-update-announcement="loadAnnouncements"
      />
    </div>
    <div v-else class="h-[calc(100vh-200px)] flex items-center justify-center">
      <div class="flex flex-col items-center justify-center gap-4 text-[rgab(0,0,0,0.4)]">
        <ISvgSpinners180Ring class="text-[3.5rem]" />
        <p class="text-xl">
          Please wait ...
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
