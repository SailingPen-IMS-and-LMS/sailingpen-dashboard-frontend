<script setup lang="ts">
import { ref } from 'vue' // Import the ref function
import { NButton } from '@nethren-ui/vue'

const pure = ref([
  {
    title: 'Permutation Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/images/bg1.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Combination Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/images/bg2.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Differentiation Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/images/bg3.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Sequence Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/images/bg4.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Motion',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/images/bg5.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Force',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/images/bg6.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
])

const applied = ref([
  {
    title: 'Permutation Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/images/bg1.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Combination Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/images/bg2.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Differentiation Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/images/bg3.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Sequence Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/images/bg4.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Motion',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/images/bg5.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Force',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/images/bg6.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
])

const decks = ref([
  {
    title: 'Differentiation Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/images/bg3.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Sequence Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/images/bg4.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Motion',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/images/bg5.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Force',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/images/bg6.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
])
</script>

<template>
  <div class="default-page-container flex">
    <div class="max-w-2xl px-4 py-16 lg:max-w-full lg:px-8 sm:px-6 sm:py-14">
      <div class="flex justify-end">
        <NButton mode="outline">
          Combined Mathematics - Ruwan Darshana
          <template #rightIcon>
            <ion-ios-arrow-dropdown-circle class="text-[1.3rem]" />
          </template>
        </NButton>
      </div>

      <h2 class="text-2xl font-bold tracking-tight text-gray-900">
        Pure Mathematics
      </h2>
      <div class="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 lg:grid-cols-6 sm:grid-cols-2 xl:gap-x-8">
        <a v-for="course in pure" :key="course.title" class="group">

          <div class="relative h-50 w-40">
            <!-- The image -->
            <img :src="course.imageUrl" alt="Your Image" class="h-full w-full rounded-t-lg object-cover">

            <!-- The text on top of the image -->
            <div
              class="absolute inset-0 left-2 top-2 z-10 flex items-center justify-center text-lg font-bold text-white"
            >
              <p class="font-sm text-m mt-1 text-center">{{ course.title }}</p>
            </div>
          </div>
          <div class="relative h-30 w-40">
            <div
              class="absolute bottom-0 left-0 right-0 h-30 w-40 rounded-b-lg bg-white p-1 font-semibold text-black shadow-lg"
            >
              <ul>
                <li class="justify-center text-left text-sm font-normal">{{ course.Description1 }}</li>
              </ul>
            </div>
          </div>
        </a>
      </div>

      <h2 class="pt-4 text-2xl font-bold tracking-tight text-gray-900">
        Applied Mathematics
      </h2>
      <div class="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 lg:grid-cols-6 sm:grid-cols-2 xl:gap-x-8">
        <a v-for="course in applied" :key="course.title" class="group">

          <div class="relative h-50 w-40">
            <!-- The image -->
            <img :src="course.imageUrl" alt="Your Image" class="h-full w-full rounded-t-lg object-cover">

            <!-- The text on top of the image -->
            <div
              class="absolute inset-0 left-2 top-2 z-10 flex items-center justify-center text-lg font-bold text-white"
            >
              <p class="text-m font-sm mt-1 text-center">{{ course.title }}</p>
            </div>
          </div>
          <div class="relative h-30 w-40">
            <div
              class="absolute bottom-0 left-0 right-0 h-30 w-40 rounded-b-lg bg-white p-1 font-semibold text-black shadow-lg"
            >
              <ul>
                <li class="justify-center text-left text-sm font-normal">{{ course.Description1 }}</li>
              </ul>
            </div>
          </div>
        </a>
      </div>

      <h2 class="pt-4 text-2xl font-bold tracking-tight text-gray-900">
        My Decks
      </h2>
      <div class="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 pb-20 lg:grid-cols-6 sm:grid-cols-2 xl:gap-x-8">
        <a v-for="course in decks" :key="course.title" class="group">
          <div class="relative h-50 w-40">
            <!-- The image -->
            <img :src="course.imageUrl" alt="Your Image" class="h-full w-full rounded-t-lg object-cover">
            <!-- The text on top of the image -->
            <div
              class="absolute inset-0 left-2 top-2 z-10 flex items-center justify-center text-lg font-bold text-white"
            >
              <p class="text-m font-sm mt-1 text-center">{{ course.title }}</p>
            </div>
          </div>
          <div class="relative h-30 w-40">
            <div
              class="absolute bottom-0 left-0 right-0 h-30 w-40 rounded-b-lg bg-white p-1 font-semibold text-black shadow-lg"
            >
              <ul>
                <li class="justify-center text-left text-sm font-normal">{{ course.Description1 }}</li>
              </ul>
            </div>
          </div>
        </a>
        <!-- this is the add decks part -->
        <div class="relative h-80 w-40 flex flex-col rounded-lg bg-gray-200 p-4 shadow-lg">
          <img src="/images/plus.png" alt="Your Image" class="mt-10 h-30 w-30">
          <p class="mt-2 text-center font-bold text-gray-500">
            Add Your Deck
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
