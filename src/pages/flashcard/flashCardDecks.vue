<script setup lang="ts">
import { ref } from 'vue'; // Import the ref function
import { NButton } from '@nethren-ui/vue';

import IonIosArrowDropdownCircle from '~icons/ion/ios-arrow-dropdown-circle'
import MaterialSymbolsNotifications from '~icons/material-symbols/notifications';
import MaterialSymbolsShoppingCartOutlineRounded from '~icons/material-symbols/shopping-cart-outline-rounded';
import MaterialSymbolsToggleOffOutline from '~icons/material-symbols/toggle-off-outline';

const sidebarLinks = ref([
  {
    to: '/',
    text: 'Dashboard',
  },
]);

const isSidebarOpen = ref(true);

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

const pure = ref([
  {
    title: 'Permutation Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/public/images/bg1.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Combination Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/public/images/bg2.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Differentiation Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/public/images/bg3.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Sequence Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/public/images/bg4.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Motion',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/public/images/bg5.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Force',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/public/images/bg6.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  }
])

const applied = ref([
  {
    title: 'Permutation Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/public/images/bg1.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Combination Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/public/images/bg2.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Differentiation Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/public/images/bg3.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Sequence Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/public/images/bg4.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Motion',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/public/images/bg5.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Force',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/public/images/bg6.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  }
])


const decks = ref([
{
    title: 'Differentiation Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/public/images/bg3.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Sequence Formulations',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/public/images/bg4.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Motion',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/public/images/bg5.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    title: 'Force',
    Description1: ' It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsus passages.',
    imageUrl: '/public/images/bg6.png',
    altText: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  }
])

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
            </template>
          </SidebarLink>
        </ul>
      </nav>
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
    <main class="default-page-container flex">
      <div class="max-w-2xl px-4 py-16 sm:px-6 sm:py-14 lg:max-w-full lg:px-8">
        <div class="flex justify-end">
          <NButton mode="outline">
            Combined Mathematics - Ruwan Darshana
            <button>
              <IonIosArrowDropdownCircle class="text-[1.3rem]" />
            </button>
          </NButton>
        </div>

        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Pure Mathematics</h2>
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
          <a v-for="course in pure" class="group">

            <div class="relative w-40 h-50">
              <!-- The image -->
              <img :src="course.imageUrl" alt="Your Image" class="w-full h-full object-cover rounded-t-lg" />

              <!-- The text on top of the image -->
              <div
                class="absolute top-2 left-2 inset-0 flex items-center justify-center text-white font-bold text-lg z-10">
                <p class="mt-1 text-m font-sm text-center">{{ course.title }}</p>
              </div>
            </div>
            <div class="relative w-40 h-30">
              <div
                class="w-40 h-30 absolute bottom-0 left-0 right-0 p-1 bg-white text-black font-semibold rounded-b-lg shadow-lg">
                <ul>
                  <li class="font-normal text-sm text-left justify-center">{{ course.Description1 }}</li>
                </ul>
              </div>
            </div>
          </a>
        </div>

        <h2 class="pt-4 text-2xl font-bold tracking-tight text-gray-900">Applied Mathematics</h2>
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
          <a v-for="course in applied" class="group">

            <div class="relative w-40 h-50">
              <!-- The image -->
              <img :src="course.imageUrl" alt="Your Image" class="w-full h-full object-cover rounded-t-lg" />

              <!-- The text on top of the image -->
              <div
                class="absolute top-2 left-2 inset-0 flex items-center justify-center text-white font-bold text-lg z-10">
                <p class="mt-1 text-m font-sm text-center">{{ course.title }}</p>
              </div>
            </div>
            <div class="relative w-40 h-30">
              <div
                class="w-40 h-30 absolute bottom-0 left-0 right-0 p-1 bg-white text-black font-semibold rounded-b-lg shadow-lg">
                <ul>
                  <li class="font-normal text-sm text-left justify-center">{{ course.Description1 }}</li>
                </ul>
              </div>
            </div>
          </a>
        </div>

        <h2 class="pt-4 text-2xl font-bold tracking-tight text-gray-900">My Decks</h2>
        <div class="pb-20 mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8">
          <a v-for="course in decks" class="group">

            <div class="relative w-40 h-50">
              <!-- The image -->
              <img :src="course.imageUrl" alt="Your Image" class="w-full h-full object-cover rounded-t-lg" />

              <!-- The text on top of the image -->
              <div
                class="absolute top-2 left-2 inset-0 flex items-center justify-center text-white font-bold text-lg z-10">
                <p class="mt-1 text-m font-sm text-center">{{ course.title }}</p>
              </div>
            </div>
            <div class="relative w-40 h-30">
              <div
                class="w-40 h-30 absolute bottom-0 left-0 right-0 p-1 bg-white text-black font-semibold rounded-b-lg shadow-lg">
                <ul>
                  <li class="font-normal text-sm text-left justify-center">{{ course.Description1 }}</li>
                </ul>
              </div>
            </div>
          </a>
          <!-- this is the add decks part -->
          <div class="relative w-40 h-80 flex flex-col p-4 shadow-lg bg-gray-200 rounded-lg">
            <img src="/public/images/plus.png" alt="Your Image" class="mt-10 w-30 h-30" />
            <p class="mt-2 text-center text-gray-500 font-bold">Add Your Deck</p>
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
