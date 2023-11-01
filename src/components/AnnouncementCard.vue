<script setup lang="ts">
import { NButton, NInput, NModal, NTextarea } from '@nethren-ui/vue'
import { format, parseISO } from 'date-fns'
import { api } from '~/api'
import type { Announcement } from '~/types'

interface AnnouncementCardProps {
  announcement: Announcement
  tutionClassId: string
}

const props = defineProps<AnnouncementCardProps>()
const emit = defineEmits<{
  onDeleteAnnouncement: []
  onUpdateAnnouncement: []
}>()

const { announcement, tutionClassId } = toRefs(props)

const announcementDate = computed(() => {
  return format(parseISO(announcement.value.created_at), 'do \'of\' MMMM, yyyy \'at\' h:mm a')
})

const isDeleting = ref(false)
const deleteModal = ref<InstanceType<typeof NModal>>()

const isUpdating = ref(false)
const updateModal = ref<InstanceType<typeof NModal>>()
const updateAnnouncementDetails = ref({
  title: announcement.value.title,
  content: announcement.value.content,
})

async function deleteAnnouncement() {
  isDeleting.value = true
  const result = await api.announcements.deleteAnnouncement(announcement.value.id)
  if (result) {
    deleteModal.value?.closeModal()
    emit('onDeleteAnnouncement')
  }

  else { alert('Failed to delete announcement') }
  isDeleting.value = false
}

async function updateAnnouncement() {
  isUpdating.value = true
  const result = await api.announcements.updateAnnouncement(announcement.value.id, {
    content: updateAnnouncementDetails.value.content,
    title: updateAnnouncementDetails.value.title,
    tution_class_id: tutionClassId.value,
  })
  if (result) {
    updateModal.value?.closeModal()
    emit('onUpdateAnnouncement')
  }
  else {
    console.log(result)
  }
  isUpdating.value = false
}
</script>

<template>
  <div
    class="rounded-lg px-4 pb-4 shadow-md"
    style="border: 1px solid rgba(0, 0, 0, 0.1);
            background-color: var(--bg-primary);;"
  >
    <div class="flex justify-between">
      <h3 class="flex items-center font-semibold">
        {{ announcement.title }}
      </h3>
      <div class="flex">
        <h3 class="flex items-center text-gray-400">
          {{ announcementDate }}
        </h3>
        <div class="m-4 h-6 w-6" />
      </div>
    </div>
    <p>
      {{ announcement.content }}
    </p>
    <div class="flex items-center gap-4">
      <NButton color="warning" mode="text" @click="updateModal?.openModal">
        Update
        <NModal ref="updateModal">
          <template #modal-header>
            <h3 class="text-lg font-semibold">
              Update this announcement
            </h3>
          </template>
          <template #modal-body>
            <form class="w-[600px] flex flex-col gap-2" @submit.prevent="updateAnnouncement">
              <NInput id="title" v-model="updateAnnouncementDetails.title" name="title" label="Title" required />
              <NTextarea id="content" v-model="updateAnnouncementDetails.content" class="h-[200px]" name="content" label="Content" required />
              <div class="mt-4 flex items-center justify-center gap-4">
                <NButton type="button" role="button" color="danger" mode="text">
                  Cancel
                </NButton>
                <NButton type="submit" :is-loading="isUpdating" loading-text="Updating">
                  Confirm update
                </NButton>
              </div>
            </form>
          </template>
        </NModal>
      </NButton>
      <NButton color="danger" mode="text" @click="deleteModal?.openModal">
        Delete
        <NModal ref="deleteModal">
          <template #modal-header>
            <h3 class="text-lg font-semibold">
              Confirmation
            </h3>
          </template>
          <template #modal-body>
            Are you sure you want to delete this announcement?
            <div class="mt-4 flex items-center justify-center gap-4">
              <NButton color="danger" mode="text">
                Cancel
              </NButton>
              <NButton :is-loading="isDeleting" loading-text="Deleting" @click="deleteAnnouncement">
                Confirm
              </NButton>
            </div>
          </template>
        </NModal>
      </NButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
