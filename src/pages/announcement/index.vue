<template>
  <div class="mt-5 flex lg:ml-100 lg:mt-0 justify-end">
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
  <div class="mt-5">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">
      Announcements
    </h2>
    <div class="mt-6">
      <table class="w-full">
        <thead>
          <tr>
            <th class="px-4 py-2">Title</th>
            <th class="px-4 py-2">Description</th>
            <th class="px-4 py-2">Class Name</th>
            <th class="px-4 py-2">Teacher Name</th>
            <th class="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(course, index) in pure" :key="index"
            :class="{ 'bg-[#EDF2F7]': index % 2 === 0, 'bg-white': index % 2 !== 0 }">
            <td class="px-4 py-2">{{ course.title }}</td>
            <td class="px-4 py-2">{{ course.Description1 }}</td>
            <td class="px-4 py-2">{{ course.className }}</td>
            <td class="px-4 py-2">{{ course.techerName }}</td>
            <td class="px-4 py-2">
              <div class="flex gap-2">
                <NButton @click="showViewModal(course)" style="height:2rem !important;" class="shadow-sm " mode="solid"
                  color="success">View</NButton>
                <RouterLink to="/announcement/edit-announcement-post">
                  <NButton style="height:2rem !important;" class="shadow-sm" mode="solid" color="primary">Edit</NButton>
                </RouterLink>
                <NButton @click="showDeleteModal(course)" style="height:2rem !important;" class="shadow-sm" mode="solid"
                  color="danger">Delete</NButton>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
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
  </div>
</template>

<script setup>
import { NButton } from '@nethren-ui/vue';
import { ref } from 'vue';

import AnnouncementAdd from './add-announcement-post.vue'
import AnnouncementEdit from './edit-announcement-post.vue'
import AnnouncementDelete from './delete-announcement-post.vue'
import AnnouncementView from './view-announcement-post.vue'

const pure = ref([
  {
    title: 'Differentiation Formulations',
    Description1: 'It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    className: '2023 Mathematics',
    techerName: 'Ruwan Darshana',
  },
  {
    title: 'Differentiation Formulations',
    Description1: 'It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    className: '2023 Mathematics',
    techerName: 'Ruwan Darshana',
  },
  {
    title: 'Differentiation Formulations',
    Description1: 'It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    className: '2023 Mathematics',
    techerName: 'Ruwan Darshana',
  },
  // ... (your other data entries)
]);

const isViewModalVisible = ref(false);
const isEditModalVisible = ref(false);
const isDeleteModalVisible = ref(false);
const selectedCourse = ref(null);

const showViewModal = (course) => {
  isViewModalVisible.value = true;
};

const showEditModal = (course) => {
  isEditModalVisible.value = true;
};

const showDeleteModal = (course) => {
  isDeleteModalVisible.value = true;
};

const hideEditModal = () => {
  isEditModalVisible.value = false;
};

const hideViewModal = () => {
  isDeleteModalVisible.value = false;
};

</script>
