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

    <!-- <main class="default-page-container flex">
      <div class="left-side-container">
        <div class="top-left-container">
          <h2 class="font-semibold">
            Announcements
          </h2>

          <div class="flex gap-2">
            <div class="Announcements-box">
              <p class="text-xs">
                Theory Introduction class Gampaha
              </p>
              <p class="text-base">
                2023 Biology
              </p>
              <p class="text-xl">
                Tissa Jananayake
              </p>
              <div class="flex flex-row gap-4">
                <n-button class="Nbutton h-6" mode="outline" color="info">View</n-button>
                <n-button class="Nbutton" mode="outline" color="info">Edit</n-button>
                <n-button class="Nbutton" mode="outline" color="info">Delete</n-button>
              </div>
            </div>
          </div>
        </div>

        <div class="bottom-left-container">
          <h2 class="font-semibold">
            Your Progress
          </h2>

          <img src="../assets/images/chart-1.webp" alt="">
        </div>

        <div class="right-side-container">
          <div class="top-right-container">
            <h1 class="text-slate-300">
              Calendar
            </h1>
          </div>

          <div class="right-middle-container">
            <h1>Upcoming events</h1>
          </div>

          <div class="right-bottom-container">
            <h1>Your Achievements</h1>
          </div>
        </div>
      </div>
    </main> -->

    <main class="default-page-container flex">
      <div class="bg-white">
        <div class="mx-auto max-w-2xl px-6 py-10 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
          <div class="mt-5 flex lg:ml-240 lg:mt-0">
            <NButton mode="solid" color="info">
              + Add New Announcement
            </NButton>
          </div>
          <h1 class="text-3xl font-bold mt-0 mb-8">Announcement</h1>
          <div class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 xl:gap-x-8">
            <a href="#" class="group">
              <div
                class="aspect-h-1 aspect-w-1 w-30 h-30 xl:w-40 xl:h-30 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="/public/images/bg1.png"
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-2 text-xs text-gray-700">2023 - Biology Theory Class</h3>
              <p class="mt-1 text-lg font-sm text-gray-900">Tissa Jananayake</p>
              <button type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-0.5">view</button>
              <button type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-0.5">Edit</button>
              <button type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-0.5">Delete</button>
            </a>

            <a href="#" class="group">
              <div
                class="aspect-h-1 aspect-w-1 w-30 h-30 xl:w-40 xl:h-30 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="/public/images/bg2.png"
                  alt="Olive drab green insulated bottle with flared screw lid and flat top."
                  class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-2 text-xs text-gray-700">2023 - Combined Theory Class</h3>
              <p class="mt-1 text-lg font-sm text-gray-900">Ruwan Darshana</p>
              <button type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-0.5">view</button>
              <button type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-0.5">Edit</button>
              <button type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-0.5">Delete</button>
            </a>
            <a href="#" class="group">
              <div
                class="aspect-h-1 aspect-w-1 w-30 h-30 xl:w-40 xl:h-30  overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="/public/images/bg3.png" alt="Person using a pen to cross a task off a productivity paper card."
                  class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-2 text-xs text-gray-700">2023 - Physics Paper Class</h3>
              <p class="mt-1 text-lg font-sm text-gray-900">Nilantha Jayasuriya</p>
              <button type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-0.5">view</button>
              <button type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-0.5">Edit</button>
              <button type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-0.5">Delete</button>
            </a>
            <a href="#" class="group">
              <div
                class="aspect-h-1 aspect-w-1 w-30 h-30 xl:w-40 xl:h-30  overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="/public/images/bg4.png"
                  alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                  class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-2 text-xs text-gray-700">2023 - Chemistry Tute Class</h3>
              <p class="mt-1 text-lg font-sm text-gray-900">Charitha Dissanayake</p>
              <button type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-0.5">view</button>
              <button type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-0.5">Edit</button>
              <button type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-0.5">Delete</button>
            </a>
            <a href="#" class="group">
              <div
                class="aspect-h-1 aspect-w-1 w-30 h-30 xl:w-40 xl:h-30 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="/public/images/bg1.png"
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-2 text-xs text-gray-700">2023 - Biology Theory Class</h3>
              <p class="mt-1 text-lg font-sm text-gray-900">Tissa Jananayake</p>
              <button type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-0.5">view</button>
              <button type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-0.5">Edit</button>
              <button type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-0.5">Delete</button>
            </a>

            <a href="#" class="group">
              <div
                class="aspect-h-1 aspect-w-1 w-30 h-30 xl:w-40 xl:h-30 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="/public/images/bg2.png"
                  alt="Olive drab green insulated bottle with flared screw lid and flat top."
                  class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-2 text-xs text-gray-700">2023 - Combined Theory Class</h3>
              <p class="mt-1 text-lg font-sm text-gray-900">Ruwan Darshana</p>
              <button type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-0.5">view</button>
              <button type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-0.5">Edit</button>
              <button type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-0.5">Delete</button>
            </a>
            <a href="#" class="group">
              <div
                class="aspect-h-1 aspect-w-1 w-30 h-30 xl:w-40 xl:h-30  overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="/public/images/bg3.png" alt="Person using a pen to cross a task off a productivity paper card."
                  class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-2 text-xs text-gray-700">2023 - Physics Paper Class</h3>
              <p class="mt-1 text-lg font-sm text-gray-900">Nilantha Jayasuriya</p>
              <button type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-0.5">view</button>
              <button type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-0.5">Edit</button>
              <button type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-0.5">Delete</button>
            </a>
            <a href="#" class="group">
              <div
                class="aspect-h-1 aspect-w-1 w-30 h-30 xl:w-40 xl:h-30  overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img src="/public/images/bg4.png"
                  alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                  class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <h3 class="mt-2 text-xs text-gray-700">2023 - Chemistry Tute Class</h3>
              <p class="mt-1 text-lg font-sm text-gray-900">Charitha Dissanayake</p>
              <button type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-0.5">view</button>
              <button type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-0.5">Edit</button>
              <button type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-0.5">Delete</button>
            </a>
          </div>
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
