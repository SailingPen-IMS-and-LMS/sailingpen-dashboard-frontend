<template>
  <main class="default-page-container">
    <RouterView />
  </main>
</template>

<style lang="scss">
.default-page-container {
  padding-inline: 1rem;
  margin: 0 auto;
  width: 100%;
  overflow-y: auto;

  @include mq(lg) {
    padding-inline: 2rem;
  }
}
</style>
