<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'   //add predefine nethren ui
import MaterialSymbolsSearch from '~icons/material-symbols/search'


import StaffAdd from './add-staff.vue'  // connect add-blog-post page
import StaffEdit from './edit-staff.vue'
import StaffDelete from './delete-staff.vue'
import StaffView from './view-staff.vue'

// content details for blog post table
const blogs = [
  { id: 1, name: 'Kamal Addararachchi',  joinDate: '2023-03-30' , jobRole: 'Manager' , mobile : '077 5237227' },
  { id: 2, name: 'Piyadasa Sirisena Kumara',  joinDate: '2023-04-30' , jobRole: 'Attendance Marker' , mobile : '077 5237227'},
  { id: 3, name: 'K.K.K.P. Padmasingha',  joinDate: '2023-06-30' , jobRole: 'Security' , mobile : '077 5237227'},
  { id: 4, name: 'Sanjula Presmasiri de silva',  joinDate: '2023-08-30' , jobRole: 'Helper' , mobile : '077 5237227'},
];


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
  <div>
    <div class="mx-auto max-w-2xl px-6 py-10 lg:max-w-7xl lg:px-8 sm:px-6 sm:py-6">
      <div class="mt-5 flex lg:ml-100 lg:mt-0 justify-end">
        <div class="mr-8 flex border rounded-l-md px-4 py-2 pr-48">
          <MaterialSymbolsSearch />
          <input id="search" type="text" name="search" placeholder="Search Here " class="pl-4">
        </div>
        <NButton mode="solid" color="info" @click="showAddModal">
          + Add New Staff Member
        </NButton>
      </div>

      <h1 class="mb-8 mt-0 text-3xl font-bold">
        Staff Members
      </h1>
      <div>
        <table class="m-4 w-[100%] table-auto border-2 p-4">
          <thead class="border-2">
            <tr class="text-black">
              <th class="px-4 py-2">Staff Member Name</th>
              <th class="px-4 py-2">Joined Date</th>
              <th class="px-4 py-2">Job Role</th>
              <th class="px-4 py-2">Mobile No</th>
              <th class="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="blog in blogs" :key="blog.id" class="bg-white">
              <td class="pl-15 text-left">{{ blog.name }}</td>
              <td class="px-6 py-2 text-center">{{ blog.joinDate }}</td>
              <td class="px-6 py-2 text-center">{{ blog.jobRole }}</td>
              <td class="px-6 py-2 text-center">{{ blog.mobile }}</td>
              <td class="flex justify-center px-6 py-2">
                <div class="flex gap-3">
                  <NButton class="shadow-sm" mode="text" color="success" @click="showViewModal">
                    View
                  </NButton>
                  <NButton class="shadow-sm" mode="text" color="primary" @click="showEditModal">
                    Edit
                  </NButton>
                  <NButton class="shadow-sm" mode="text" color="danger" @click="showDeleteModal">
                    Delete
                  </NButton>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-if="isAddModalVisible">
        <StaffAdd @cancelForm="hideAddModal" />
      </div>

      <div v-if="isViewModalVisible">
        <StaffView @cancelForm="hideViewModal" />
      </div>

      <div v-if="isEditModalVisible">
        <StaffEdit @cancelForm="hideEditModal" />
      </div>

      <div v-if="isDeleteModalVisible">
        <StaffDelete @cancelForm="hideDeleteModal" />
      </div>

    </div>
  </div>
</template>
