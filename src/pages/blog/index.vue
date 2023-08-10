<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'   //add predefine nethren ui
import MaterialSymbolsSearch from '~icons/material-symbols/search'


import StaffAdd from './add-blog-post.vue'  // connect add-blog-post page
import StaffEdit from './edit-blog-post.vue'
import StaffDelete from './delete-blog-post.vue'
import StaffView from './view-blog-post.vue'

// content details for blog post table
const blogs = [
  { id: 1, name: 'Introduction About Sailingpen Institute',  fromdate: '2023-03-30' , todate: '2023-07-30' },
  { id: 2, name: 'Why You Choose Sailingpen ?',  fromdate: '2023-04-30' , todate: '2023-07-31' },
  { id: 3, name: 'Number 1 Combined Mathematics Class',  fromdate: '2023-06-30' , todate: '2023-07-31' },
  { id: 4, name: 'Did You Come Yesterday [Blog]',  fromdate: '2023-08-30' , todate: '2023-08-31' },
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
          + Add New Blog Post
        </NButton>
      </div>

      <h1 class="mb-8 mt-0 text-3xl font-bold">
        Blog Posts
      </h1>
      <div>
        <table class="m-4 w-[100%] table-auto border-2 p-4">
          <thead class="border-2">
            <tr class="text-black">
              <th class="px-4 py-2">Blog Name</th>
              <th class="px-4 py-2">Publish Date</th>
              <th class="px-4 py-2">Expire Date</th>
              <th class="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="blog in blogs" :key="blog.id" class="bg-white">
              <td class="pl-15 text-left">{{ blog.name }}</td>
              <td class="px-6 py-2 text-center">{{ blog.fromdate }}</td>
              <td class="px-6 py-2 text-center">{{ blog.todate }}</td>
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
