<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'

import SidebarLink from '~/components/SidebarLink.vue'
import MaterialSymbolsDashboard from '~icons/material-symbols/dashboard'
import IcSharpMenuBook from '~icons/ic/sharp-menu-book'
import Fa6SolidUsersLine from '~icons/fa6-solid/users-line'
import HealthiconsIExamMultipleChoiceNegative from '~icons/healthicons/i-exam-multiple-choice-negative'
import PhSignOutBold from '~icons/ph/sign-out-bold'
import MdiHelpCircle from '~icons/mdi/help-circle'
import IconamoonMenuBurgerHorizontalBold from '~icons/iconamoon/menu-burger-horizontal-bold'
import IcBaselineSettings from '~icons/ic/baseline-settings'
import MingcuteAnnouncementLine from '~icons/mingcute/announcement-line'
import MaterialSymbolsPaymentsOutlineRounded from '~icons/material-symbols/payments-outline-rounded'
import CarbonBlog from '~icons/carbon/blog'
import IcOutlineSearch from '~icons/ic/outline-search'

import MaterialSymbolsNotifications from '~icons/material-symbols/notifications'
import MaterialSymbolsShoppingCartOutlineRounded from '~icons/material-symbols/shopping-cart-outline-rounded'
import MaterialSymbolsToggleOffOutline from '~icons/material-symbols/toggle-off-outline'

const sidebarLinks: Array<{
  to: string
  text: string
}> = [
    {
      to: '/', text: 'Dashboard',
    },

    {
      to: '/students', text: 'Students',
    },

    {
      to: '/attendance', text: 'Attendance',
    },

    {
      to: '/payments', text: 'Payments',
    },

    {
      to: 'class', text: 'Class',
    },

    {
      to: '/settings', text: 'Settings',
    },

    {
      to: '/announcements', text: 'Announcements',
    },

    {
      to: '/blog_post', text: 'Blog Posts',
    }

    // {
    //   to: 'logout', text: 'Logout',
    // },

    // {
    //   to: 'help', text: 'Help',
    // },

  ]

