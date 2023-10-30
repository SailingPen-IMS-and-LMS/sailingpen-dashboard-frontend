<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTutionClassesStore } from '~/stores'

import type { WeeklySessions } from '~/types'
import { ResourceType } from '~/types'
import WeeklyResourceCard from '~/components/WeeklyResourceCard.vue'
import { getDaysInCurrentMonth } from '~/utils/date-utils'

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

// set dates initially
onMounted(() => {
  const today = new Date()
  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(today.getDate() - 7)

  startDate.value = sevenDaysAgo.toISOString().slice(0, 10)
  endDate.value = today.toISOString().slice(0, 10)
})

const weeklySessions: WeeklySessions = [
  {
    id: 'ws-1',
    video_url: '/resource-vid-thumb.jpg',
    video_thumbnail_url: '/resource-vid-thumb.jpg',
    description: 'Introduction to Permutations and Combinations Recording" provides a concise overview of the fundamental concepts of permutations and combinations. This recording offers a beginner-friendly introduction to these mathematical principles, explaining their significance and applications in various fields',
    date: '2023-10-07',
    attachments: [
      {
        id: 1,
        url: '/path/to/attachment-1.pdf',
        name: 'Attachment 1',
        thumbnail_url: '/path/to/attachment-1.pdf',
        type: ResourceType.DOCUMENT,
      },
      {
        id: 2,
        url: '/path/to/attachment-2.pdf',
        name: 'Attachment 2',
        thumbnail_url: '/path/to/attachment-1.pdf',
        type: ResourceType.DOCUMENT,
      },
    ],
  },
  {
    id: 'ws-2',
    video_url: '/resource-vid-thumb.jpg',
    video_thumbnail_url: '/resource-vid-thumb.jpg',
    description: 'Introduction to Permutations and Combinations Recording" provides a concise overview of the fundamental concepts of permutations and combinations. This recording offers a beginner-friendly introduction to these mathematical principles, explaining their significance and applications in various fields',
    date: '2023-10-14',
    attachments: [
      {
        id: 1,
        url: '/path/to/attachment-1.pdf',
        name: 'Attachment 1',
        thumbnail_url: '/path/to/attachment-1.pdf',
        type: ResourceType.DOCUMENT,
      },
      {
        id: 2,
        url: '/path/to/attachment-2.pdf',
        name: 'Attachment 2',
        thumbnail_url: '/path/to/attachment-1.pdf',
        type: ResourceType.DOCUMENT,
      },
    ],
  },
  // {
  //   id: 'ws-3',
  //   video_url: '/resource-vid-thumb.jpg',
  //   video_thumbnail_url: '/resource-vid-thumb.jpg',
  //   description: 'Introduction to Permutations and Combinations Recording" provides a concise overview of the fundamental concepts of permutations and combinations. This recording offers a beginner-friendly introduction to these mathematical principles, explaining their significance and applications in various fields',
  //   date: '2023-10-21',
  //   attachments: [
  //     {
  //       id: 1,
  //       url: '/path/to/attachment-1.pdf',
  //       name: 'Attachment 1',
  //       thumbnail_url: '/path/to/attachment-1.pdf',
  //       type: ResourceType.DOCUMENT,
  //     },
  //     {
  //       id: 2,
  //       url: '/path/to/attachment-2.pdf',
  //       name: 'Attachment 2',
  //       thumbnail_url: '/path/to/attachment-1.pdf',
  //       type: ResourceType.DOCUMENT,
  //     },
  //   ],
  // },
  // {
  //   id: 'ws-4',
  //   video_url: '/resource-vid-thumb.jpg',
  //   video_thumbnail_url: '/resource-vid-thumb.jpg',
  //   description: 'Introduction to Permutations and Combinations Recording" provides a concise overview of the fundamental concepts of permutations and combinations. This recording offers a beginner-friendly introduction to these mathematical principles, explaining their significance and applications in various fields',
  //   date: '2023-10-28',
  //   attachments: [
  //     {
  //       id: 1,
  //       url: '/path/to/attachment-1.pdf',
  //       name: 'Attachment 1',
  //       thumbnail_url: '/path/to/attachment-1.pdf',
  //       type: ResourceType.DOCUMENT,
  //     },
  //     {
  //       id: 2,
  //       url: '/path/to/attachment-2.pdf',
  //       name: 'Attachment 2',
  //       thumbnail_url: '/path/to/attachment-1.pdf',
  //       type: ResourceType.DOCUMENT,
  //     },
  //   ],
  // },
]

function getWeeklySession(date: string) {
  return weeklySessions.find(ws => ws.date === date) || false
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
      />
    </div>

    <!-- resource cards -->
  </div>
</template>
