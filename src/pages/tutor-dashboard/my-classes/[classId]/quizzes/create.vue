<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const topic = ref('')
const questions = ref([
  {
    text: '',
    answers: ['', '', '', ''],
    showError: false,
    answersShowError: [false, false, false, false],
  },
])

function addQuestion() {
  if (questions.value.every(question => !isQuestionInvalid(question))) {
    questions.value.push({
      text: '',
      answers: ['', '', '', ''],
      showError: false,
      answersShowError: [false, false, false, false],
    })
  }
  else {
    questions.value.forEach((question) => {
      question.showError = true
      question.answersShowError = [true, true, true, true]
    })
  }
}

function updateAnswer(questionIndex, answerIndex, value) {
  questions.value[questionIndex].answers[answerIndex] = value
  questions.value[questionIndex].answersShowError[answerIndex] = false
}

function isQuestionInvalid(question) {
  return question.text.trim() === '' || question.answers.some(answer => answer.trim() === '')
}

function isAnswerInvalid(question, answerIndex) {
  return question.answers[answerIndex].trim() === ''
}

const isSubmitDisabled = computed(() => {
  return questions.value.some(question => isQuestionInvalid(question))
})

function submitQuiz() {
  // Implement your logic for submitting the quiz here
  // You can access the questions and their answers from the `questions` array
  router.push('/tutorpage/quiz-successful') // Change this to your actual route
}
</script>

<template>
  <div class="p-4">
    <div class="mb-4">
      <label for="quiz-topic" class="text-lg font-semibold">Quiz Topic:</label>
      <input id="quiz-topic" v-model="topic" class="w-full border rounded p-2 outline-none focus:border-blue-500">
    </div>
    <div v-for="(question, questionIndex) in questions" :key="questionIndex" class="mb-4 rounded bg-white p-4 shadow-md">
      <h3 class="mb-2 text-lg font-semibold">
        Question {{ questionIndex + 1 }}
      </h3>
      <div :class="{ 'border-red-500': question.showError && isQuestionInvalid(question) }" class="mb-2 rounded p-2">
        <textarea v-model="question.text" :placeholder="`Enter question ${questionIndex + 1}`" :class="{ 'w-full p-2 border rounded focus:border-blue-500 outline-none': question.showError }" @focus="question.showError = true" />
        <p v-if="question.showError && isQuestionInvalid(question)" class="mt-1 text-sm text-red-300">
          Please enter a question.
        </p>
      </div>
      <div v-for="(answer, answerIndex) in question.answers" :key="answerIndex" class="answer-container">
        <input
          :value="answer"
          :placeholder="`Enter answer ${answerIndex + 1}`"
          :class="{ 'w-full p-2 border rounded focus:border-blue-500 outline-none': question.answersShowError[answerIndex] && isAnswerInvalid(question, answerIndex) }"
          class="mb-2 w-full rounded p-2"
          @input="updateAnswer(questionIndex, answerIndex, $event.target.value)"
          @focus="question.answersShowError[answerIndex] = true"
        >
        <p v-if="question.answersShowError[answerIndex] && isAnswerInvalid(question, answerIndex)" class="mt-1 text-sm text-red-300">
          Please add the optional answer.
        </p>
      </div>
    </div>
    <button class="mr-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" @click="addQuestion">
      Add Question
    </button>
    <button :disabled="isSubmitDisabled" class="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600" :class="{ 'cursor-not-allowed opacity-50': isSubmitDisabled }" @click="submitQuiz">
      Submit Quiz
    </button>
  </div>
</template>

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
