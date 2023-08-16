<template>
  <div class="p-4">
    <div class="mb-4">
      <label for="quiz-topic" class="font-semibold text-lg">Quiz Topic:</label>
      <input v-model="topic" id="quiz-topic" class="w-full p-2 border rounded focus:border-blue-500 outline-none">
    </div>
    <div v-for="(question, questionIndex) in questions" :key="questionIndex" class="bg-white rounded shadow-md p-4 mb-4">
      <h3 class="text-lg font-semibold mb-2">Question {{ questionIndex + 1 }}</h3>
      <div :class="{'border-red-500': question.showError && isQuestionInvalid(question)}" class="mb-2 p-2 rounded">
        <textarea v-model="question.text" :placeholder="'Enter question ' + (questionIndex + 1)" @focus="question.showError = true" :class="{'w-full p-2 border rounded focus:border-blue-500 outline-none': question.showError}"></textarea>
        <p v-if="question.showError && isQuestionInvalid(question)" class="text-red-300 text-sm mt-1">Please enter a question.</p>
      </div>
      <div v-for="(answer, answerIndex) in question.answers" :key="answerIndex" class="answer-container">
        <input
          :value="answer"
          :placeholder="'Enter answer ' + (answerIndex + 1)"
          @input="updateAnswer(questionIndex, answerIndex, $event.target.value)"
          @focus="question.answersShowError[answerIndex] = true"
          :class="{'w-full p-2 border rounded focus:border-blue-500 outline-none': question.answersShowError[answerIndex] && isAnswerInvalid(question, answerIndex)}"
          class="w-full p-2 mb-2 rounded"
        />
        <p v-if="question.answersShowError[answerIndex] && isAnswerInvalid(question, answerIndex)" class="text-red-300 text-sm mt-1">Please add the optional answer.</p>
      </div>
    </div>
    <button @click="addQuestion" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2">Add Question</button>
    <button @click="submitQuiz" :disabled="isSubmitDisabled" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded" :class="{'cursor-not-allowed opacity-50': isSubmitDisabled}">Submit Quiz</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const topic = ref('');
const questions = ref([
  {
    text: '',
    answers: ['', '', '', ''],
    showError: false,
    answersShowError: [false, false, false, false],
  },
]);

const addQuestion = () => {
  if (questions.value.every(question => !isQuestionInvalid(question))) {
    questions.value.push({
      text: '',
      answers: ['', '', '', ''],
      showError: false,
      answersShowError: [false, false, false, false],
    });
  } else {
    questions.value.forEach(question => {
      question.showError = true;
      question.answersShowError = [true, true, true, true];
    });
  }
};

const updateAnswer = (questionIndex, answerIndex, value) => {
  questions.value[questionIndex].answers[answerIndex] = value;
  questions.value[questionIndex].answersShowError[answerIndex] = false;
};

const isQuestionInvalid = (question) => {
  return question.text.trim() === '' || question.answers.some(answer => answer.trim() === '');
};

const isAnswerInvalid = (question, answerIndex) => {
  return question.answers[answerIndex].trim() === '';
};

const isSubmitDisabled = computed(() => {
  return questions.value.some(question => isQuestionInvalid(question));
});

const submitQuiz = () => {
  // Implement your logic for submitting the quiz here
  // You can access the questions and their answers from the `questions` array
  router.push('/tutorpage/quiz-successful'); // Change this to your actual route
};
</script>
<style scoped>
/* You can remove this section if you're using Tailwind CSS */
.question-card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}

.error {
  border-color: rgb(228, 174, 174);
}

.error-message {
  color: rgb(223, 137, 137);
  margin: 5px 0;
}

.answer-container {
  margin-top: 10px;
}
</style>