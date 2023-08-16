<script setup lang="ts">
defineOptions({
  name: 'PageHeading',
})
</script>

<template>
  <h1 class="flex items-center gap-4 text-2xl font-semibold">
    <button v-if="$route.fullPath !== '/'" @click="$router.back()">
      <ic-round-arrow-back />
    </button>
    <slot />
  </h1>
</template>
