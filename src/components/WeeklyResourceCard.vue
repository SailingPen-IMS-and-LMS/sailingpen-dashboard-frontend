<script setup lang="ts">
import { onMounted, toRefs } from 'vue'
import { NButton, NModal, NTextarea } from '@nethren-ui/vue'
import { storeToRefs } from 'pinia'
import SolarPlayOutline from '~icons/solar/play-outline'
import { type ClassDetailedWeeklySession, ResourceType } from '~/types'
import { useWeeklySessionsCreationStore } from '~/stores'
import { api } from '~/api'

interface ResourceCardProps {
  details: ClassDetailedWeeklySession | false
  date: string
  classId: string
}

const props = defineProps<ResourceCardProps>()

const emit = defineEmits<{
  addedWeeklyResource: []
}>()

const { details, date, classId } = toRefs(props)

const weeklySessionsCreationStore = useWeeklySessionsCreationStore()
const { inCreationProgressWeeklySessions } = storeToRefs(weeklySessionsCreationStore)

const selectedVideoDetails = computed(() => {
  if (inCreationProgressWeeklySessions.value[date.value])
    return inCreationProgressWeeklySessions.value[date.value].video_details
  else
    return null
})

const selectedAttachments = computed(() => {
  if (inCreationProgressWeeklySessions.value[date.value])
    return inCreationProgressWeeklySessions.value[date.value].attachments_details
  else
    return {}
})

const creatingWeeklySession = ref(false)
const createWeeklySessionConfirmationModal = ref<InstanceType<typeof NModal>>()

async function onWeeklyResourceCreationSubmit() {
  creatingWeeklySession.value = true
  await api.tutionClasses.weeklySessions.createSession({
    date: date.value,
    attachment_ids: weeklySessionsCreationStore.getAllResourceIds(date.value),
    video_resource_id: weeklySessionsCreationStore.getVideoId(date.value),
    description: inCreationProgressWeeklySessions.value[date.value].description,
  }, classId.value)
  creatingWeeklySession.value = false
  emit('addedWeeklyResource')
}

onMounted(() => {
  if (!inCreationProgressWeeklySessions.value[date.value])
    weeklySessionsCreationStore.setupAWeeklyResource(date.value)
})
</script>

<template>
  <div v-if="details" :id="`wsc-${date}`" class="flex flex-col gap-4 rounded-lg bg-[var(--bg-primary)] px-6 py-4 shadow-lg">
    <h3 class="resource-date my-2 font-semibold">
      Weekly session - <span class="font-normal"> {{ details.date }}</span>
    </h3>
    <div class="flex gap-6">
      <iframe
        class="rounded-lg"
        :src="details.video_url"
        style="border: none"
        height="126.725"
        width="225"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowfullscreen="true"
      />
      <div>
        <p class="text-justify text-[0.9rem] font-[300]">
          {{ details.description }}
        </p>
      </div>
    </div>
    <div>
      <h2 class="text-lg font-medium">
        Attachments
      </h2>
      <div class="grid grid-cols-4 gap-4">
        <a
          v-for="attachment in details.attachments" :key="attachment.id"
          class="flex items-center items-center justify-center gap-4 bg-[var(--bg-secondary)] p-3"
          :href="attachment.url" target="_blank"
        >
          <!-- <a :href="attachment.link" target="_blank" class="attachment-link"> -->
          <img v-if="attachment.type === ResourceType.DOCUMENT" src="../assets/images/pdf-icon.png" :alt="attachment.name" class="pdf-icon h-[50px] w-[40px]">
          <img v-if="attachment.type === ResourceType.IMAGE" :src="attachment.url" :alt="attachment.name" class="h-[80px] w-[45px]">

          <span class="attachment-text">{{ attachment.name }}</span>
          <!-- </a> -->
        </a>
      </div>
    </div>
  </div>
  <div
    v-else-if="!details && inCreationProgressWeeklySessions[date] && !inCreationProgressWeeklySessions[date].inAddMode"
    :id="`wsc-${date}`"
  >
    <NButton mode="outline" @click="weeklySessionsCreationStore.setAddMode(date, true)">
      Add Video and Attachments for {{ date }}
    </NButton>
  </div>
  <form
    v-else-if="!details && inCreationProgressWeeklySessions[date] && inCreationProgressWeeklySessions[date].inAddMode"
    :id="`wsc-${date}`"
    class="rounded-lg bg-[var(--bg-primary)] px-6 py-4 shadow-lg"
    @submit.prevent="createWeeklySessionConfirmationModal?.openModal"
  >
    <h3 class="resource-date my-2 font-semibold">
      Creating Weekly session - <span class="font-normal"> {{ date }}</span>
    </h3>
    <div class="flex gap-6">
      <div
        class="aspect-[16/9] h-[256px] flex items-center justify-center rounded-md" :style="{
          border: '1px solid rgba(0,0,0,0.3)',
          backgroundImage: selectedVideoDetails ? `url(${selectedVideoDetails.thumbnail_url})` : 'none',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      >
        <RouterLink :to="`/tutor-dashboard/library?mode=add_video&date=${date}&class_id=${classId}`">
          <NButton>
            <template #leftIcon>
              <SolarPlayOutline />
            </template>
            {{
              selectedVideoDetails ? 'Select another' : 'Select a video'
            }}
          </NButton>
        </RouterLink>
      </div>
      <div class="w-[65%] flex flex-col gap-4">
        <NTextarea
          :id="`description-${date}`" v-model="inCreationProgressWeeklySessions[date].description"
          rows="10" label="Description" :name="`description-${date}`"
          class="n-input__input min-h-[100px]"
          placeholder="Write a description"
          required
        />
        <RouterLink :to="`/tutor-dashboard/library?mode=add_attachments&date=${date}&class_id=${classId}`">
          <ul class="mb-4 flex flex-col gap-2">
            <li v-for="attachment in selectedAttachments" :key="attachment.id">
              {{ attachment.name }}
            </li>
          </ul>
          <NButton mode="outline">
            {{
              Object.keys(selectedAttachments).length
                ? 'Select more attachments'
                : 'Select attachments'
            }}
          </NButton>
        </RouterLink>
        <div class="mt-auto flex items-center justify-end gap-4">
          <NButton color="danger" mode="text" role="button" type="button" @click="weeklySessionsCreationStore.resetAddMode(date)">
            Cancel
          </NButton>
          <NButton role="submit" type="submit">
            Submit

            <NModal ref="createWeeklySessionConfirmationModal">
              <template #modal-header>
                <h3 class="text-xl font-semibold">
                  Confirmation
                </h3>
              </template>
              <template #modal-body>
                <p class="text-center">
                  Do you want to submit this as the current week's resource?
                </p>
                <div class="mt-4 flex items-center justify-center gap-4">
                  <NButton mode="text" color="danger" role="button" type="button" @click="createWeeklySessionConfirmationModal?.closeModal">
                    Cancel
                  </NButton>
                  <NButton role="button" type="button" :is-loading="creatingWeeklySession" loading-text="Submitting" @click="onWeeklyResourceCreationSubmit">
                    Confirm
                  </NButton>
                </div>
              </template>
            </NModal>
          </NButton>
        </div>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
