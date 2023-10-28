<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PageHeading from '~/components/common/PageHeading.vue'
import { useTutionClassesStore } from '~/stores'

const route = useRoute()
const params = route.params
const classId = params.classId as string

const tutionClassesStore = useTutionClassesStore()

const tabPrefix = computed(() => route.fullPath.split('/')[4])
console.log(tabPrefix)
</script>

<template>
  <div class="class-home-page">
    <PageHeading>
      {{
        tutionClassesStore.getClassName(classId) }}
    </PageHeading>
    <div class="tabs-header mt-4 flex items-center gap-4">
      <RouterLink
        :to="`/tutor-dashboard/my-classes/${classId}/home`" class="tab-link"
        :class="tabPrefix === 'home' ? 'tab-link--active' : ''"
      >
        Home
      </RouterLink>
      <RouterLink
        :to="`/tutor-dashboard/my-classes/${classId}/announcements`" class="tab-link"
        :class="tabPrefix === 'announcements' ? 'tab-link--active' : ''"
      >
        Announcements
      </RouterLink>
      <RouterLink
        :to="`/tutor-dashboard/my-classes/${classId}/quizzes`" class="tab-link"
        :class="tabPrefix === 'quizzes' ? 'tab-link--active' : ''"
      >
        Quizzes
      </RouterLink>
    </div>
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss">
.tab-link {
    padding: 0.5rem 2rem;
    transition: all 0.3s ease-out;
    border-bottom: 4px solid rgba(0, 0, 0, 0);

    &:hover {
        border-bottom: 4px solid var(--n-color-primary-200-transparent);
    }
    &--active {
        border-bottom: 4px solid var(--n-color-primary-400);

        &:hover {
            border-bottom: 4px solid var(--n-color-primary-400);
        }
    }

}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease-out;
}

.slide-enter-to {
    transform: translateX(0);
    opacity: 1;
}

.slide-enter-from {
    transform: translateX(-300px);
    opacity: 0;
}

.slide-leave-to {
    transform: translateX(300px);
    opacity: 0;
}

.slide-leave-from {
    transform: translateX(0);
    opacity: 1;
}
</style>
