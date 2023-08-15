<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'

import TutorAdd from './add-tutor.vue'
import TutorView from './view-tutor.vue'


const tutors = [
  {
    name: 'Kasun Perera',
    subject: 'Chemistry',
    email: 'kkp05@gmail.com',
    image: '/public/images/Profile Avatart.png',
    date: '2020/05/04'
  },
  {
    name: 'Jayantha soyza',
    subject: 'Physics',
    email: 'jsoyza234@gmail.com',
    image: '/public/images/Profile Avatart.png',
    date: '2020/05/04'
  },
  {
    name: 'Ayusha Perera',
    subject: 'Combined Mathematics',
    email: 'ayushappp05@gmail.com',
    image: '/public/images/Profile Avatart.png',
    date: '2020/05/04'
  },
  {
    name: 'Jayantha soyza',
    subject: 'Physics',
    email: 'jsoyza234@gmail.com',
    image: '/public/images/Profile Avatart.png',
    date: '2020/05/04'
  },
  {
    name: 'Ayusha Perera',
    subject: 'Combined Mathematics',
    email: 'ayushappp05@gmail.com',
    image: '/public/images/Profile Avatart.png',
    date: '2020/05/04'
  },
];

const isAddModalVisible = ref(false);
const isViewModalVisible = ref(false);

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

</script>

<template>
  <div class="mx-auto max-w-2xl px-6 py-10 lg:max-w-7xl lg:px-8 sm:px-6 sm:py-6">
    <div class="mt-5 flex lg:ml-100 lg:mt-0 justify-end">
      <div class="mr-8 flex border rounded-l-md px-4 py-2 pr-48">
        <MaterialSymbolsSearch />
        <input id="search" type="text" name="search" placeholder="Search Here " class="pl-4">
      </div>
      <NButton mode="solid" color="info" @click="showAddModal">
        + Add Tutor
      </NButton>
    </div>
    <h2 class="mb-4 text-3xl font-bold">
      Tutors
    </h2>
    <div class="flex justify-center border-2 rounded-lg">
      <table class="m-4 w-[90%] table-auto p-2 ">
        <tbody>
          <tr>
            <td></td>
            <td class=" py-2  pl-12 font-semibold">Tutor's Name</td>
            <td class=" py-2  pl-10 font-semibold">Subject</td>
            <td class=" py-2  pl-20 font-semibold">E-mail</td>
            <td class=" py-2  font-semibold">Joined Date</td>
            <td></td>
          </tr>
          <tr v-for="tutor in tutors" class="bg-white">
            <td class="py-2 ">
              <div class="flex text-right justify-end">
                <img :src="tutor.image" alt="" class="h-[40%] w-[40%]">
              </div>
            </td>
            <td class="pl-8 py-2 text-left ">
              {{ tutor.name }}
            </td>
            <td class="pl-6 py-2 text-left ">
              {{ tutor.subject }}
            </td>
            <td class="pl-12 py-2 text-left ">
              {{ tutor.email }}
            </td>
            <td class="py-2 text-left ">
              {{ tutor.date }}
            </td>
            <td class="py-2 ">
              <NButton class="shadow-sm" mode="outline" color="success" @click="showViewModal">
                View
              </NButton>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="isAddModalVisible">
        <TutorAdd @cancelForm="hideAddModal" />
      </div>

      <div v-if="isViewModalVisible">
        <TutorView @cancelForm="hideViewModal" />
      </div>
  </div>
</template>
