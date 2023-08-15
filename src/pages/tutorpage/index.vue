<template #icon>
  <div>
    <h1 class="text-2xl pl-5">Combined Maths - Ruwan Darshana</h1>
  <div>
    
  </div>
  
    <Tabs v-model="activeTab">
      <Tab title="Home">
    
      <homeitems/>
      </Tab>
    
      <Tab title="Quizzes">
       <quiz/>
      </Tab>
      <Tab title="Leaderboard">
    <leaderboard/>
      </Tab>
      <Tab title="Flashcards">
        2nd tab
        <sss/>
      </Tab>
      <Tab title="Announcements">
        2nd tab
      </Tab>
    </Tabs>
    
  </div>
  
  
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Tabs from '../../components/TabsWrapper.vue';
import Tab from '../../components/Tab.vue';
import quiz from './quiz.vue';
import homeitems from './home-items.vue';
import sss from './addassistant.vue';
import leaderboard from './leaderboard.vue';
// import { NButton } from '@nethren-ui/vue'


const activeTab = ref('Quizzes'); // Set the default active tab
</script>

<style  scoped lang="scss">
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
  border: 1px solid #ccc;
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

.top-right-section,
.bottom-right-section {
  flex: 1;
  
  margin: 10px 0;
  padding: 10px;
}
.add-blog-button {
  margin: 5px 0px 5px 800px;
}

.quizzes-header {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}
.add-quiz-button {
  margin-right: 10px !important;
}
</style>
