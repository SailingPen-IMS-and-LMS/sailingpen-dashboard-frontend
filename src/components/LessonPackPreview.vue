<script setup lang="ts">
import type { LessonPackBrief } from '~/types'

const props = defineProps<{
  lessonPack: LessonPackBrief
}>()

const { lessonPack } = toRefs(props)
</script>

<template>
  <RouterLink
    class="video-thumbnail flex flex-col gap-2" :style="{
      backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), ${lessonPack.cover_image_url ? `url(${lessonPack.cover_image_url})` : 'url(../assets/images/placeholders/video-1.jpg)'}`,
    }" :to="`/tutor-dashboard/lesson-packs/${lessonPack.id}`"
  >
    <h3 class="text-lg font-semibold">
      {{ lessonPack.name }}
    </h3>
    <p>
      {{
        lessonPack.description
      }}
    </p>
  </RouterLink>
</template>

<style lang="scss" scoped>
.video-thumbnail {
  width: 300px;
  height: 180px;
  background-repeat: no-repeat;
  border-radius: 8px;
  background-position: center;
  background-size: cover;
  margin-block: 1rem;
  color: white;
  padding: 1rem 1.5rem;
  position: relative;

  svg {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
