<script setup lang="ts">
    import { NButton } from '@nethren-ui/vue'

    interface Question {
        text: string,
        answers: string[],
        image: string | null,
        correctAnswers: number[]
    }

    const questions : Question[] = [
        {
            text: "Performance Testing explores several system qualities, Which one that can not be:",
            answers: [
                'Speed', 
                'Capacity', 
                'Partition', 
                'Scalability'
            ],
            correctAnswers:[2],
            image: null
        },
        {
            text: "Which of the following TWO typical Performance metrics include.",
            answers: [
                'Number of hits per hour', 
                'Performance Vs users', 
                'Average amount of data downloaded per company visit', 
                'Performance Vs time'
            ],
            correctAnswers: [1,3],
            image: null
        },
        {
            text: "Performance Testing explores several system qualities, Which one that can not be:",
            answers: [
                "Speed", "Capacity", "Partition", "Scalability"
            ],
            correctAnswers: [3],
            image: null
        },
        {
            text: "Performance Testing explores several system qualities, Which one that can not be:",
            answers: [
                "Speed", "Capacity", "Partition", "Scalability"
            ],
            correctAnswers: [3],
            image: null
        }
    ]

    function handleUpdate() {
        // TODO: Add API call to update the question
        // Ideally only if the question is changed
        alert("Updating")
    }

</script>

<template>

    <div v-for="(question, questionIndex) in questions" :key="questionIndex" class="mb-4 rounded bg-white p-4 shadow-md">
        <h3 class="mb-2 text-lg font-semibold">
            Question {{ questionIndex + 1 }}
        </h3>

        <div class="mb-2 rounded p-2">
            <textarea 
                v-model="question.text" 
                :placeholder="`Enter question ${questionIndex + 1}`" 
                :class="{ 'w-full p-2 border rounded focus:border-blue-500 outline-none': true }"
            />
            
            <!-- <p v-if="question.showError && isQuestionInvalid(question)" class="mt-1 text-sm text-red-300">
            Please enter a question.
            </p> -->
        </div>

        <div class="pb-4 border-b-1">
            Optional image: 
            <input type="file" />
         </div>

      <div class="answer-split mt-3">
        <div>&nbsp;</div>
        <div class="right">
          Correct?
        </div>
      </div>

      <div v-for="(answer, answerIndex) in question.answers" :key="answerIndex" class="answer-container">

        <div class="answer-split">
          <input
            :value="answer"
            :placeholder="`Enter answer ${answerIndex + 1}`"
            class="mb-2 w-full rounded p-2"
            
          >
          <div class="right">
            <input
              type="checkbox"
              :checked="question.correctAnswers.includes(answerIndex)"
              @change="question.correctAnswers.includes(answerIndex) ? question.correctAnswers.splice(question.correctAnswers.indexOf(answerIndex), 1) : question.correctAnswers.push(answerIndex)"
              class="w-6 h-6 cursor-pointer"
            />
          </div>
        </div>
        
        <!-- <p v-if="question.answersShowError[answerIndex] && isAnswerInvalid(question, answerIndex)" class="mt-1 text-sm text-red-300">
          Please add the optional answer.
        </p> -->
      </div>


      <div class="text-right">
        <NButton mode="text" class="add-quiz-button" @click="handleUpdate">
            Update
        </NButton>
      </div>

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
.answer-split {
  display: flex;
  align-items: center;
  > div:first-child {
    flex: 1;
  }  
  .right {
    width: 60px;
    text-align: center;
  }
}
</style>