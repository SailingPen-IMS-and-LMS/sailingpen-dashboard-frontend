<script setup lang="ts">
import { toRefs } from 'vue'
import type { ResourceResult } from '~/types'

const props = defineProps<{
  file: ResourceResult
}>()

const { file } = toRefs(props)
console.log(file)
</script>

<template>
  <div class="flex flex-col cursor-pointer items-center gap-4 rounded-[0.375rem] p-4 transition lg:max-h-[196px] lg:max-w-[196px] active:bg-[rgba(0,0,200,0.2)] hover:bg-[rgba(0,0,200,0.1)]">
    <fluent-document-pdf-24-regular v-if="file.type === 'document'" class="h-[100px] w-[100px] text-[rgba(0,0,200,0.1)]" />
    <img v-if="file.type === 'image'" class="h-[100px] w-[100px] text-[rgba(0,0,200,0.1)]" :src="file.url">
    <p class="text-md select-none text-center lg:w-[164px]" style="text-overflow: ellipsis; white-space: nowrap;overflow: hidden;">
      {{ file.name }}
    </p>
  </div>
</template>
