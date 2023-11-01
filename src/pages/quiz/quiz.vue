<template>
    <div id="app">
      <div class="quiz-title">
        <input v-model="quizTitle" placeholder="Enter Quiz Title" />
      </div>
      <button @click="addQuestion">Add Question</button>
      <div v-for="(question, index) in questions" :key="index">
        <question :question="question" @updateQuestion="updateQuestion(index, $event)"></question>
      </div>
    </div>
  </template>
  
  <script>
  import Question from '../../components/question.vue';
  
  export default {
    data() {
      return {
        quizTitle: '',
        questions: [],
      };
    },
    components: {
      Question,
    },
    methods: {
      addQuestion() {
        this.questions.push({ text: '', choices: [] });
      },
      updateQuestion(index, updatedQuestion) {
        this.questions[index] = updatedQuestion;
      },
    },
  };
  </script>
  
  <style>
  /* Add your CSS styles here */
  </style>
  