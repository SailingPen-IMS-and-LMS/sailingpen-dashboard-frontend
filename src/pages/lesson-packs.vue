<script setup lang="ts">
/* import { SVGAttributes } from 'vue';
import { FunctionalComponent } from 'vue'; */
import SidebarLink from '~/components/SidebarLink.vue'
import IconAccessibility from '~icons/carbon/accessibility'
 import MaterialSymbolsDashboard from '~icons/material-symbols/dashboard'
 import IcSharpMenuBook from '~icons/ic/sharp-menu-book'
 import PhExamFill from '~icons/ph/exam-fill'
 import FluentPlayingCards20Filled from '~icons/fluent/playing-cards-20-filled'
 import MaterialSymbolsSettings from '~icons/material-symbols/settings'
 import MaterialSymbolsHelp from '~icons/material-symbols/help'
 import IcBaselinePowerSettingsNew from '~icons/ic/baseline-power-settings-new'
 import IconamoonMenuBurgerHorizontalBold from '~icons/iconamoon/menu-burger-horizontal-bold'
import MakiCross from '~icons/maki/cross'

import MaterialSymbolsNotifications from '~icons/material-symbols/notifications'
import MaterialSymbolsShoppingCartOutlineRounded from '~icons/material-symbols/shopping-cart-outline-rounded'
import MaterialSymbolsToggleOffOutline from '~icons/material-symbols/toggle-off-outline'
import MaterialSymbolsPlayCircleOutline from '~icons/material-symbols/play-circle-outline'



const sidebarLinks: Array<{
  to: string
  text: string
 }> = [
  {
  to: "/", text: "Dashboard",
},

{
  to: "/lesson-packs", text: "Lesson Packs",
},

{
  to: "/exams", text: "Exams",
},

{
  to: "/flash-cards", text: "Flash Cards",
},

{
  to: "/settings", text: "Settings",
},

{
  to: "/help", text: "Help",
},

{
  to: "/logout", text: "Logout",
},
]

const isSidebarOpen = ref(true)

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}

</script>



<template>
  

  <div class="default-layout">

<aside class="default-sidebar" :class="[isSidebarOpen ? '' : 'default-sidebar--close']">

  <img src="../../logo.jpeg" alt="">
  <button @click="toggleSidebar">
        <MakiCross v-if="isSidebarOpen" />
        <IconamoonMenuBurgerHorizontalBold v-else />
      </button>

    <nav class="navigation-bar flex flex-col justify-between">
      <ul>
        <SidebarLink v-for="sidebarLink in sidebarLinks" :key="sidebarLink.to" :to="sidebarLink.to" :text="sidebarLink.text" :is-sidebar-open="isSidebarOpen">
          <template #icon>
            <MaterialSymbolsDashboard v-if="sidebarLink.text === 'Dashboard' " />
            <IcSharpMenuBook v-else-if="sidebarLink.text === 'Lesson Packs' " />
            <PhExamFill v-else-if="sidebarLink.text === 'Exams' " />
            <FluentPlayingCards20Filled v-else-if="sidebarLink.text === 'Flash Cards' " />
            <MaterialSymbolsSettings v-else-if="sidebarLink.text === 'Settings' " />
            <MaterialSymbolsHelp v-else-if="sidebarLink.text === 'Help' " />
            <IcBaselinePowerSettingsNew v-else-if="sidebarLink.text === 'Logout' " />
          </template>
        </SidebarLink>
      </ul>
    </nav>
</aside>


<header class="default-header flex items-center justify-between gap-4">
  <h1 class="text-2xl font-bold">
        Hello Semini
      </h1>

      <div class="flex items-center gap-4">
        <button><MaterialSymbolsNotifications class="text-[1.3rem]" /></button>
        <button><MaterialSymbolsShoppingCartOutlineRounded class="text-[1.3rem]" /></button>
        <button><MaterialSymbolsToggleOffOutline class="text-[1.3rem]" /></button>

        <p>
          Semini Dissanayaka
        </p>

        <img src="../assets/images/student-profile.jpg" alt="" class="profile-picture">
      </div>
