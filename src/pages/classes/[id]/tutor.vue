<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'

import IcBaselineSearch from '~icons/ic/baseline-search'
import MaterialSymbolsNotifications from '~icons/material-symbols/notifications'
import MaterialSymbolsShoppingCartOutlineRounded from '~icons/material-symbols/shopping-cart-outline-rounded'
import MaterialSymbolsToggleOffOutline from '~icons/material-symbols/toggle-off-outline'

const isSidebarOpen = ref(true)

const teachers = ref([
  {
    name: 'Kasun Perera',
    subject: 'Chemjhjhjhjhjhjhjistry',
    email: 'kkp05@gmail.com',
    avatar: '/public/images/Profile Avatart.png',
  },
  {
    name: 'Jayantha soyza',
    subject: 'Physics',
    email: 'jsoyza23456789@gmail.com',
    avatar: '/public/images/Profile Avatart.png',
  },
  {
    name: 'Ayusha Perera',
    subject: 'Combined',
    email: 'ayushappp05@gmail.com',
    avatar: '/public/images/Profile Avatart.png',
  },
  {
    name: 'Ayusha Perera',
    subject: 'Combined',
    email: 'ayushappp05@gmail.com',
    avatar: '/public/images/Profile Avatart.png',
  },
  {
    name: 'A.A.W.P.H.J.K.G.W.T.S.H.Galahitiyawa',
    subject: 'Biology',
    email: 'kokokoza234@gmail.com',
    avatar: '/public/images/Profile Avatart.png',
  },
  {
    name: 'A.A.W.G.W.T.S.H.Galahitiyawa',
    subject: 'Biology',
    email: 'kokokoza234@gmail.com',
    avatar: '/public/images/Profile Avatart.png',
  },
])

</script>

<template>
  <div class="default-layout">
    <aside class="default-sidebar" :class="[isSidebarOpen ? '' : 'default-sidebar--close']">
      <img src="/public/images/log.png" alt="">
    </aside>

    <header class="default-header flex items-center justify-between gap-4">
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
            <IcBaselineSearch class="text-[1.3rem] mr-2" />
            <input type="text" id="search" name="search" placeholder="Search Here " class="outline-none w-100"/>
          </div>
          <NButton mode="solid" color="info" class="justify-end">
            + Add Tutors
          </NButton>
        </div>
        <h1 class="text-3xl font-bold mb-4">Tutors</h1>
        <div>
          <table class="table-auto p-4 w-[100] border-1">
            <tbody class="p-6">
              <tr>
                <td class="px-6 py-2 flex justify-center"></td>
                <td class="px-6 font-bold py-2 text-left">Name</td>
                <td class="px-6 font-bold py-2 text-left">Subject</td>
                <td class="px-6 font-bold py-2 text-left">E-mail</td>
                <td class="px-6 py-2 flex justify-center"></td>
              </tr>
              <tr v-for="teacher in teachers" :key="teacher.email" class="bg-white">
                <td class="px-6 py-2 justify-end">
                  <div class="text-right flex-row">
                    <img :src="teacher.avatar" alt="" class="w-[60%] h-[60%]">
                  </div>
                </td>
                <td class="px-6 py-2 text-left">{{ teacher.name }}</td>
                <td class="px-6 py-2 text-left">{{ teacher.subject }}</td>
                <td class="px-6 py-2 text-left">{{ teacher.email }}</td>
                <td class="px-6 py-2 flex justify-center">
                  <div class="flex gap-3">
                    <NButton class="shadow-sm" mode="text" color="success">View</NButton>
                  </div>
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
</style>
