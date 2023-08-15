<template>

<div id="app">
    <button @click="showModal" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
      Create Quiz
    </button>
    <div v-if="isModalOpen" class="modal">
      <!-- Your quiz creation form content here -->
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js">
  
   // Import Vue.js
import Vue from 'vue';

// Create a new Vue instance
new Vue({
  el: '#app',
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    showModal() {
      this.isModalOpen = true;
    },
  },
});

  
</script>

<style scoped lang="scss">
    /* Add your custom styling here */
.modal {
  /* Modal styling */
}

</style>

</template>