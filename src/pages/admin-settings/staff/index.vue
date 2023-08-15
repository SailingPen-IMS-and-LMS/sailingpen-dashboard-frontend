<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'   //add predefine nethren ui
import MaterialSymbolsSearch from '~icons/material-symbols/search'


import StaffDelete from './delete-staff.vue'
import StaffView from './view-staff.vue'

// content details for blog post table
const blogs = [
  { id: 1, name: 'Kamal Addararachchi', joinDate: '2023-03-30', jobRole: 'Manager', mobile: '077 5237227' },
  { id: 2, name: 'Piyadasa Sirisena Kumara', joinDate: '2023-04-30', jobRole: 'Attendance Marker', mobile: '077 5237227' },
  { id: 3, name: 'K.K.K.P. Padmasingha', joinDate: '2023-06-30', jobRole: 'Security', mobile: '077 5237227' },
  { id: 4, name: 'Sanjula Presmasiri de silva', joinDate: '2023-08-30', jobRole: 'Helper', mobile: '077 5237227' },
];


const isViewModalVisible = ref(false);
const isDeleteModalVisible = ref(false);

const showViewModal = () => {
  isViewModalVisible.value = true;
};

const hideViewModal = () => {
  isViewModalVisible.value = false;
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
    <div class="">
      <div class="mt-5 flex lg:ml-100 lg:mt-0 justify-end">
        <div class="mr-8 flex border rounded-l-md px-4 py-2 pr-48">
          <MaterialSymbolsSearch />
          <input id="search" type="text" name="search" placeholder="Search Here " class="pl-4">
        </div>
        <RouterLink to="/admin-settings/staff/add-staff">
          <NButton mode="solid" color="info">
            + Add New Staff Member
          </NButton>
        </RouterLink>

      </div>

      <h1 class="mb-8 mt-0 text-3xl font-bold">
        Staff Members
      </h1>
      <div>
        <table class="m-4 w-[100%] table-auto  p-4">
          <thead class="">
            <tr class="text-black">
              <th class="px-4 py-2">Staff Member Name</th>
              <th class="px-4 py-2">Joined Date</th>
              <th class="px-4 py-2">Job Role</th>
              <th class="px-4 py-2">Mobile No</th>
              <th class="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(blog, index) in blogs"  :class="{ 'bg-[#EDF2F7]': index % 2 === 0, 'bg-white': index % 2 !== 0 }">
              <td class="pl-15 text-left">{{ blog.name }}</td>
              <td class="px-6 py-2 text-center">{{ blog.joinDate }}</td>
              <td class="px-6 py-2 text-center">{{ blog.jobRole }}</td>
              <td class="px-6 py-2 text-center">{{ blog.mobile }}</td>
              <td class="flex justify-center px-6 py-2">
                <div class="flex gap-3">
                  <NButton class="shadow-sm" style="height:2rem !important;" mode="solid" color="success" @click="showViewModal">
                    View
                  </NButton>
                  <NButton class="shadow-sm" style="height:2rem !important;" mode="solid" color="danger" @click="showDeleteModal">
                    Delete
                  </NButton>
                  <RouterLink to="/admin-settings/staff/edit-staff">
                    <NButton class="shadow-sm" style="height:2rem !important;" mode="solid" color="primary">
                      Edit
                    </NButton>
                  </RouterLink>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      <div v-if="isViewModalVisible">
        <StaffView @cancelForm="hideViewModal" />
      </div>

      <div v-if="isDeleteModalVisible">
        <StaffDelete @cancelForm="hideDeleteModal" />
      </div>

    </div>
  </div>
</template>
