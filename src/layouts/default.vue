<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/stores'
import type { SidebarItems } from '~/types'

const authStore = useAuthStore()
const { isAuthenticated, userType } = storeToRefs(authStore)

const sidebarLinks = computed<SidebarItems>(() => {
  if (isAuthenticated.value && userType.value === 'admin') {
    return [
      {
        to: '/', text: 'Dashboard',
      },
      {
        to: '/revenue', text: 'Revenue',
      },
      {
        to: '/staff', text: 'Staff',
      },
      {
        to: '/classes',
        text: 'Classes',
        isButton: true,
        children: [
          {
            to: '/classes',
            text: 'View classes',
            isChild: true,
          },
          {
            to: '/classes/subjects',
            text: 'View subjects',
            isChild: true,
          },
        ],
      },
      {
        to: '/tutors',
        text: 'Tutors',
        isButton: true,
        children: [
          {
            to: '/tutors',
            text: 'View tutors',
            isChild: true,
          },
          {
            to: '/tutors/assistants',
            text: 'View Assistants',
            isChild: true,
          }],
      },
      {
        to: '/students',
        isButton: true,
        text: 'Students',
        children: [
          {
            to: '/students',
            text: 'View students',
            isChild: true,
          },
          {
            to: '/students/attendance',
            text: 'View Attendance',
            isChild: true,
          },
        ],
      },

      {
        to: '/announcements', text: 'Announcements',
      },
      {
        to: '/blog', text: 'Blog',
      },
      {
        to: '/settings', text: 'Settings',
      },
    ]
  }
  else if (isAuthenticated.value && userType.value === 'tutor') {
    return [
      // {
      //   to: '/tutor-dashboard', text: 'Dashboard',
      // },

      {
        to: '/tutor-dashboard/my-classes', text: 'My classes',
      },
      {
        to: '/tutor-dashboard/library', text: 'Library',
      },
      {
        to: '/tutor-dashboard/lesson-packs', text: 'Lesson packs',
      },

      {
        to: '/tutor-dashboard/exams', text: 'Exams',
      },

      {
        to: '/tutor-dashboard/flash-cards', text: 'Flash Cards',
      },
      {
        to: '/tutor-dashboard/my-assistants', text: 'My Assistants',
      },
    ]
  }
  else { return [] }
})
</script>

<template>
  <div class="default-layout">
    <DefaultHeader />
    <DefaultSidebar :sidebar-links="sidebarLinks" />
    <DefaultMobileSidebar :sidebar-links="sidebarLinks" />
    <DefaultPageContainer />
  </div>
</template>

<style lang="scss">
.default-layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr;
  grid-column: 2 / 3;
  grid-row: 2 / 3;

  @include mq(lg) {
    grid-template-columns: min-content 1fr;

  }
}

.bottom-links {
  margin-bottom: 2rem;
}
</style>
