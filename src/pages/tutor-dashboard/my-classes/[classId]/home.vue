<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTutionClassesStore } from '~/stores'

import type { ClassDetailedWeeklySessions } from '~/types'
import WeeklyResourceCard from '~/components/WeeklyResourceCard.vue'
import { getDaysInCurrentMonth } from '~/utils/date-utils'
import { api } from '~/api'

// import { NInput } from '@nethren-ui/vue';

const route = useRoute()

const tutionClassesStore = useTutionClassesStore()
const { myTutionClasses } = storeToRefs(tutionClassesStore)

const tutionClass = computed(() => {
  return myTutionClasses.value.find(e => e.class_id === route.params.classId)
})

const days = computed(() => {
  if (tutionClass.value) {
    const classSchedule = tutionClass.value.schedule
    if (classSchedule) {
      const day = classSchedule.day
      return getDaysInCurrentMonth(day)
    }
    return []
  }
  return []
})

console.log(tutionClass.value)
console.log(days.value)

const startDate = ref('')
const endDate = ref('')

const weeklySessions = ref<ClassDetailedWeeklySessions>([])

async function loadWeeklyResources() {
  const result = await api.tutionClasses.weeklySessions.resources.getCurrentMonthWeeklyResources(route.params.classId as string)
  if (result)
    weeklySessions.value = result
  else
    alert('Something went wrong, please try again later or contact support')
}

// set dates initially
onMounted(async () => {
  const today = new Date()
  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(today.getDate() - 7)

  startDate.value = sevenDaysAgo.toISOString().slice(0, 10)
  endDate.value = today.toISOString().slice(0, 10)

  await loadWeeklyResources()
})

function getWeeklySession(date: string) {
  return weeklySessions.value.find(ws => ws.date === date) || false
}
</script>

<template>
  <div class="class-home mt-10">
    <!-- date filter -->
    <div class="date-filter flex flex-row items-center justify-between">
      <div class="flex items-center gap-4">
        <div>
          <label for="from-date">From : </label>
          <input
            v-model="startDate" type="date"
            class=""
          >
        </div>
        <div>
          <label class="ml-14" for="to-date">To : </label>
          <input
            v-model="endDate" type="date" label="to-date"
            class=""
          >
        </div>
      </div>

      <!--      <RouterLink to="/tutor-dashboard/library?mode=resource-upload"> -->
      <!--        <NButton>Upload Weekly Resources</NButton> -->
      <!--      </RouterLink> -->
    </div>

    <div v-if="tutionClass" class="mt-8 flex flex-col gap-6">
      <WeeklyResourceCard
        v-for="day in days"
        :key="day"
        :date="day"
        :details="getWeeklySession(day)"
        :class-id="route.params.classId as string"
        @added-weekly-resource="loadWeeklyResources"
      />
    </div>

    <!-- resource cards -->
  </div>
</template>
