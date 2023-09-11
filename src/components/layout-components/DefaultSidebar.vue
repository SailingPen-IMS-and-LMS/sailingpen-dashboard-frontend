<script setup lang="ts">
import { storeToRefs } from 'pinia'
import SidebarLink from '../SidebarLink.vue'
import { useSidebar } from '~/composables'
import logoImgUrl from '~/assets/images/logo.png'
import shortLogoImgUrl from '~/assets/images/short-logo.png'
import type { SidebarItems } from '~/types'
import { api } from '~/api'
import { useAuthStore } from '~/stores'

const props = defineProps<{
  sidebarLinks: SidebarItems
}>()

const { sidebarLinks } = toRefs(props)
const { isSidebarOpen } = useSidebar()

const authStore = useAuthStore()
const { profile, userType } = storeToRefs(authStore)

const loggingOut = ref(false)

const router = useRouter()

async function logout() {
  loggingOut.value = true
  try {
    const res = await api.auth.logout()
    if (res) {
      profile.value = null
      userType.value = null
      await router.replace('/auth/login')
    }
    else {
      throw new Error('Something happened ..')
    }
  }
  catch (error) {
    console.log(error)
  }
  finally {
    loggingOut.value = false
  }
}
</script>

<template>
  <aside class="default-sidebar" :class="[isSidebarOpen ? '' : 'default-sidebar--close']">
    <img v-show="isSidebarOpen" :src="logoImgUrl" alt="SailingPen Logo" class="mx-auto min-w-[225px] px-[1rem]">
    <img v-show="!isSidebarOpen" :src="shortLogoImgUrl" alt="SailingPen short logo" class="mx-auto">
    <nav class="h-[calc(100vh-88px)] flex flex-col justify-between">
      <ul>
        <SidebarLink
          v-for="sidebarLink in sidebarLinks" :key="sidebarLink.to" :to="sidebarLink.to"
          :is-button="sidebarLink.isButton" :text="sidebarLink.text" :is-sidebar-open="isSidebarOpen"
          :is-child="false"
          :children="sidebarLink.children?.map(child => ({ to: child.to, text: child.text, isSidebarOpen: true, isButton: false, isChild: child.isChild }))"
        >
          <template #icon>
            <!-- Common -->
            <ic-round-dashboard
              v-if="sidebarLink.text === 'Dashboard'"
              class="h-[24px] min-h-[24px] min-w-[24px] w-[24px]"
            />
            <tabler-users-group
              v-else-if="sidebarLink.text === 'Students'"
              class="h-[24px] min-h-[24px] min-w-[24px] w-[24px]"
            />
            <ic-outline-person-pin
              v-else-if="sidebarLink.text === 'Tutor Assistants'"
              class="h-[24px] min-h-[24px] min-w-[24px] w-[24px]"
            />
            <carbon-blog v-else-if="sidebarLink.text === 'Blog'" class="h-[24px] min-h-[24px] min-w-[24px] w-[24px]" />
            <ph-speaker-high-duotone
              v-else-if="sidebarLink.text === 'Announcements'"
              class="h-[24px] min-h-[24px] min-w-[24px] w-[24px]"
            />
            <fluent-tasks-app-28-regular
              v-else-if="sidebarLink.text === 'Attendance'"
              class="h-[24px] min-h-[24px] min-w-[24px] w-[24px]"
            />
            <!-- Common -->
            <!-- Admin -->
            <ph-chalkboard-teacher
              v-if="sidebarLink.text === 'Tutors'"
              class="h-[24px] min-h-[24px] min-w-[24px] w-[24px]"
            />
            <ic-outline-settings
              v-else-if="sidebarLink.text === 'Settings'"
              class="h-[24px] min-h-[24px] min-w-[24px] w-[24px]"
            />
            <clarity-employee-group-line
              v-else-if="sidebarLink.text === 'Staff'"
              class="h-[24px] min-h-[24px] min-w-[24px] w-[24px]"
            />
            <ic-round-attach-money
              v-else-if="sidebarLink.text === 'Revenue'"
              class="h-[24px] min-h-[24px] min-w-[24px] w-[24px]"
            />
            <solar-hand-money-outline
              v-else-if="sidebarLink.text === 'Payments'"
              class="h-[24px] min-h-[24px] min-w-[24px] w-[24px]"
            />
            <!-- Admin -->
            <!-- Tutor -->
            <ic-sharp-menu-book
              v-else-if="sidebarLink.text === 'Lesson packs'"
              class="h-[24px] min-h-[24px] min-w-[24px] w-[24px]"
            />
            <fa6-solid-users-line
              v-else-if="sidebarLink.text === 'My classes' || sidebarLink.text === 'Classes'"
              class="h-[24px] min-h-[24px] min-w-[24px] w-[24px]"
            />

            <solar-video-library-broken
              v-else-if="sidebarLink.text === 'Library'"
              class="h-[24px] min-h-[24px] min-w-[24px] w-[24px]"
            />

            <ph-exam v-else-if="sidebarLink.text === 'Exams'" class="h-[24px] min-h-[24px] min-w-[24px] w-[24px]" />
            <mdi-cards
              v-else-if="sidebarLink.text === 'Flash Cards'"
              class="h-[24px] min-h-[24px] min-w-[24px] w-[24px]"
            />
            <ic-outline-person-pin
              v-else-if="sidebarLink.text === 'My Assistants'"
              class="h-[24px] min-h-[24px] min-w-[24px] w-[24px]"
            />
            <!-- Tutor -->
          </template>
        </SidebarLink>
      </ul>

      <ul class="bottom-links">
        <SidebarLink to="/logout" :text="!loggingOut ? 'Logout' : 'Logging out ...'" :is-sidebar-open="isSidebarOpen" :is-button="true" :is-loading="loggingOut" @click="logout">
          <template #icon>
            <ph-sign-out-bold class="h-[24px] min-h-[24px] min-w-[24px] w-[24px]" />
          </template>
        </SidebarLink>

        <SidebarLink to="/help" text="Help" :is-sidebar-open="isSidebarOpen">
          <template #icon>
            <mdi-help-circle class="h-[24px] min-h-[24px] min-w-[24px] w-[24px]" />
          </template>
        </SidebarLink>
      </ul>
    </nav>
  </aside>
</template>

<style lang="scss">
.default-sidebar {
  width: 225px;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  // display: flex;
  flex-direction: column;
  // align-items: center;
  transition: all 200ms ease-in-out;
  background-color: var(--bg-primary);
  display: none;

  @include mq(lg) {
    display: flex;
  }

  img {
    // width: 200px;
    // height: 60px;
    // margin-top: 1.5rem;
  }

  nav {
    padding-inline: 1rem;
    // margin-top: 60px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
    width: 100%;
  }

  &--close {
    width: 88px;
  }

}
</style>
