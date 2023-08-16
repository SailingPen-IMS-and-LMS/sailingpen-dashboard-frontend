<script setup lang="ts">
const route = useRoute()

const flashCardDeckId = route.params.deck_id
</script>

<template>
  <div class="flash-cards-deck-page">
    <h1 class="text-3xl">
      Flash Cards Deck #{{ flashCardDeckId }}
    </h1>
  </div>
</template>