const isSidebarOpen = ref(true)

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div class="default-layout">
    <aside class="default-sidebar" :class="[isSidebarOpen ? '' : 'default-sidebar--close']">
      <img src="/public/images/log.png" alt="">
      <button @click="toggleSidebar">
        <MakiCross v-if="isSidebarOpen" />
        <IconamoonMenuBurgerHorizontalBold v-else />
      </button>
      <nav class="navigation-bar flex flex-col justify-between">
        <ul>
          <SidebarLink v-for="sidebarLink in sidebarLinks" :key="sidebarLink.to" :to="sidebarLink.to"
            :text="sidebarLink.text" :is-sidebar-open="isSidebarOpen">
            <template #icon>
              <MaterialSymbolsDashboard v-if="sidebarLink.text === 'Dashboard'" />
              <IcSharpMenuBook v-else-if="sidebarLink.text === 'Class'" />
              <Fa6SolidUsersLine v-else-if="sidebarLink.text === 'Students'" />
              <HealthiconsIExamMultipleChoiceNegative v-else-if="sidebarLink.text === 'Attendance'" />
              <MaterialSymbolsPaymentsOutlineRounded v-else-if="sidebarLink.text === 'Payments'" />
              <CarbonBlog v-else-if="sidebarLink.text === 'Blog Posts'" />
              <MingcuteAnnouncementLine v-else-if="sidebarLink.text === 'Announcements'" />
              <IcBaselineSettings v-else-if="sidebarLink.text === 'Settings'" />
            </template>
          </SidebarLink>
        </ul>

        <ul class="bottom-links">
          <SidebarLink to="/logout" text="Logout" :is-sidebar-open="isSidebarOpen">
            <template #icon>
              <PhSignOutBold />
            </template>
          </SidebarLink>

          <SidebarLink to="/help" text="Help" :is-sidebar-open="isSidebarOpen">
            <template #icon>
              <MdiHelpCircle />
            </template>
          </SidebarLink>
        </ul>
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

    <main class="default-page-container flex">
      <div class="mx-auto max-w-2xl px-6 py-10 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
        <div class="mt-5 flex lg:ml-100 lg:mt-0">
          <n-button mode="outline">
            <SidebarLink to="/logout" text="" :is-sidebar-open="isSidebarOpen">
              <template #icon>
                <IcOutlineSearch />
              </template>
            </SidebarLink>
          </n-button>
          <input type="text" id="search" name="search"
            class="px-8 py-2 pr-48 border rounded-l-md focus:outline-none focus:ring focus:border-blue-600 flex-1 mr-8"
            placeholder="Search Here " />
          <NButton mode="solid" color="info">
            + Add Tutor Assistance
          </NButton>
        </div>
        <h1 class="text-3xl font-bold mb-4">Tutor Assistance</h1>
        <h2 class="text-2xl mt-10 mb-8">Ruwan Darshana</h2>
        <div>
          <table class="table-auto p-5 m-4 w-[100%] border-1 ">
            <tbody>
              <tr class="bg-white">
                <td class="px-6 py-2 justify-end">
                  <div class="text-right flex-row ">
                    <img src="/public/images/Profile Avatart.png" alt="" class="w-[60%] h-[60%]">
                  </div>
                </td>
                <td class="px-6 py-2 text-left">Kasun Perera</td>
                <td class="px-6 py-2 text-left">2020-05-14</td>
                <td class="px-6 py-2 text-left">kkp05@gmail.com</td>
                <td class="px-6 py-2 flex justify-center">
                  <div class="flex gap-3">
                    <NButton class="shadow-sm" mode="text" color="success">View</NButton>
                    <NButton class="shadow-sm" mode="text" color="danger">Restrict</NButton>
                  </div>
                </td>
              </tr>
              <tr class="bg-white">
                <td class="px-6 py-2 justify-end">
                  <div class="text-right flex-row ">
                    <img src="/public/images/Profile Avatart.png" alt="" class="w-[60%] h-[60%]">
                  </div>
                </td>
                <td class="px-6 py-2 text-left">Jayantha soyza</td>
                <td class="px-6 py-2 text-left">2020-08-15</td>
                <td class="px-6 py-2 text-left">jsoyza234@gmail.com</td>
                <td class="px-6 py-2 flex justify-center">
                  <div class="flex gap-3">
                    <NButton class="shadow-sm" mode="text" color="success">View</NButton>
                    <NButton class="shadow-sm" mode="text" color="danger">Restrict</NButton>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 class="text-2xl mt-10 mb-8">Charitha Dissanayeke</h2>
        <div>
          <table class="table-auto p-5 m-4 w-[100%] border-1 ">
            <tbody>
              <tr class="bg-white">
                <td class="px-6 py-2 justify-end">
                  <div class="text-right flex-row ">
                    <img src="/public/images/Profile Avatart.png" alt="" class="w-[60%] h-[60%]">
                  </div>
                </td>
                <td class="px-6 py-2 text-left">Ayusha Perera</td>
                <td class="px-6 py-2 text-left">2010-05-14</td>
                <td class="px-6 py-2 text-left">ayushappp05@gmail.com</td>
                <td class="px-6 py-2 flex justify-center">
                  <div class="flex gap-3">
                    <NButton class="shadow-sm" mode="text" color="success">View</NButton>
                    <NButton class="shadow-sm" mode="text" color="danger">Restrict</NButton>
                  </div>
                </td>
              </tr>
              <tr class="bg-white">
                <td class="px-6 py-2 justify-end">
                  <div class="text-right flex-row ">
                    <img src="/public/images/Profile Avatart.png" alt="" class="w-[60%] h-[60%]">
                  </div>
                </td>
                <td class="px-6 py-2 text-left">kokila p. soyza</td>
                <td class="px-6 py-2 text-left">2018-08-15</td>
                <td class="px-6 py-2 text-left">kokokoza234@gmail.com</td>
                <td class="px-6 py-2 flex justify-center">
                  <div class="flex gap-3">
                    <NButton class="shadow-sm" mode="text" color="success">View</NButton>
                    <NButton class="shadow-sm" mode="text" color="danger">Restrict</NButton>
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
