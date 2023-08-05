<script setup lang="ts">
import type { SidebarItems } from '~/types'

const sidebarLinks: SidebarItems = [
  {
    to: '/', text: 'Dashboard',
  },

  {
    to: '/lesson-packs', text: 'Lesson Packs',
  },

  {
    to: '/exams', text: 'Exams',
  },

  {
    to: '/flash-cards', text: 'Flash Cards',
  },

  {
    to: '/settings', text: 'Settings',
  },

  {
    to: '/help', text: 'Help',
  },

  {
    to: '/logout', text: 'Logout',
  },
]
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

    @include mq(lg){
    grid-template-columns: min-content 1fr;

    }
}

.bottom-links {
    margin-bottom: 2rem;
}
</style>
