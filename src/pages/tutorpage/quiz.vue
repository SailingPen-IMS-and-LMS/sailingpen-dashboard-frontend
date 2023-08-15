<template>
    <div v-if="activeTab === 'Quizzes'" class="quizzes-tab">
      <div class="quizzes-header">
        <NButton mode="text" class="add-quiz-button">
          <RouterLink to="/tutorpage/addassistant">
            + Create new quiz
   
          </RouterLink>
        </NButton>
      </div>
      <div class="content-wrapper">
        <div class="left-section">
    <div class="quiz-card" v-for="(quiz, index) in quizzes" :key="index">
      <div class="quiz-card-header">{{ quiz.title }}</div>
      <div class="quiz-card-content">
        <div class="quiz-topic">Topic: {{ quiz.topic }}</div>
        <div class="quiz-questions">Questions: {{ quiz.questions }}</div>
      </div>
    </div>
  </div>
        <div class="right-section">
            <div class="top-right-section">
           
           <div class="podium">
            <div class="winner second-place">
                <div class="position-label">2nd</div>
                <div class="winner-name">Yenula Rasanjana</div>
            </div>
            <div class="winner first-place">
                <div class="position-label">1st</div>
                <div class="winner-name">Nethul Mihira</div>
            </div>
            <div class="winner third-place">
                <div class="position-label">3rd</div>
                <div class="winner-name">Thinuli malmi</div>
            </div>
          </div>

            </div>
            <NButton mode="text" class="add-quiz-button">
          <RouterLink to="/quiz/new">
              See more
          </RouterLink>
        </NButton>
            <div class="bottom-right-section">
              <!-- Content for the bottom-right section -->
              <leaderboard/>
            </div>
            
        
          <!-- Content for the right section ... -->
        </div>
      </div>
     
    </div>

  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { NButton } from '@nethren-ui/vue'
  import leaderboard from './leaderboard.vue';

  
  const activeTab = ref('Quizzes'); // Set the default active tab

  const quizzes = [
  { title: 'Quiz 1', topic: 'Math Fundamentals', questions: 10 },
  { title: 'Quiz 2', topic: 'Algebra', questions: 15 },
  

  // Add more quiz objects as needed
];
  </script>
  
  <style scoped lang="scss">
  .quizzes-tab {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Adjust alignment as needed */
    width: 100%;
  }
  
  .content-wrapper {
    display: flex;
    width: 100%;
    overflow-x: hidden; /* Hide horizontal overflow */
  }
  
  .left-section {
    flex: 1;
    margin: 10px;
    padding: 10px;
    overflow-y: auto;
    max-height: calc(100vh - 40px); /* Set the maximum height for scrolling */
  }
  
  /* Styling for the quiz cards ... */
  
  .right-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 10px;
    overflow-y: auto;
    max-height: calc(100vh - 40px); /* Set the maximum height for scrolling */
  }
  
  .top-right-section {
    flex: 1;
    margin: 10px 0;
    padding: 10px;
  }
  
  .quizzes-header {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
  }
  
  .add-quiz-button {
    margin-right: 10px;
  }


  
.quizzes-tab {
  display: flex;
  width: 100%;
}

.left-section {
  flex: 1;
  margin: 10px;
  padding: 10px;
  overflow-y: auto;
  max-height: 100%; /* Set the maximum height for scrolling */

  
}

/* Styling for the quiz cards */
.quiz-card {
  background-color: #f2f2f2;
box-shadow: #666;
  margin-bottom: 10px;
  padding: 10px;
}

.quiz-card-header {
  font-weight: bold;
  margin-bottom: 5px;
}

.quiz-card-content {
  font-size: 14px;
}

.quiz-topic {
  margin-bottom: 3px;
}

.quiz-questions {
  color: #666;
}

.right-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 10px;
  overflow-y: auto;
  max-height: 100%; /* Set the maximum height for scrolling */
}

.top-right-section {
  flex: 1;
  
  margin: 10px 0;
  padding: 10px;
}

.bottom-right-section {
 
  margin: 0px 0;
  padding: 20px;
  overflow-y: auto; /* Make this section scrollable */
  max-height: calc(30vh - 20px); /* Set the maximum height for scrolling */
}
.add-blog-button {
  margin: 5px 0px 5px 800px;
}

.quizzes-header {
  display: flex;
  justify-content: flex-end;
  padding: 0.5px;
}
.add-quiz-button {
  margin-right: 10px !important;
}

/*****************************8 */

/* Add these missing classes to your existing styles */

.podium {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 120px;
}

.winner {
  width: 100px;
  background-color: gray;
  border: 2px solid white;
  margin: 0 10px;
  height: 50px;
}

.first-place {
  height: 130px;
  background-color: #FFB6B6;
}

.second-place {
  height: 105px;
  background-color: #6100FF;
}

.third-place {
  height: 80px;
  background-color: #48E122; /* Bronze */
}
/* Add this to your existing styles */
.position-label {
  position: relative;
  bottom: 18px;
  left: 50%;
  transform: translateX(-20%);
  font-weight: bold;
}
.winner-name {
  text-align: center;
  margin-top: 5px;
  font-weight: bold;
}




  </style>
  