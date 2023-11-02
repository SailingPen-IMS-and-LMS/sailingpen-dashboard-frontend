<script setup lang="ts">
import { toRefs } from 'vue'
import classPlaceholderUrl from '../assets/images/placeholders/class-placeholder.jpg'
import type { TutionClassDetails } from '~/types'

const props = defineProps<{
  classDetails: TutionClassDetails
}>()

const { classDetails } = toRefs(props)
</script>

<template>
  <RouterLink
    class="continue-watch-video min-h-[20%] flex flex-col"
    :style="{
      backgroundImage: classDetails.banner_url ? `url(${classDetails.banner_url})` : `url(${classPlaceholderUrl})`,
    }"
    :to="`/tutor-dashboard/my-classes/${classDetails.class_id}/home`"
  >
    <div class="overlay-card flex flex-row items-center">
      <p class="mx-px py-2.5 pl-3.5 pr-2">
        {{ classDetails.class_name }}
      </p>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.continue-watch-video {
  width: 320px;
  height: 180px;
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(~/assets/images/video-1.jpg);
  background-repeat: no-repeat;
  border-radius: 8px;
  background-position: center;
  background-size: cover;
  margin-block: 1rem;
  color: white;
  padding: 1rem 2rem;
  position: relative;

  svg {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.overlay-card {
  position: absolute;
  width: 100%; /* 1/4 width of main card */
  height: 25%; /* 1/4 height of main card */
  background-color: rgba(0, 0, 0, 0.5); /* Transparent white */
  border-radius: 5px;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;

}
</style>
