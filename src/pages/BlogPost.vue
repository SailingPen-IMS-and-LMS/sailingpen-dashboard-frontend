<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'

import SidebarLink from '~/components/SidebarLink.vue'
import IcOutlineSearch from '~icons/ic/outline-search'

import MaterialSymbolsNotifications from '~icons/material-symbols/notifications'
import MaterialSymbolsShoppingCartOutlineRounded from '~icons/material-symbols/shopping-cart-outline-rounded'
import MaterialSymbolsToggleOffOutline from '~icons/material-symbols/toggle-off-outline'

// bind the new page to here
import BlogFormModal from './BlogFormModal.vue'

const isSidebarOpen = ref(true)

const isModalVisible = ref(false);

const showModal = () => {
  isModalVisible.value = true;
};

const hideModal = () => {
  isModalVisible.value = false;
};

const blogs = ref([
  { id: 1, name: 'Blog 1', class: 'Chemistry_2022', date: '2023-07-30' },
  { id: 2, name: 'Blog 2', class: 'ICT_2022', date: '2023-07-31' },
  { id: 3, name: 'Blog 3', class: 'ICT_2023', date: '2023-07-31' },

]);

</script>

<template>
  <div class="default-layout">
    <aside class="default-sidebar" :class="[isSidebarOpen ? '' : 'default-sidebar--close']">
      <img src="/public/images/log.png" alt="">
      <nav class="navigation-bar flex flex-col justify-between">
      </nav>
    </aside>

    <header class="default-header flex items-center justify-between gap-4 border-b-2">
      <div></div>

      <div class="flex items-center gap-4">
        <button>
          <MaterialSymbolsNotifications class="text-[1.3rem]" />
        </button>
        <button>
          <MaterialSymbolsShoppingCartOutlineRounded class="text-[1.3rem]" />
        </button>
        <button>
          <MaterialSymbolsToggleOffOutline class="text-[1.3rem]" />
        </button>

        <p>
          Semini Dissanayaka
        </p>

        <img src="/public/images/Profile Avatart.png" alt="" class="profile-picture">
      </div>
    </header>

    <main class="flex justify-around">
      <div class="max-w-5xl lg:max-w-7xl justify-around">
        <div class="mt-5 flex justify-end">
          <div
            class="px-2 py-2 mr-4 border-2 border-blue-600 rounded-lg flex ">
            <IcOutlineSearch class="text-[1.3rem] mr-2" />
            <input type="text" id="search" name="search" placeholder="Search Here " class="outline-none w-100"/>
          </div>
            <NButton @click="showModal" mode="solid" color="info" class="justify-end">
              + Add Blog Posts
            </NButton>

          <BlogFormModal v-if="isModalVisible" @cancelForm="hideModal" />
        </div>
        <h1 class="text-3xl font-bold mt-0 mb-8">Blog Posts</h1>
        <div>
          <table class="table-auto border-2 p-4 m-4 w-[100%] ">
            <thead class="border-2">
              <tr class="text-black">
                <th class="px-6 py-2">Blog Post</th>
                <th class="px-6 py-2">Date</th>
                <th class="px-6 py-2">Publisher's Name</th>
                <th class="px-6 py-2"></th>
              </tr>
            </thead>
            <tbody>
              <!-- Sample data rows, replace with your actual data -->
              <tr v-for="(blog, index) in blogs" :key="blog.id">
                <td :class="index % 2 === 0 ? 'alternate-row' : ''">
                  <div class="px-1 py-1 justify-center text-center" small-text>{{ blog.name }}</div>
                </td>
                <td :class="index % 2 === 0 ? 'alternate-row' : ''">
                  <div class="px-4 py-3 justify-center text-center" small-text>{{ blog.date }}</div>
                </td>
                <td :class="index % 2 === 0 ? 'alternate-row' : ''">
                  <div class="px-4 py-3 justify-center text-center" small-text>{{ blog.class }}</div>
                </td>
                <td class="px-4 py-3 justify-center text-center">
                  <button class="action-button p-2 m-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">View</button>
                  <button
                    class="action-button p-2 m-2 rounded-lg bg-green-500 text-white hover:bg-green-600">Edit</button>
                  <button class="action-button p-2 m-2 rounded-lg bg-red-500 text-white hover:bg-red-600">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.default-sidebar {
  width: 225px;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 300ms ease-in-out;
  background-color: var(--bg-primary);
  background-color: #F2F2F2;

  img {
    width: 200px;
    height: 60px;
    margin-top: 1.5rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
  }
}

.default-sidebar--close {
  width: 100px;

}

.navigation-bar {
  height: 100%;
}

.default-header {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  padding: 2rem;
}

.default-page-container {
  padding: 0 2rem;
  overflow-y: auto;
  height: calc(100vh - 60px)
}

.default-layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 80px 1fr;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.bottom-links {
  margin-bottom: 2rem;
}

.profile-picture {
  width: 50px;
  height: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
}

.top-right-container {
  width: 250px;
  height: 250px;
  background-color: black;
  margin-left: 1.5rem;
  border-radius: 8px;
}

.top-left-container {
  // overflow-x: scroll;
  // width: 900px;
}
</style>
