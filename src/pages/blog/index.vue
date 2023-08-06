<script setup lang="ts">
import { NButton } from '@nethren-ui/vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="blog-page">
    <div class="flex items-center justify-between">
      <h1 class="text-3xl">
        Published Blog Posts
      </h1>
      <NButton mode="text">
        <RouterLink to="/blog/new">
          + Add New Blog Post
        </RouterLink>
      </NButton>
    </div>
  </div>
</template>
