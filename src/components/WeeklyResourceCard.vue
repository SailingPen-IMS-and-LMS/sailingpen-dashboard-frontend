<script setup lang="ts">
import { onMounted, toRefs } from 'vue'
import { NButton, NTextarea } from '@nethren-ui/vue'
import { storeToRefs } from 'pinia'
import SolarPlayOutline from '~icons/solar/play-outline'
import type { WeeklySession } from '~/types'
import { useWeeklySessionsCreationStore } from '~/stores'

interface ResourceCardProps {
  details: WeeklySession | false
  date: string
  classId: string
}

const props = defineProps<ResourceCardProps>()
const { details, date, classId } = toRefs(props)

const weeklySessionsCreationStore = useWeeklySessionsCreationStore()
const { inCreationProgressWeeklySessions } = storeToRefs(weeklySessionsCreationStore)

onMounted(() => {
  if (!inCreationProgressWeeklySessions.value[date.value])
    weeklySessionsCreationStore.setupAWeeklyResource(date.value)
})
</script>

<template>
  <div v-if="details" class="rounded-lg bg-[var(--bg-primary)] px-6 py-4 shadow-lg">
    <h3 class="resource-date my-2 font-semibold">
      Weekly session - <span class="font-normal"> {{ details.date }}</span>
    </h3>
    <div class="flex gap-6">
      <div
        class="h-[260px] min-w-[450px]"
        :style="{
          backgroundImage: `linear-gradient(red, red)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '0.5rem 0.5rem 0.5rem 0.5rem',
        }"
      />
      <div>
        <p class="text-justify text-[0.9rem] font-[300]">
          {{ details.description }}
        </p>
        <div>
          <h2 class="mb-7 mt-10 text-lg font-medium">
            @ Attachments
          </h2>
          <div class="mt-4 flex gap-5">
            <span
              v-for="attachment in details.attachments" :key="attachment.id"
              class="items-center justify-center pb-10 pl-5"
            >
              <!-- <a :href="attachment.link" target="_blank" class="attachment-link"> -->
              <img
                src="../assets/images/pdf-icon.png"
                alt="PDF Icon"
                class="pdf-icon h-[50px] w-[40px]"
              >
              <span class="attachment-text">{{ attachment.name }}</span>
              <!-- </a> -->
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else-if="!details && inCreationProgressWeeklySessions[date] && !inCreationProgressWeeklySessions[date].inAddMode"
  >
    <NButton mode="outline" @click="weeklySessionsCreationStore.setAddMode(date, true)">
      Add Video and Attachments for {{ date }}
    </NButton>
  </div>
  <div
    v-else-if="!details && inCreationProgressWeeklySessions[date] && inCreationProgressWeeklySessions[date].inAddMode"
    class="rounded-lg bg-[var(--bg-primary)] px-6 py-4 shadow-lg"
  >
    <h3 class="resource-date my-2 font-semibold">
      Creating Weekly session - <span class="font-normal"> {{ date }}</span>
    </h3>
    <div class="flex gap-6">
      <div
        class="aspect-[16/9] h-[256px] flex items-center justify-center rounded-md"
        style="border: 1px solid rgba(0,0,0,0.3)"
      >
        <RouterLink :to="`/tutor-dashboard/library?mode=add_video&date=${date}&class_id=${classId}`">
          <NButton>
            <template #leftIcon>
              <SolarPlayOutline />
            </template>
            Select the video
          </NButton>
        </RouterLink>
      </div>
      <div class="w-[65%] flex flex-col gap-4">
        <NTextarea
          :id="`description-${date}`" v-model="inCreationProgressWeeklySessions[date].description" rows="10"
          label="Description" :name="`description-${date}`" class="n-input__input min-h-[100px]"
          placeholder="Write a description"
        />
        <NButton mode="outline">
          Select Attachments
        </NButton>
        <div class="mt-auto flex items-center justify-end gap-4">
          <NButton color="danger" mode="text" @click="weeklySessionsCreationStore.resetAddMode(date)">
            Cancel
          </NButton>
          <NButton>Submit</NButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
