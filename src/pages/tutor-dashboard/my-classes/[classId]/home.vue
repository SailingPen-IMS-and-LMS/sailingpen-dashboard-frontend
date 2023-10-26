<script setup lang="ts">
import { ref } from 'vue'
import { NButton } from '@nethren-ui/vue'
import { storeToRefs } from 'pinia'
import { useTutionClassesStore } from '~/stores'

import type { ResourceInfoCard } from '~/types'
import ResourceCard from '~/components/ResourceCard.vue'
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

console.log(tutionClass)
console.log(days)

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

const resourceInfoCards: ResourceInfoCard[] = [
  {
    id: 1,
    title: 'Introduction to Permutations and Combinations Recording ',
    image: '/resource-vid-thumb.jpg',
    description: 'Introduction to Permutations and Combinations Recording" provides a concise overview of the fundamental concepts of permutations and combinations. This recording offers a beginner-friendly introduction to these mathematical principles, explaining their significance and applications in various fields',
    date: '2023-3-10',
    attachments: [
      {
        id: 1,
        link: '/path/to/attachment-1.pdf',
        text: 'Attachment 1',
      },
      {
        id: 2,
        link: '/path/to/attachment-2.pdf',
        text: 'Attachment 2',
      },
    ],
  },
  {
    id: 2,
    title: 'Introduction to Permutations and Combinations Recording ',
    image: '/resource-vid-thumb.jpg',
    description: 'Introduction to Permutations and Combinations Recording" provides a concise overview of the fundamental concepts of permutations and combinations. This recording offers a beginner-friendly introduction to these mathematical principles, explaining their significance and applications in various fields',
    date: '2023-3-10',
    attachments: [
      {
        id: 1,
        link: '/path/to/attachment-1.pdf',
        text: 'Attachment 1',
      },
      {
        id: 2,
        link: '/path/to/attachment-2.pdf',
        text: 'Attachment 2',
      },
    ],
  },

  {
    id: 3,

    title: 'Introduction to Permutations and Combinations Recording ',
    image: '/resource-vid-thumb.jpg',
    description: 'Introduction to Permutations and Combinations Recording" provides a concise overview of the fundamental concepts of permutations and combinations. This recording offers a beginner-friendly introduction to these mathematical principles, explaining their significance and applications in various fields',
    date: '2023-3-10',
    attachments: [
      {
        id: 1,
        link: '/path/to/attachment-1.pdf',
        text: 'Attachment 1',
      },
      {
        id: 2,
        link: '/path/to/attachment-2.pdf',
        text: 'Attachment 2',
      },
    ],
  },

]
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

      <RouterLink to="/tutor-dashboard/library?mode=resource-upload">
        <NButton>Upload class resource</NButton>
      </RouterLink>
    </div>

    <div class="resource-cards">
      <p v-if="tutionClass">
        {{
          tutionClass }}
      </p>
      <ResourceCard
        v-for="resourceInfoCard in resourceInfoCards"
        :key="resourceInfoCard.id"
        :details="resourceInfoCard"
      />
    </div>

    <!-- resource cards -->
  </div>
</template>

<style lang="scss" scoped></style>
