<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'
</script>

<template>
  <div class="blog-page">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl">
        Write a new post
      </h1>
      <div class="flex items-center gap-4">
        <NButton mode="text">
          Save as draft
        </NButton>
        <NButton mode="solid">
          Publish
        </NButton>
      </div>
    </div>
  </div>
</template>