</header>


<main class="default-page-container">
  <div class="left-side-container">
            <div class="top-left-container">
                <h2 class="font-semibold">
                    Continue Watching
                </h2>

                <div class="flex gap-2">
                    <div class="continue-watch-video">
                        <p class="text-xs">
                            Unit - 1
                        </p>

                        <p>Measurements</p>

                        <p class="text-base">
                            Physics - Nilantha Jayasuriya
                        </p>

                        <MaterialSymbolsPlayCircleOutline class="text-center text-4xl" />
                    </div>

                    <div class="continue-watch-video">
                        <p class="text-xs">
                            Unit - 1
                        </p>

                        <p>Measurements</p>

                        <p class="text-base">
                            Physics - Nilantha Jayasuriya
                        </p>

                        <MaterialSymbolsPlayCircleOutline class="text-center text-4xl" />
                    </div>

                    <div class="continue-watch-video">
                        <p class="text-xs">
                            Unit - 1
                        </p>

                        <p>Measurements</p>

                        <p class="text-base">
                            Physics - Nilantha Jayasuriya
                        </p>

                        <MaterialSymbolsPlayCircleOutline class="text-center text-4xl" />
                    </div>
                </div>
            </div>

        <div class="middle-left-container">
            <div>
                <h2 class="font-semibold">
                    Pinned
                </h2>

                <div class="flex gap-2">
                    <div class="continue-watch-video">
                        <p class="text-xs">
                            Unit - 6
                        </p>
                        <p>Trigonometric</p>
                        <p class="text-base">
                            Physics - Ruwan Darshana
                        </p>
                        <MaterialSymbolsPlayCircleOutline class="text-center text-4xl" />
                    </div>

                    <div class="continue-watch-video">
                        <p class="text-xs">
                            Unit - 6
                        </p>
                        <p>Trigonometric</p>
                        <p class="text-base">
                            Physics - Ruwan Darshana
                        </p>
                        <MaterialSymbolsPlayCircleOutline class="text-center text-4xl" />
                    </div>

                    <div class="continue-watch-video">
                        <p class="text-xs">
                            Unit - 6
                        </p>
                        <p>Trigonometric</p>
                        <p class="text-base">
                            Physics - Ruwan Darshana
                        </p>
                        <MaterialSymbolsPlayCircleOutline class="text-center text-4xl" />
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
</main>
</div>

  
  <IconAccessibility />
</template>


<style lang="scss" scoped>
.default-sidebar{
  transition: all 300ms ease-in-out;
  background-color: var(--bg-primary);
  width: 225px;
grid-column: 1/2;
grid-row: 1/3;

display: flex;
flex-direction: column;
align-items: center;

img {
  width: 200px;
  height: 60px;
  margin-top: 1.5rem;
  
}

/* ul{
    display: flex;
    flex-direction: column;
    
  } */
}



.default-sidebar--close {
  width: 100px;

}


.navigation-bar{
  background-color: #f8f8f8;
  height: 100%;

}

.default-header{
  grid-column: 2/3;
  grid-row: 1/2;
  padding: 2rem;

}

.default-page-container{
  padding: 0 2rem;
}

.default-layout{
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 80px 1fr;
  grid-column: 2/3;
  grid-row: 2/3;
}


.profile-picture{
  width: 50px;
  height: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
}

.continue-watch-video{
  width: 320px;
  height: 180px;
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../assets/images/video-1.jpg);
  background-repeat: no-repeat;
  border-radius: 8px;
  background-position: center;
  background-size: cover;
  margin-block: 1rem;
  color: white;
  padding: 1rem 2rem;
  position: relative;

  svg{
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.top-right-container{
  width: 250px;
  height: 250px;
  background-color: black;
  margin-left: 1.5rem;
  border-radius: 8px;
}

/* .top-left-container{
    // overflow-x: scroll;
    // width: 900px;
} */
</style>
