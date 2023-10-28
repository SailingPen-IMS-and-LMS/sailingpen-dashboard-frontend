<script setup lang="ts">
defineOptions({
  name: 'DataTableRow',
})
</script>

<template>
  <tr class="data-table-row">
    <slot />
  </tr>
</template>

<style lang="scss">
.data-table-row {

  &:nth-child(even) {
    background-color: #fafafa;
  }
}
</style>
