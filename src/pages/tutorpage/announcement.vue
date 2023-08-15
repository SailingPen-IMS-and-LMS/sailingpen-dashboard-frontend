<script setup lang="ts">
import { NButton } from '@nethren-ui/vue';
import { ref } from 'vue'

import AnnouncementAdd from './add-announcement-post.vue'
import AnnouncementEdit from './edit-announcement-post.vue'
import AnnouncementDelete from './delete-announcement-post.vue'
import AnnouncementView from './view-announcement-post.vue'

import MaterialSymbolsSearch from '~icons/material-symbols/search'

const pure = ref([
  {
    title: 'Permutation Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
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
  }
])

const isAddModalVisible = ref(false);
const isViewModalVisible = ref(false);
const isEditModalVisible = ref(false);
const isDeleteModalVisible = ref(false);

const showAddModal = () => {
  isAddModalVisible.value = true;
};

const hideAddModal = () => {
  isAddModalVisible.value = false;
};

const showViewModal = () => {
  isViewModalVisible.value = true;
};

const hideViewModal = () => {
  isViewModalVisible.value = false;
};

const showEditModal = () => {
  isEditModalVisible.value = true;
};

const hideEditModal = () => {
  isEditModalVisible.value = false;
};

const showDeleteModal = () => {
  isDeleteModalVisible.value = true;
};

const hideDeleteModal = () => {
  isDeleteModalVisible.value = false;
};

</script>

<template>
  <div class="mt-5 flex lg:ml-100 lg:mt-0 justify-end">
    <div class="mr-8 flex border rounded-l-md px-4 py-2 pr-48">
      <MaterialSymbolsSearch />
      <input id="search" type="text" name="search" placeholder="Search Here " class="pl-4">
    </div>
    <NButton mode="solid" color="info" @click="showAddModal">
      + Add New Announcements
    </NButton>
  </div>
  <h2 class="text-2xl font-bold tracking-tight text-gray-900">
    Announcements
  </h2>
  <div class="grid grid-cols-1 mt-6 gap-x-6 gap-y-10 lg:grid-cols-6 sm:grid-cols-3 xl:gap-x-8 ">
    <a v-for="course in pure" :key="course.title" class="group">

      <div class="relative h-50 w-45 mb-28">
        <!-- The image -->
        <img :src="course.imageUrl" alt="Your Image" class="h-full w-full rounded-t-lg object-cover">

        <!-- The text on top of the image -->
        <div class="absolute inset-0 left-2 top-8 z-10 text-lg font-bold text-white">
          <div class="flex text-center mb-6 justify-center">
            <p class="font-sm text-m mt-1 justify-center">{{ course.title }}</p>
          </div>
          <div>
            <p class="font-xs text-xs mt-1 justify-items-stretch">{{ course.altText }}</p>
          </div>
        </div>
        <div>
          <div class="flex border-l-2 border-r-2 pt-2 justify-center text-center item-center">
            <p class="font-sm text-sm ">{{ course.className }} <br> {{ course.techerName }}
            </p>
          </div>
          <div class="flex gap-1 justify-center border-b-2 border-l-2 border-r-2 p-4 rounded-b-lg">
            <button @click="showDeleteModal"
              class="px-2 py-1 bg-red-500 text-white rounded-md cursor-pointer">Delete</button>
            <button @click="showViewModal"
              class="px-2 py-1 bg-green-500 text-white rounded-md cursor-pointer">View</button>
            <button @click="showEditModal"
              class="px-2 py-1 bg-blue-500 text-white rounded-md cursor-pointer">Edit</button>
          </div>
        </div>
      </div>

      <div v-if="isAddModalVisible">
        <AnnouncementAdd @cancelForm="hideAddModal" />
      </div>

      <div v-if="isViewModalVisible">
        <AnnouncementView @cancelForm="hideViewModal" />
      </div>

      <div v-if="isEditModalVisible">
        <AnnouncementEdit @cancelForm="hideEditModal" />
      </div>

      <div v-if="isDeleteModalVisible">
        <AnnouncementDelete @cancelForm="hideDeleteModal" />
      </div>
    </a>
  </div></template>