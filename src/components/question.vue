<template>
  <div class="question">
    <input v-model="question.text" placeholder="Enter Question Text" />
    <div v-for="(choice, cIndex) in question.choices" :key="cIndex">
      <input v-model="question.choices[cIndex]" :placeholder="'Choice ' + (cIndex + 1)" />
    </div>
    <button @click="addChoice">Add Choice</button>
  </div>
</template>

<script>
export default {
  props: ['question'],
  methods: {
    addChoice() {
      this.question.choices.push('');
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
</style>
