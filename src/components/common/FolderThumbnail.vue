<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'
import { useRoute, useRouter } from 'vue-router'
import type { LibraryFolderBrief } from '~/types'

const props = defineProps<{
  folder: LibraryFolderBrief
}>()

const { folder } = toRefs(props)

const route = useRoute()
const router = useRouter()

const routePushArgs = computed <RouteLocationRaw> (() => {
  return {
    query: route.query,
    params: route.params,
    force: true,
    path: `/tutor-dashboard/library/${folder.value.id}`,
  }
})
</script>

<template>
  <div class="flex flex-col cursor-pointer items-center gap-4 rounded-[0.375rem] p-4 transition active:bg-[rgba(0,0,200,0.2)] hover:bg-[rgba(0,0,200,0.1)]" @dblclick.prevent="router.push(routePushArgs)">
    <ic-baseline-folder class="h-[100px] w-[100px] text-[rgba(0,0,200,0.1)]" />
    <p class="text-md select-none text-center">
      {{ folder.name }}
    </p>
  </div>
</template>
