<script setup lang="ts">
import { toRefs } from 'vue'

defineOptions({ name: 'DataTable' })

const props = withDefaults(defineProps<{
  loading?: boolean
}>(), { loading: false })

const { loading } = toRefs(props)
</script>

<template>
  <table class="data-table w-full table-auto" :class="loading ? 'data-table--loading' : ''">
    <thead>
      <slot name="table-heading-rows" />
    </thead>
    <template v-if="!loading">
      <tbody>
        <slot name="table-body-rows" />
      </tbody>
    </template>
    <template v-else>
      <p class="flex items-center gap-4">
        <svg-spinners-180-ring />
        Please wait
      </p>
    </template>
  </table>
</template>

<style lang="scss" scoped>
.data-table {

  &--loading {
    height: 500px;
    position: relative;

    p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

    }
  }

}
</style>
```
