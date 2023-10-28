<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'
import { ref } from 'vue'

import MaterialSymbolsSearch from '~icons/material-symbols/search'

const pure = ref([
  {
    title: 'Permutation Formulations',
    Description1: ' It was popularized in the 1960s with the release of sheets containing Lorem Ipsus passages.',
    imageUrl: '/images/bg1.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    className: '2023 Chemistry',
    techerName: 'Charitha Dissanayake',
  },
  {
    title: 'Combination Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/images/bg2.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    className: '2023 Mathematics',
    techerName: 'Ruwan Darshana',
  },
  {
    title: 'Differentiation Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/images/bg3.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    className: '2023 Physics',
    techerName: 'Nilantha Jayasuriya',
  },
  {
    title: 'Sequence Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/images/bg4.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    className: '2024 Chemistry',
    techerName: 'Charitha Dissanayake',
  },
  {
    title: 'Motion',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/images/bg5.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    className: '2025 Chemistry',
    techerName: 'Charitha Dissanayake',
  },
  {
    title: 'Force',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/images/bg6.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    className: '2024 Physics',
    techerName: 'Nilantha Jayasuriya',
  },
  {
    title: 'Combination Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/images/bg2.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    className: '2025 Physics',
    techerName: 'Nilantha Jayasuriya',
  },
  {
    title: 'Differentiation Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/images/bg3.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    className: '2023 Mathematics',
    techerName: 'Ruwan Darshana',
  },
])
</script>

<template>
  <div class="mt-5 flex justify-end lg:ml-100 lg:mt-0">
    <div class="mr-8 flex border rounded-l-md px-4 py-2 pr-48">
      <MaterialSymbolsSearch />
      <input id="search" type="text" name="search" placeholder="Search Here " class="pl-4">
    </div>
    <!-- <NButton mode="solid" color="info" @click="showAddModal">
      + Add New Announcements
    </NButton> -->
    <RouterLink to="/announcement/add-announcement-post">
      <NButton mode="solid" color="info">
        + Add New Announcements
      </NButton>
    </RouterLink>
  </div>
  <h2 class="text-2xl font-bold tracking-tight text-gray-900">
    Announcements
  </h2>
  <div class="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 lg:grid-cols-6 sm:grid-cols-3 xl:gap-x-8">
    <a v-for="course in pure" :key="course.title" class="group">

      <div class="relative mb-28 h-50 w-45">
        <!-- The image -->
        <img :src="course.imageUrl" alt="Your Image" class="h-full w-full rounded-t-lg object-cover">

        <!-- The text on top of the image -->
        <div class="absolute inset-0 left-2 top-8 z-10 text-lg font-bold text-white">
          <div class="mb-6 flex justify-center text-center">
            <p class="font-sm text-m mt-1 justify-center">{{ course.title }}</p>
          </div>
          <div>
            <p class="font-xs mt-1 justify-items-stretch text-xs">{{ course.altText }}</p>
          </div>
        </div>
        <div>
          <div class="item-center flex justify-center border-l-2 border-r-2 pt-2 text-center">
            <p class="font-sm text-sm">{{ course.className }} <br> {{ course.techerName }}
            </p>
          </div>
          <div class="flex justify-center gap-1 border-b-2 border-l-2 border-r-2 rounded-b-lg p-4">
            <button
              class="cursor-pointer rounded-md bg-red-500 px-2 py-1 text-white"
              @click="showDeleteModal"
            >Delete</button>

            <RouterLink to="/announcement/edit-announcement-post">
              <button class="cursor-pointer rounded-md bg-blue-500 px-2 py-1 text-white">Edit</button>
            </RouterLink>
            <RouterLink to="/announcement/view-announcement-post">
              <button class="cursor-pointer rounded-md bg-green-500 px-2 py-1 text-white">View</button>
            </RouterLink>
          </div>
        </div>
      </div>

    </a>
  </div>
</template>
