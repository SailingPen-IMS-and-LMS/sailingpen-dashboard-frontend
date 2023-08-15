<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'

import TutorDelete from './delete-tutor.vue'
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

const isDeleteModalVisible = ref(false);
const isViewModalVisible = ref(false);

const showDeleteModal = () => {
  isDeleteModalVisible.value = true;
};

const hideDeleteModal = () => {
  isDeleteModalVisible.value = false;
};

const showViewModal = () => {
  isViewModalVisible.value = true;
};

const hideViewModal = () => {
  isViewModalVisible.value = false;
};

</script>

<template>
  <div class="">
    <div class="mt-5 flex lg:ml-100 lg:mt-0 justify-end">
      <div class="mr-8 flex border rounded-l-md px-4 py-2 pr-48">
        <MaterialSymbolsSearch />
        <input id="search" type="text" name="search" placeholder="Search Here " class="pl-4">
      </div>
      <RouterLink to="/admin-settings/tutor/add-tutor">
        <NButton mode="solid" color="info">
          + Add Tutor
        </NButton>
      </RouterLink>
    </div>
    <h2 class="mb-4 text-3xl font-bold">
      Tutors
    </h2>
    <div class="flex justify-center">
      <table class="m-4 w-full table-auto p-2 ">
        <tbody>
          <tr>
            <td></td>
            <td class=" py-2  pl-12 font-semibold">Tutor's Name</td>
            <td class=" py-2  pl-10 font-semibold">Subject</td>
            <td class=" py-2  pl-20 font-semibold">E-mail</td>
            <td class=" py-2  font-semibold">Joined Date</td>
            <td></td>
          </tr>
          <tr v-for="(tutor, index) in tutors" :class="{ 'bg-[#EDF2F7]': index % 2 === 0, 'bg-white': index % 2 !== 0 }">
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
            <td class="py-2 px-4">
              <div class="flex gap-2 justify-end">
                <div>
                  <NButton class="shadow-sm" style="height:2rem !important;" mode="solid" color="danger"
                    @click="showDeleteModal">
                    Remove
                  </NButton>
                </div>
                <div>
                  <NButton class="shadow-sm" style="height:2rem !important;" mode="solid" color="success"
                    @click="showViewModal">
                    View
                  </NButton>
                </div>
                <div>
                  <RouterLink to="/admin-settings/tutor/edit-tutor">
                    <NButton class="shadow-sm" style="height:2rem !important;" mode="solid" color="info">
                      Edit
                    </NButton>
                  </RouterLink>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="isViewModalVisible">
      <TutorView @cancelForm="hideViewModal" />
    </div>
    <div v-if="isDeleteModalVisible">
      <TutorDelete @cancelForm="hideDeleteModal" />
    </div>

  </div>
</template>
