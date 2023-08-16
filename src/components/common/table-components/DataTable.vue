<script setup lang="ts">
defineOptions({ name: 'DataTable' })
</script>

<template>
  <table class="data-table w-full table-auto">
    <thead>
      <slot name="table-heading-rows" />
    </thead>
    <tbody>
      <slot name="table-body-rows" />
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
table {

}
</style>
```
