<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'   //add predefine nethren ui
import MaterialSymbolsSearch from '~icons/material-symbols/search'


import BlogAdd from './add-blog-post.vue'  // connect add-blog-post page
import BlogEdit from './edit-blog-post.vue'
import BlogDelete from './delete-blog-post.vue'
import BlogView from './view-blog-post.vue'

// content details for blog post table
const blogs = [
  { id: "BP001", name: 'Introduction About Sailingpen Institute', fromdate: '2023-03-30', todate: '2023-07-30' },
  { id: "BP002", name: 'Why You Choose Sailingpen ?', fromdate: '2023-04-30', todate: '2023-07-31' },
  { id: "BP003", name: 'Number 1 Combined Mathematics Class', fromdate: '2023-06-30', todate: '2023-07-31' },
  { id: "BP004", name: 'Did You Come Yesterday [Blog]', fromdate: '2023-08-30', todate: '2023-08-31' },
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
    <div class="">
      <div class="mt-5 flex lg:ml-100 lg:mt-0 justify-end">
        <div class="mr-8 flex border rounded-l-md px-4 py-2 pr-48">
          <MaterialSymbolsSearch />
          <input id="search" type="text" name="search" placeholder="Search Here " class="pl-4">
        </div>
        <RouterLink to="/blog/add-blog-post" >
          <NButton mode="solid" color="info">
          + Add New Blog Post
        </NButton>
        </RouterLink>
      </div>

      <h1 class="mb-8 mt-0 text-3xl font-bold">
        Blog Posts
      </h1>
      <div class="mr-8">
        <table class="m-4 w-[100%] table-auto p-4">
          <thead class="">
            <tr class="text-black">
              <th class="px-4 py-2">Blog ID</th>
              <th class="px-4 py-2">Blog Name</th>
              <th class="px-4 py-2">Publish Date</th>
              <th class="px-4 py-2">Expire Date</th>
              <th class="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(blog,index) in blogs" :key="index"
              :class="{ 'bg-[#EDF2F7]': index % 2 === 0, 'bg-white': index % 2 !== 0 }">
              <td class="text-center">{{ blog.id }}</td>
              <td class="pl-8 text-left">{{ blog.name }}</td>
              <td class="px-6 py-2 text-center">{{ blog.fromdate }}</td>
              <td class="px-6 py-2 text-center">{{ blog.todate }}</td>
              <td class="flex justify-center px-6 py-2">
                <div class="flex gap-3">
                  <NButton class="shadow-sm" mode="solid" style="height:2rem !important;" color="success" @click="showViewModal">
                    View
                  </NButton>
                  <RouterLink to="/blog/edit-blog-post">
                    <NButton class="shadow-sm" mode="solid" style="height:2rem !important;" color="primary">
                    Edit
                  </NButton>
                  </RouterLink>
                  <NButton class="shadow-sm" mode="solid" style="height:2rem !important;" color="danger" @click="showDeleteModal">
                    Delete
                  </NButton>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-if="isAddModalVisible">
        <BlogAdd @cancelForm="hideAddModal" />
      </div>

      <div v-if="isViewModalVisible">
        <BlogView @cancelForm="hideViewModal" />
      </div>

      <div v-if="isEditModalVisible">
        <BlogEdit @cancelForm="hideEditModal" />
      </div>

      <div v-if="isDeleteModalVisible">
        <BlogDelete @cancelForm="hideDeleteModal" />
      </div>

    </div>
  </div>
</template>
